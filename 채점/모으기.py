# -*- coding: utf-8 -*-
"""제출된 HTML 파일들을 모아 채점표로 만든다.

쓰는 법
    python 모으기.py                     제출 폴더를 읽는다
    python 모으기.py 다른폴더

만드는 것
    채점표.csv      엑셀로 열어 보는 표
    채점자료.json   클로드와 함께 채점할 때 쓰는 자료

이 파일은 «점수를 매기지» 않는다. 사람이 봐야 할 곳을 짚어 줄 뿐이다.
"""
import io, os, re, sys, json, csv, unicodedata
from difflib import SequenceMatcher

여기 = os.path.dirname(os.path.abspath(__file__))
제출폴더 = sys.argv[1] if len(sys.argv) > 1 else os.path.join(여기, '제출')

# 평가요소별 배점 — 평가 운영 계획서 기준
배점 = {'1': 15, '2': 25, '3': 25, '4': 25, '5': 10}


def 씻기(t):
    """견주기 전에 공백과 문장부호를 걷어낸다."""
    t = unicodedata.normalize('NFKC', t or '')
    return re.sub(r'[\s.,·!?"\'()\[\]{}—\-~:;]+', '', t)


def 닮음(a, b):
    """두 글이 얼마나 겹치는가 (0~1)."""
    a, b = 씻기(a), 씻기(b)
    if not a or not b:
        return 0.0
    return SequenceMatcher(None, a, b).ratio()


def 읽기(경로):
    raw = io.open(경로, encoding='utf-8', errors='replace').read()
    m = re.search(r'id="채점자료">(.*?)</script>', raw, re.S)
    if not m:
        return None
    try:
        return json.loads(m.group(1).replace('\\u003c', '<'))
    except ValueError:
        return None


def 항목번호(제목):
    m = re.match(r'\s*(\d+)', 제목 or '')
    return m.group(1) if m else ''


def 살피기(자료, 파일명):
    """한 학생의 제출물에서 사람이 봐야 할 곳을 짚는다."""
    항목들, 깃발 = [], []
    실행 = '\n'.join(자료.get('실행기록') or [])

    for it in 자료.get('항목', []):
        번호 = 항목번호(it.get('제목', ''))
        내글 = (it.get('내글') or '').strip()
        초안 = '\n'.join(it.get('초안') or [])
        겹침 = 닮음(내글, 초안)

        볼곳 = []
        if not 내글:
            볼곳.append('안 씀')
        else:
            if 초안 and 겹침 >= 0.85:
                볼곳.append('초안 거의 그대로 (규정상 최하점 검토)')
            elif 초안 and 겹침 >= 0.65:
                볼곳.append('초안과 많이 겹침')
            if len(내글) < 60:
                볼곳.append('너무 짧음')
            # ③④ 는 실측 없이 쓰면 상위 수준으로 못 간다
            if 번호 in ('3', '4') and not re.search(r'\d', 내글):
                볼곳.append('숫자가 없음 — 실측 근거 확인')
            if '〈' in 내글 or '여기에 내 실행 결과' in 내글:
                볼곳.append('빈칸 표시가 그대로 남음')

        항목들.append({
            '번호': 번호, '제목': it.get('제목', ''),
            '배점': 배점.get(번호, ''), '글자수': len(내글),
            '초안겹침': round(겹침, 2) if 초안 else '',
            '볼곳': ' / '.join(볼곳), '내글': 내글, '초안': 초안,
        })

    낸것 = {x['번호'] for x in 항목들 if x['글자수']}
    빠짐 = [n for n in ('1', '2', '3', '4', '5') if n not in 낸것]
    if 빠짐:
        깃발.append('빠진 항목 ' + ', '.join(빠짐) + '번')
    if not 실행:
        깃발.append('실행 기록 없음 — ③번 근거 확인')
    elif '자료에 없음' not in 실행:
        깃발.append('없는 값 실행 안 함 — ③번 만점 조건')
    if not re.search(r'log2|log₂', 실행 + ' '.join(x['내글'] for x in 항목들)):
        깃발.append('log2 비교 흔적 없음 — ④번 최상위 조건')

    return {
        '파일': 파일명,
        '반': 자료.get('반', ''), '번호': 자료.get('번호', ''), '이름': 자료.get('이름', ''),
        '낸때': 자료.get('낸때', ''), '평가': 자료.get('이름표', ''),
        '총글자수': sum(x['글자수'] for x in 항목들),
        '실행횟수': len(자료.get('실행기록') or []),
        '깃발': ' / '.join(깃발), '항목': 항목들,
    }


def main():
    if not os.path.isdir(제출폴더):
        os.makedirs(제출폴더)
        print('«%s» 폴더를 만들었습니다.' % 제출폴더)
        print('학생들이 낸 html 파일을 여기에 넣고 다시 실행하세요.')
        return

    파일들 = sorted(f for f in os.listdir(제출폴더) if f.lower().endswith('.html'))
    if not 파일들:
        print('«%s» 에 html 파일이 없습니다.' % 제출폴더)
        return

    모음, 탈락 = [], []
    for f in 파일들:
        자료 = 읽기(os.path.join(제출폴더, f))
        if 자료 is None:
            탈락.append(f)
            continue
        모음.append(살피기(자료, f))

    모음.sort(key=lambda x: (x['반'], int(x['번호']) if str(x['번호']).isdigit() else 0))

    with io.open(os.path.join(여기, '채점표.csv'), 'w', encoding='utf-8-sig', newline='') as fh:
        w = csv.writer(fh)
        w.writerow(['반', '번호', '이름', '낸때', '항목', '배점', '글자수',
                    '초안겹침', '봐야 할 곳', '학생이 쓴 글'])
        for s in 모음:
            for it in s['항목']:
                w.writerow([s['반'], s['번호'], s['이름'], s['낸때'],
                            it['제목'], it['배점'], it['글자수'],
                            it['초안겹침'], it['볼곳'], it['내글']])
            if s['깃발']:
                w.writerow([s['반'], s['번호'], s['이름'], '', '전체', '', '', '', s['깃발'], ''])

    with io.open(os.path.join(여기, '채점자료.json'), 'w', encoding='utf-8') as fh:
        fh.write(json.dumps(모음, ensure_ascii=False, indent=1))

    print('제출 %d명' % len(모음))
    if 탈락:
        print('읽지 못함 %d개 — %s' % (len(탈락), ', '.join(탈락)))
        print('  («제출 파일 만들기» 로 만들지 않은 파일일 수 있습니다)')
    print('')
    print('%-4s %-8s %-6s %-5s  %s' % ('번호', '이름', '총글자', '실행', '봐야 할 곳'))
    print('-' * 78)
    for s in 모음:
        볼곳 = [s['깃발']] if s['깃발'] else []
        볼곳 += ['%s번: %s' % (it['번호'], it['볼곳']) for it in s['항목'] if it['볼곳']]
        print('%-4s %-8s %-6d %-5d  %s' % (
            s['번호'], s['이름'], s['총글자수'], s['실행횟수'],
            볼곳[0] if 볼곳 else '특이사항 없음'))
        for 나머지 in 볼곳[1:]:
            print('%-4s %-8s %-6s %-5s  %s' % ('', '', '', '', 나머지))
    print('')
    print('채점표.csv 와 채점자료.json 을 만들었습니다.')


if __name__ == '__main__':
    main()

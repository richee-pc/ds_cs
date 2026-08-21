# -*- coding: utf-8 -*-
"""양식생성_코드.gs 에서 «구글 없이도 도는 부분» 만 뽑아 수업 웹페이지에 심는다.

왜 이렇게 하는가
    학교 계정이 앱스크립트 접속을 막으면 학생이 결과물을 못 만든다.
    탐색 수행평가의 HTML 결과물은 구글 API 가 하나도 필요 없으므로,
    수업 웹페이지 안에서 바로 만들 수 있다.

    코드를 손으로 베끼면 둘이 어긋난다. .gs 를 원본으로 삼아 뽑아 쓴다.

쓰는 법
    python 빌드_웹생성기.py
"""
import io, os, re, sys

여기 = os.path.dirname(os.path.abspath(__file__))
GS = os.path.join(여기, '양식생성_코드.gs')
페이지 = os.path.join(os.path.dirname(여기), '수행평가_안내_비선형구조-알고리즘.html')

시작표 = '/* ===== 여기부터 양식생성_코드.gs 에서 자동으로 뽑아 온 부분 ===== */'
끝표 = '/* ===== 뽑아 온 부분 끝 ===== */'

# 구글 API 를 안 쓰는 함수만 고른다
함수들 = ['makePrompt', '모양기본_', '다듬기_', '쪼개기_', '머리글_', '웹문서HTML_', '벗기기_',
          '실습데이터뽑기_', '코드보이기_', '시뮬레이터_', '저장스크립트_',
          '항목쪼개기_', '다듬은줄_', '표줄_', '구분줄_', '묶기_']

# 필요한 상수 (var 이름 = ... 형태, 여러 줄 가능)
상수들 = ['만든판', '시작표', '끝표', '초안표', '점검표', '내글표', '양식', '테마', '글꼴이름']

src = io.open(GS, encoding='utf-8').read()


def 덩어리(이름, 종류):
    """함수 또는 var 선언 하나를 통째로 떠 온다. 중괄호를 세어 끝을 찾는다."""
    if 종류 == 'fn':
        m = re.search(r'^function\s+' + re.escape(이름) + r'\s*\(', src, re.M)
    else:
        m = re.search(r'^var\s+' + re.escape(이름) + r'\s*=', src, re.M)
    if not m:
        print('FAIL 못 찾음: %s' % 이름); sys.exit(1)

    # 몸통이 시작되는 괄호만 센다.
    #   함수는 매개변수 목록의 ( ) 를 세면 안 된다 — 첫 { 부터가 몸통이다.
    #   var 는 { 또는 [ 로 시작하는 값만 여기서 다룬다.
    # 값이 { 나 [ 로 시작하지 않는 상수(글자열·숫자)는 줄 끝 ; 까지가 전부다.
    if 종류 == 'var':
        끝 = src.index(';', m.end())
        머리 = src[m.end():끝]
        if '{' not in 머리 and '[' not in 머리:
            return src[m.start():끝 + 1]

    여는것 = '{' if 종류 == 'fn' else '{['
    닫는것 = '}' if 종류 == 'fn' else '}]'

    i, n = m.start(), len(src)
    깊이, 상태, 시작함 = 0, None, False
    while i < n:
        ch = src[i]
        nx = src[i + 1] if i + 1 < n else ''
        if 상태 is None:
            if ch in '"\'':
                상태 = ch
            elif ch == '/' and nx == '/':
                상태 = '//'; i += 1
            elif ch == '/' and nx == '*':
                상태 = '/*'; i += 1
            elif ch == '/' and 시작함:
                상태 = 're'          # 정규식 리터럴 (몸통 안에서만 나온다)
            elif ch in 여는것:
                깊이 += 1; 시작함 = True
            elif ch in 닫는것:
                깊이 -= 1
                if 시작함 and 깊이 == 0:
                    # 함수는 } 에서, var 는 뒤따르는 ; 까지
                    j = i + 1
                    if 종류 == 'var':
                        while j < n and src[j] in ' \t\r\n':
                            j += 1
                        if j < n and src[j] == ';':
                            j += 1
                    return src[m.start():j]
        elif 상태 in ('"', "'"):
            if ch == '\\':
                i += 1
            elif ch == 상태:
                상태 = None
        elif 상태 == 're':
            if ch == '\\':
                i += 1
            elif ch == '/':
                상태 = None
            elif ch == '\n':
                상태 = None
        elif 상태 == '//':
            if ch == '\n':
                상태 = None
        else:
            if ch == '*' and nx == '/':
                상태 = None; i += 1
        i += 1
    print('FAIL 끝을 못 찾음: %s' % 이름); sys.exit(1)


조각 = []
조각.append('/* 이 부분은 «빌드_웹생성기.py» 가 양식생성_코드.gs 에서 자동으로 뽑아 온 것입니다.')
조각.append('   여기를 직접 고치지 마세요. .gs 를 고치고 다시 빌드하세요. */')
for 이름 in 상수들:
    조각.append(덩어리(이름, 'var'))
for 이름 in 함수들:
    조각.append(덩어리(이름, 'fn'))

뽑은것 = '\n\n'.join(조각)

# 구글 API 가 섞여 들어오지 않았는지 확인
금지 = ['DriveApp', 'DocumentApp', 'SlidesApp', 'MimeType', 'SpreadsheetApp',
        'HtmlService', 'PropertiesService', 'Session.']
섞임 = [g for g in 금지 if g in 뽑은것]
if 섞임:
    print('FAIL 구글 API 가 섞였습니다: %s' % 섞임); sys.exit(1)
print('  ok  구글 API 안 섞임')

# 부르는데 안 뽑아 온 함수가 있으면 화면에서 터진다. 미리 잡는다.
부름 = set(re.findall(r'([가-힣A-Za-z0-9]+_)\s*\(', 뽑은것))
있음 = set(함수들)
빠짐 = sorted(x for x in 부름 - 있음 if re.search(r'^function\s+' + re.escape(x) + r'\s*\(', src, re.M))
if 빠짐:
    print('FAIL 부르는데 안 뽑아 온 함수: %s' % ', '.join(빠짐))
    print('     함수들 목록에 넣으세요.')
    sys.exit(1)
print('  ok  빠진 함수 없음')

# 여는 script 표가 통째로 들어가면 페이지의 script 블록이 일찍 닫혀 버린다
if '<script' in 뽑은것:
    print('FAIL 뽑은 코드에 여는 script 표가 통째로 있습니다. .gs 에서 글자를 쪼개세요.')
    sys.exit(1)
print('  ok  여는 script 표 없음')

p = io.open(페이지, encoding='utf-8', newline='').read()
if 시작표 not in p or 끝표 not in p:
    print('FAIL 페이지에 심을 자리(%s)가 없습니다.' % 시작표); sys.exit(1)

a = p.index(시작표) + len(시작표)
b = p.index(끝표)
새것 = p[:a] + '\n' + 뽑은것.replace('\r\n', '\n').replace('\n', '\r\n') + '\r\n' + p[b:]
io.open(페이지, 'w', encoding='utf-8', newline='').write(새것)

print('  ok  함수 %d개 · 상수 %d개 · %d자를 페이지에 심었습니다.'
      % (len(함수들), len(상수들), len(뽑은것)))

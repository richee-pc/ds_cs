/**
 * 자료구조 수행평가 양식 생성기  v7
 * 조선대학교부속고등학교 · 2026학년도 2학기 · 3학년 「자료구조」
 *
 * 학생이 밟는 순서
 *   1단계  반·번호·이름과 주제를 넣고 «프롬프트 만들기»
 *   2단계  내 정보가 채워진 프롬프트가 나옴 → 복사해서 제미나이에 질문
 *   3단계  제미나이가 준 [문서 틀] 을 붙여넣고, 모양을 고른 뒤 «문서 만들기»
 *          → 내 구글 드라이브에 문서(또는 슬라이드)가 만들어진다
 *
 * 붙여넣지 않고 «기본 양식으로 바로 만들기» 를 눌러도 됩니다.
 *
 * 내용은 채워 주지 않습니다. 【      】 자리는 학생이 직접 씁니다.
 * 쓰는 법은 같은 폴더의 «양식생성_안내.md» 를 보세요.
 */

var 폴더이름 = '자료구조 수행평가';
var 교사이메일 = '';          // 적어 두면 만든 문서가 자동으로 공유됩니다
var VER = 7;

var 빈칸 = '【                                                            】';
var 시작표 = '=== 문서 틀 시작 ===';
var 끝표 = '=== 문서 틀 끝 ===';


/* =====================================================================
   양식 정의 — 문서 구조와 프롬프트가 모두 여기서 나옵니다
   ===================================================================== */

var 양식 = {

  '1': {
    이름표: '수행평가 1',
    제목: '비선형구조-알고리즘 연결고리 발견하기',
    부제: '수행평가 1 · 정렬 알고리즘 설계 · 100점',
    입력: [
      { 키: 'topic', 이름: '주제 (서비스나 상황)', 예: '배달 앱 맛집 추천 / 지하철 환승 안내' },
      { 키: 'want', 이름: '찾거나 순서를 매기고 싶은 것', 예: '가까운 맛집을 평점 순으로 보여 주기' }
    ],
    항목: [
      { 번호: '1', 제목: '탐구 주제 명칭 및 선정 이유', 배점: '평가요소 ① · 10점',
        안내: '서비스 이름만 적으면 낮은 점수입니다. 해결해야 할 자료 처리 문제를 한 문장으로 특정하세요.',
        칸: ['탐구 주제 명칭',
             '선정 이유 — 이 서비스 안에서 해결해야 할 자료 처리 문제는 무엇인가'] },
      { 번호: '2', 제목: '자료구조 비교 및 추상화 분석', 배점: '평가요소 ②③ · 30점',
        안내: '한계를 «불편하다·느리다»로 쓰면 낮은 점수입니다. 탐색 비용 / 관계 표현의 불가능성 / 삽입·삭제 비용 중 두 가지 이상을 근거로 드세요.',
        칸: ['선형구조와의 차별성 — 배열·리스트로 처리하면 무엇이 한계인가 (근거 두 가지 이상)',
             '고른 비선형 구조 — 트리 / 그래프 중 무엇이며 왜 그런가',
             '노드(정점)는 무엇을 뜻하는가',
             '간선(엣지)은 무엇을 뜻하는가 — 가중치와 방향이 필요한가, 그 이유는'] },
      { 번호: '3', 제목: '탐색 및 알고리즘 적용 시나리오', 배점: '평가요소 ④ · 15점',
        안내: '알고리즘 이름만 적으면 낮은 점수입니다. «왜 다른 방식이 아니라 이것인가»에 답하세요.',
        칸: ['고른 탐색 방법 — BFS / DFS / 최단 경로 등',
             '왜 이 방법인가 — 다른 방식과 비교해서'] },
      { 번호: '4', 제목: '데이터 정렬 및 최적화 아이디어 제안', 배점: '평가요소 ⑤⑥ · 45점 · 가장 중요',
        안내: '이 수행평가의 영역명이 «정렬 알고리즘 설계»입니다. 45점이 걸려 있습니다.',
        칸: ['1차 정렬 기준 — 무엇을 기준으로 줄 세우는가',
             '2차 정렬 기준 — 1차 기준이 같을 때는 무엇으로 순서를 정하는가 (20점 항목)',
             '고른 정렬 알고리즘과 그 평균·최악 시간 복잡도 (25점 항목)',
             '왜 이 데이터에 이 알고리즘이 맞는가 — 자료의 크기와 특성을 근거로',
             '상위 몇 개만 필요하다면 전체를 정렬할 필요가 있는가'] },
      { 번호: '5', 제목: '참고 자료와 인공지능 활용 기록', 배점: '반드시 작성',
        안내: '적으면 감점되지 않고, 없으면 감점됩니다. 두세 줄이면 충분합니다.',
        칸: ['참고 자료 — 교과서·수업 자료·그 밖의 자료 (제목·출처·확인한 날짜)',
             '인공지능 활용 기록 — 어떤 도구를, 어느 항목에, 무엇을 얻어 어떻게 고쳐 썼는지'] }
    ]
  },

  '2': {
    이름표: '수행평가 2',
    제목: '탐색 알고리즘 설계',
    부제: '수행평가 2 · 탐색 알고리즘 설계 · 100점',
    입력: [
      { 키: 'topic', 이름: '주제', 예: '학교 도서관 도서 검색 / 택배 송장 조회' },
      { 키: 'size', 이름: '자료가 대략 몇 건', 고르기: ['수십 건', '수천 건', '수십만 건'] },
      { 키: 'sorted', 이름: '미리 정렬되어 있나', 고르기: ['정렬됨', '정렬 안 됨', '정렬할 수 있음'] },
      { 키: 'churn', 이름: '자주 추가·삭제되나', 고르기: ['거의 없음', '자주 있음'] }
    ],
    항목: [
      { 번호: '1', 제목: '탐구 주제 명칭 및 자료의 특성 분석', 배점: '평가요소 ① · 15점',
        안내: '무엇을 키로 삼아 무엇을 찾는지 한 문장으로 특정하고, 규모와 정렬 여부를 근거로 자료 구조를 고르세요.',
        칸: ['탐구 주제 명칭 및 선정 이유',
             '무엇을 키(key)로 삼아 무엇을 찾는가',
             '자료가 대략 몇 건인가',
             '미리 정렬되어 있는가 / 정렬할 수 있는가',
             '자주 추가·삭제되는가',
             '고른 자료 구조 — 배열·리스트 / 이진 탐색 트리 / 해시 테이블 중 무엇이며 왜 그런가'] },
      { 번호: '2', 제목: '탐색 방법 선택 및 근거', 배점: '평가요소 ② · 25점',
        안내: '«이진 탐색을 쓴다»로 끝내면 절반도 못 받습니다. 정렬에 드는 비용까지 따지면 최상위 수준입니다.',
        칸: ['고른 탐색 방법 — 순차 탐색 / 이진 탐색 / 해싱',
             '왜 다른 방법이 아니라 이 방법인가 — 정렬 여부·규모·추가삭제 빈도를 근거로',
             '정렬하는 비용까지 따지면 어떤가 — 몇 번이나 찾을 것인지와 함께'] },
      { 번호: '3', 제목: '코드 실행 및 시뮬레이션', 배점: '평가요소 ③ · 25점',
        안내: '실행 결과 없이 표만 있으면 상위 수준으로 못 갑니다. 자료에 없는 값까지 실행해야 만점입니다.',
        칸: ['코드 A(순차 탐색) 실행 결과 — 출력 화면을 그대로 붙여넣기',
             '코드 B(이진 탐색) 실행 결과 — 출력 화면을 그대로 붙여넣기',
             '자료에 없는 값으로 실행한 결과 — 두 코드 모두'],
        표: { 이름: '탐색 과정 표',
              머리글: ['단계', '비교한 값', '남은 탐색 범위', '판단'], 줄수: 6 } },
      { 번호: '4', 제목: '실행 결과로 확인한 효율', 배점: '평가요소 ④ · 25점',
        안내: '«더 빠르다»가 아니라 실측한 숫자로 쓰세요. 이진 탐색 비교 횟수와 log2(n)이 거의 같음을 확인하면 최상위입니다.',
        표: { 이름: '코드 C 실측 결과 표',
              머리글: ['자료 크기 n', '순차 탐색 평균', '이진 탐색 평균', '몇 배 차이', 'log2(n) 이론값'],
              줄: [['10', '', '', '', '3.3'], ['100', '', '', '', '6.6'],
                   ['1,000', '', '', '', '10.0'], ['10,000', '', '', '', '13.3'],
                   ['100,000', '', '', '', '16.6'], ['1,000,000', '', '', '', '19.9']] },
        칸: ['내가 고른 방법의 최선·평균·최악 시간 복잡도는 각각 어떤 상황인가 (내 주제로 예를 들어)',
             '이론과 실제가 일치하는가 — 이진 탐색 비교 횟수와 log2(n)을 견주어',
             '자료가 커질 때 무엇을 선택해야 하는가 — 판단 기준을 제시'] },
      { 번호: '5', 제목: '참고 자료 출처와 인공지능 활용 기록', 배점: '평가요소 ⑤ · 10점',
        안내: '적으면 10점, 없으면 감점입니다. 두세 줄이면 충분합니다.',
        칸: ['참고 자료 — 교과서·수업 자료·그 밖의 자료 (제목·출처·확인한 날짜)',
             '인공지능 활용 기록 — 어떤 도구를, 어느 항목에, 무엇을 얻어 어떻게 고쳐 썼는지',
             '실습 데이터를 인공지능으로 만들었다면 그 사실도'] }
    ]
  }
};


/* =====================================================================
   모양 고르기 — 학생이 3단계에서 고르는 것들
   ===================================================================== */

var 테마 = {
  teal:  { 이름: '청록', 큰제목: '#0c7d71', 작은제목: '#14504a', 안내: '#6a8a8a', 빈칸: '#b6c4c2', 본문: '#1a1a1a' },
  navy:  { 이름: '남색', 큰제목: '#1b3f8b', 작은제목: '#162f63', 안내: '#75839f', 빈칸: '#b9c1d2', 본문: '#1a1a1a' },
  plum:  { 이름: '자주', 큰제목: '#7a2f68', 작은제목: '#57204a', 안내: '#98798f', 빈칸: '#cbb8c5', 본문: '#1a1a1a' },
  mono:  { 이름: '흑백 (인쇄용)', 큰제목: '#1a1a1a', 작은제목: '#333333', 안내: '#707070', 빈칸: '#b0b0b0', 본문: '#1a1a1a' }
};

var 글꼴목록 = ['본고딕', '나눔고딕', '맑은 고딕', '바탕'];

var 글꼴이름 = {
  '본고딕': 'Noto Sans KR',
  '나눔고딕': 'Nanum Gothic',
  '맑은 고딕': 'Malgun Gothic',
  '바탕': 'Batang'
};

function 모양기본_() {
  return { theme: 'teal', font: '본고딕', size: '보통', cover: true, toc: false, guide: true, material: true };
}


/* =====================================================================
   1·2단계 — 프롬프트 만들기
   ===================================================================== */

function makePrompt(info) {
  try {
    var spec = 양식[String(info.task)];
    if (!spec) return { ok: false, error: '수행평가 번호가 잘못되었습니다.' };

    var 줄 = [];
    줄.push("너는 고등학교 3학년 '자료구조' 과목 수행평가를 돕는 학습 도우미야.");
    줄.push("나는 '" + spec.제목 + "' 라는 탐구 보고서를 쓰고 있어.");
    줄.push('');
    줄.push('━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    줄.push('[내 정보]');
    줄.push('');
    spec.입력.forEach(function (f) {
      줄.push('  ' + f.이름 + ' : ' + ((info[f.키] || '').trim()));
    });
    줄.push('━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    줄.push('');
    줄.push('빈 칸이 있으면 네가 후보를 제안하거나 판단해서 채우고,');
    줄.push('어떤 근거로 그렇게 봤는지 알려 줘.');
    줄.push('');
    // 수행평가 2 는 코드에 넣을 연습용 데이터도 함께 받는다
    if (String(info.task) === '2') {
      줄.push('먼저 [실습 데이터] 를 주고, 이어서 항목별 « 재료 » 를 정리해 줘.');
      줄.push('');
      줄.push('━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
      줄.push('[실습 데이터]  코드에 그대로 붙여넣을 세 줄');
      줄.push('');
      줄.push('data = ["...", "...", ... 20개 ...]');
      줄.push('target = "..."');
      줄.push('# 없는 값 : "..."');
      줄.push('');
      줄.push('  조건');
      줄.push('  1. 20개는 모두 같은 종류로. 글자면 전부 따옴표, 숫자면 전부 따옴표 없이.');
      줄.push('     (섞이면 코드가 오류를 냅니다)');
      줄.push('  2. 내 주제에 실제로 있을 법한 값으로. 겹치는 값은 없게.');
      줄.push('  3. target 은 data 안에 실제로 있는 값 하나. 맨 앞·맨 뒤 말고 가운데쯤.');
      줄.push("  4. '없는 값' 은 data 에 절대 없는 값으로.");
      줄.push('  5. data 를 정렬하지 마. 코드가 알아서 정렬해.');
      줄.push('━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
      줄.push('');
    }

    줄.push('아래 항목들의 « 재료 » 를 순서대로 정리해 줘.');
    줄.push('항목마다 이 네 줄 형식을 지켜 줘.');
    줄.push('');
    줄.push('  ● 알아야 할 개념        3~5줄. 시간 복잡도는 반드시 O 표기로.');
    줄.push('  ● 생각할 방향           서로 다른 방향 2~3가지. 각각 근거를 붙여서.');
    줄.push('  ● 【내가 써야 할 자리】  내가 직접 판단해 채워야 할 것을 질문으로.');
    줄.push('  ● 확인이 필요한 것      네 설명 중 내가 수업 자료로 검증해야 할 부분.');
    줄.push('');
    spec.항목.forEach(function (it) {
      줄.push('[항목 ' + it.번호 + '] ' + it.제목 + '   (' + it.배점 + ')');
      (it.칸 || []).forEach(function (q) { 줄.push('  · ' + q); });
      if (it.표) 줄.push('  · ' + it.표.이름 + ' 를 어떻게 채워야 하는지');
      줄.push('');
    });

    줄.push('━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    줄.push('그리고 맨 마지막에 [문서 틀] 을 만들어 줘.');
    줄.push('');
    줄.push('나는 이 부분을 그대로 복사해 «양식 만들기» 웹앱에 붙여넣을 거야.');
    줄.push('그래서 아래 표시와 기호를 정확히 지켜 줘야 해.');
    줄.push('');
    줄.push(시작표);
    줄.push('# ' + spec.제목);
    줄.push('## 1. 첫 번째 항목 제목');
    줄.push('> 이 항목에 무엇을 쓰는지 한 줄 안내');
    줄.push('▸ 내가 답해야 할 질문');
    줄.push(빈칸);
    줄.push('| 머리글1 | 머리글2 |');
    줄.push('| --- | --- |');
    줄.push('|  |  |');
    줄.push(끝표);
    줄.push('');
    줄.push('기호 뜻');
    줄.push('  #    보고서 제목 (한 번만)');
    줄.push('  ##   항목 제목 (항목 수만큼)');
    줄.push('  >    안내 한 줄');
    줄.push('  ▸    내가 답할 질문');
    줄.push('  【 】 내가 쓸 빈 자리 — 질문마다 한 줄씩');
    줄.push('  | |  표. 둘째 줄은 반드시 | --- | 로, 나머지 칸은 비워 둘 것');
    줄.push('');
    줄.push('━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    줄.push('지켜야 할 규칙 — 이걸 어기면 내가 최하점을 받아');
    줄.push('');
    줄.push('1. [문서 틀] 의 내용을 채우지 마. 전부 【 】 로 비워 둬.');
    줄.push('   나는 여기에 내 문장을 직접 쓸 거야.');
    줄.push('2. 내 보고서에 그대로 넣을 « 완성된 문단 » 은 만들지 마.');
    if (String(info.task) === '2') {
      줄.push('3. 실행 결과와 실측 숫자는 절대 지어내지 마. 내가 직접 돌려서 채운다.');
    } else {
      줄.push('3. 사실이 확실하지 않으면 « 확인 필요 » 라고 표시해 줘.');
    }
    줄.push('━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

    return { ok: true, prompt: 줄.join('\n') };

  } catch (err) {
    return { ok: false, error: String(err) };
  }
}


/* =====================================================================
   4단계 — 붙여넣은 [문서 틀] 로 문서 만들기
   ===================================================================== */

function makeDoc(info) {
  try {
    var spec = 양식[String(info.task)];
    if (!spec) return { ok: false, error: '수행평가 번호가 잘못되었습니다.' };
    if (!info.name) return { ok: false, error: '이름을 넣어 주세요.' };

    var 모양 = info.style || 모양기본_();
    var 조각 = info.pasted ? 쪼개기_(info.pasted) : { 틀: null, 재료: [] };
    var 경고 = '';

    // 제미나이 답변이 아니라 프롬프트를 그대로 붙여넣은 경우
    if (info.pasted && 프롬프트인가_(info.pasted, 조각.틀)) {
      return { ok: false, error:
        '붙여넣은 것이 « 제미나이 답변 » 이 아니라 « 프롬프트 » 로 보입니다.\n\n' +
        '2단계에서 복사한 프롬프트를 제미나이에 먼저 붙여넣고, ' +
        '제미나이가 내놓은 답변을 여기에 붙여넣어 주세요.\n\n' +
        '(제미나이 없이 만들려면 이 칸을 비우고 «문서 만들기» 를 누르면 기본 양식이 나옵니다.)' };
    }

    if (info.pasted && !조각.틀) {
      경고 = '붙여넣은 글에서 «=== 문서 틀 시작 ===» 표시를 찾지 못했습니다. '
           + '그래서 본문은 기본 양식으로 만들고, 붙여넣은 내용은 '
           + '문서 뒤쪽 «참고 재료» 에 그대로 넣었습니다. '
           + '제미나이에 «문서 틀 부분만 다시 줘» 라고 하면 제대로 만들어집니다.';
    }

    var 이름 = 파일이름_(info, spec);
    var id = (모양.kind === 'slide')
      ? 슬라이드_(spec, 이름, info, 모양, 조각)
      : 문서_(spec, 이름, info, 모양, 조각);

    var f = DriveApp.getFileById(id);
    try { f.moveTo(폴더_()); } catch (e) { /* 이동 실패해도 문서는 있다 */ }
    if (교사이메일) { try { f.addEditor(교사이메일); } catch (e) { /* 넘어간다 */ } }

    var 어디서 = 조각.틀 ? '제미나이가 준 틀' : '기본 양식';
    if (모양.material !== false && 조각.재료.length) 어디서 += ' + 참고 재료';

    return { ok: true, url: f.getUrl(), name: 이름, warn: 경고, from: 어디서 };

  } catch (err) {
    return { ok: false, error: String(err) };
  }
}

/**
 * 붙여넣은 것이 « 제미나이 답변 » 이 아니라 « 프롬프트 그 자체 » 인지 살핀다.
 *
 * 2단계에서 «프롬프트 복사» 를 누른 뒤 제미나이를 거치지 않고 곧바로
 * 3단계에 붙여넣는 실수를 잡기 위한 것이다.
 *
 * 판단은 « 맨 앞 문장 » 하나로만 한다.
 * 제미나이가 프롬프트의 낱말(지켜야 할 규칙, 머리글1 …)을 되풀이하는 일은
 * 아주 흔해서, 그런 낱말로 판단하면 멀쩡한 답변을 막아 버린다.
 */
function 프롬프트인가_(전체) {
  // 프롬프트는 반드시 이 문장으로 시작한다. 제미나이 답변은 이렇게 시작하지 않는다.
  var 앞 = String(전체 || '').replace(/^[\s]+/, '').slice(0, 200);
  return /^너는 고등학교 3학년[\s\S]{0,60}학습 도우미야/.test(앞);
}

/** 앞뒤 빈 줄 걷어내기 */
function 다듬기_(줄) {
  var r = 줄.slice();
  while (r.length && !r[0].trim()) r.shift();
  while (r.length && !r[r.length - 1].trim()) r.pop();
  return r;
}

/**
 * 붙여넣은 글을 « 문서 틀 » 과 « 재료 » 로 쪼갠다.
 *
 *   틀   === 문서 틀 시작 === ~ === 문서 틀 끝 === 사이
 *   재료 그 바깥의 나머지 전부 (개념 정리, 실습 데이터, 확인할 것 …)
 *
 * 제미나이가 표시를 **굵게** 하거나 ``` 로 감싸는 일이 잦아서
 * 표시를 찾을 때는 그런 꾸밈을 걷어내고 본다.
 */
function 쪼개기_(text) {
  var 원본 = String(text || '').replace(/\r/g, '').split('\n');
  if (!원본.join('').trim()) return { 틀: null, 재료: [] };

  // 표시를 찾기 위한 «민낯» 사본
  var 민낯 = 원본.map(function (l) {
    return l.replace(/\*\*/g, '').replace(/`/g, '').replace(/^#+\s*/, '').trim();
  });

  var a = -1, b = -1;
  for (var i = 0; i < 민낯.length; i++) {
    if (a < 0 && /문서\s*틀\s*시작/.test(민낯[i])) { a = i; continue; }
    if (a >= 0 && b < 0 && /문서\s*틀\s*끝/.test(민낯[i])) { b = i; break; }
  }

  // 시작 표시가 없으면 «[문서 틀]» 같은 제목 줄이라도 찾아 본다
  if (a < 0) {
    for (var j = 0; j < 민낯.length; j++) {
      if (/^\[?문서\s*틀\]?/.test(민낯[j])) { a = j; break; }
    }
  }

  if (a < 0) return { 틀: null, 재료: 다듬기_(원본) };
  if (b < 0) b = 원본.length;

  var 틀 = 다듬기_(원본.slice(a + 1, b));
  var 재료 = 다듬기_(원본.slice(0, a).concat(원본.slice(b + 1)));
  return { 틀: 틀.length ? 틀 : null, 재료: 재료 };
}

function 파일이름_(info, spec) {
  var 앞 = '3학년';
  if (info.cls) 앞 += ' ' + info.cls + '반';
  if (info.no) 앞 += ' ' + info.no + '번';
  return 앞 + ' ' + info.name + ' - ' + spec.이름표 + ' ' + spec.제목;
}

function 폴더_() {
  var it = DriveApp.getFoldersByName(폴더이름);
  return it.hasNext() ? it.next() : DriveApp.createFolder(폴더이름);
}

function 머리글_(info) {
  return '3학년 ' + (info.cls || '__') + '반 ' + (info.no || '__') + '번   이름 ' + (info.name || '________');
}

function 표줄_(line) {
  var t = line.trim();
  if (t.charAt(0) !== '|') return null;
  var 칸 = t.replace(/^\|/, '').replace(/\|$/, '').split('|');
  return 칸.map(function (c) { return c.trim(); });
}

function 구분줄_(칸) {
  return 칸.length > 0 && 칸.every(function (c) { return /^:?-{2,}:?$/.test(c) || c === ''; })
         && 칸.some(function (c) { return c.indexOf('-') >= 0; });
}


/* =====================================================================
   구글 문서 만들기
   ===================================================================== */

function 문서_(spec, 이름, info, 모양, 조각) {
  var doc = DocumentApp.create(이름);
  var body = doc.getBody();
  body.clear();

  var c = 테마[모양.theme] || 테마.teal;
  var ff = 글꼴이름[모양.font] || 글꼴이름['본고딕'];
  var 본문크기 = (모양.size === '크게') ? 12 : 11;

  /* 구글 문서는 새 문단이 «앞 문단의 글자 서식» 을 물려받는다.
     굵게·기울임·색을 늘 명시해 주지 않으면 ● 다음 줄이 굵어지고
     안내 문구 다음의 표가 통째로 기울어진다. */
  function 글(text, opt) {
    opt = opt || {};
    var p = body.appendParagraph(text);
    if (opt.heading) p.setHeading(opt.heading);
    p.setFontFamily(ff);
    p.setFontSize(opt.size || 본문크기);
    p.setForegroundColor(opt.color || c.본문);
    p.setBold(opt.bold === true);
    p.setItalic(opt.italic === true);
    return p;
  }

  // ---- 표지 ----
  if (모양.cover !== false) {
    글(spec.제목, { heading: DocumentApp.ParagraphHeading.TITLE, color: c.큰제목, size: 본문크기 + 11 });
    글(spec.부제, { heading: DocumentApp.ParagraphHeading.SUBTITLE, color: c.안내, size: 본문크기 + 2 });
    글(머리글_(info), { size: 본문크기 + 1 });
    글('');
  }

  // ---- 목차 ----
  if (모양.toc) {
    글('목차', { heading: DocumentApp.ParagraphHeading.HEADING2, color: c.작은제목 });
    var 제목들 = 조각 ? 조각.filter(function (l) { return l.trim().indexOf('## ') === 0; })
                          .map(function (l) { return l.trim().substring(3).trim(); })
                    : spec.항목.map(function (it) { return it.번호 + '. ' + it.제목; });
    제목들.forEach(function (t) {
      var li = body.appendListItem(t);
      li.setGlyphType(DocumentApp.GlyphType.NUMBER).setFontFamily(ff).setFontSize(본문크기)
        .setForegroundColor(c.본문).setBold(false).setItalic(false);
    });
    글('');
  }

  // ---- 본문 ----
  if (조각 && 조각.틀) {
    옮기기_문서_(body, 조각.틀, 글, c, ff, 본문크기, 모양);
  } else {
    기본틀_문서_(body, spec, 글, c, 모양);
  }

  글('— 여기까지가 제출할 내용입니다 —', { color: c.빈칸 });

  // ---- 참고 재료 (제미나이 답변의 나머지) ----
  if (모양.material !== false && 조각 && 조각.재료 && 조각.재료.length) {
    body.appendHorizontalRule();
    글('참고 재료 · 제미나이가 준 것', { heading: DocumentApp.ParagraphHeading.HEADING1, color: c.안내 });
    글('이 아래는 제출물이 아닙니다. 여기 있는 내용을 그대로 옮겨 적으면 최하점입니다. '
       + '읽고 이해한 다음 위쪽 【 】 자리에 내 문장으로 쓰고, 제출 전에 이 부분을 지우세요.',
       { color: c.안내, italic: true });
    글('');
    옮기기_문서_(body, 조각.재료, 글, c, ff, 본문크기, 모양, true);
  }
  doc.saveAndClose();
  return doc.getId();
}

/**
 * 제미나이가 준 줄들을 문서로 옮긴다.
 * 참고 는 « 참고 재료 » 를 옮길 때 true — 제목을 한 단계씩 낮춰 본문과 섞이지 않게 한다.
 */
function 옮기기_문서_(body, 줄들, 글, c, ff, 본문크기, 모양, 참고) {
  var i = 0, 코드중 = false;
  while (i < 줄들.length) {
    var raw = 줄들[i];
    var t = raw.trim();

    // ``` 로 감싼 코드 덩어리는 손대지 않고 고정폭으로 그대로 옮긴다
    if (/^```/.test(t)) { 코드중 = !코드중; i++; continue; }
    if (코드중) {
      var cp = body.appendParagraph(raw === '' ? ' ' : raw);
      cp.setFontFamily('Consolas').setFontSize(본문크기 - 1)
        .setForegroundColor(c.작은제목).setBold(false).setItalic(false);
      i++; continue;
    }

    // 표 — 연달아 오는 | ... | 줄을 모아 한 번에
    var 칸 = 표줄_(raw);
    if (칸) {
      var 값 = [];
      while (i < 줄들.length) {
        var c2 = 표줄_(줄들[i]);
        if (!c2) break;
        if (!구분줄_(c2)) 값.push(c2);
        i++;
      }
      if (값.length) {
        var 폭 = Math.max.apply(null, 값.map(function (r) { return r.length; }));
        값 = 값.map(function (r) {
          while (r.length < 폭) r.push('');
          return r;
        });
        var tb = body.appendTable(값);
        tb.editAsText().setFontFamily(ff).setFontSize(본문크기)
          .setForegroundColor(c.본문).setBold(false).setItalic(false);
        tb.getRow(0).editAsText().setBold(true).setForegroundColor(c.작은제목);
      }
      continue;
    }

    if (!t) { 글(''); }
    else if (t.indexOf('# ') === 0) {
      // 표지를 이미 넣었으면 같은 제목이 두 번 나오므로 건너뛴다
      if (!참고 && 모양.cover !== false) { i++; continue; }
      글(t.substring(2).trim(), 참고
        ? { heading: DocumentApp.ParagraphHeading.HEADING2, color: c.작은제목 }
        : { heading: DocumentApp.ParagraphHeading.TITLE, color: c.큰제목, size: 본문크기 + 11 });
    }
    else if (t.indexOf('## ') === 0) {
      글(t.substring(3).trim(), 참고
        ? { heading: DocumentApp.ParagraphHeading.HEADING2, color: c.작은제목 }
        : { heading: DocumentApp.ParagraphHeading.HEADING1, color: c.큰제목 });
    }
    else if (t.indexOf('### ') === 0) {
      글(t.substring(4).trim(), { heading: DocumentApp.ParagraphHeading.HEADING2, color: c.작은제목 });
    }
    else if (/^\[.+\]/.test(t)) {
      // [항목 1] · [실습 데이터] 같은 재료 제목
      글(t, { heading: DocumentApp.ParagraphHeading.HEADING2, color: c.작은제목 });
    }
    else if (t.indexOf('●') === 0) {
      글(t, { bold: true, color: c.작은제목 });
    }
    else if (t.indexOf('▸') === 0) {
      글(t, { heading: DocumentApp.ParagraphHeading.HEADING3, color: c.작은제목 });
    }
    else if (t.indexOf('> ') === 0) {
      if (모양.guide !== false) 글(t.substring(2).trim(), { color: c.안내, italic: true });
    }
    else if (t.indexOf('【') === 0) {
      글(빈칸, { color: c.빈칸 });
    }
    else if (t.indexOf('- ') === 0 || t.indexOf('· ') === 0) {
      var li = body.appendListItem(t.substring(2).trim());
      li.setGlyphType(DocumentApp.GlyphType.BULLET).setFontFamily(ff).setFontSize(본문크기)
        .setForegroundColor(c.본문).setBold(false).setItalic(false);
    }
    else if (/^-{3,}$/.test(t)) {
      body.appendHorizontalRule();
    }
    else {
      글(t);
    }
    i++;
  }
}

/** 붙여넣은 것이 없을 때 쓰는 기본 양식 */
function 기본틀_문서_(body, spec, 글, c, 모양) {
  spec.항목.forEach(function (it) {
    글(it.번호 + '. ' + it.제목, { heading: DocumentApp.ParagraphHeading.HEADING1, color: c.큰제목 });
    if (모양.guide !== false) 글(it.배점 + '   ·   ' + it.안내, { color: c.안내, italic: true });

    (it.칸 || []).forEach(function (q) {
      글('▸ ' + q, { heading: DocumentApp.ParagraphHeading.HEADING3, color: c.작은제목 });
      글(빈칸, { color: c.빈칸 });
    });

    if (it.표) {
      글('[' + it.표.이름 + ']', { bold: true });
      var 값 = [it.표.머리글];
      if (it.표.줄) it.표.줄.forEach(function (r) { 값.push(r.slice()); });
      else for (var i = 0; i < it.표.줄수; i++) 값.push(it.표.머리글.map(function () { return ''; }));
      var tb = body.appendTable(값);
      tb.editAsText().setFontFamily(글꼴이름[모양.font] || 글꼴이름['본고딕'])
        .setForegroundColor(c.본문).setBold(false).setItalic(false);
      tb.getRow(0).editAsText().setBold(true).setForegroundColor(c.작은제목);
    }
    글('');
  });
}


/* =====================================================================
   구글 슬라이드 만들기
   ===================================================================== */

function 슬라이드_(spec, 이름, info, 모양, 조각) {
  var pres = SlidesApp.create(이름);
  var c = 테마[모양.theme] || 테마.teal;
  var ff = 글꼴이름[모양.font] || 글꼴이름['본고딕'];

  var 표지 = pres.getSlides()[0];
  if (모양.cover !== false) {
    글넣기_(표지, SlidesApp.PlaceholderType.CENTERED_TITLE, spec.제목, ff, c.큰제목);
    글넣기_(표지, SlidesApp.PlaceholderType.SUBTITLE, spec.부제 + '\n' + 머리글_(info), ff, c.안내);
  } else {
    표지.remove();
  }

  var 장 = (조각 && 조각.틀) ? 장나누기_(조각.틀) : 기본장_(spec, 모양);
  장.forEach(function (s) {
    var slide = pres.appendSlide(SlidesApp.PredefinedLayout.TITLE_AND_BODY);
    글넣기_(slide, SlidesApp.PlaceholderType.TITLE, s.제목, ff, c.큰제목);
    글넣기_(slide, SlidesApp.PlaceholderType.BODY, s.내용.join('\n'), ff, null);
  });

  // 참고 재료는 뒤에 «제출 전 삭제» 장표로 붙인다
  if (모양.material !== false && 조각 && 조각.재료 && 조각.재료.length) {
    묶기_(조각.재료, 13).forEach(function (덩어리, n) {
      var slide = pres.appendSlide(SlidesApp.PredefinedLayout.TITLE_AND_BODY);
      글넣기_(slide, SlidesApp.PlaceholderType.TITLE,
              '참고 재료 ' + (n + 1) + ' · 제출 전 삭제', ff, c.안내);
      글넣기_(slide, SlidesApp.PlaceholderType.BODY, 덩어리.join('\n'), ff, null);
    });
  }

  pres.saveAndClose();
  return pres.getId();
}

/** 붙여넣은 틀을 ## 기준으로 장표마다 쪼갠다 */
function 장나누기_(줄들) {
  var 장 = [], 지금 = null;
  줄들.forEach(function (raw) {
    var t = raw.trim();
    if (t.indexOf('## ') === 0) {
      지금 = { 제목: t.substring(3).trim(), 내용: [] };
      장.push(지금);
    } else if (지금) {
      if (t.indexOf('# ') === 0) return;
      if (t.indexOf('> ') === 0) 지금.내용.push(t.substring(2).trim());
      else if (t) 지금.내용.push(t);
    }
  });
  return 장.length ? 장 : [{ 제목: '내용', 내용: 줄들 }];
}

/** 줄 배열을 n 줄씩 나눈다 */
function 묶기_(줄들, n) {
  var 결과 = [], 지금 = [];
  줄들.forEach(function (l) {
    지금.push(l);
    if (지금.length >= n) { 결과.push(지금); 지금 = []; }
  });
  if (지금.length) 결과.push(지금);
  return 결과;
}

function 기본장_(spec, 모양) {
  return spec.항목.map(function (it) {
    var 내용 = [];
    if (모양.guide !== false) { 내용.push(it.배점); 내용.push(it.안내); 내용.push(''); }
    (it.칸 || []).forEach(function (q) { 내용.push('▸ ' + q); 내용.push('    ' + 빈칸); });
    if (it.표) 내용.push('▸ [' + it.표.이름 + '] — 표를 직접 넣어 채우세요');
    return { 제목: it.번호 + '. ' + it.제목, 내용: 내용 };
  });
}

function 글넣기_(slide, type, text, ff, color) {
  var ph = slide.getPlaceholder(type);
  if (!ph) return;
  var tr = ph.asShape().getText();
  tr.setText(text);
  try {
    var st = tr.getTextStyle();
    st.setFontFamily(ff);
    if (color) st.setForegroundColor(color);
  } catch (e) { /* 글꼴을 못 바꿔도 넘어간다 */ }
}


/* =====================================================================
   화면
   ===================================================================== */

function doGet() {
  return HtmlService.createHtmlOutput(화면_())
    .setTitle('자료구조 수행평가 양식 만들기')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

function 설정보내기() {
  var 목록 = {};
  Object.keys(양식).forEach(function (k) {
    목록[k] = { 이름표: 양식[k].이름표, 제목: 양식[k].제목, 입력: 양식[k].입력 };
  });
  var 테마목록 = Object.keys(테마).map(function (k) { return { 키: k, 이름: 테마[k].이름 }; });
  return { 양식: 목록, 테마: 테마목록, 글꼴: 글꼴목록 };
}

function 화면_() {
  return [
'<style>',
' :root{--e:#0c7d71;--ink:#12211f;--sub:#5d716e;--line:#dfe6e3;--soft:#eef5f3}',
' *{box-sizing:border-box}',
' body{font-family:"Malgun Gothic","맑은 고딕",system-ui,sans-serif;background:#f6f8f7;',
'   color:var(--ink);margin:0;padding:22px 16px 60px;line-height:1.7}',
' .wrap{max-width:660px;margin:0 auto}',
' h1{font-size:20px;margin:0 0 4px}',
' .lead{font-size:13px;color:var(--sub);margin:0 0 20px}',
' .steps{display:flex;gap:6px;margin:0 0 18px}',
' .st{flex:1;font-size:11.5px;text-align:center;padding:7px 4px;border-radius:99px;',
'   background:#e7edeb;color:#7d918e;font-weight:700}',
' .st.on{background:var(--e);color:#fff}',
' .card{background:#fff;border:1px solid var(--line);border-radius:8px;padding:22px 22px 26px;margin-bottom:16px}',
' .card h2{font-size:15.5px;margin:0 0 4px;color:var(--e)}',
' .card .d{font-size:12.5px;color:var(--sub);margin:0 0 16px}',
' label{display:block;font-size:13px;font-weight:700;margin:13px 0 5px}',
' input,select,textarea{width:100%;font-size:15px;padding:9px 11px;border:1px solid #c8d5d1;',
'   border-radius:5px;font-family:inherit;background:#fff;color:var(--ink)}',
' textarea{min-height:150px;font-size:13px;line-height:1.6;resize:vertical}',
' input:focus,select:focus,textarea:focus{outline:2px solid var(--e);border-color:var(--e)}',
' .row{display:flex;gap:10px}.row>div{flex:1}',
' button{font-family:inherit;font-size:15px;font-weight:700;color:#fff;background:var(--e);',
'   border:0;border-radius:5px;padding:12px 16px;cursor:pointer;width:100%;margin-top:18px}',
' button.ghost{background:#fff;color:var(--e);border:1px solid var(--e)}',
' button:disabled{background:#9db5b1;border-color:#9db5b1;color:#fff;cursor:default}',
' .msg{margin-top:14px;font-size:13.5px;padding:12px 14px;border-radius:6px;display:none}',
' .msg.ok{display:block;background:#e4f3ef;border-left:3px solid var(--e)}',
' .msg.no{display:block;background:#fdecea;border-left:3px solid #9d2418;color:#9d2418}',
' .msg.warn{display:block;background:#fdf4e3;border-left:3px solid #ad6208;color:#7a4506}',
' .msg a{color:var(--e);font-weight:700}',
' .hint{font-size:12px;color:var(--sub);margin:10px 0 0}',
' .opt{display:flex;flex-wrap:wrap;gap:6px;margin-top:5px}',
' .opt button{width:auto;margin:0;font-size:12.5px;font-weight:700;padding:7px 13px;border-radius:99px;',
'   background:#fff;color:var(--sub);border:1px solid #c8d5d1}',
' .opt button.on{background:var(--e);color:#fff;border-color:var(--e)}',
' .gem{display:inline-block;margin-top:12px;font-size:13px;font-weight:700;color:var(--e);text-decoration:none;',
'   border:1px solid var(--e);border-radius:5px;padding:9px 14px}',
' .hide{display:none}',
'</style>',

'<div class="wrap">',
' <h1>자료구조 수행평가 양식 만들기</h1>',
' <p class="lead">내 정보를 넣고 → 프롬프트를 받아 제미나이에 묻고 → 그 답을 붙여넣으면 문서가 만들어집니다.</p>',

' <div class="steps">',
'  <div class="st on" id="s1">1 · 내 정보</div>',
'  <div class="st" id="s2">2 · 프롬프트</div>',
'  <div class="st" id="s3">3 · 문서 만들기</div>',
' </div>',

// ---------- 1단계 ----------
' <div class="card" id="c1">',
'  <h2>1단계 · 내 정보 넣기</h2>',
'  <p class="d">모르는 칸은 비워 두어도 됩니다. 제미나이가 대신 판단해 줍니다.</p>',
'  <label for="task">어느 수행평가인가요?</label>',
'  <select id="task"></select>',
'  <div id="fields"></div>',
'  <div class="row">',
'   <div><label for="cls">반</label><input id="cls" placeholder="예 3"></div>',
'   <div><label for="no">번호</label><input id="no" placeholder="예 7"></div>',
'  </div>',
'  <label for="name">이름</label>',
'  <input id="name" placeholder="예 김서연">',
'  <button id="b1">반영해서 프롬프트 만들기</button>',
'  <div class="msg" id="m1"></div>',
' </div>',

// ---------- 2단계 ----------
' <div class="card hide" id="c2">',
'  <h2>2단계 · 프롬프트 복사해서 제미나이에 묻기</h2>',
'  <p class="d">내 정보가 채워진 프롬프트입니다. 복사해서 제미나이에 그대로 붙여넣으세요.</p>',
'  <textarea id="prompt" readonly style="min-height:230px"></textarea>',
'  <button id="b2">프롬프트 복사</button>',
'  <a class="gem" href="https://gemini.google.com/app" target="_blank" rel="noopener">제미나이 열기 &rarr;</a>',
'  <p class="hint">제미나이 답변 맨 아래에 <b>=== 문서 틀 시작 ===</b> 부터 <b>=== 문서 틀 끝 ===</b> 까지가 있습니다.',
'   그 부분을 복사해 3단계에 붙여넣으세요. 답변 전체를 붙여넣어도 알아서 그 부분만 찾습니다.</p>',
' </div>',

// ---------- 3단계 ----------
' <div class="card hide" id="c3">',
'  <h2>3단계 · 붙여넣고 문서 만들기</h2>',
'  <p class="d">제미나이 답변을 붙여넣으세요. 비워 두고 만들면 기본 양식으로 만들어집니다.</p>',
'  <textarea id="pasted" placeholder="여기에 제미나이 답변을 붙여넣기"></textarea>',

'  <label>어떤 형태로</label>',
'  <div class="opt" id="o-kind">',
'   <button data-v="doc" class="on">구글 문서</button>',
'   <button data-v="slide">구글 슬라이드</button>',
'  </div>',

'  <label>색</label><div class="opt" id="o-theme"></div>',
'  <label>글꼴</label><div class="opt" id="o-font"></div>',

'  <label>글자 크기</label>',
'  <div class="opt" id="o-size">',
'   <button data-v="보통" class="on">보통</button>',
'   <button data-v="크게">크게</button>',
'  </div>',

'  <label>표지</label>',
'  <div class="opt" id="o-cover">',
'   <button data-v="1" class="on">넣기</button>',
'   <button data-v="0">안 넣기</button>',
'  </div>',

'  <label>목차</label>',
'  <div class="opt" id="o-toc">',
'   <button data-v="0" class="on">안 넣기</button>',
'   <button data-v="1">넣기</button>',
'  </div>',

'  <label>제미나이가 준 참고 재료</label>',
'  <div class="opt" id="o-material">',
'   <button data-v="1" class="on">문서 뒤에 함께 넣기</button>',
'   <button data-v="0">안 넣기</button>',
'  </div>',

'  <label>항목별 안내 문구 (배점·요령)</label>',
'  <div class="opt" id="o-guide">',
'   <button data-v="1" class="on">넣기</button>',
'   <button data-v="0">안 넣기</button>',
'  </div>',

'  <button id="b3">문서 만들기</button>',
'  <button id="b3b" class="ghost">뒤로</button>',
'  <div class="msg" id="m3"></div>',
' </div>',
'</div>',

'<script>',
'var $ = function (id) { return document.getElementById(id); };',
'var CFG = null, 내정보 = {};',
'',
'function 보이기(n){',
'  ["1","2","3"].forEach(function(k){',
'    $("c"+k).className = "card" + (k===n ? "" : " hide");',
'    $("s"+k).className = "st" + (k<=n ? " on" : "");',
'  });',
'  window.scrollTo(0,0);',
'}',
'',
'function 칸그리기(){',
'  var t = $("task").value, f = CFG.양식[t].입력, h = "";',
'  f.forEach(function(x){',
'    h += \'<label for="f-\'+x.키+\'">\'+x.이름+\'</label>\';',
'    if (x.고르기) {',
'      h += \'<select id="f-\'+x.키+\'"><option value="">모르겠어요 (제미나이가 판단)</option>\';',
'      x.고르기.forEach(function(o){ h += \'<option value="\'+o+\'">\'+o+\'</option>\'; });',
'      h += \'</select>\';',
'    } else {',
'      h += \'<input id="f-\'+x.키+\'" placeholder="예 \'+(x.예||"")+\'">\';',
'    }',
'  });',
'  $("fields").innerHTML = h;',
'}',
'',
'function 고르기묶음(id){',
'  var box = $(id);',
'  box.addEventListener("click", function(e){',
'    var b = e.target.closest("button"); if(!b) return;',
'    [].forEach.call(box.querySelectorAll("button"), function(x){ x.className=""; });',
'    b.className = "on";',
'  });',
'}',
'function 고른값(id){',
'  var b = $(id).querySelector("button.on");',
'  return b ? b.getAttribute("data-v") : "";',
'}',
'',
'google.script.run.withSuccessHandler(function(cfg){',
'  CFG = cfg;',
'  var h = "";',
'  Object.keys(cfg.양식).forEach(function(k){',
'    h += \'<option value="\'+k+\'">\'+cfg.양식[k].이름표+\' · \'+cfg.양식[k].제목+\'</option>\';',
'  });',
'  $("task").innerHTML = h;',
'  $("task").value = "2";',
'  칸그리기();',
'  $("task").addEventListener("change", 칸그리기);',
'',
'  var th = "";',
'  cfg.테마.forEach(function(t,i){ th += \'<button data-v="\'+t.키+\'"\'+(i===0?\' class="on"\':\'\')+\'>\'+t.이름+\'</button>\'; });',
'  $("o-theme").innerHTML = th;',
'  var fo = "";',
'  cfg.글꼴.forEach(function(f,i){ fo += \'<button data-v="\'+f+\'"\'+(i===0?\' class="on"\':\'\')+\'>\'+f+\'</button>\'; });',
'  $("o-font").innerHTML = fo;',
'  ["o-kind","o-theme","o-font","o-size","o-cover","o-toc","o-guide","o-material"].forEach(고르기묶음);',
'}).설정보내기();',
'',
'$("b1").addEventListener("click", function(){',
'  var m = $("m1"), b = $("b1");',
'  if (!$("name").value.trim()) { m.className="msg no"; m.textContent="이름을 넣어 주세요."; return; }',
'  내정보 = { task:$("task").value, cls:$("cls").value.trim(), no:$("no").value.trim(), name:$("name").value.trim() };',
'  CFG.양식[내정보.task].입력.forEach(function(x){',
'    var el = $("f-"+x.키); 내정보[x.키] = el ? el.value.trim() : "";',
'  });',
'  b.disabled = true; b.textContent = "만드는 중...";',
'  m.className="msg ok"; m.textContent="잠시만요.";',
'  google.script.run',
'    .withSuccessHandler(function(r){',
'      b.disabled=false; b.textContent="반영해서 프롬프트 만들기";',
'      if(!r||!r.ok){ m.className="msg no"; m.textContent=(r&&r.error)||"오류"; return; }',
'      m.className="msg"; m.textContent="";',
'      $("prompt").value = r.prompt;',
'      보이기("2");',
'    })',
'    .withFailureHandler(function(e){',
'      b.disabled=false; b.textContent="반영해서 프롬프트 만들기";',
'      m.className="msg no"; m.textContent="오류: "+e.message;',
'    })',
'    .makePrompt(내정보);',
'});',
'',
'$("b2").addEventListener("click", function(){',
'  var ta = $("prompt"), b = $("b2");',
'  ta.removeAttribute("readonly"); ta.select(); ta.setSelectionRange(0, 999999);',
'  var ok = false;',
'  try { ok = document.execCommand("copy"); } catch(e) { ok = false; }',
'  ta.setAttribute("readonly","readonly");',
'  b.textContent = ok ? "복사됐습니다 — 제미나이에 붙여넣으세요" : "직접 복사해 주세요 (Ctrl+A → Ctrl+C)";',
'  setTimeout(function(){ b.textContent="프롬프트 복사"; 보이기("3"); }, 1600);',
'});',
'',
'$("b3b").addEventListener("click", function(){ 보이기("2"); });',
'',
'$("b3").addEventListener("click", function(){',
'  var m = $("m3"), b = $("b3");',
'  b.disabled = true; b.textContent = "만드는 중...";',
'  m.className="msg ok"; m.textContent="10초쯤 걸립니다. 기다려 주세요.";',
'  google.script.run',
'    .withSuccessHandler(function(r){',
'      b.disabled=false; b.textContent="문서 만들기";',
'      if(!r||!r.ok){ m.className="msg no"; m.textContent=(r&&r.error)||"오류"; return; }',
'      m.className = r.warn ? "msg warn" : "msg ok";',
'      m.textContent = "";',
'      var t = document.createElement("div");',
'      t.innerHTML = "<b>만들어졌습니다.</b> (" + r.from + ")";',
'      var n = document.createElement("div"); n.textContent = r.name;',
'      m.appendChild(t); m.appendChild(n);',
'      if (r.warn) { var w = document.createElement("div"); w.textContent = r.warn; m.appendChild(w); }',
'      m.appendChild(document.createElement("br"));',
'      var a = document.createElement("a");',
'      a.href = r.url; a.target = "_blank"; a.rel = "noopener";',
'      a.textContent = "여기를 눌러 문서 열기";',
'      m.appendChild(a);',
'      window.open(r.url, "_blank");',
'    })',
'    .withFailureHandler(function(e){',
'      b.disabled=false; b.textContent="문서 만들기";',
'      m.className="msg no"; m.textContent="오류: "+e.message;',
'    })',
'    .makeDoc({',
'      task: 내정보.task, cls: 내정보.cls, no: 내정보.no, name: 내정보.name,',
'      pasted: $("pasted").value,',
'      style: {',
'        kind:  고른값("o-kind"),',
'        theme: 고른값("o-theme"),',
'        font:  고른값("o-font"),',
'        size:  고른값("o-size"),',
'        cover: 고른값("o-cover") === "1",',
'        toc:   고른값("o-toc") === "1",',
'        guide: 고른값("o-guide") === "1",',
'        material: 고른값("o-material") === "1"',
'      }',
'    });',
'});',
'</script>'
  ].join('\n');
}


/** 선생님이 잘 되는지 시험할 때 실행해 보세요. */
function 테스트만들기() {
  var 정보 = { task: '2', cls: '점검', no: '0', name: '연결확인용', topic: '학교 도서관 도서 검색' };
  Logger.log(makePrompt(정보).prompt.substring(0, 400));
  Logger.log(makeDoc(정보));

  var 틀 = 시작표 + '\n# 시험 문서\n## 1. 첫 항목\n> 안내 한 줄\n▸ 질문 하나\n' + 빈칸 +
           '\n| 가 | 나 |\n| --- | --- |\n|  |  |\n' + 끝표;
  정보.pasted = 틀;
  정보.style = { kind: 'doc', theme: 'navy', font: '나눔고딕', size: '크게', cover: true, toc: true, guide: true };
  Logger.log(makeDoc(정보));
}

/**
 * 자료구조 수행평가 양식 생성기  v10
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
var VER = 10;

var 빈칸 = '【                                                            】';
var 시작표 = '=== 답안 시작 ===';
var 끝표 = '=== 답안 끝 ===';

// 문서에서 학생이 직접 고쳐 쓸 자리의 제목
var 장표빈칸 = '【  여기에 내 문장으로 다시 쓰기  】';

var 초안표 = 'AI 초안 — 읽고 고쳐 쓸 것';
var 점검표 = '이 초안에서 확인 · 수정할 곳';
var 내글표 = '내가 고쳐 쓴 글   ← 채점 대상';


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
      { 번호: '3', 제목: '코드 실행 및 시뮬레이션', 배점: '평가요소 ③ · 25점', 실측: true,
        안내: '실행 결과 없이 표만 있으면 상위 수준으로 못 갑니다. 자료에 없는 값까지 실행해야 만점입니다.',
        칸: ['코드 A(순차 탐색) 실행 결과 — 출력 화면을 그대로 붙여넣기',
             '코드 B(이진 탐색) 실행 결과 — 출력 화면을 그대로 붙여넣기',
             '자료에 없는 값으로 실행한 결과 — 두 코드 모두'],
        표: { 이름: '탐색 과정 표',
              머리글: ['단계', '비교한 값', '남은 탐색 범위', '판단'], 줄수: 6 } },
      { 번호: '4', 제목: '실행 결과로 확인한 효율', 배점: '평가요소 ④ · 25점', 실측: true,
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

    줄.push('아래 항목마다 « 완성된 답안 초안 » 을 써 줘.');
    줄.push('나는 그것을 읽고 분석해서 내 문장으로 고쳐 쓸 거야.');
    줄.push('그러니 « 잘 쓴 답안이란 이런 것 » 을 보여 주는 초안이어야 해.');
    줄.push('');
    줄.push('항목마다 아래 두 덩어리를 꼭 지켜 줘.');
    줄.push('');
    줄.push('  ### 초안');
    줄.push('     그 항목의 만점 수준으로 완성된 문장. 3~6문장.');
    줄.push('     시간 복잡도가 나오면 반드시 O 표기로 적어 줘.');
    줄.push('');
    줄.push('  ### 확인·수정할 곳');
    줄.push('     - 내가 사실을 확인해야 하는 부분');
    줄.push('     - 내 주제·내 자료에 맞게 반드시 바꿔야 하는 문장');
    줄.push('     - 이 초안에서 근거가 약해 내가 보강해야 하는 곳');
    줄.push('     세 줄 이상, 구체적으로.');
    줄.push('');

    spec.항목.forEach(function (it) {
      줄.push('[항목 ' + it.번호 + '] ' + it.제목 + '   (' + it.배점 + ')');
      (it.칸 || []).forEach(function (q) { 줄.push('  · ' + q); });
      if (it.표) 줄.push('  · ' + it.표.이름 + ' 를 어떻게 채워야 하는지');
      if (it.실측) {
        줄.push('  ※ 이 항목은 내가 코드를 직접 돌려 나온 숫자로 채운다.');
        줄.push('     초안에는 숫자를 지어내지 말고 〈 여기에 내 실행 결과 〉 처럼');
        줄.push('     빈자리를 남긴 채, 그 숫자를 어떻게 해석해야 하는지를 써 줘.');
      }
      줄.push('');
    });

    줄.push('━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    줄.push('답안 전체를 아래 표시 사이에 넣어 줘.');
    줄.push('나는 이 부분을 그대로 복사해 «양식 만들기» 웹앱에 붙여넣을 거야.');
    줄.push('그래서 표시와 기호를 정확히 지켜 줘야 해.');
    줄.push('');
    줄.push(시작표);
    줄.push('# ' + spec.제목);
    줄.push('## 1. 첫 항목 제목');
    줄.push('### 초안');
    줄.push('여기에 완성된 문장.');
    줄.push('### 확인·수정할 곳');
    줄.push('- 확인할 것');
    줄.push('- 바꿔야 할 것');
    줄.push(끝표);
    줄.push('');
    줄.push('기호 뜻');
    줄.push('  #    보고서 제목 (한 번만)');
    줄.push('  ##   항목 제목 (항목 수만큼)');
    줄.push('  ###  초안 / 확인·수정할 곳 — 이 두 가지만');
    줄.push('  -    목록');
    줄.push('  | |  표. 둘째 줄은 반드시 | --- | 로');
    줄.push('');
    줄.push('« 내가 고쳐 쓸 자리 » 는 웹앱이 알아서 넣으니 너는 만들지 마.');
    줄.push('');
    줄.push('━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    줄.push('지켜야 할 규칙');
    줄.push('');
    줄.push('1. 초안은 내가 « 고쳐 쓸 재료 » 야. 내가 그대로 내면 규정 위반이라');
    줄.push('   최하점을 받아. 그래서 [확인·수정할 곳] 을 반드시 함께 줘.');
    if (String(info.task) === '2') {
      줄.push('2. 실행 결과와 실측 숫자는 절대 지어내지 마. 빈자리로 남겨 줘.');
    } else {
      줄.push('2. 사실이 확실하지 않으면 « 확인 필요 » 라고 표시해 줘.');
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
    var id;
    if (모양.kind === 'html') id = 웹문서_(spec, 이름, info, 모양, 조각);
    else if (모양.kind === 'slide') id = 슬라이드_(spec, 이름, info, 모양, 조각);
    else id = 문서_(spec, 이름, info, 모양, 조각);

    var f = DriveApp.getFileById(id);
    try { f.moveTo(폴더_()); } catch (e) { /* 이동 실패해도 문서는 있다 */ }
    if (교사이메일) { try { f.addEditor(교사이메일); } catch (e) { /* 넘어간다 */ } }

    var 어디서 = 조각.틀 ? '제미나이가 준 틀' : '기본 양식';
    if (모양.material !== false && 조각.재료.length) 어디서 += ' + 참고 재료';

    var 결과 = { ok: true, url: f.getUrl(), name: 이름, warn: 경고, from: 어디서 };
    if (모양.kind === 'html') {
      결과.download = 'https://drive.google.com/uc?export=download&id=' + id;
      결과.html = true;
    }
    return 결과;

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

  // « 답안 » 과 예전 « 문서 틀 » 을 모두 알아본다
  var 열기 = /(답안|문서\s*틀)\s*시작/;
  var 닫기 = /(답안|문서\s*틀)\s*끝/;

  var a = -1, b = -1;
  for (var i = 0; i < 민낯.length; i++) {
    if (a < 0 && 열기.test(민낯[i])) { a = i; continue; }
    if (a >= 0 && b < 0 && 닫기.test(민낯[i])) { b = i; break; }
  }

  // 시작 표시가 없으면 «[답안]» 같은 제목 줄이라도 찾아 본다
  if (a < 0) {
    for (var j = 0; j < 민낯.length; j++) {
      if (/^\[?(답안|문서\s*틀)\]?/.test(민낯[j])) { a = j; break; }
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

  // ---- 이 문서를 어떻게 쓰는지 ----
  if (조각 && 조각.틀) {
    글('이 문서를 쓰는 법', { heading: DocumentApp.ParagraphHeading.HEADING2, color: c.큰제목 });
    글('① 「' + 초안표 + '」 을 읽습니다.  '
       + '② 「' + 점검표 + '」 을 보며 무엇이 부족한지 찾습니다.  '
       + '③ 「' + 내글표.replace('   ← 채점 대상', '') + '」 에 내 문장으로 다시 씁니다.',
       { color: c.작은제목 });
    글('채점은 ③ 만 봅니다. 초안을 그대로 두고 내면 '
       + '평가 규정에 따라 해당 평가요소 최하점입니다. '
       + '다 쓴 뒤 초안 부분은 지워도 됩니다.', { color: c.안내, italic: true });
    글('');
    body.appendHorizontalRule();
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
  var 항목열림 = false;

  /** 항목 하나가 끝나면 학생이 직접 쓸 자리를 넣는다 */
  function 내글자리_(글, c) {
    if (!항목열림) return;
    항목열림 = false;
    글('');
    글('▸ ' + 내글표, { heading: DocumentApp.ParagraphHeading.HEADING3, color: c.큰제목 });
    글(빈칸, { color: c.빈칸 });
    글(빈칸, { color: c.빈칸 });
    글('');
  }

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
      if (!참고) 내글자리_(글, c);          // 앞 항목을 닫는다
      글(t.substring(3).trim(), 참고
        ? { heading: DocumentApp.ParagraphHeading.HEADING2, color: c.작은제목 }
        : { heading: DocumentApp.ParagraphHeading.HEADING1, color: c.큰제목 });
      if (!참고) 항목열림 = true;
    }
    else if (t.indexOf('### ') === 0) {
      var 소제목 = t.substring(4).trim();
      // «초안» 은 회색으로 눌러 두고, 그 앞에 무엇인지 밝혀 준다
      if (!참고 && /^초안/.test(소제목)) {
        글('▸ ' + 초안표, { heading: DocumentApp.ParagraphHeading.HEADING3, color: c.안내 });
      } else if (!참고 && /확인|수정/.test(소제목)) {
        글('▸ ' + 점검표, { heading: DocumentApp.ParagraphHeading.HEADING3, color: c.안내 });
      } else {
        글(소제목, { heading: DocumentApp.ParagraphHeading.HEADING2, color: c.작은제목 });
      }
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

  if (!참고) 내글자리_(글, c);            // 마지막 항목 닫기
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
   HTML 파일로 만들기

     탐색 수행평가는 코드와 시뮬레이션이 들어가서 문서보다 HTML 이 맞다.
     만들어진 파일 안에 탐색 시뮬레이터와 실측 실험이 들어 있어,
     학생이 그 파일에서 직접 돌린 결과가 그대로 보고서가 된다.

     드라이브는 HTML 을 미리보기로 보여 주지 않는다.
     내려받아 두 번 눌러 열도록 안내한다.
   ===================================================================== */

function 웹문서_(spec, 이름, info, 모양, 조각) {
  var c = 테마[모양.theme] || 테마.teal;
  var ff = 글꼴이름[모양.font] || 글꼴이름['본고딕'];
  var 크기 = (모양.size === '크게') ? 17 : 16;
  var 항목들 = (조각 && 조각.틀) ? 항목쪼개기_(조각.틀) : null;
  var 실측있음 = spec.항목.some(function (it) { return it.실측; });

  var h = [];
  h.push('<!doctype html>');
  h.push('<html lang="ko"><head><meta charset="utf-8">');
  h.push('<meta name="viewport" content="width=device-width, initial-scale=1">');
  h.push('<title>' + 벗기기_(이름) + '</title>');
  h.push('<style>');
  h.push(' :root{--e:' + c.큰제목 + ';--e2:' + c.작은제목 + ';--g:' + c.안내 + ';--ink:' + c.본문 + '}');
  h.push(' *{box-sizing:border-box}');
  h.push(' body{font-family:"' + ff + '","Malgun Gothic",system-ui,sans-serif;');
  h.push('   font-size:' + 크기 + 'px;line-height:1.85;color:var(--ink);background:#f4f6f6;margin:0;padding:26px 16px 80px}');
  h.push(' .wrap{max-width:900px;margin:0 auto}');
  h.push(' header{border-bottom:3px solid var(--e);padding-bottom:16px;margin-bottom:22px}');
  h.push(' h1{color:var(--e);font-size:1.7em;margin:0 0 6px}');
  h.push(' .sub{color:var(--g);margin:0 0 10px;font-size:.85em}');
  h.push(' .who{margin:0;font-weight:700}');
  h.push(' .howto{background:#fff;border-left:4px solid var(--e);padding:14px 18px;margin:0 0 26px;font-size:.9em}');
  h.push(' .howto b{color:var(--e)}');
  h.push(' section{background:#fff;border:1px solid #e2e8e6;border-radius:8px;padding:20px 22px;margin:0 0 20px}');
  h.push(' h2{color:var(--e);font-size:1.15em;margin:0 0 14px;padding-bottom:8px;border-bottom:1px solid #eef2f1}');
  h.push(' .tag{display:block;font-size:.72em;letter-spacing:.08em;font-weight:700;margin:0 0 6px}');
  h.push(' .draft{background:#f7f9f9;border-radius:6px;padding:12px 15px;margin:0 0 14px;color:#4a5a58}');
  h.push(' .draft .tag{color:var(--g)}');
  h.push(' .check{margin:0 0 14px}');
  h.push(' .check .tag{color:var(--g)}');
  h.push(' .check ul{margin:0;padding-left:20px}');
  h.push(' .mine .tag{color:var(--e)}');
  h.push(' textarea{width:100%;min-height:130px;font-family:inherit;font-size:.95em;line-height:1.8;');
  h.push('   padding:12px 14px;border:2px solid var(--e);border-radius:6px;resize:vertical;background:#fff;color:var(--ink)}');
  h.push(' .sim{border-color:var(--e)}');
  h.push(' .sim input{width:100%;font-family:Consolas,monospace;font-size:.85em;padding:9px 11px;');
  h.push('   border:1px solid #c8d5d1;border-radius:5px;margin:4px 0 10px}');
  h.push(' .row{display:flex;gap:10px;flex-wrap:wrap}');
  h.push(' .row>div{flex:1;min-width:180px}');
  h.push(' button{font-family:inherit;font-size:.85em;font-weight:700;color:#fff;background:var(--e);');
  h.push('   border:0;border-radius:5px;padding:10px 16px;cursor:pointer;margin:2px 4px 2px 0}');
  h.push(' button.ghost{background:#fff;color:var(--e);border:1px solid var(--e)}');
  h.push(' table{border-collapse:collapse;width:100%;margin:10px 0;font-size:.85em}');
  h.push(' th,td{border:1px solid #d8e2e0;padding:7px 10px;text-align:left}');
  h.push(' th{background:#eef5f3;color:var(--e2);font-weight:700}');
  h.push(' .out{font-family:Consolas,monospace;font-size:.8em;background:#0f2226;color:#dbe9e6;');
  h.push('   padding:13px 15px;border-radius:6px;white-space:pre-wrap;margin:10px 0;max-height:320px;overflow:auto}');
  h.push(' .note{font-size:.82em;color:var(--g);margin:6px 0 0}');
  h.push(' .bar{position:sticky;bottom:0;background:#fff;border-top:1px solid #e2e8e6;');
  h.push('   padding:12px 16px;margin:26px -16px -80px;text-align:center}');
  h.push(' .saved{font-size:.8em;color:var(--e);margin-left:10px}');
  h.push(' @media print{');
  h.push('   body{background:#fff;padding:0;font-size:11pt}');
  h.push('   section{border:0;border-bottom:1px solid #ccc;border-radius:0;padding:10px 0;margin:0 0 10px}');
  h.push('   .draft,.check,.bar,.sim-ctrl{display:none}');
  h.push('   textarea{border:1px solid #999;min-height:auto}');
  h.push(' }');
  h.push('</style></head><body><div class="wrap">');

  // ---- 머리 ----
  h.push('<header>');
  h.push('<h1>' + 벗기기_(spec.제목) + '</h1>');
  h.push('<p class="sub">' + 벗기기_(spec.부제) + '</p>');
  h.push('<p class="who">' + 벗기기_(머리글_(info)) + '</p>');
  h.push('</header>');

  h.push('<div class="howto"><b>이 파일을 쓰는 법</b><br>');
  h.push('① <b>AI 초안</b>을 읽습니다. ② <b>확인 · 수정할 곳</b>을 보며 무엇이 부족한지 찾습니다. ');
  h.push('③ <b>내가 고쳐 쓴 글</b> 칸에 내 문장으로 다시 씁니다.<br>');
  h.push('채점은 ③ 만 봅니다. 초안을 그대로 두고 내면 평가 규정에 따라 해당 평가요소 최하점입니다.<br>');
  h.push('쓴 내용은 <b>이 브라우저에 자동으로 저장</b>되고, 맨 아래에서 <b>인쇄 · PDF 저장</b>을 할 수 있습니다.</div>');

  // ---- 항목 ----
  var 목록 = [];
  if (항목들 && 항목들.length) {
    항목들.forEach(function (it, n) {
      목록.push(it.제목);
      h.push('<section>');
      h.push('<h2>' + 벗기기_(it.제목) + '</h2>');
      if (it.초안.length) {
        h.push('<div class="draft"><span class="tag">' + 벗기기_(초안표) + '</span>');
        it.초안.forEach(function (l) { h.push('<p>' + 벗기기_(l) + '</p>'); });
        h.push('</div>');
      }
      if (it.점검.length) {
        h.push('<div class="check"><span class="tag">' + 벗기기_(점검표) + '</span><ul>');
        it.점검.forEach(function (l) { h.push('<li>' + 벗기기_(l.replace(/^·\s*/, '')) + '</li>'); });
        h.push('</ul></div>');
      }
      h.push('<div class="mine"><span class="tag">' + 벗기기_(내글표) + '</span>');
      h.push('<textarea id="mine' + n + '" data-save="mine' + n + '" placeholder="여기에 내 문장으로 다시 쓰세요"></textarea></div>');
      h.push('</section>');
    });
  } else {
    spec.항목.forEach(function (it, n) {
      목록.push(it.번호 + '. ' + it.제목);
      h.push('<section><h2>' + 벗기기_(it.번호 + '. ' + it.제목) + '</h2>');
      if (모양.guide !== false) h.push('<p class="note">' + 벗기기_(it.배점 + ' · ' + it.안내) + '</p>');
      (it.칸 || []).forEach(function (q) { h.push('<p class="note">▸ ' + 벗기기_(q) + '</p>'); });
      h.push('<div class="mine"><span class="tag">' + 벗기기_(내글표) + '</span>');
      h.push('<textarea id="mine' + n + '" data-save="mine' + n + '"></textarea></div></section>');
    });
  }

  // ---- 실행 도구 ----
  if (실측있음) h.push(시뮬레이터_(목록));

  // ---- 맨 아래 ----
  h.push('<div class="bar">');
  h.push('<button onclick="window.print()">인쇄 · PDF로 저장</button>');
  h.push('<button class="ghost" id="zap">입력 모두 지우기</button>');
  h.push('<span class="saved" id="saved"></span></div>');

  h.push('</div>' + 저장스크립트_() + '</body></html>');

  var 파일 = DriveApp.createFile(이름 + '.html', h.join('\n'), MimeType.HTML);
  return 파일.getId();
}


/** HTML 에 그대로 넣어도 되도록 꺾쇠와 & 를 바꾼다 */
function 벗기기_(t) {
  return String(t == null ? '' : t)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}


/** 파일 안에 넣을 탐색 시뮬레이터 + 실측 실험 */
function 시뮬레이터_(목록) {
  var h = [];
  h.push('<section class="sim">');
  h.push('<h2>실행 도구 — 여기서 직접 돌리세요</h2>');
  h.push('<p class="note">제미나이에게 받은 <b>data</b> 와 <b>target</b> 을 넣고 실행하면, ');
  h.push('단계별 과정과 비교 횟수가 나옵니다. 그 결과를 아래 버튼으로 항목에 바로 옮길 수 있습니다.</p>');

  h.push('<div class="sim-ctrl">');
  h.push('<div class="row"><div>');
  h.push('<label><b>data</b> — 쉼표로 구분</label>');
  h.push('<input id="d-data" value="난쟁이가 쏘아올린 작은 공, 데미안, 토지, 어린 왕자, 모비딕, 1984, 동물농장, 위대한 개츠비, 삼국지, 파우스트, 죄와 벌, 광장, 페스트, 자기 앞의 생, 싯다르타, 이방인, 호밀밭의 파수꾼, 백년의 고독, 노인과 바다, 수레바퀴 아래서">');
  h.push('</div></div>');
  h.push('<div class="row">');
  h.push('<div><label><b>target</b> — 찾을 값</label><input id="d-t" value="싯다르타"></div>');
  h.push('<div><label><b>없는 값</b> — 두 번째 실행용</label><input id="d-x" value="해리 포터와 마법사의 돌"></div>');
  h.push('</div>');
  h.push('<button id="run">두 방법으로 실행</button>');
  h.push('<button class="ghost" id="runx">없는 값으로 실행</button>');
  h.push('</div>');

  h.push('<div id="simout"></div>');

  h.push('<h2 style="margin-top:24px">자료를 키워 가며 비교 횟수 재기</h2>');
  h.push('<p class="note">10개부터 100만 개까지 늘려 가며 <b>실제로 측정</b>합니다. 몇 초 걸립니다.</p>');
  h.push('<button id="bench" class="sim-ctrl">실측 실험 실행</button>');
  h.push('<div id="benchout"></div>');

  h.push('<div class="sim-ctrl" style="margin-top:16px">');
  h.push('<label>위 결과를 어느 항목에 넣을까요?</label>');
  h.push('<select id="target-sec" style="width:100%;padding:9px 11px;border:1px solid #c8d5d1;border-radius:5px;font-family:inherit">');
  목록.forEach(function (t, n) {
    h.push('<option value="mine' + n + '">' + 벗기기_(t) + '</option>');
  });
  h.push('</select>');
  h.push('<button id="push" style="margin-top:8px">이 결과를 그 항목에 붙여넣기</button>');
  h.push('<p class="note">붙여넣은 뒤 <b>반드시 내 문장으로 해석을 덧붙이세요.</b> 숫자만 있으면 점수가 오르지 않습니다.</p>');
  h.push('</div>');

  h.push('</section>');
  return h.join('\n');
}


/** 파일 안에서 도는 스크립트 — 자동 저장과 시뮬레이터 */
function 저장스크립트_() {
  var j = [];
  j.push('<script>');
  j.push('(function(){');
  j.push('  var KEY = "ds-report-" + location.pathname;');
  j.push('  var 칸 = [].slice.call(document.querySelectorAll("[data-save]"));');
  j.push('  var 알림 = document.getElementById("saved");');
  j.push('  function 불러오기(){ try{ var v = JSON.parse(localStorage.getItem(KEY)||"{}");');
  j.push('    칸.forEach(function(t){ if(v[t.dataset.save]) t.value = v[t.dataset.save]; }); }catch(e){} }');
  j.push('  function 저장(){ try{ var v={}; 칸.forEach(function(t){ v[t.dataset.save]=t.value; });');
  j.push('    localStorage.setItem(KEY, JSON.stringify(v));');
  j.push('    if(알림){ 알림.textContent="저장됨"; setTimeout(function(){알림.textContent="";},1200);} }catch(e){} }');
  j.push('  칸.forEach(function(t){ t.addEventListener("input", 저장); });');
  j.push('  불러오기();');
  j.push('  var z = document.getElementById("zap");');
  j.push('  if(z) z.addEventListener("click", function(){');
  j.push('    if(!confirm("쓴 내용을 모두 지웁니다. 괜찮습니까?")) return;');
  j.push('    칸.forEach(function(t){ t.value=""; }); 저장(); });');
  j.push('');
  j.push('  var 마지막 = "";');
  j.push('  function 값들(){ return document.getElementById("d-data").value.split(",")');
  j.push('    .map(function(x){return x.trim();}).filter(function(x){return x;}); }');
  j.push('');
  j.push('  function 순차(a, t){ var 줄=[], n=0;');
  j.push('    for(var i=0;i<a.length;i++){ n++;');
  j.push('      줄.push("  "+n+"단계 | 비교: "+a[i]+" | 남은 범위: "+(a.length-i-1)+"개"+(a[i]===t?"  -> 찾음!":"  -> 다름"));');
  j.push('      if(a[i]===t) return {줄:줄, 수:n, 찾음:true, 위치:i}; }');
  j.push('    return {줄:줄, 수:n, 찾음:false}; }');
  j.push('');
  j.push('  function 이진(a, t){ var b=a.slice().sort(), lo=0, hi=b.length-1, n=0, 줄=[];');
  j.push('    while(lo<=hi){ var m=Math.floor((lo+hi)/2); n++;');
  j.push('      var 말 = "  "+n+"단계 | 범위 ["+lo+"~"+hi+"] ("+(hi-lo+1)+"개) | 가운데 ["+m+"] "+b[m];');
  j.push('      if(b[m]===t){ 줄.push(말+"  -> 찾음!"); return {줄:줄, 수:n, 찾음:true, 위치:m, 정렬:b}; }');
  j.push('      if(b[m]<t){ 줄.push(말+"  -> 오른쪽 절반만 남김"); lo=m+1; }');
  j.push('      else { 줄.push(말+"  -> 왼쪽 절반만 남김"); hi=m-1; } }');
  j.push('    return {줄:줄, 수:n, 찾음:false, 정렬:b}; }');
  j.push('');
  j.push('  function 돌리기(t){ var a=값들();');
  j.push('    if(a.length<2){ alert("data 를 두 개 이상 넣어 주세요."); return; }');
  j.push('    var s=순차(a,t), b=이진(a,t);');
  j.push('    var 글 = "[순차 탐색] \'"+t+"\' 찾기 - 전체 "+a.length+"개\\n\\n"+s.줄.join("\\n")');
  j.push('      + "\\n\\n결과: "+(s.찾음?("위치 "+s.위치+"번, "):"자료에 없음, ")+"비교 횟수 "+s.수+"번"');
  j.push('      + "\\n\\n[이진 탐색] \'"+t+"\' 찾기 - 전체 "+a.length+"개\\n\\n"+b.줄.join("\\n")');
  j.push('      + "\\n\\n결과: "+(b.찾음?("위치 "+b.위치+"번, "):"자료에 없음, ")+"비교 횟수 "+b.수+"번";');
  j.push('    마지막 = 글;');
  j.push('    var 표 = "<table><tr><th>단계</th><th>비교한 값</th><th>남은 탐색 범위</th><th>판단</th></tr>";');
  j.push('    b.줄.forEach(function(l,i){ var mm=l.match(/가운데 \\[(\\d+)\\] (.*?)  -> (.*)$/);');
  j.push('      var rr=l.match(/범위 \\[(\\d+~\\d+)\\] \\((\\d+개)\\)/);');
  j.push('      표 += "<tr><td>"+(i+1)+"</td><td>"+(mm?mm[2]:"")+"</td><td>"+(rr?rr[1]+" ("+rr[2]+")":"")+"</td><td>"+(mm?mm[3]:"")+"</td></tr>"; });');
  j.push('    표 += "</table>";');
  j.push('    document.getElementById("simout").innerHTML =');
  j.push('      "<div class=\'out\'>"+글.replace(/&/g,"&amp;").replace(/</g,"&lt;")+"</div>"');
  j.push('      + "<p class=\'note\'>이진 탐색 과정을 표로 정리하면</p>" + 표; }');
  j.push('');
  j.push('  document.getElementById("run").addEventListener("click", function(){ 돌리기(document.getElementById("d-t").value.trim()); });');
  j.push('  document.getElementById("runx").addEventListener("click", function(){ 돌리기(document.getElementById("d-x").value.trim()); });');
  j.push('');
  j.push('  document.getElementById("bench").addEventListener("click", function(){');
  j.push('    var b=this; b.disabled=true; b.textContent="재는 중...";');
  j.push('    setTimeout(function(){');
  j.push('      var 크기=[10,100,1000,10000,100000,1000000], 표="<table><tr><th>자료 크기 n</th><th>순차 탐색 평균</th><th>이진 탐색 평균</th><th>몇 배 차이</th><th>log2(n)</th></tr>";');
  j.push('      var 글="자료 크기 | 순차 | 이진 | 몇 배 | log2(n)";');
  j.push('      크기.forEach(function(n){ var arr=[]; for(var i=0;i<n;i++) arr.push(i);');
  j.push('        var sT=0,bT=0,R=20;');
  j.push('        for(var k=0;k<R;k++){ var t=Math.floor(Math.random()*n);');
  j.push('          sT += t+1;');
  j.push('          var lo=0,hi=n-1,cnt=0; while(lo<=hi){ var m=Math.floor((lo+hi)/2); cnt++;');
  j.push('            if(arr[m]===t) break; else if(arr[m]<t) lo=m+1; else hi=m-1; } bT+=cnt; }');
  j.push('        var s=Math.round(sT/R), bb=Math.round(bT/R), r=(s/bb).toFixed(1), lg=(Math.log(n)/Math.LN2).toFixed(1);');
  j.push('        표 += "<tr><td>"+n.toLocaleString()+"</td><td>"+s.toLocaleString()+"</td><td>"+bb+"</td><td>"+r+"배</td><td>"+lg+"</td></tr>";');
  j.push('        글 += "\\n"+n.toLocaleString()+" | "+s.toLocaleString()+" | "+bb+" | "+r+"배 | "+lg; });');
  j.push('      표 += "</table>";');
  j.push('      document.getElementById("benchout").innerHTML = 표 + "<p class=\'note\'>이진 탐색 비교 횟수와 log2(n) 이 거의 같은지 보세요.</p>";');
  j.push('      마지막 = 글;');
  j.push('      b.disabled=false; b.textContent="실측 실험 실행"; }, 30); });');
  j.push('');
  j.push('  document.getElementById("push").addEventListener("click", function(){');
  j.push('    if(!마지막){ alert("먼저 실행해 주세요."); return; }');
  j.push('    var id=document.getElementById("target-sec").value, t=document.getElementById(id);');
  j.push('    if(!t) return;');
  j.push('    t.value = (t.value ? t.value+"\\n\\n" : "") + 마지막;');
  j.push('    t.dispatchEvent(new Event("input"));');
  j.push('    t.scrollIntoView({behavior:"smooth", block:"center"}); });');
  j.push('})();');
  j.push('<' + '/script>');
  return j.join('\n');
}

/* =====================================================================
   구글 슬라이드 만들기
   ===================================================================== */

function 슬라이드_(spec, 이름, info, 모양, 조각) {
  var pres = SlidesApp.create(이름);
  var c = 테마[모양.theme] || 테마.teal;
  var ff = 글꼴이름[모양.font] || 글꼴이름['본고딕'];
  var 본문크기 = (모양.size === '크게') ? 16 : 14;

  // ---- 표지 ----
  var 표지 = pres.getSlides()[0];
  if (모양.cover !== false) {
    글넣기_(표지, SlidesApp.PlaceholderType.CENTERED_TITLE, spec.제목, ff, c.큰제목);
    글넣기_(표지, SlidesApp.PlaceholderType.SUBTITLE,
            spec.부제 + '\n' + 머리글_(info), ff, c.안내);
  } else {
    표지.remove();
  }

  /** 장표 한 장 만들기 */
  function 장(제목, 줄들, 제목색) {
    var sl = pres.appendSlide(SlidesApp.PredefinedLayout.TITLE_AND_BODY);
    글넣기_(sl, SlidesApp.PlaceholderType.TITLE, 제목, ff, 제목색 || c.큰제목);
    글넣기_(sl, SlidesApp.PlaceholderType.BODY, 줄들.join('\n'), ff, null, 본문크기);
    return sl;
  }

  var 항목들 = (조각 && 조각.틀) ? 항목쪼개기_(조각.틀) : null;

  // ---- 쓰는 법 ----
  if (항목들 && 항목들.length) {
    장('이 장표를 쓰는 법', [
      '① 「AI 초안」 장을 읽는다',
      '② 「확인 · 수정할 곳」 을 보며 무엇이 부족한지 찾는다',
      '③ 「내가 고쳐 쓴 글」 장에 내 문장으로 다시 쓴다',
      '',
      '채점은 ③ 만 봅니다.',
      '초안을 그대로 두고 내면 평가 규정에 따라 해당 평가요소 최하점입니다.',
      '다 고친 뒤 「AI 초안」 장은 지워도 됩니다.'
    ], c.안내);
  }

  // ---- 항목마다 두 장 ----
  if (항목들 && 항목들.length) {
    항목들.forEach(function (it) {
      var 초안 = it.초안.length ? it.초안 : ['(초안이 없습니다)'];
      묶기_(초안, 9).forEach(function (덩어리, n) {
        장(it.제목 + '  —  AI 초안' + (n ? ' (이어서)' : ''), 덩어리, c.안내);
      });

      var 뒤 = [];
      if (it.점검.length) {
        뒤.push('[ 확인 · 수정할 곳 ]');
        it.점검.forEach(function (l) { 뒤.push(l); });
        뒤.push('');
      }
      뒤.push('[ 내가 고쳐 쓴 글 — 채점 대상 ]');
      뒤.push(장표빈칸);
      뒤.push('');
      뒤.push('');
      장(it.제목 + '  —  내가 고쳐 쓸 곳', 뒤, c.큰제목);
    });
  } else {
    기본장_(spec, 모양).forEach(function (x) { 장(x.제목, x.내용); });
  }

  // ---- 참고 재료 ----
  if (모양.material !== false && 조각 && 조각.재료 && 조각.재료.length) {
    var 재료 = 조각.재료.map(다듬은줄_).filter(function (l) { return l !== ''; });
    묶기_(재료, 11).forEach(function (덩어리, n) {
      장('참고 재료 ' + (n + 1) + '  ·  제출 전 삭제', 덩어리, c.안내);
    });
  }

  pres.saveAndClose();
  return pres.getId();
}


/**
 * 붙여넣은 답안을 항목별로 쪼갠다.
 *   { 제목: '1. …', 초안: [줄], 점검: [줄] }
 * ### 초안 / ### 확인·수정할 곳 을 나눠 담고, 없으면 전부 초안으로 본다.
 */
function 항목쪼개기_(줄들) {
  var 항목 = [], 지금 = null, 칸 = '초안', 코드중 = false;

  줄들.forEach(function (raw) {
    var t = raw.trim();

    if (/^```/.test(t)) { 코드중 = !코드중; return; }
    if (코드중) { if (지금 && t) 지금[칸].push(t); return; }

    if (t.indexOf('## ') === 0) {
      지금 = { 제목: t.substring(3).trim(), 초안: [], 점검: [] };
      항목.push(지금);
      칸 = '초안';
      return;
    }
    if (t.indexOf('# ') === 0) return;      // 보고서 제목은 표지에 있다
    if (!지금) return;

    if (t.indexOf('### ') === 0) {
      칸 = /확인|수정/.test(t) ? '점검' : '초안';
      return;
    }
    if (!t) return;

    var 줄 = 다듬은줄_(t);
    if (줄) 지금[칸].push(줄);
  });

  return 항목;
}


/** 장표에 넣기 좋게 기호를 다듬는다. 버릴 줄이면 빈 문자열을 준다. */
function 다듬은줄_(raw) {
  var t = String(raw).trim();
  if (!t) return '';

  var 칸 = 표줄_(t);
  if (칸) {
    if (구분줄_(칸)) return '';
    var 값 = 칸.filter(function (x) { return x; });
    return 값.length ? '· ' + 값.join('   |   ') : '';
  }

  if (/^-{3,}$/.test(t)) return '';
  if (/^#{1,6}\s/.test(t)) return t.replace(/^#{1,6}\s+/, '');
  if (t.indexOf('- ') === 0 || t.indexOf('· ') === 0) return '· ' + t.substring(2).trim();
  if (t.indexOf('> ') === 0) return t.substring(2).trim();
  return t;
}


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

function 글넣기_(slide, type, text, ff, color, size) {
  var ph = slide.getPlaceholder(type);
  if (!ph) return;
  var tr = ph.asShape().getText();
  tr.setText(text);
  try {
    var st = tr.getTextStyle();
    st.setFontFamily(ff);
    if (color) st.setForegroundColor(color);
    if (size) st.setFontSize(size);
  } catch (e) { /* 글꼴·크기를 못 바꿔도 넘어간다 */ }
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
'   <button data-v="html">HTML 파일 (코드·시뮬레이터 포함)</button>',
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
'      if (r.html) {',
'        a.href = r.download; a.textContent = "HTML 파일 내려받기";',
'        var tip = document.createElement("div");',
'        tip.style.marginTop = "8px"; tip.style.fontSize = "12.5px";',
'        tip.textContent = "내려받은 파일을 두 번 누르면 브라우저에서 열립니다. "',
'          + "그 안에서 코드를 돌리고 글을 쓰면 됩니다. 드라이브에도 같이 저장돼 있습니다.";',
'        m.appendChild(a); m.appendChild(tip);',
'      } else {',
'        a.href = r.url; a.target = "_blank"; a.rel = "noopener";',
'        a.textContent = "여기를 눌러 문서 열기";',
'        m.appendChild(a);',
'        window.open(r.url, "_blank");',
'      }',
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

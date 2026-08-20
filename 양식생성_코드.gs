/**
 * 자료구조 수행평가 양식 생성기  v1
 * 조선대학교부속고등학교 · 2026학년도 2학기 · 3학년 「자료구조」
 *
 * 학생이 주소를 열고 반·번호·이름만 넣으면
 * 자기 구글 드라이브에 «빈 양식» 문서(또는 슬라이드)가 만들어집니다.
 *
 *   · 수행평가 1  비선형구조-알고리즘 연결고리 발견하기 (정렬 알고리즘 설계)
 *   · 수행평가 2  탐색 알고리즘 설계
 *
 * 내용은 하나도 채워 주지 않습니다. 채워 주면 평가 규정 위반입니다.
 * 학생이 【      】 자리에 직접 씁니다.
 *
 * 쓰는 법은 같은 폴더의 «양식생성_안내.md» 를 보세요.
 */

// 만들어진 문서를 담을 드라이브 폴더 이름. 없으면 자동으로 만들어집니다.
var 폴더이름 = '자료구조 수행평가';

// 만든 문서를 선생님에게 자동으로 공유하려면 이메일을 적으세요.
// 비워 두면 공유하지 않습니다. (학생이 링크를 직접 제출하는 방식이면 비워 두세요.)
var 교사이메일 = '';

// 학생 페이지가 이 번호로 «코드가 최신인지» 확인합니다.
var VER = 1;

var 빈칸 = '【                                                            】';


/* =====================================================================
   양식 정의 — 여기만 고치면 문서 모양이 바뀝니다
   ===================================================================== */

var 양식 = {

  '1': {
    이름표: '수행평가 1',
    제목: '비선형구조-알고리즘 연결고리 발견하기',
    부제: '수행평가 1 · 정렬 알고리즘 설계 · 100점',
    항목: [
      {
        번호: '1', 제목: '탐구 주제 명칭 및 선정 이유', 배점: '평가요소 ① · 10점',
        안내: '서비스 이름만 적으면 낮은 점수입니다. 그 서비스 안에서 해결해야 할 자료 처리 문제를 한 문장으로 특정하세요.',
        칸: ['탐구 주제 명칭',
             '선정 이유 — 이 서비스 안에서 해결해야 할 자료 처리 문제는 무엇인가']
      },
      {
        번호: '2', 제목: '자료구조 비교 및 추상화 분석', 배점: '평가요소 ②③ · 30점',
        안내: '한계를 «불편하다·느리다»로 쓰면 낮은 점수입니다. 탐색 비용 / 관계 표현의 불가능성 / 삽입·삭제 비용 중 두 가지 이상을 근거로 드세요.',
        칸: ['선형구조와의 차별성 — 배열·리스트로 처리하면 무엇이 한계인가 (근거 두 가지 이상)',
             '고른 비선형 구조 — 트리 / 그래프 중 무엇이며 왜 그런가',
             '노드(정점)는 무엇을 뜻하는가',
             '간선(엣지)은 무엇을 뜻하는가 — 가중치와 방향이 필요한가, 그 이유는']
      },
      {
        번호: '3', 제목: '탐색 및 알고리즘 적용 시나리오', 배점: '평가요소 ④ · 15점',
        안내: '알고리즘 이름만 적으면 낮은 점수입니다. «왜 다른 방식이 아니라 이것인가»에 답하세요.',
        칸: ['고른 탐색 방법 — BFS / DFS / 최단 경로 등',
             '왜 이 방법인가 — 다른 방식과 비교해서']
      },
      {
        번호: '4', 제목: '데이터 정렬 및 최적화 아이디어 제안', 배점: '평가요소 ⑤⑥ · 45점 · 가장 중요',
        안내: '이 수행평가의 영역명이 «정렬 알고리즘 설계»입니다. 45점이 걸려 있으니 여기에 힘을 쏟으세요.',
        칸: ['1차 정렬 기준 — 무엇을 기준으로 줄 세우는가',
             '2차 정렬 기준 — 1차 기준이 같을 때는 무엇으로 순서를 정하는가 (20점 항목)',
             '고른 정렬 알고리즘과 그 평균·최악 시간 복잡도 (25점 항목)',
             '왜 이 데이터에 이 알고리즘이 맞는가 — 자료의 크기와 특성을 근거로',
             '상위 몇 개만 필요하다면 전체를 정렬할 필요가 있는가']
      },
      {
        번호: '5', 제목: '참고 자료와 인공지능 활용 기록', 배점: '반드시 작성',
        안내: '적으면 감점되지 않고, 없으면 감점됩니다. 두세 줄이면 충분합니다.',
        칸: ['참고 자료 — 교과서·수업 자료·그 밖의 자료 (제목·출처·확인한 날짜)',
             '인공지능 활용 기록 — 어떤 도구를, 어느 항목에, 무엇을 얻어 어떻게 고쳐 썼는지 (쓰지 않았다면 «활용하지 않음»)']
      }
    ]
  },

  '2': {
    이름표: '수행평가 2',
    제목: '탐색 알고리즘 설계',
    부제: '수행평가 2 · 탐색 알고리즘 설계 · 100점',
    항목: [
      {
        번호: '1', 제목: '탐구 주제 명칭 및 자료의 특성 분석', 배점: '평가요소 ① · 15점',
        안내: '무엇을 키로 삼아 무엇을 찾는지 한 문장으로 특정하고, 자료의 규모와 정렬 여부를 근거로 자료 구조를 고르세요.',
        칸: ['탐구 주제 명칭 및 선정 이유',
             '무엇을 키(key)로 삼아 무엇을 찾는가',
             '자료가 대략 몇 건인가',
             '미리 정렬되어 있는가 / 정렬할 수 있는가',
             '자주 추가·삭제되는가',
             '고른 자료 구조 — 배열·리스트 / 이진 탐색 트리 / 해시 테이블 중 무엇이며 왜 그런가']
      },
      {
        번호: '2', 제목: '탐색 방법 선택 및 근거', 배점: '평가요소 ② · 25점',
        안내: '«이진 탐색을 쓴다»로 끝내면 절반도 못 받습니다. 정렬에 드는 비용까지 따지면 최상위 수준입니다.',
        칸: ['고른 탐색 방법 — 순차 탐색 / 이진 탐색 / 해싱',
             '왜 다른 방법이 아니라 이 방법인가 — 정렬 여부·규모·추가삭제 빈도를 근거로',
             '정렬하는 비용까지 따지면 어떤가 — 몇 번이나 찾을 것인지와 함께']
      },
      {
        번호: '3', 제목: '코드 실행 및 시뮬레이션', 배점: '평가요소 ③ · 25점',
        안내: '실행 결과 없이 표만 있으면 상위 수준으로 못 갑니다. 자료에 없는 값까지 실행해야 만점입니다.',
        칸: ['코드 A(순차 탐색) 실행 결과 — 출력 화면을 그대로 붙여넣기',
             '코드 B(이진 탐색) 실행 결과 — 출력 화면을 그대로 붙여넣기',
             '자료에 없는 값으로 실행한 결과 — 두 코드 모두'],
        표: {
          이름: '탐색 과정 표',
          머리글: ['단계', '비교한 값', '남은 탐색 범위', '판단'],
          줄수: 6
        }
      },
      {
        번호: '4', 제목: '실행 결과로 확인한 효율', 배점: '평가요소 ④ · 25점',
        안내: '«더 빠르다»가 아니라 실측한 숫자로 쓰세요. 이진 탐색의 비교 횟수가 log2(n)과 거의 같다는 것을 확인하면 최상위 수준입니다.',
        표: {
          이름: '코드 C 실측 결과 표',
          머리글: ['자료 크기 n', '순차 탐색 평균', '이진 탐색 평균', '몇 배 차이', 'log2(n) 이론값'],
          줄: [['10', '', '', '', '3.3'],
               ['100', '', '', '', '6.6'],
               ['1,000', '', '', '', '10.0'],
               ['10,000', '', '', '', '13.3'],
               ['100,000', '', '', '', '16.6'],
               ['1,000,000', '', '', '', '19.9']]
        },
        칸: ['내가 고른 방법의 최선·평균·최악 시간 복잡도는 각각 어떤 상황인가 (내 주제로 예를 들어)',
             '이론적인 시간 복잡도와 실제 실행 결과가 일치하는가 — 이진 탐색 비교 횟수와 log2(n)을 견주어',
             '자료가 커질 때 무엇을 선택해야 하는가 — 판단 기준을 제시']
      },
      {
        번호: '5', 제목: '참고 자료 출처와 인공지능 활용 기록', 배점: '평가요소 ⑤ · 10점',
        안내: '적으면 10점, 없으면 감점입니다. 두세 줄이면 충분합니다.',
        칸: ['참고 자료 — 교과서·수업 자료·그 밖의 자료 (제목·출처·확인한 날짜)',
             '인공지능 활용 기록 — 어떤 도구를, 어느 항목에, 무엇을 얻어 어떻게 고쳐 썼는지',
             '실습 데이터를 인공지능으로 만들었다면 그 사실도 (쓰지 않았다면 «활용하지 않음»)']
      }
    ]
  }
};


/* =====================================================================
   학생이 보는 화면
   ===================================================================== */

function doGet() {
  return HtmlService.createHtmlOutput(화면_())
    .setTitle('자료구조 수행평가 양식 만들기')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

function 화면_() {
  return [
    '<style>',
    ' body{font-family:"Malgun Gothic","맑은 고딕",system-ui,sans-serif;',
    '   background:#f6f8f7;color:#12211f;margin:0;padding:26px 18px;line-height:1.7}',
    ' .box{max-width:520px;margin:0 auto;background:#fff;border:1px solid #dfe6e3;',
    '   border-radius:8px;padding:26px 26px 30px}',
    ' h1{font-size:19px;margin:0 0 6px}',
    ' .sub{font-size:13px;color:#5d716e;margin:0 0 22px}',
    ' label{display:block;font-size:13.5px;font-weight:700;margin:14px 0 5px}',
    ' input,select{width:100%;box-sizing:border-box;font-size:15px;padding:9px 11px;',
    '   border:1px solid #c8d5d1;border-radius:5px;font-family:inherit}',
    ' input:focus,select:focus{outline:2px solid #0c7d71;border-color:#0c7d71}',
    ' .row{display:flex;gap:10px}.row>div{flex:1}',
    ' button{margin-top:22px;width:100%;font-family:inherit;font-size:15.5px;font-weight:700;',
    '   color:#fff;background:#0c7d71;border:0;border-radius:5px;padding:13px;cursor:pointer}',
    ' button:disabled{background:#9db5b1;cursor:default}',
    ' .msg{margin-top:18px;font-size:14px;padding:13px 15px;border-radius:6px;display:none}',
    ' .msg.ok{display:block;background:#e4f3ef;border-left:3px solid #0c7d71}',
    ' .msg.no{display:block;background:#fdecea;border-left:3px solid #9d2418;color:#9d2418}',
    ' .msg a{color:#0c7d71;font-weight:700}',
    ' .note{margin-top:20px;font-size:12.5px;color:#5d716e;border-top:1px solid #eef2f0;padding-top:14px}',
    '</style>',

    '<div class="box">',
    ' <h1>자료구조 수행평가 양식 만들기</h1>',
    ' <p class="sub">아래를 채우고 누르면 <b>내 구글 드라이브</b>에 빈 양식이 만들어집니다.</p>',

    ' <label for="task">어느 수행평가인가요?</label>',
    ' <select id="task">',
    '  <option value="2">수행평가 2 · 탐색 알고리즘 설계</option>',
    '  <option value="1">수행평가 1 · 정렬 알고리즘 설계</option>',
    ' </select>',

    ' <label for="kind">어떤 형태로 만들까요?</label>',
    ' <select id="kind">',
    '  <option value="doc">구글 문서 (글로 쓰기)</option>',
    '  <option value="slide">구글 슬라이드 (장표로 만들기)</option>',
    ' </select>',

    ' <div class="row">',
    '  <div><label for="cls">반</label><input id="cls" type="text" placeholder="예 3"></div>',
    '  <div><label for="no">번호</label><input id="no" type="text" placeholder="예 7"></div>',
    ' </div>',
    ' <label for="name">이름</label>',
    ' <input id="name" type="text" placeholder="예 김서연">',

    ' <button id="go">양식 만들기</button>',
    ' <div class="msg" id="msg"></div>',

    ' <p class="note">내용은 하나도 채워지지 않습니다. 【 】 자리에 <b>직접</b> 써야 합니다.<br>',
    '  처음 한 번은 구글이 «권한 허용»을 물어봅니다. 학교 계정으로 허용하면 됩니다.</p>',
    '</div>',

    '<script>',
    'var $ = function (id) { return document.getElementById(id); };',
    '',
    '$("go").addEventListener("click", function () {',
    '  var m = $("msg"), b = $("go");',
    '  var name = $("name").value.trim();',
    '  if (!name) { m.className = "msg no"; m.textContent = "이름을 넣어 주세요."; return; }',
    '',
    '  b.disabled = true; b.textContent = "만드는 중...";',
    '  m.className = "msg ok"; m.textContent = "잠시만 기다려 주세요. 10초쯤 걸립니다.";',
    '',
    '  google.script.run',
    '    .withSuccessHandler(function (r) {',
    '      b.disabled = false; b.textContent = "양식 만들기";',
    '      if (!r || !r.ok) { m.className = "msg no"; m.textContent = (r && r.error) || "알 수 없는 오류"; return; }',
    '      m.className = "msg ok";',
    '      var a = document.createElement("a");',
    '      a.href = r.url; a.target = "_blank"; a.rel = "noopener";',
    '      a.textContent = "여기를 눌러 문서 열기";',
    '      m.textContent = "";',
    '      var t = document.createElement("div");',
    '      t.innerHTML = "<b>만들어졌습니다.</b><br>";',
    '      var n = document.createElement("div");',
    '      n.textContent = r.name;',
    '      m.appendChild(t); m.appendChild(n); m.appendChild(document.createElement("br")); m.appendChild(a);',
    '      window.open(r.url, "_blank");',
    '    })',
    '    .withFailureHandler(function (e) {',
    '      b.disabled = false; b.textContent = "양식 만들기";',
    '      m.className = "msg no"; m.textContent = "오류: " + e.message;',
    '    })',
    '    .makeForm({',
    '      task: $("task").value,',
    '      kind: $("kind").value,',
    '      cls:  $("cls").value.trim(),',
    '      no:   $("no").value.trim(),',
    '      name: name',
    '    });',
    '});',
    '</script>'
  ].join('\n');
}


/* =====================================================================
   만들기 — 화면에서 부르는 함수
   ===================================================================== */

function makeForm(info) {
  try {
    var spec = 양식[String(info.task)];
    if (!spec) return { ok: false, error: '수행평가 번호가 잘못되었습니다.' };

    var 이름 = 파일이름_(info, spec);
    var id = (info.kind === 'slide')
      ? 슬라이드만들기_(spec, 이름, info)
      : 문서만들기_(spec, 이름, info);

    var f = DriveApp.getFileById(id);
    try { f.moveTo(폴더_()); } catch (e) { /* 이동 실패해도 문서는 만들어져 있다 */ }
    if (교사이메일) {
      try { f.addEditor(교사이메일); } catch (e) { /* 공유 실패는 넘어간다 */ }
    }

    return { ok: true, url: f.getUrl(), name: 이름 };

  } catch (err) {
    return { ok: false, error: String(err) };
  }
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


/** 구글 문서로 만들기 — 문서 id 를 돌려준다 */
function 문서만들기_(spec, 이름, info) {
  var doc = DocumentApp.create(이름);
  var body = doc.getBody();
  body.clear();

  body.appendParagraph(spec.제목).setHeading(DocumentApp.ParagraphHeading.TITLE);
  body.appendParagraph(spec.부제).setHeading(DocumentApp.ParagraphHeading.SUBTITLE);
  body.appendParagraph(머리글_(info));
  body.appendParagraph('');

  spec.항목.forEach(function (it) {
    body.appendParagraph(it.번호 + '. ' + it.제목)
        .setHeading(DocumentApp.ParagraphHeading.HEADING1);

    body.appendParagraph(it.배점 + '   ·   ' + it.안내)
        .setForegroundColor('#6a8a8a')
        .setItalic(true);

    (it.칸 || []).forEach(function (q) {
      body.appendParagraph('▸ ' + q).setHeading(DocumentApp.ParagraphHeading.HEADING3);
      body.appendParagraph(빈칸).setForegroundColor('#b6c4c2');
    });

    if (it.표) {
      body.appendParagraph('[' + it.표.이름 + ']').setBold(true);
      var 값 = [it.표.머리글];
      if (it.표.줄) {
        it.표.줄.forEach(function (r) { 값.push(r); });
      } else {
        for (var i = 0; i < it.표.줄수; i++) {
          값.push(it.표.머리글.map(function () { return ''; }));
        }
      }
      var t = body.appendTable(값);
      t.getRow(0).editAsText().setBold(true);
    }

    body.appendParagraph('');
  });

  body.appendParagraph('— 여기까지 —').setForegroundColor('#b6c4c2');
  doc.saveAndClose();
  return doc.getId();
}


/** 구글 슬라이드로 만들기 — 항목 하나에 장표 한 장. 프레젠테이션 id 를 돌려준다 */
function 슬라이드만들기_(spec, 이름, info) {
  var pres = SlidesApp.create(이름);

  var 표지 = pres.getSlides()[0];
  글넣기_(표지, SlidesApp.PlaceholderType.CENTERED_TITLE, spec.제목);
  글넣기_(표지, SlidesApp.PlaceholderType.SUBTITLE, spec.부제 + '\n' + 머리글_(info));

  spec.항목.forEach(function (it) {
    var s = pres.appendSlide(SlidesApp.PredefinedLayout.TITLE_AND_BODY);
    글넣기_(s, SlidesApp.PlaceholderType.TITLE, it.번호 + '. ' + it.제목);

    var 줄 = [it.배점, it.안내, ''];
    (it.칸 || []).forEach(function (q) {
      줄.push('▸ ' + q);
      줄.push('    ' + 빈칸);
    });
    if (it.표) 줄.push('▸ [' + it.표.이름 + '] — 표를 직접 넣어 채우세요');

    글넣기_(s, SlidesApp.PlaceholderType.BODY, 줄.join('\n'));
  });

  pres.saveAndClose();
  return pres.getId();
}

/** 장표의 자리표시자에 글을 넣는다. 그 자리가 없으면 조용히 넘어간다. */
function 글넣기_(slide, type, text) {
  var ph = slide.getPlaceholder(type);
  if (!ph) return;
  ph.asShape().getText().setText(text);
}

function 머리글_(info) {
  return '3학년 ' + (info.cls || '__') + '반 ' + (info.no || '__') + '번   이름 ' + (info.name || '________');
}


/** 선생님이 잘 되는지 시험할 때 이 함수를 한 번 실행해 보세요. 문서 2개, 슬라이드 1개가 만들어집니다. */
function 테스트만들기() {
  Logger.log(makeForm({ task: '1', kind: 'doc',   cls: '점검', no: '0', name: '연결확인용' }));
  Logger.log(makeForm({ task: '2', kind: 'doc',   cls: '점검', no: '0', name: '연결확인용' }));
  Logger.log(makeForm({ task: '2', kind: 'slide', cls: '점검', no: '0', name: '연결확인용' }));
}

201812

####user model: user, board, comment

####controller:boards, sessions

####gem:bootstrap, faker, kaminari, bcrypt, font-awesome

###javascript

- 이벤트(EventL click, hover, keydown, mouseup, mousedown)
- 이벤트 리스너(on)
- 이벤트 핸들러(function())

## jquery
- CSS Selector에 의한 DOM(문서 객체 모델) 탐색 및 조작
 - parant, siblong을 통해 형제 부모 DOM을 넘나들 수 있음.
- 이벤트
 - .click(.이벤트명), .on('click', function(){})(.on('이벤트명, 이벤트 핸들러'))

- AJAX(비동기)
  - rails에서 ajax
  // 1. ajax 요청 만들기
  $.ajax({
    url: , //요청 보내는 url
    method: ,
    data:
    })
    // 여기까지만하면 404 에러뜸

    // 2. 요청 보내는 url에 대한 route 설정
    // member, collection
    // config/routes.rb에서 설정
    // 여기까지만 하면 404 에러

    // 3. controller에서 route에서 설정한
    // controller#action 만들어줌
    // 여기까지하면 500 에러

    // 4. action명과 같은파일명을 가진 js.erb파일 만들어줌
    // 여기까지 정상적으로 하면 정상동작함
- onclick
- onmouseover -> .click, .

###yield, content_for

2. 이벤트, 이벤트 리스너, 이벤트 핸들러
- 이벤트 : 마우스 오버(mouseover)
- 이벤트 리스너 : onmouseover
- 이벤트 핸들러 : 복잡한 function()

#####ajax
목요일 오후시간 까지
- 좋아요(like) 넣다 뻇다
- 댓글 등록
- 댓글 삭제
- 댓글 수정
  - **내용물 클릭하면 input창으로 바뀜**
- 무한 스크롤
  - **스크롤을 끝까지 내리면 발생**
- 댓글의 댓글
 - JS가 아니라 model relation 가지고 장난치는거(힘듬)
- user email 체크
  - valitation(유효성 검사), fromt에서 1번
- password 와 password_confirmation 내용이 다를 경우
  - form이 제출 안되게 함(실습)
  - 회원가입 할 떄 중복 체크(id)
1. 이미 가입된 이메일인 경우
2. password와 password_confirmation이 서로 다를 경우
  - 비밀번호가 서로 button은 disabled 되어 있어야 함
  - 가입 가능한 이메일인 경우 && 비밀번호가 서로 같은 경우에만 button 사용할 수 있게 만들어줌
$('input').on('change', function(){
    // 이벤트 핸들러로 이름이 없는 함수가 들어가 있는 경우
  })
  // 자바 스크립트에서 함수 선언하기
  // 자바스크립트 함수를 선언할 때에는 jquery 코드인
  // $(function() {}) 이전에 선언해주는 것이 통상적
  1. function 함수명(매개변수){} // 함수 선언식 (선언하기 이전에 사용 가능)
  2. var 함수명 = function(매개변수) {} // 함수 표현식 (선언하기 전에 사용하면 undefined error 발생)

  1월 4일 실습 힌트
  var emaill = false;
  var password = false;
  1. function validation() {}
    // email과 password가 모두 true 인지 확인
    // 모두 true면 button의 disable을 삭제
    // 하나라도 틀리면 button의 disabled를 추가

  2. 우리가 만들어 놓은 on('change')의 결과로는 변수 email과 password를
     true, 혹은 false로 변경시킨 후에 validation을 실행시킴
     // ajax 안씀
금요일엔?
- bootstrap template(asset_pipeline) (이거 하기로 결정)
- (유니파이를 많이 씀)
- 카카오 봇(javascript)
- /검색 아이유
- 아이유 검색 결과는 다음과 같습니다.

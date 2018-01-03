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
- 무한 스크롤
- 회원가입 할 떄 중복 체크(id)

금요일엔?
- bootstrap template(asset_pipeline) (이거 하기로 결정)
- (유니파이를 많이 씀)
- 카카오 봇(javascript)
- /검색 아이유
- 아이유 검색 결과는 다음과 같습니다.

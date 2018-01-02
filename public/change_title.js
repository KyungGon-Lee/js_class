// alert("여기는 인덱스 페이지 입니당");
// 1. 이벤트를 넣어줄 html element를 찾고
// var => 변수선언
// var a = "haha"
// for(var i = 0; i < element.length; i++){
//
// }
var btn = document.getElementById('change-title');
console.dir(btn);
// 2. 해당 element에 원하는 이벤트를 달아준다.
btn.onclick = function(){
  // 3. 이벤트가 발생했을 경우 실행하는 함수(function())를 만들어준다.
  // alert('버튼이 눌렸습니다.');
  // 버튼을 누르면 prompt창이 떠서 입력 메시지를 입력할 수 있고,
  var title = prompt('바꿀 제목을 입력하세요.');
  console.log(title);
  // 바꿀 내용물들(html element)이 어디에 있는지 찾아야 함.
  // getElement*** -> 내용물을 1개만 가지고 온다. -> 여러개 있어도 return값은 한개
  // getElements*** -> 내용물을 여러개 가지고 온다. -> 1개만 있어도 return값은 배열
  // getElements*** 로 찾은 html element를 사용할 때에는 반복문, 혹은 [index]로 하나씩 조정
  // console.log(document.getElementById('tt')); # 부적합
  var titles = document.getElementsByClassName('title');
  for(var i = 0; i < titles.length; i++){
    // console.dir(titles[i]);
    // 해당 내용으로 모든 제목을 바꿔버립니다.
    titles[i].textContent = title;
  }
}

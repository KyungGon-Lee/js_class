// 달러표시는 J쿼리라는 뜻
// document가 준비된 이후에 보드라는 클래스를 가진 document 다 불러옴
$(document).ready(function() {
  // == $(function(){})
  $('.board').click(function() {
    // this를 JQuery 객체로 바꿔줘야 함
    location.href = '/boards/' + $(this).data('id');
  })
})
// tr에 해당하는 부분을 click하면
// var tr = document.getElementsByClassName('board')
// // ** '현재' click 한 부분의 id가 몇인지 파악해야함.
// console.dir(tr);
// for(var i = 0; i <tr.lengthl i++){
//   tr[i].onclick = function(){
//     console.dir(this);
//     var id = this.getAttribute('data-id');
//
//   }
// }
// 페이지를 이동한다.
// ** location.href = '/boards'

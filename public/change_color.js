// 세개의 버튼html element를 찾아서
var btns = document.querySelectorAll('.color-btn');
// console.log(btns);
// 각각의 버튼에 해당하는 색상을 정하고.
// 빨강 -> text-danger
// 파랑 -> text-primary
// 노랑 -> text-warning
// 버튼 하나에 마우스를 올렸을 때.
for(var i = 0; i < btns.length; i++){
  console.dir(btns[i]);
  btns[i].onmouseover = function(){
    // console.dir(this);
    var color = this.getAttribute('haha');
    var table = document.getElementsByTagName('table')[0];
    console.log(table);
    // 각각의 정해진 색상 class를 table에 넣어준다.
    table.setAttribute('class', "table table-hover " + color);
    // 호버 뒤에 스페이스 하나 줘야됨!
  }
}

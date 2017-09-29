var potos = [
   "http://cmsimg.mnet.com/clipimage/vod/327_184/000/187/187173.jpg",
   "http://cfile7.uf.tistory.com/image/261684345878BD6C2776A1",
   "http://cfile6.uf.tistory.com/image/26795B3E5599FA8C22DB3F",
   "http://ppss.kr/wp-content/uploads/2017/04/%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C-8-540x245.png",
   "https://i.ytimg.com/vi/l7UEAgHPL0Y/maxresdefault.jpg",
   "http://cfile7.uf.tistory.com/image/261684345878BD6C2776A1"
];

var careserBox = document.querySelector(".careserBox");
var leftRightEvent = document.querySelector(".left-right");
var first = 0;
var end = 2;

function makeImg(start, end){
  leftRightEvent.children[1].innerHTML = (start+1) + " / " + (potos.length - 3 + 1);
  careserBox.innerHTML = "";
  for(var i = start; i <= end; i++){
    careserBox.innerHTML += "<div class = 'test'> <img src = " + potos[i] + "></div>";
  }
};

makeImg(first,end);

leftRightEvent.children[0].addEventListener('click',function(){
if (first == 0) {
 alert("첫 페이지")
 return;
}
  makeImg(--first,--end);
});

leftRightEvent.children[2].addEventListener('click',function(e){
 if (end == potos.length - 1) {
   alert("마지막 페이지")
   return;
 }
 makeImg(++first,++end);
});

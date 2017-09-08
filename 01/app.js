console.log("류승룡 기모찌~~");

var myOverAction = document.querySelector(".test");

myOverAction.style.backgroundColor = "pink";

myOverAction.style.width = "400px"

myOverAction.style.height = "200px"

myOverAction.addEventListener('click',function(e){
  myOverAction.style.backgroundColor = "white";

  myOverAction.style.width = "100%";

  myOverAction.style.height = "20px";

  myOverAction.textContent = "강사님 한학기동안 잘 부탁드립니다 ㅎㅎ";
})

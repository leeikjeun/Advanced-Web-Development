// var log = document.getElementById("log");
// //
// // console.log(log);
// //
// // log.innerHTML = '안녕';
//
//
// // var a = document.querySelectorAll('#log a');
// //
// // console.log(a);
//
// var div = document.createElement('div');
// div.style.border = "1px solid red";
// // div.innerHTML = "hello!!";
//
// log.appendChild(div);
//
// log.innerHTML += "<div style='border:1px solid red'>hello</div>"


// window.load = function(){
//   alert('1');
// }

// window.addEventListener('load', function(){
//     console.log(1);
// });
//
// window.addEventListener('load', function(){
//     console.log(2);
// });

// function printLog(e){
//   console.log("log click");
// }
//
// log.addEventListener('click', printLog );

// var wrap = document.getElementById('wrap');

// wrap.addEventListener('click',function(e){
//       if(e.target.style.backgroundColor == "red"){
//         e.target.style.backgroundColor = "blue";
//       }else{
//         e.target.style.backgroundColor = "red";
//       }
// });
//이 밑에 이벤트는 dom 요소가 로딩이 다 되면 발생하는 이벤트이다.
document.addEventListener("DOMContentLoaded", function(event) {

var divs = document.querySelectorAll('#wrap div');

function changBg(e){
  console.log('changBg');

  console.log(e.currentTarget);
  console.log(e.target);
  e.currentTarget.style.backgroundColor = "blue";
}

for(var i = 0; i < divs.length; i++){
  divs[i].addEventListener('click',changBg);
}

});

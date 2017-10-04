
var score = document.querySelector('.score');
var level = document.querySelector('.level');
var miss = document.querySelector('.miss');
var showGamebox = document.querySelector('.show-game-box');
var gameClickBox = document.querySelector('.click-box');
var flag = true;
var gameSpeed = 3000;
var point = {
  score : 0,
  level : 1,
  miss : 0
};


function runGame(){
  flag = true;
  gameClickBox.style.backgroundColor = "red";
  var x = Math.floor(Math.random() * showGamebox.offsetWidth);
  var y = Math.floor(Math.random() * showGamebox.offsetHeight);
  x %= (showGamebox.offsetWidth - 30);
  y %= (showGamebox.offsetHeight - 30);
  gameClickBox.style.marginLeft = x + "px";
  gameClickBox.style.marginTop = y + "px";

}

showGamebox.addEventListener('click',function(e){
  if(e.target.className == "click-box"){
    gameClickBox.style.backgroundColor = "blue";
    if(flag){
      flag = !flag;
      point.score++;
      score.innerHTML = "Score : " + point.score;
      if(point.score % 10 == 0 && point.level != 6){
        point.level++
        level.innerHTML = "Level : " + point.level;
        gameSpeed -= 500;
      }
    }
  }else{
    point.miss += 1;
    miss.innerHTML = "Miss : " + point.miss + " / 11";
    if(point.miss == 11){
      alert("끝 처음부터 다시~")
      gameSpeed = 3000;
      point.score = 0;
      point.level = 1;
      point.miss = 0;
      score.innerHTML = "Score : " + point.score;
      level.innerHTML = "Level : " + point.level;
      miss.innerHTML = "Miss : " + point.miss + " / 11"
    }

  }

});

var set = setInterval(runGame, gameSpeed);

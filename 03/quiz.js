var wrap = document.getElementById('wrap');
var fleg = false;

for(var i = 0; i < 16; i++){
  if(i % 4 == 0)
    fleg = !fleg;

  if(fleg){
    wrap.innerHTML += "<div class='black'></div>";
  }else{
    wrap.innerHTML += "<div class='white'></div>";
  }
  
  fleg = !fleg;
}

var before;

wrap.addEventListener('click',function(e){
  if(before != null){
        before.classList.toggle("red");
  }
  before = e.target;
	e.target.classList.toggle('red');
})

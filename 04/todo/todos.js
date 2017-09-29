//start...
var inputForm = document.querySelector(".input-tast");
var toDoLists = document.querySelector(".toDoLists");

inputForm.addEventListener('keyup',function(e){
  if(e.keyCode != 13){
    event.stopPropagation();
    return;
  }

  toDoLists.innerHTML += "<li><button class='delete'>×</button>" +
                          "<input type='checkbox' class='toggle-checked'>"
                          + "<span class='text'>" + inputForm.value + "</span></li>";

  inputForm.value = "";
  console.log(inputForm.value);
});

toDoLists.addEventListener('click',function(e){
  if(e.target.className == "toggle-checked"){
    console.log(e.target.checked);
  }else if(e.target.className == "delete"){
    if(confirm("정말 삭제하겠습니까?") == true )
      e.target.parentElement.remove();
    else
      return;
  }
});

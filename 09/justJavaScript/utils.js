function newTodo(e){
  if(e.keyCode != 13){
    event.stopPropagation();
    return;
  }


  todoList.innerHTML += tmpl(template,{todo: todoInputBox.value});
  todoInputBox.value = "";
  saveData();
}


function deleteTodo(e){
  if(e.target.className == "delete"){
      e.target.parentElement.remove();
  }
  saveData();
}

function toggleCheckBox(e){
  if(e.target.className == "todo-check-box"){
    if(e.target.checked){
      e.target.parentElement.children[2].style.textDecorationLine = "line-through";
      e.target.parentElement.children[2].style.color = "gray";
    }else {
      e.target.parentElement.children[2].style.textDecorationLine = "none";
      e.target.parentElement.children[2].style.color = "black";
    }
  }

}

function loadData() {
  console.log('loadData()');
  return localStorage.getItem('todoHtml');
}

function saveData() {
  console.log('saveData()');
  localStorage.setItem('todoHtml', todoList.innerHTML);
}

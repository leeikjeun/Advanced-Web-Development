var todoInputBox = document.querySelector('.todo-input-box');
var todoList = document.querySelector('.todo-list');
var template = document.querySelector('#todoTemplate').innerHTML;


todoInputBox.addEventListener('keyup', newTodo);

todoList.addEventListener('click', deleteTodo);

todoList.addEventListener('click', toggleCheckBox);

todoList.innerHTML = loadData();

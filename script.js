const input = document.querySelector(".input-box");
const button = document.querySelector(".add-button");
const todolist = document.querySelector(".todo-list");



button.addEventListener("click",addTodo);
button.addEventListener("click",deleteTodo);

function addTodo(event){
  event.preventDefault();


const todoDiv = document.createElement("div");
todoDiv.classList.add("todo-container");

const todoItem = document.createElement("li");
todoItem.classList.add("todo-item");t
todoItem.innertext = "hi";
todoDiv.appendchild(todoItem);

const deleteButton = document.createElement
("button");
deleteButton.classList.add("delete-btn");
deleteButton.innerHTML='<i class="fa-thin fa-trash"></i>';
todoDiv.appendchild(deleteButton);

const completeButton = document.createElement("button");
completeButton.classList.add("complete-btn");
completeButton.innerHTML='<i class="fa-solid fa-check"></i>';  
todoDiv.appendchild(completeButton);

todolist.appendchild(todoDiv);
}
function deleteTodo(event){
    console.log(event.target);
}

//your code here
const todoInput = document.querySelector("#todo-input");
const addTodoButton = document.querySelector("#add-todo");
const todoList = document.querySelector("#todo-items");

addTodoButton.addEventListener("click", function(event) {
    event.preventDefault();
    const todoValue = todoInput.value;
    if (!todoValue) {
        return;
    }
    const todo = document.createElement("li");
    todo.textContent = todoValue;
    todoList.appendChild(todo);
    todoInput.value = "";
});


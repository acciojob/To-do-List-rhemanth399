const todoInput = document.querySelector("#todo-input");
const addTodoButton = document.querySelector("#add-todo");
const todoList = document.querySelector("#todo-items");

addTodoButton.addEventListener("click", function(event) {
    event.preventDefault();
    const todoValue = todoInput.value.trim();

    //validate the input field
    if (!todoValue) {
        alert("Please enter a task.");
        return;
    }
    //create new list item
    const todo = document.createElement("li");
    todo.textContent = todoValue;
    //append the new list item to the todo list
    todoList.appendChild(todo);
    //clear the input field
    todoInput.value = "";
});

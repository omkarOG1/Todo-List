let inputBox = document.getElementById("inputBox");
let addBtn = document.getElementById("addBtn");
let todoList = document.getElementById("todo-list");
// Function to add todo
let addTodo = () => {
  let inputText = inputBox.value.trim();

  if (inputText.length <= 0) {
    alert("You must write something");
    return
  } else {
    // Creating P
    let li = document.createElement("li");
    let p = document.createElement("p");
    p.textContent = inputText;
    li.appendChild(p);
    todoList.appendChild(li);

    // createing Delete btn
    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("deleteBtn");
    deleteBtn.textContent = "Remove";
    li.appendChild(deleteBtn);
    saveLocalTodo(inputText);
    inputBox.value = "";
  }
};
// Function Delete Todo
let deleteTodo = (e) => {
  if (e.target.classList.contains("deleteBtn")) {
    e.target.parentElement.remove();
    deletLocalTodo(e.target.parentElement);
  }
};

// Function to save todo to localStorage

let saveLocalTodo = (todo) => {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
};
// Function to get Todo from local storage
let getLocalTodo = () => {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.forEach((todo) => {
    // Creating P
    let li = document.createElement("li");
    let p = document.createElement("p");
    p.textContent = todo;
    li.appendChild(p);
    todoList.appendChild(li);

    // createing Delete btn
    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("deleteBtn");
    deleteBtn.textContent = "Remove";
    li.appendChild(deleteBtn);
  });
};

// Function to delete from local todo
let deletLocalTodo = (todo) => {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  let todoText = todo.firstElementChild.innerHTML;
  let todoIndex = todos.indexOf(todoText);
  todos.splice(todoIndex, 1);
  localStorage.setItem("todos", JSON.stringify(todos));
};
document.addEventListener("DOMContentLoaded", getLocalTodo);
todoList.addEventListener("click", deleteTodo);
addBtn.addEventListener("click", addTodo);

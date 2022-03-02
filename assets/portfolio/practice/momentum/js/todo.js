const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
let toDos = [];

const TODOS_KEY = "todos"


function saveToDos() {
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteToDo(e) {
    const _delete_li = e.target.parentElement;
    _delete_li.remove();

    toDos = toDos.filter(toDo => toDo.id !== parseInt(_delete_li.id));
    saveToDos();
}

function paintToDo(newTodo) {
    const _new_li = document.createElement("li");
    const _new_span = document.createElement("span");
    const _new_button = document.createElement("button");


    _new_button.addEventListener("click", deleteToDo)
    _new_li.appendChild(_new_span);
    _new_li.appendChild(_new_button);
    toDoList.appendChild(_new_li);

    _new_li.id = newTodo.id;
    _new_span.innerText = newTodo.text;
    _new_button.innerText = "❌"
}

function handleToDoSubmit(e) {
    e.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}


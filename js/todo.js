const todoForm = document.getElementById('todo-form')
const todoInput = document.getElementById('todo-input')
const todoList = document.getElementById('todo-list')
const todoContainer = document.getElementById('todo')



const TODOS_KEY = 'todos'
const OLDTODOS_KEY = 'oldTodos'


let todos = [];
let oldTodos = [];


function showTodos() {
    todoContainer.classList.remove(HIDDEN_CLASSNAME)
}

loginForm.addEventListener('submit',showTodos);

function saveTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}



function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
    todos = todos.filter(todo => todo.id !== parseInt(li.id));
    
    saveTodos();

}

function paintTodo(newTodo) {
    const li = document.createElement('li');
    li.id = newTodo.id;
    const span = document.createElement('span');
    span.innerText = newTodo.text;

    const button = document.createElement('button');
    button.id = 'delete-button';
    button.innerText = 'X';
    button.title = 'delete this todo'

    button.addEventListener('click',deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}



function handleTodoSubmit() {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    }

    todos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();

}

todoForm.addEventListener('submit',handleTodoSubmit)


if (savedUsername === null) {
    todoContainer.classList.add(HIDDEN_CLASSNAME);
} else {
    todoContainer.classList.remove(HIDDEN_CLASSNAME);
}

const savedTodos = localStorage.getItem(TODOS_KEY)

if (savedTodos !== null) {
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    parsedTodos.forEach(paintTodo);
}


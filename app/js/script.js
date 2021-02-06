// SELECT ELEMENTS FROM THE DOM
const todoForm = _('#','todoForm');

// EVENTS ON THE ELEMENTS
todoForm.addEventListener('submit', addTodo);

// FUNCTIONS
function _(symbol, tagName){
    return document.querySelector(symbol+tagName);
}

function addTodo(e){
    
    e.preventDefault();
    
    const todoList = _('#', 'todoList');
    
    let todoInput = _('#','todoInput');
    let inputValue = todoInput.value;

    let todo = document.createElement('div');
    todo.id = 'todo';

    let cmpChckBtn = document.createElement('div');
    cmpChckBtn.classList.add('cmpChckBtn');
    
    let trash = document.createElement('button');
    trash.classList.add('trash');
    trash.innerHTML = 'X';
    trash.addEventListener('click', moveToTrash);
    
    let completed = document.createElement('button');
    completed.classList.add('completed');
    completed.innerHTML = 'V';
    completed.addEventListener('click', completeTask);
    
    cmpChckBtn.appendChild(trash);
    cmpChckBtn.appendChild(completed);

    let thingTodo = document.createElement('li');
    thingTodo.classList.add('thingTodo');
    thingTodo.innerText = inputValue;

    todo.appendChild(cmpChckBtn);
    todo.appendChild(thingTodo);

    todoList.appendChild(todo);
    
    todoInput.value = "";

    return false;
}

function completeTask(){
    let textTodo = ((this.parentNode).parentNode).lastElementChild;
    
    if(textTodo.classList.contains('complete')){
        textTodo.classList.remove('complete');
    }else{
        textTodo.classList.add('complete');
    }
}

function moveToTrash(){
    let todo = ((this.parentNode).parentNode);
    todo.remove();
}

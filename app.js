//Selectors
const toDoInput = document.querySelector('.toDoInput');
const toDoButton = document.querySelector('.toDoButton');
const todoList = document.querySelector('.todo-list');
const todoSelect = document.querySelector('.todo-select');

//Event listeners
toDoButton.addEventListener('click', addItem);
todoList.addEventListener('click', checkItem);
todoList.addEventListener('click', deleteItem);
todoSelect.addEventListener('click', selectStatus);

//Functions
function addItem(e){
    e.preventDefault();

    //div for each item in the to-do list
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    //list tag for each todo item
    const todoItem = document.createElement('li');
    todoItem.classList.add('todo-item');
    todoItem.innerText = toDoInput.value;
    todoDiv.appendChild(todoItem);

    //check button
    const checkButton = document.createElement('button');
    checkButton.classList.add('check-button');
    checkButton.innerHTML = '<i class="fas fa-check"></i>';
    todoDiv.appendChild(checkButton);

    //trash button
    const trashButton = document.createElement('button');
    trashButton.classList.add('trash-button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    todoDiv.appendChild(trashButton);

    //appending divs of each item to ul(todo list)
    todoList.appendChild(todoDiv);

    //removing the value from input
    toDoInput.value = '';
}

function checkItem(e){
	 const item = e.target;

     //Check item
    if(item.classList[0] === 'check-button'){
        const todoDiv = item.parentElement;
        todoDiv.classList.toggle('task-completed');
    }
}

function deleteItem(e){
	const item = e.target; 
	
    //Delete item
    if(item.classList[0] === 'trash-button'){
        const todoDiv = item.parentElement;
        todoDiv.classList.add('delete-animation');
        todoDiv.addEventListener('transitionend', function(){
            todoDiv.remove();
        })
    }

   
}

function selectStatus(e){
    const todoDiv = todoList.children;
    for(todo of todoDiv){
        switch(e.target.value){
            case "all":
                todo.style.display = 'flex';
                break;
            case "completed":
                if(todo.classList.contains('task-completed')){
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
            case "notCompleted":
                if(!todo.classList.contains('task-completed')){
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
        }
    };
}
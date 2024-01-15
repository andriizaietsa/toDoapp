const addInput = document.querySelector('#todoInput'),
    submit = document.querySelector('#submit'),
    toDoList = document.querySelector('#todoList'),
    toDoListItems = document.querySelectorAll('.todo-item'),
    form = document.querySelector('#addTodoForm');


//add list item
function addListItem(listItems, dataBase) {
    listItems.innerHTML = "";
    dataBase.forEach((taskItem, i) => {
        listItems.innerHTML += `
           <li class="todo-item">${i + 1} ${taskItem}
           <button class="delete-btn">Delete</button>
           </li>
           `;
    });

    document.querySelectorAll('.delete-btn').forEach((btn, i) => {
        btn.addEventListener('click', () => {
            btn.parentElement.remove();
            storage.splice(i, 1);

            addListItem(listItems, dataBase);
        })
    })
}

const taskDB = {
    tasks: []
}
const storage = taskDB.tasks;

//add value listener
form.addEventListener('submit', (e) => {
    e.preventDefault();

    let task = addInput.value;
    if (task && task.length < 21) {
        storage.push(task);
    }
    else {
        alert("Not correct value");
    }

    addListItem(toDoList, storage);
    e.target.reset();

    console.log(storage);
});






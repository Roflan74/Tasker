const btnCreateTask = document.getElementById("btn-create-task");
const textTask = document.getElementById("text-task");
const container = document.querySelector(".container");

let tasks = document.querySelectorAll(".task"); // Создание статичной коллекции
console.log(tasks);

/* Добавление новой задачи */
btnCreateTask.addEventListener("click", function(event){
    event.preventDefault(); // Отменяем действие браузера по умолчанию (перезагрузка страницы)
    let text = textTask.value;
    const newTask = document.createElement("div");
    newTask.classList.add("task");
    newTask.innerHTML = `<span>${text}</span>
        <i tabindex="0" class="bi bi-pencil-fill btn-edit"></i>
        <i tabindex="0" class="bi bi-x-circle-fill btn-remove"></i>`;
    container.append(newTask);

    tasks = document.querySelectorAll(".task"); // Обновление статичной коллекции
    console.log(tasks);
});

// #region Кнопка смены важных задач
// const btn = document.getElementById("btn");
// btn.addEventListener("click", function(){
//     let tasks = document.querySelectorAll(".task"); // Это не массив, а NodeList
//     for(let task of tasks){
//         task.classList.toggle("important");
//         #region Механика работы функции toggle
//         // if(task.classList.contains("important")){
//         //     task.classList.remove("important");
//         // } else {
//         //     task.classList.add("important");
//         // }
//         #endregion
//     }
// });
// #endregion

const btnSortByName = document.getElementById("btn-sort-by-name");
const btnSortByNameReverse = document.getElementById("btn-sort-by-name-reverse");
const btnShowImportant = document.getElementById("btn-show-important");
const textFilter = document.getElementById("text-filter");
const btnFilterByName = document.getElementById("btn-filter-by-name");
const btnShowAll = document.getElementById("btn-show-all");

/* Кнопка сортировки по алфавиту */
function compare(a, b) {
    if (a.innerHTML > b.innerHTML) return 1;
    if (a.innerHTML == b.innerHTML) return 0;
    if (a.innerHTML < b.innerHTML) return -1;
}

btnSortByName.addEventListener("click", function() {
    let newTasks = [...tasks].sort(compare);
    container.innerHTML = "";
    for (let i in newTasks) {
        container.append(newTasks[i]);
    }
});

/* Кнопка обратной сортировки по алфавиту */
function compareReverse(a, b) {
    if (a.innerHTML > b.innerHTML) return -1;
    if (a.innerHTML == b.innerHTML) return 0;
    if (a.innerHTML < b.innerHTML) return 1;
}

btnSortByNameReverse.addEventListener("click", function() {
    let newTasks = [...tasks].sort(compareReverse);
    container.innerHTML = "";
    for (let i in newTasks) {
        container.append(newTasks[i]);
    }
});

/* Кнопка фильтрации важных задач */
btnShowImportant.addEventListener("click", function() {
    let newTasks = [...tasks];
    container.innerHTML = "";
    for (let i in newTasks) {
        if (newTasks[i].classList.contains("important")) {
            container.append(newTasks[i]);
        }
    }
});

/* Кнопка фильтрации по имени */
btnFilterByName.addEventListener("click", function() {
    let sortText = textFilter.value;
    let newTasks = [...tasks];
    newTasks = newTasks.filter(function(item) {
        return item.innerHTML.toLowerCase().indexOf(sortText.toLowerCase()) != -1;
    });
    container.innerHTML = "";
    for (let i in newTasks) {
        container.append(newTasks[i]);
    }
});

/* Показать все задачи */
btnShowAll.addEventListener("click", function() {
    let newTasks = [...tasks];
    container.innerHTML = "";
    for (let i in newTasks) {
        container.append(newTasks[i]);
    }
});

//#region  Удаление и редактирование задачи
container.addEventListener("click", (event)=> {
    const btn = event.target; // Элемент, по которому кликнул пользователь
    if (btn.classList.contains("btn-remove")) {
        console.log("Удаляем");
        btn.closest(".task").outerHTML = "";
    }
    if (btn.classList.contains("btn-edit")) {
        console.log("Редактируем");
        btn.closest(".task").querySelector("span").setAttribute("contenteditable", "true");
    }
    tasks = document.querySelectorAll(".task");
});
//#endregion

// #region Всплытие и погружение
// const tags = document.querySelectorAll("*");
// let i = 0;
// for (let tag of tags) {
//     tag.addEventListener("click", (event) => {
//         i++;
//         console.log("Этап " + i);
//         console.log("Целевой элемент");
//         console.log(event.target);
//         console.log("Элемент, который поймал событие");
//         console.log(event.currentTarget);
//     }, true);
// }
// #endregion
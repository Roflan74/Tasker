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
    newTask.innerHTML = `<span>${text}</span>`;
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
    for(let i in newTasks) {
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
    for(let i in newTasks) {
        container.append(newTasks[i]);
    }
});

/* Кнопка "Оставить только важные" */

function filterImportant(a) {
    if(a.classList.contains("important")) return 1;
    else return -1;
}

btnShowImportant.addEventListener("click", function() {
    let newTasks = [...tasks].sort(filterImportant);
    container.innerHTML = "";
    for(let i in newTasks) {
        container.append(newTasks[i]);
    }
})
let input = document.getElementById("input");
let add = document.getElementById("addTaskBtn");
let inputBox = document.getElementById("inputBox");
let ul = document.createElement("ul");
const clear = document.getElementById("deleteall");

function addItem() {
    if (input.value == "") {
        return;
    }
    let li = document.createElement("li");
    let i = document.createElement("i");

    ul.id = "taskList";
    inputBox.appendChild(ul);
    ul.appendChild(li);
    li.style.textTransform = "uppercase"; 
    li.innerHTML = input.value;
    i.classList.add("bi-trash3-fill");
    i.onclick = remove;
    li.appendChild(i);
    clear.style.display = "block";
    input.value = "";
}

function reset() {
    ul.innerHTML = "";
    clear.style.display = "none";
};
function remove() {
    let liParent = this.parentNode;
    liParent.parentNode.removeChild(liParent);
    if (ul.childElementCount <= 0) {
        input.autofocus = true;
        clear.style.display = "none";
    }
};

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
        tasks = JSON.parse(savedTasks);
        renderTasks();
    }
}

add.addEventListener('click', () => {
    addItem();
    saveTasks();
    input.autofocus = true;
   }
);
clear.addEventListener('click', reset);
input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        addItem();
    }
});
input.addEventListener("keydown", (e) => {
    if (e.key === 'Delete') {
        reset();
    }
});
loadTasks();
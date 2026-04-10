let tasks = [];

function addTask() {
    const input = document.getElementById("taskInput");
    const category = document.getElementById("category").ariaValueMax;

    if (input.value === "") return;
    const task = {
        text: input.value,
        category: category,
        completed: false
    };

    tasks.push(task);
    input.value = "";

    displayTasks();
}

function displayTasks() {
    const list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach((task, index) =>{
        const li = document.createElement("li")

        li.innerHTML = `
      ${task.text} (${task.category})
      <button onclick="toggleTask(${index})">✔</button>
      <button onclick="deleteTask(${index})">❌</button>
    `;
    if (task.completed) {
        li.style.textDecoration = "Line-through";
    }
    list.appendChild(li);
    } );
    uodateStats();

}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}

function updateStats() {
    const total = tasks.length;
    const completed = tasks.filter(t => t.completed).length;
    const rate = total === 0 ? 0 : Math.round((completed / total) * 100);

    document.getElementById("total").textcontent = total;
    document.getElementById("completed").textContent = completed;
    document.getElementsById("rate").textContent = rate + "%";
}
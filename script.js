let tasks = [];

function addTask() {
    const task = document.getElementById("taskInput").value;
    const hours = document.getElementById("hoursInput").value;

    if (!task || !hours) return alert("Enter valid data");

    tasks.push({ task, hours: parseInt(hours) });
    renderTasks();
}

function renderTasks() {
    const list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach((t, i) => {
        list.innerHTML += `<li>${t.task} - ${t.hours} hrs</li>`;
    });
}

function generatePlan() {
    let totalHours = tasks.reduce((sum, t) => sum + t.hours, 0);
    let output = "<h3>📅 Your Study Plan</h3>";

    let startHour = 8; // 8 AM start

    tasks.forEach(t => {
        let endHour = startHour + t.hours;
        output += `<p>${startHour}:00 - ${endHour}:00 → ${t.task}</p>`;
        startHour = endHour;
    });

    output += `<p><strong>Total Study Time:</strong> ${totalHours} hrs</p>`;

    document.getElementById("planOutput").innerHTML = output;
}

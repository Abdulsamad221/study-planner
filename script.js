function addTask(subject, time) {
    if (!subject || !time) {
        return "Error: Subject and time are required.";
    }
    let schedule = document.getElementById("schedule");
    let taskItem = document.createElement("li");
    taskItem.textContent = `${subject} at ${time}`;
    schedule.appendChild(taskItem);
    return taskItem.textContent;
}

function removeTask(index) {
    let schedule = document.getElementById("schedule");
    if (index < 0 || index >= schedule.children.length) {
        return "Error: Invalid task index.";
    }
    schedule.removeChild(schedule.children[index]);
    return "Task removed";
}

function getTasks() {
    let schedule = document.getElementById("schedule");
    return Array.from(schedule.children).map(task => task.textContent);
}

module.exports = { addTask, removeTask, getTasks };

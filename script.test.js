const { addTask, removeTask, getTasks } = require("./script");

test("addTask function adds a new task", () => {
    document.body.innerHTML = '<ul id="schedule"></ul>';
    
    let result = addTask("Math", "10:00");
    let schedule = document.getElementById("schedule");

    expect(result).toBe("Math at 10:00");
    expect(schedule.children.length).toBe(1);
});

test("addTask function should return an error message if subject or time is missing", () => {
    expect(addTask("", "10:00")).toBe("Error: Subject and time are required.");
    expect(addTask("Math", "")).toBe("Error: Subject and time are required.");
});

test("removeTask function removes a task", () => {
    document.body.innerHTML = '<ul id="schedule"><li>Math at 10:00</li></ul>';
    
    let result = removeTask(0);
    let schedule = document.getElementById("schedule");

    expect(result).toBe("Task removed");
    expect(schedule.children.length).toBe(0);
});

test("removeTask function should return an error message for invalid index", () => {
    document.body.innerHTML = '<ul id="schedule"><li>Math at 10:00</li></ul>';
    
    expect(removeTask(-1)).toBe("Error: Invalid task index.");
    expect(removeTask(5)).toBe("Error: Invalid task index.");
});

test("getTasks function should return an array of tasks", () => {
    document.body.innerHTML = `
        <ul id="schedule">
            <li>Math at 10:00</li>
            <li>English at 12:00</li>
        </ul>
    `;
    
    expect(getTasks()).toEqual(["Math at 10:00", "English at 12:00"]);
});

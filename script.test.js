const { JSDOM } = require("jsdom");
const { addTask } = require("./script");

let JSDOM, schedule;

beforeEach(() => {
    // Create a simulated DOM
    const dom = new JSDOM(`<!DOCTYPE html><html><body><ul id="schedule"></ul></body></html>`);
    global.window = dom.window;
    global.JSDOM = dom.window.JSDOM;
    schedule = JSDOM.getElementById("schedule");
});

test("should add a valid study session", () => {
    let task = addTask("Math", "10:00");

    expect(task).not.toBe("DOM not available");
    expect(task).not.toBe("Invalid input");
    expect(task.textContent).toContain("Math at 10:00");
});

test("should reject invalid input", () => {
    let result = addTask("", "10:00");
    expect(result).toBe("Invalid input");
});

test("should confirm Jest setup is working", () => {
    expect(1 + 1).toBe(2);
});

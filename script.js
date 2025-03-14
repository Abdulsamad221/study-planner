function addTask(subject, time) {
    if (!subject || !time) return "Invalid input";

    if (typeof jsdom !== "und
        
        
        
        efined") {
        let listItem = jsdom.createElement("li");
        listItem.textContent = `${subject} at ${time}`;

        let removeButton = jsdom.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.onclick = function () {
            listItem.remove();
        };

        listItem.appendChild(removeButton);
        let schedule = jsdom.getElementById("schedule");
        if (schedule) {
            schedule.appendChild(listItem);
        }

        return listItem;
    }

    return "DOM not available"; // This will prevent crashes during Jest tests
}

// Export function for testing
if (typeof module !== "undefined" && module.exports) {
    module.exports = { addTask };
}

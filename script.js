function addTask() {
    let subject = document.getElementById("subject").value;
    let time = document.getElementById("time").value;
    if (subject && time) {
        let listItem = document.createElement("li");
        listItem.textContent = `${subject} at ${time}`;
        document.getElementById("schedule").appendChild(listItem);
    }
}

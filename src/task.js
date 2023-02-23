const task = (title, description, dueDate, priority) => {
    return { title, description, dueDate, priority };
}

export function createTask() {
    let title = document.getElementById("title").value;
    let description = document.getElementById("desc").value;
    let priority = document.querySelector('input[name="priority"]:checked').value;

    const newTask = task(title, description, "", priority);

    defaultProject.tasks.push(newTask);
}

export default task;
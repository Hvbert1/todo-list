import project, { createProject } from './project.js'

let defaultProject = project("Default");

const task = (title, description, dueDate, priority) => {
    return { title, description, dueDate, priority };
}

export function createTask() {
    let title = document.getElementById("title").value;
    let description = document.getElementById("desc").value;
    let date = document.getElementById("date").value;
    let priority = document.querySelector('input[name="priority"]:checked').value;

    const newTask = task(title, description, date, priority);

    defaultProject.tasks.push(newTask);
    console.log(defaultProject);
}

export default task;
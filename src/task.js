import project, { createProject, displayProject, selectedProject} from './project.js'

let defaultProject = project("Default");

export const task = (title, description, dueDate, priority) => {
    return { title, description, dueDate, priority };
}

export function createTask() {
    let title = document.getElementById("title").value;
    let description = document.getElementById("desc").value;
    let date = document.getElementById("date").value;
    let priority = document.querySelector('input[name="priority"]:checked').value;

    const newTask = task(title, description, date, priority);

    return newTask;
}

export function appendTask() {
    let newTask = createTask()
    console.log(newTask);
    console.log(selectedProject);
    selectedProject.tasks.push(newTask);
}

export default task;
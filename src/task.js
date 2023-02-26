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
    displayTask(selectedProject);
}

export function displayTask(project) {
    for (let i = 0; i < project.tasks.length; i++) {
        let taskDiv = document.createElement("div");
        let taskName = document.createElement("div");
        let taskDesc = document.createElement("div");
        let taskDate = document.createElement("div");
        let taskPrio = document.createElement("div");
        
        taskName.innerHTML = project.tasks[i].title;
        taskDesc.innerHTML  = project.tasks[i].description;
        taskDate.innerHTML = project.tasks[i].dueDate;
        taskPrio.innerHTML = project.tasks[i].priority;

        taskDiv.id = i;

        taskDiv.append(taskName);
        taskDiv.append(taskDesc);
        taskDiv.append(taskDate);
        taskDiv.append(taskPrio);

        document.getElementById("taskArea").appendChild(taskDiv);
    }
}

export default task;
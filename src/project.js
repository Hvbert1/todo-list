import task, { createTask , appendTask, displayTask, resetTask} from './task.js'

export let selectedProject;

const project = (name) => {
    let tasks = [];
    return {name, tasks};
}

export function createProject() {
    let projectName = document.getElementById("project").value;
    const newProject = project(projectName);
    return newProject;
}

export function displayProject() {
    let project = createProject();
    let projectDiv = document.createElement("div");
    let projectValue = document.getElementById("project").value;
    projectDiv.innerHTML = projectValue;

    document.getElementById("projectArea").appendChild(projectDiv);

    //create and append new task divs onto the taskArea
    projectDiv.addEventListener("click", function(){
        resetTask();
        displayTask(project);
        selectedProject = project;
    });
}

export default project;
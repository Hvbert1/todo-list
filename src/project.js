import task, { createTask , appendTask } from './task.js'

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
        selectedProject = project;
    });
}

export default project;
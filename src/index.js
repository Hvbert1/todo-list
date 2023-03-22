import { appendTask } from './task.js'
import { displayProject, appendProject } from './project.js'
import './style.css';

function createProjectForm() {
    let projectArea = document.createElement("div");
    projectArea.id = "projectArea";

    let title = document.createElement("div");
    title.id = "title";
    title.innerHTML = "Todo-list";

    let projectSpace = document.createElement("div");
    projectSpace.id = "projectSpace";

    let projectTitle = document.createElement("div");
    projectTitle.id = "projectTitle";
    projectTitle.innerHTML = "My Lists";

    let projectForm = document.createElement("form");
    projectForm.setAttribute("action", "");
    projectForm.setAttribute("method", "post");

    let project = document.createElement("input");
    project.setAttribute("type", "text");
    project.value = "Default List";
    project.id = "project";

    let btn = document.createElement("button");
    btn.innerHTML = "+";
    btn.setAttribute("type", "submit");
    btn.onclick = function test(e) {
        e.preventDefault();
        appendProject();
    }

    projectForm.append(project);
    projectForm.append(btn);

    document.getElementById("content").appendChild(projectArea);
    document.getElementById("projectArea").appendChild(title);
    document.getElementById("projectArea").appendChild(projectTitle);
    document.getElementById("projectArea").appendChild(projectSpace);
    document.getElementById("projectArea").appendChild(projectForm); 
}

function createTaskForm() {
    let taskArea = document.createElement("div");
    taskArea.id = "taskArea";

    let taskSpace = document.createElement("div");
    taskSpace.id = "taskSpace";

    let taskForm = document.createElement("form");
    taskForm.setAttribute("action", "");
    taskForm.setAttribute("method", "post");
    taskForm.id = "taskForm";

    let hiddenForm = document.createElement("form");
    hiddenForm.id = "hiddenForm"
    hiddenForm.classList.add("hidden");

    let title = document.createElement("input");
    title.setAttribute("type", "text");
    title.id = "taskTitle";
    title.placeholder = "Add Todo";
    title.addEventListener("click", showForm)

    let desc = document.createElement("input");
    title.setAttribute("type", "text");
    desc.id = "desc";
    desc.placeholder = "Add description"

    let prio = document.createElement("div");
    prio.id = "priority"

    let date = document.createElement("input");
    date.setAttribute("type", "date");
    date.id = "date";

    let btn = document.createElement("button");
    btn.setAttribute("type", "submit");
    btn.onclick = function test(e) {
        e.preventDefault();
        appendTask();
    }

    const priorities = ["low", "medium", "high"];
    for (let i = 0; i < priorities.length; i++) {
      const priorityBtn = document.createElement("input");
      priorityBtn.setAttribute("type", "radio");
      priorityBtn.setAttribute("name", "priority");
      priorityBtn.value = priorities[i];
      priorityBtn.id = "prio" + (i + 1);
      
      const priorityLabel = document.createElement("label");
      priorityLabel.innerHTML = priorities[i];
      priorityLabel.htmlFor = "prio" + (i + 1);
      prio.append(priorityBtn);
      prio.append(priorityLabel);
    }

    taskForm.append(title);
    taskForm.append(hiddenForm);
    hiddenForm.append(desc);
    hiddenForm.append(date);
    hiddenForm.append(prio);
    hiddenForm.append(btn);

    document.getElementById("content").appendChild(taskArea);
    document.getElementById("taskArea").appendChild(taskForm);
    document.getElementById("taskArea").appendChild(taskSpace);
}

function showForm() {
    document.querySelector("#taskArea .hidden").classList.remove("hidden");
}

document.addEventListener("click", (event) => {
    if (!taskForm.contains(event.target)) {
      document.querySelector("#taskArea #hiddenForm").classList.add("hidden");
    }
});

createProjectForm();
createTaskForm();
displayProject();

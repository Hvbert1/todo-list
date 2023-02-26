import task, { createTask , appendTask} from './task.js'
import project, { createProject, displayProject } from './project.js'
import { compareAsc, format } from 'date-fns'
import './style.css';

console.log(format(new Date(2014, 1, 11), 'yyyy-MM-dd'));

function createForm() {
    let taskArea = document.createElement("div");
    taskArea.id = "taskArea";

    let taskForm = document.createElement("form");
    taskForm.setAttribute("action", "");
    taskForm.setAttribute("method", "post");

    let title = document.createElement("input");
    title.setAttribute("type", "text");
    title.id = "title";

    let desc = document.createElement("input");
    title.setAttribute("type", "text");
    desc.id = "desc";

    let date = document.createElement("input");
    date.setAttribute("type", "date");
    date.id = "date";

    let btn = document.createElement("button");
    btn.setAttribute("type", "submit");
    btn.onclick = function test(e) {
        e.preventDefault();
        appendTask();
    }

    let priorityBtn1 = document.createElement("input");
    priorityBtn1.setAttribute("type", "radio");
    priorityBtn1.setAttribute("name", "priority");
    priorityBtn1.value = "low";

    let priorityBtn2 = document.createElement("input");
    priorityBtn2.setAttribute("type", "radio");
    priorityBtn2.setAttribute("name", "priority");
    priorityBtn2.value = "medium";

    let priorityBtn3 = document.createElement("input");
    priorityBtn3.setAttribute("type", "radio");
    priorityBtn3.setAttribute("name", "priority");
    priorityBtn3.value = "high";

    taskForm.append(priorityBtn1);
    taskForm.append(priorityBtn2);
    taskForm.append(priorityBtn3);
    taskForm.append(title);
    taskForm.append(desc);
    taskForm.append(date);
    taskForm.append(btn);

    document.getElementById("content").appendChild(taskArea);
    document.getElementById("taskArea").appendChild(taskForm);
}

function createArea() {
    let projectArea = document.createElement("div")
    projectArea.id = "projectArea";

    let projectForm = document.createElement("form");
    projectForm.setAttribute("action", "");
    projectForm.setAttribute("method", "post");

    let project = document.createElement("input");
    project.setAttribute("type", "text");
    project.id = "project";

    let btn = document.createElement("button");
    btn.setAttribute("type", "submit");
    btn.onclick = function test(e) {
        e.preventDefault();
        createProject();
        displayProject();
    }

    projectForm.append(project);
    projectForm.append(btn);

    document.getElementById("content").appendChild(projectArea);
    document.getElementById("projectArea").appendChild(projectForm);
}

createArea();
createForm();
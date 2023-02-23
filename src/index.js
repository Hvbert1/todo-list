import task, { createTask } from './task.js'
import project, { createProject } from './project.js'

const testTask = task("test");
console.log(testTask)

let defaultProject = project("Default");
console.log(defaultProject);

function createForm() {
    let form = document.createElement("form");
    form.setAttribute("action", "");
    form.setAttribute("method", "post");

    let title = document.createElement("input");
    title.setAttribute("type", "text");
    title.id = "title";

    let desc = document.createElement("input");
    title.setAttribute("type", "text");
    desc.id = "desc";

    let btn = document.createElement("button");
    btn.setAttribute("type", "submit");
    btn.onclick = function test(e) {
        e.preventDefault();
        createTask();
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

    form.append(priorityBtn1);
    form.append(priorityBtn2);
    form.append(priorityBtn3);
    form.append(title);
    form.append(desc);
    form.append(btn);

    document.getElementById("content").appendChild(form);
}

function createArea() {
    let form1 = document.createElement("form");
    form1.setAttribute("action", "");
    form1.setAttribute("method", "post");

    let project = document.createElement("input");
    project.setAttribute("type", "text");
    project.id = "project";

    let btn = document.createElement("button");
    btn.setAttribute("type", "submit");
    btn.onclick = function test(e) {
        e.preventDefault();
        createProject();
    }

    form1.append(project);
    form1.append(btn);

    document.getElementById("content").appendChild(form1);
}

createArea();
createForm();

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

    let taskHeader = document.createElement("div");
    taskHeader.id = "taskHeader";

    let taskHeaderLeft = document.createElement("div");
    taskHeaderLeft.id = "taskHeaderLeft";

    let taskHeaderRight = document.createElement("div");
    taskHeaderRight.id = "taskHeaderRight";

    let curMonth = document.createElement("div");
    let curDate = document.createElement("div");

    let curTime = document.createElement("div");
    let question = document.createElement("div");

    question.id = "question";

    curMonth.innerHTML = getCurMonth();
    curDate.innerHTML = getCurDay();

    curTime.innerHTML = getCurTime();
    question.innerHTML = "What's your plan for today?"

    taskHeaderLeft.append(curMonth);
    taskHeaderLeft.append(curDate);

    taskHeaderRight.append(curTime);
    taskHeaderRight.append(question);

    taskHeader.append(taskHeaderLeft);
    taskHeader.append(taskHeaderRight);

    taskArea.append(taskHeader);

    let taskSpace = document.createElement("div");
    taskSpace.id = "taskSpace";

    let taskDiv = document.createElement("div");
    taskDiv.id = "taskDiv";

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
    title.placeholder = "Add Todo Name";
    title.addEventListener("click", function() {
        showForm("#taskArea .hidden", "hidden");
    });

    let desc = document.createElement("input");
    title.setAttribute("type", "text");
    desc.id = "desc";
    desc.placeholder = "Add description"

    let descLabel = document.createElement("label");
    descLabel.htmlFor = "desc";
    descLabel.innerHTML = "Description";

    let prioTitle = document.createElement("div");
    prioTitle.innerHTML = "Priority";

    let prio = document.createElement("div");
    prio.id = "priority"

    let date = document.createElement("input");
    date.setAttribute("type", "date");
    date.id = "date";

    let dateLabel = document.createElement("label");
    dateLabel.htmlFor = "date";
    dateLabel.innerHTML = "Date";

    let btn = document.createElement("button");
    btn.classList.add("material-icons");
    btn.textContent = "add_box";
    btn.setAttribute("type", "submit");
    btn.onclick = function test(e) {
        e.preventDefault();
        appendTask();
        taskForm.reset();
        hiddenForm.reset();
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
    
    hiddenForm.append(descLabel);
    hiddenForm.append(desc);
    hiddenForm.append(dateLabel);
    hiddenForm.append(date);
    hiddenForm.append(prioTitle);
    hiddenForm.append(prio);
    hiddenForm.append(btn);

    document.getElementById("content").appendChild(taskArea);
    document.getElementById("taskArea").appendChild(taskSpace);
    document.getElementById("taskSpace").appendChild(taskForm);
    document.getElementById("taskSpace").appendChild(taskDiv);
}

export function showForm(input, target) {
    document.querySelector(input).classList.remove(target);
}

document.addEventListener("click", (event) => {
    if (!taskForm.contains(event.target)) {
      document.querySelector("#taskArea #hiddenForm").classList.add("hidden");
    }
});

function getCurMonth() {
    const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    const today = new Date();

    let name = month[today.getMonth()];

    return name;
}

function getCurDay() {
    var today = new Date();
    var date = String(today.getDate()).padStart(2, '0');

    return date;
}

function getCurTime() {
    var today = new Date();
    var hour = today.getHours();
    var greeting;

    if (hour < 12) {
        greeting = "Good Morning.";
    } else if (hour >= 12 && hour < 18) {
        greeting = "Good Afternoon.";
    } else {
        greeting = "Good Evening.";
    }

    return greeting;
}

getCurTime();
createProjectForm();
createTaskForm();
displayProject();

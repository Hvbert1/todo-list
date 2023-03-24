import { displayTask } from './task.js'

export let projectList = [];
export let selectedProject;
export let storedProjects;

const project = (name) => {
    let tasks = [];
    return {name, tasks};
}

export function createProject() {
    let projectName = document.getElementById("project").value;
    const newProject = project(projectName);

    return newProject;
}

export function appendProject() {
    let newProject = createProject();
    projectList.push(newProject);

    saveProjects();
    displayProject();
}

export function displayProject() {
    storedProjects = JSON.parse(localStorage.getItem("projects"));

    resetProject();

    for (let i = 0; i < storedProjects.length; i++) {
        let projectDiv = document.createElement("div");
        let projectDel = document.createElement("i");

        projectDiv.id = i;
        projectDiv.innerHTML = storedProjects[i].name;
        projectDel.classList.add("material-icons");
        projectDel.textContent = "close";

        document.getElementById("projectSpace").appendChild(projectDiv);
        projectDiv.appendChild(projectDel);

        projectDiv.addEventListener("click", function(e){
            // Remove the selected class from all projectDiv elements
            let projectDivs = document.querySelectorAll("#projectSpace div");
            projectDivs.forEach(function(element) {
                element.classList.remove("selected");
            });

            selectedProject = projectList[e.target.id];

            if(selectedProject == null) {
                displayTask(storedProjects[e.target.id]);
            } else {
                displayTask(selectedProject);
            }

            // Add the selected class to the clicked element
            e.target.classList.add("selected");
        });

        projectDel.addEventListener("click", function(){
            delProject(projectDiv);
        });
    }
}

export function delProject(project) {
    projectList.splice(project.id, 1)

    saveProjects();
    displayProject();
}

export function resetProject() {
    document.getElementById("projectSpace").innerHTML = "";
}

export function loadProjects() {
    storedProjects = JSON.parse(localStorage.getItem("projects"));

    for (let i = 0; i < storedProjects.length; i++) {
        projectList[i] = storedProjects[i];
    }   
}

export function saveProjects() {
    localStorage.setItem('projects', JSON.stringify(projectList));
    storedProjects = JSON.parse(localStorage.getItem("projects"));
}

loadProjects();

import task, { createTask , appendTask, displayTask, resetTask} from './task.js'

export let projectList= [];
export let selectedProject;
export let storedTest;

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

    localStorage.setItem('projects', JSON.stringify(projectList));
    storedTest = JSON.parse(localStorage.getItem("projects"));

    displayProject();
}

export function displayProject() {
    resetProject();
    storedTest = JSON.parse(localStorage.getItem("projects"));

    for (let i = 0; i < storedTest.length; i++) {
        console.log(storedTest[i]) 
        let projectDiv = document.createElement("div");
        let projectDel = document.createElement("div");

        projectDiv.id = i;
        projectDiv.innerHTML = storedTest[i].name;
        projectDel.classList.add("delProject");
        projectDel.innerHTML = "x";

        document.getElementById("projectSpace").appendChild(projectDiv);
        projectDiv.appendChild(projectDel);

        projectDiv.addEventListener("click", function(e){
            // Remove the selected class from all projectDiv elements
            let projectDivs = document.querySelectorAll("#projectSpace div");
            projectDivs.forEach(function(element) {
                element.classList.remove("selected");
            });

            selectedProject = projectList[e.target.id];
            displayTask(storedTest[e.target.id]);

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
    displayProject();
}

export function resetProject() {
    document.getElementById("projectSpace").innerHTML = "";
}

export default project;


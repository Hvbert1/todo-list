import task, { createTask , appendTask, displayTask, resetTask} from './task.js'

export let projectList= [];
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

export function appendProject() {
    let newProject = createProject();

    projectList.push(newProject);
    displayProject();
}

export function displayProject() {
    resetProject();

    for (let i = 0; i < projectList.length; i++) {
        let projectDiv = document.createElement("div");
        let projectDel = document.createElement("div");

        projectDiv.id = i;
        projectDiv.innerHTML = projectList[i].name;

        document.getElementById("projectSpace").appendChild(projectDiv);
        projectDiv.appendChild(projectDel);

        projectDiv.addEventListener("click", function(e){
            selectedProject = projectList[e.target.id];
            displayTask(projectList[e.target.id]);
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
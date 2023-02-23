const project = (name) => {
    let tasks = [];
    return {name, tasks};
}

export function createProject() {
    let projectName = document.getElementById("project").value;
    const newProject = project(projectName);
    console.log(newProject);
}

export default project;
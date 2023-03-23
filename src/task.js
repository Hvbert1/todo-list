import { selectedProject, saveProjects, projectList} from './project.js'

export const task = (title, description, dueDate, priority) => {
    return { title, description, dueDate, priority };
}

export function createTask() {
    let title = document.getElementById("taskTitle").value;
    let description = document.getElementById("desc").value;
    let date = document.getElementById("date").value;
    let priority = document.querySelector('input[name="priority"]:checked').value;

    const newTask = task(title, description, date, priority);

    return newTask;
}

export function appendTask() {
    let newTask = createTask();
    selectedProject.tasks.push(newTask);
    localStorage.setItem('projects', JSON.stringify(projectList));
    displayTask(selectedProject);
}

export function displayTask(project) {
    resetTask();

    for (let i = 0; i < project.tasks.length; i++) {
        let taskDiv = document.createElement("div");
        let taskName = document.createElement("input");
        let taskDesc = document.createElement("input");
        let taskDate = document.createElement("input");
        let taskPrio = document.createElement("div");
        let taskCheck = document.createElement("div");
        let hiddenTask = document.createElement("div");
        
        taskName.setAttribute("type", "text");
        taskDesc.setAttribute("type", "text");
        taskDate.setAttribute("type", "date");

        taskName.value = project.tasks[i].title;
        taskDesc.value  = project.tasks[i].description;
        taskDate.value = project.tasks[i].dueDate;
        taskPrio.innerHTML = project.tasks[i].priority;

        taskName.classList.add("taskName");
        taskDesc.classList.add("taskDesc");
        taskDate.classList.add("taskDate");
        taskPrio.classList.add("taskPrio");
        taskCheck.classList.add("taskCheck");

        taskDiv.id = i;
        taskDiv.classList.add('expendable');

        hiddenForm.id = "hiddenForm"
        hiddenForm.classList.add("hidden");

        taskDiv.append(taskName);
        taskDiv.append(taskDesc);
        taskDiv.append(taskDate);
        taskDiv.append(taskPrio);
        taskDiv.append(taskCheck);

        taskCheck.addEventListener('click', function() {
            checkTask(taskDiv);
        })

        document.getElementById("taskSpace").appendChild(taskDiv);
    }
}

export function checkTask(task) {
    selectedProject.tasks.splice(task.id, 1);
    displayTask(selectedProject);

    saveProjects();
}

export function resetTask() {
    document.getElementById("taskSpace").innerHTML = "";
}

export default task;
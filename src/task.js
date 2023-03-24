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
        let nameContainer = document.createElement("div");
        let taskName = document.createElement("input");
        let taskDesc = document.createElement("input");
        let taskDate = document.createElement("input");
        let taskPrio = document.createElement("div");
        let taskCheck = document.createElement("i");
        
        taskName.setAttribute("type", "text");
        taskDesc.setAttribute("type", "text");
        taskDate.setAttribute("type", "date");

        taskName.value = project.tasks[i].title;
        taskDesc.value  = project.tasks[i].description;
        taskDate.value = project.tasks[i].dueDate;
        taskPrio.innerHTML = project.tasks[i].priority;
        taskCheck.textContent = "radio_button_unchecked";

        taskName.classList.add("taskName");
        taskDesc.classList.add("taskDesc");
        taskDate.classList.add("taskDate");
        taskPrio.classList.add("taskPrio");
        taskCheck.classList.add("material-icons");
        nameContainer.classList.add("nameContainer");

        taskDiv.id = i;

        taskDiv.append(taskCheck);
        taskDiv.append(nameContainer);
        taskDiv.append(taskDesc);
        taskDiv.append(taskPrio);
        nameContainer.append(taskDate);
        nameContainer.append(taskName);

        taskCheck.addEventListener('click', function() {
            taskCheck.textContent = "check_circle";
            setTimeout(function() {
              checkTask(taskDiv);
            }, 1000);
          });

        taskName.addEventListener('change', function(e) {
            const selectedDiv = e.target;
            const parentElement = selectedDiv.parentNode;
            const grandParentElement = parentElement.parentNode;
            const taskId = grandParentElement.id;

            selectedProject.tasks[taskId].title = selectedDiv.value;
            saveProjects(); 
        });

        taskDesc.addEventListener('change', function(e) {
            const selectedDiv = e.target;
            const parentElement = selectedDiv.parentNode;
            const taskId = parentElement.id;
   
            selectedProject.tasks[taskId].description = selectedDiv.value;
            saveProjects(); 
        });

        taskDate.addEventListener('change', function(e) {
            const selectedDiv = e.target;
            const parentElement = selectedDiv.parentNode;
            const grandParentElement = parentElement.parentNode;
            const taskId = grandParentElement.id;

            selectedProject.tasks[taskId].dueDate = selectedDiv.value;
            saveProjects(); 
        });

        document.getElementById("taskDiv").appendChild(taskDiv);
    }
}

export function checkTask(task) {
    selectedProject.tasks.splice(task.id, 1);
    displayTask(selectedProject);

    saveProjects();
}

export function resetTask() {
    document.getElementById("taskDiv").innerHTML = "";
}

export default task;
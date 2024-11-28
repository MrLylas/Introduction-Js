const addBtn = document.querySelector('#btn');
const taskCard = document.querySelector('.todoCard');
const tasksContainer = document.querySelector('#todoCards');

addBtn.addEventListener('click', addTask); // Ajouter une tâche au click

function addTask() {
    const newTask = taskCard.cloneNode(true);
    const newDelBtn = newTask.querySelector('.delBtn');
    const newTextArea = newTask.querySelector('.task');

    newTextArea.value = "New Task"; // Définir le texte de la nouvelle tâche sur "Nouvelle tâche"
    newDelBtn.addEventListener('click', function () {
        deleteTask(newTask); // Cibler la nouvelle tâche
    });

    tasksContainer.appendChild(newTask); // Ajouter la nouvelle tâche au conteneur de tâches
    updateCount();
}

const delBtn = document.querySelectorAll('.delBtn');
    delBtn.addEventListener('click', function () { // Supprimer la tâche au clic
        deleteTask(taskCard); // Récupérer la tâche la plus proche du bouton
    });

function deleteTask(task) {
    task.remove(); // Supprimer la tâche
    updateCount();
}

function updateCount() {
    const taskCount = tasksContainer.querySelectorAll('.todoCard').length;
    const taskCountDisplay = document.querySelector('#taskCount');
    taskCountDisplay.textContent = `${taskCount}`;
}

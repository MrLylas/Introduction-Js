// ---------------------------Définition des constantes et variables-----------------------------


const addBtn = document.querySelector('#btn');
const suppBtn = document.querySelector('#suppr');
const taskCard = document.querySelector('.todoCard');
const tasksContainer = document.querySelector('#todoCards');
const containerTask = document.querySelectorAll('.todo');

//----------------------- mise en place de la fonction Nouvelle Tache----------------------------------------




addBtn.addEventListener('click', function(){
    addTask();
}); // Ajouter une tâche au click

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
};



//----------------------------------------Supprimer :---------------------------------------------------------------



//supprimer une tâche :
suppBtn.addEventListener('click', function(){
    deleteAll()
});

function deleteTask(task) {
    task.remove(); // Supprimer la tâche
    updateCount();
}



// Tout supprimer : 
function deleteAll(){
    tasksContainer.forEach(task => {
        deleteTask(task);
    }
)};


// ---------------------------------------Compteur------------------------------------------------------

function updateCount() {
    const taskCount = document.querySelectorAll('.todoCards').length;
    const taskCountDisplay = document.querySelector('#taskCount');
    taskCountDisplay.textContent = `Taches restantes : ${taskCount}`;
}








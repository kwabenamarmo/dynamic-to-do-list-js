document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        storedTasks.forEach(taskText => addTask(taskText, false)); 
    }

    function addTask(taskText, save = true) {
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        const newTask = document.createElement('li');
        newTask.textContent = taskText;

        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.classList.add('remove-btn');

        removeButton.addEventListener('click', () => {
            taskList.removeChild(newTask);
            removeTaskFromLocalStorage(taskText); 
        });

        newTask.appendChild(removeButton);
        taskList.appendChild(newTask);

        taskInput.value = "";

        if (save) {
            saveTasksToLocalStorage(taskText);
        }
    }

    function saveTasksToLocalStorage(taskText) {
        let storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        storedTasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }

    function removeTaskFromLocalStorage(taskText) {
        let storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        storedTasks = storedTasks.filter(task => task !== taskText); 
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }

    addButton.addEventListener('click', () => addTask(taskInput.value.trim()));

    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask(taskInput.value.trim());
        }
    });

    loadTasks(); // Load tasks on DOMContentLoaded
});
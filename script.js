document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        // Retrieve and trim task text
        const taskText = taskInput.value.trim();

        // Check if task text is empty
        if (taskText === "") {
            alert("Please enter a task!");
            return; // Exit the function if no task was entered
        }

        // Create new task element (li)
        const newTask = document.createElement('li');
        newTask.textContent = taskText;

        // Create remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.classList.add('remove-btn');

        // Add event listener to remove button
        removeButton.addEventListener('click', () => {
            taskList.removeChild(newTask);
        });

        // Append remove button and task to the list item
        newTask.appendChild(removeButton);
        taskList.appendChild(newTask);

        // Clear the input field
        taskInput.value = "";
    }


    // Attach event listener to add button
    addButton.addEventListener('click', addTask);

    // Attach event listener for Enter key press
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });

});
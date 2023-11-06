document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('task');
    const addTaskButton = document.getElementById('addTask');
    const taskList = document.getElementById('taskList');

    addTaskButton.addEventListener('click', function () {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${taskText}</span>
                <button class="delete-button">Delete</button>
            `;
            taskList.appendChild(li);

            // Clear input field
            taskInput.value = '';

            // Attach delete event listener to new task
            const deleteButton = li.querySelector('.delete-button');
            deleteButton.addEventListener('click', function () {
                taskList.removeChild(li);
            });
        }
    });

    // Enter key to add a task
    taskInput.addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
            addTaskButton.click();
        }
    });
});

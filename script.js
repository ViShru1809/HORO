document.getElementById('toggle').addEventListener('change', function() {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        document.getElementById('stars').style.display = 'block';
    } else {
        document.getElementById('stars').style.display = 'none';
    }
});

document.getElementById('addTaskButton').addEventListener('click', function() {
    const taskText = document.getElementById('taskInput').value;
    if (taskText.trim()) {
        addTask(taskText);
        document.getElementById('taskInput').value = '';
    }
});

function addTask(taskText) {
    const taskList = document.getElementById('taskList');
    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';

    const taskContent = document.createElement('span');
    taskContent.className = 'task-text';
    taskContent.textContent = taskText;

    const toggleCompleteButton = document.createElement('button');
    toggleCompleteButton.className = 'toggle-complete';
    toggleCompleteButton.textContent = '✔';
    toggleCompleteButton.addEventListener('click', function() {
        taskItem.classList.toggle('completed');
    });

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-button';
    deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(taskItem);
    });

    taskItem.appendChild(taskContent);
    taskItem.appendChild(toggleCompleteButton);
    taskItem.appendChild(deleteButton);

    taskList.appendChild(taskItem);
}
// Initialize stars
for (let i = 0; i < 100; i++) {
    let star = document.createElement('div');
    star.className = 'star';
    star.style.top = Math.random() * 100 + '%';
    star.style.left = Math.random() * 100 + '%';
    star.style.animationDuration = (Math.random() * 1.5 + 1) + 's';
    document.getElementById('stars').appendChild(star);
}


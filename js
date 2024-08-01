document.addEventListener('DOMContentLoaded', () => {
  const taskForm = document.getElementById('task-form');
  const taskList = document.getElementById('task-list');

  taskForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const taskInput = document.getElementById('task-input');
      const task = taskInput.value.trim();

      if (task) {
          addTask(task);
          taskInput.value = '';
      }
  });

  function addTask(task) {
      const li = document.createElement('li');

      // Create a checkbox for marking the task as complete
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.classList.add('complete-checkbox');
      checkbox.addEventListener('change', () => {
          li.classList.toggle('completed', checkbox.checked);
      });

      // Create a span to hold the task text
      const taskText = document.createElement('span');
      taskText.textContent = task;

      // Create a delete button for the task
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.classList.add('delete');
      deleteBtn.addEventListener('click', () => {
          li.classList.add('fade-out');
          setTimeout(() => li.remove(), 300); // Wait for the fade-out animation to finish before removing
      });

      // Append the checkbox, task text, and delete button to the list item
      li.appendChild(checkbox);
      li.appendChild(taskText);
      li.appendChild(deleteBtn);

      // Append the list item to the task list and trigger fade-in animation
      taskList.appendChild(li);
      setTimeout(() => li.classList.add('fade-in'), 0);
  }
});

function addTask() {
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();
  
    if (taskText === '') {
      return; 
    }
  
    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${taskText}</span>
      <button onclick="removeTask(this)">Remove</button>
    `;
  
    taskList.appendChild(li);
    input.value = '';
  }
  
  function removeTask(button) {
    const taskList = document.getElementById('taskList');
    const li = button.parentElement;
    taskList.removeChild(li);
  }
  
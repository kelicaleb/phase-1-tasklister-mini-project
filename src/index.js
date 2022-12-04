
document.addEventListener("DOMContentLoaded", () => {
  const createTaskForm = document.getElementById("create-task-form");
  const newTaskDescription = document.querySelector("#new-task-description");
  const tasks = document.querySelector("#tasks");

  // creating new task
  createTaskForm.addEventListener('submit', e => {
    e.preventDefault();
    const newLi = document.createElement('li')
    newLi.innerText = newTaskDescription.value
    tasks.appendChild(newLi);
    
    const btn = document.createElement('button');
    btn.textContent = 'Delete';
    btn.style.fontSize = '15px'
    tasks.lastElementChild.appendChild(btn);
    // deleting a todo
    btn.addEventListener('click', (e) => {
      e.target.parentElement.remove();
    })
    // resitting the form fields
    createTaskForm.reset();
  }); 
});

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('create-task-form');
  
  //create priority dropdown selector
  const taskPriority = document.createElement('select');
  taskPriority.id='task-priority';
  // taskPriority.='Select Priority';
  //create priority options
  // const pri0 = document.createElement('option');
  // pri0.value = 'black';
  // pri0.textContent = 'Select Priority';
  const pri1 = document.createElement('option');
  pri1.id='high-pri'
  pri1.value = 'red';
  pri1.textContent = 'High';
  const pri2 = document.createElement('option');
  pri2.id='med-pri'
  pri2.value = 'yellow';
  pri2.textContent = 'Medium';
  const pri3 = document.createElement('option');
  pri3.id='low-pri'
  pri3.value = 'green';
  pri3.textContent = 'Low';

  //append priorities to dropdown selector
  // taskPriority.appendChild(pri0);
  taskPriority.appendChild(pri1);
  taskPriority.appendChild(pri2);
  taskPriority.appendChild(pri3);
  //append dropdown selector to form
  form.appendChild(taskPriority);

  // listen for 'submisson' event, store written description and selected priority
  // and add to new list 
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const newTaskDescription = event.target['new-task-description'].value;
    const newTaskPriority = event.target['task-priority'].value;
    createNewTask(newTaskDescription,newTaskPriority)
    form.reset(); 
  })
});

// given desc and priority, create new list item and add to list
const createNewTask = (toDo,toDoPriority) => {
  //create new list item
  let newTask = document.createElement('li');
  newTask.textContent = `${toDo} `;
  newTask.className=toDoPriority;
  newTask.style.color = toDoPriority;
  addToList(newTask);

  //create and add delete button
  let deleteButton = document.createElement('button');
  deleteButton.addEventListener('click',handleDelete);
  deleteButton.textContent = 'x';
  newTask.appendChild(deleteButton);

  //create edit button
  let editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  // create text input to edit button
  const editText = document.createElement('input');
  editText.type = 'text';
  editText.id='new-text-description';
  editText.placeholder='new description';
  // create submit button for input to edit button
  const editSubmit = document.createElement('input');
  editSubmit.type ='submit';
  editSubmit.id='new-text-submit';

  //add listen event for adding new text values for task
  editSubmit.addEventListener('click',(event) => {
    newTask.textContent=`${editText.value} `;
    newTask.append(deleteButton,editButton);
  })
  //add editing input to edit button
  editButton.addEventListener('click',()=> {
    newTask.append(editText,editSubmit);
  });
  newTask.appendChild(editButton);
};

//function adding to list
const addToList = (task) => {
  const taskList = document.getElementById('tasks');
  taskList.appendChild(task);
}

//function deleting item 
const handleDelete = (event) => {
  event.target.parentElement.remove();
}

// Reorder priority list descending from easiest to hardest
// const orderPrioritiesD = () => {
//   const lowPriority = document.querySelectorAll('.green');
//   const medPriority = document.querySelectorAll('.yellow');
//   const highPriority = document.querySelectorAll('.red');
  
//   const taskList = document.getElementById('tasks');

//   if (highPriority.length!==0){
//     for (i=0;i <=(lowPriority.length);i++) {
//       console.log(lowPriority[i]);
//       taskList.insertBefore(lowPriority[i],highPriority[0]);
//     }
//     for (i=0;i <=(medPriority.length);i++) {
//       taskList.insertBefore(medPriority[i],highPriority[0]);
//     }
//   } else if (highPriority.length===0 & medPriority!==0) {
//     for (i=0;i <=(lowPriority.length);i++) {
//       taskList.insertBefore(lowPriority[i],medPriority[0]);
//     }
//   }
  

// }

// const orderPrioritiesA = () => {
//   const lowPriority = document.querySelectorAll('.green');
//   const medPriority = document.querySelectorAll('.yellow');
//   const highPriority = document.querySelectorAll('.red');
  
//   const taskList = document.getElementById('tasks');

//   if (lowPriority.length!==0){
//     for (i=0;i < (highPriority.length+1);i++) {
//       taskList.insertBefore(highPriority[i],lowPriority[0]);
//     }
//     for (i=0;i < (medPriority.length+1);i++) {
//       taskList.insertBefore(medPriority[i],lowPriority[0]);
//     }
//   } else if (lowPriority.length===0 & medPriority!==0) {
//     for (i=0;i < (highPriority.length);i++) {
//       taskList.insertBefore(highPriority[i],medPriority[0]);
//     }
//   }
// }


// given solution
// document.addEventListener("DOMContentLoaded", () => {
//   //grab all the necessary DOM elements
//   //form and relevant input fields
//   const newTaskForm = document.getElementById("create-task-form");
//   const newTaskDescription = document.getElementById("new-task-description");
//   const newTaskPriority = document.getElementById("new-task-priority");

//   //ul where new tasks will live on the DOM
//   const newTaskUl = document.getElementById("tasks");

//   //attach event listeners
//   newTaskForm.addEventListener("submit", createNewTask);
// });

// const createNewTask = event => {
//   event.preventDefault();
//   //stop form from trying to submit
//   const newTaskDescription = document.getElementById("new-task-description");
//   const newTask = document.createElement("li");
//   newTask.innerText = newTaskDescription.value;

//   appendNewTask(newTask);
//   event.target.reset();
// };

// const appendNewTask = task => {
//   document.getElementById("tasks").appendChild(task);
// };
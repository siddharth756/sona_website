const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList")

addTaskBtn.addEventListener("click" , function(e) {
    e.preventDefault();
    taskList.innerHTML += `<li>${taskInput.value}</li>`
})


















// document.addEventListener("DOMContentLoaded", () => {
//   const taskInput = document.getElementById("taskInput");
//   const addTaskBtn = document.getElementById("addTaskBtn");
//   const taskList = document.getElementById("taskList");

//   // Add task function
//   function addTask() {
//     const taskText = taskInput.value.trim();
//     if (taskText === "") return;

//     const taskItem = document.createElement("li");
//     taskItem.classList.add("task");

//     const taskTextElem = document.createElement("span");
//     taskTextElem.classList.add("task-text");
//     taskTextElem.textContent = taskText;

//     const completeBtn = document.createElement("button");
//     completeBtn.classList.add("complete-btn");
//     completeBtn.textContent = "✔";
//     completeBtn.onclick = () => taskItem.classList.toggle("completed");

//     const deleteBtn = document.createElement("button");
//     deleteBtn.classList.add("delete-btn");
//     deleteBtn.textContent = "✖";
//     deleteBtn.onclick = () => taskItem.remove();

//     taskItem.appendChild(taskTextElem);
//     taskItem.appendChild(completeBtn);
//     taskItem.appendChild(deleteBtn);

//     taskList.appendChild(taskItem);
//     taskInput.value = "";
//   }

//   // Event listener for adding tasks
//   addTaskBtn.addEventListener("click", addTask);

//   // Add task on Enter key press
//   taskInput.addEventListener("keypress", (e) => {
//     if (e.key === "Enter") addTask();
//   });
// });

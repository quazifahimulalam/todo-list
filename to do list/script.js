
function addTask(){
    let tasklist = document.getElementById("taskList")
    let taskinput = document.getElementById("taskInput").value.trim()

    if(taskinput === "") return;

    let li = document.createElement("li");
    li.className = "flex justify-between item-center bg-gray-200 p-2 rounded-md";

    li.innerHTML = `
     <div class="flex items-center gap-2">
        <span class="task-text text-lg font-medium">${taskinput}</span>
        <span class="badge hidden bg-red-500 text-white text-xs px-2 py-1 rounded-full">Completed</span>
</div>
<div class="flex items-center justify-center gap-2">
   <button onclick="completeTask(this)" class="bg-green-500 text-white px-2 py-1 rounded-md hover:bg-green-600">Done</button>
   <button onclick="deleteTask(this)" class="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600">Delete</button>
</div>
    `;
    tasklist.appendChild(li);
    document.getElementById("taskInput").value = ""
}
function deleteTask(button){
      button.parentElement.parentElement.remove()
}
function completeTask(button){
    let tasktext = button.parentElement.previousElementSibling.querySelector(".task-text")

    let badge = button.parentElement.previousElementSibling.querySelector(".badge")

    tasktext.classList.toggle("line-through");
    badge.classList.toggle("hidden")
}


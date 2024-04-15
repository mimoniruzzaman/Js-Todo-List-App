const inputFrom = document.getElementById("input-form");
const newTask = document.getElementById("new-input-task");
const allTask = document.querySelector(".task");

inputFrom.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!newTask.value) {
    alert("Please Insert A New Task!");
    return;
  }

  // Create Task Div !
  const taskDiv = document.createElement("div");
  taskDiv.classList.add("content");
  allTask.appendChild(taskDiv);

  // Create Input !
  const taskInput = document.createElement("input");
  taskInput.type = "text";
  taskInput.value = newTask.value;
  taskInput.setAttribute("readonly", "readonly");
  taskDiv.appendChild(taskInput);

  // Action Input Div !
  const inputAction = document.createElement("div");
  inputAction.classList.add("action");

  // Edit Button !
  const editBtn = document.createElement("button");
  editBtn.innerHTML = "Edit";
  editBtn.classList.add("edit");
  inputAction.appendChild(editBtn);

  // Delete Button !!
  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "Delete";
  deleteBtn.classList.add("edit");
  inputAction.appendChild(deleteBtn);
  taskDiv.appendChild(inputAction);

  // Edite Task Value !!
  editBtn.addEventListener("click", () => {
    if (editBtn.innerHTML.toLowerCase() === "edit") {
      taskInput.removeAttribute("readonly");
      editBtn.innerHTML = "Save";
      taskInput.focus();
    } else {
      editBtn.innerHTML = "Edit";
      taskInput.setAttribute("readonly", "readonly");
    }
  });

  deleteBtn.addEventListener("click", () => {
    allTask.removeChild(taskDiv);
  });

  newTask.value = "";
});

const columns = document.querySelectorAll(".column");
let draggedTask = null;

document.addEventListener("click", (e) => {
  e.preventDefault();

  if (e.target.classList.contains("add-btn")) {
    const text = prompt("Enter your task");

    if (!text) return;

    const task = document.createElement("div");
    text.className = "task";
    text.textContent = text;

    task.setAttribute("draggable", true);

    e.target.previousElementSibling.appendChild(task);
  }
});

document.addEventListener("dragstart", (e) => {
  if (e.target.classList.contains("task")) {
    draggedTask = e.target;
    e.target.classList.add("dragging");
  }
});

document.addEventListener("dragend", (e) => {
  if (e.target.classList.contains("task")) {
    e.target.classList.remove("dragging");
    draggedTask = null;
  }
});

columns.forEach((col) => {
  col.addEventListener("dragover", (e) => {
    col.classList.add("drag-over");
  });

  col.addEventListener("dragleave", (e) => {
    col.classList.remove("drop-over");
  });

  col.addEventListener("drop", (e) => {
    col.classList.remove("drag-over");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const inputField = document.getElementById("itemInput");
  const addBtn = document.getElementById("addBtn");
  const listContainer = document.getElementById("list");

  addBtn.addEventListener("click", function () {
    const input = inputField.value.trim();
    if (input === "") alert("Mat kar lala, mara jayega");
    else {
      const li = document.createElement("li");
      li.textContent = input;
      listContainer.appendChild(li);
      inputField.value = "";
    }
  });
});

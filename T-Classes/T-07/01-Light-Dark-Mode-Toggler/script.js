document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggle-btn");
  const body = document.body;

  toggleButton.addEventListener("click", function () {
    body.classList.toggle("dark");
    toggleButton.innerText = body.classList.contains("dark")
      ? "Toggle Light"
      : "Toggle Dark";
  });
});

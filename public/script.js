// Handle dynamic page loading in SPA
document
  .getElementById("exercise-link")
  .addEventListener("click", loadExercisePage);

function loadExercisePage() {
  const contentContainer = document.getElementById("content-container");

  fetch("exercisepage.html") // Adjust this path if necessary
    .then((response) => response.text())
    .then((html) => {
      contentContainer.innerHTML = html; // Inject the fetched page content into the container
    })
    .catch((err) => console.warn("Error loading the exercise page:", err));
}

// Handle dynamic page loading in SPA
document
  .getElementById("exercise-link")
  .addEventListener("click", loadExercisePage);

// Configure the OIDC properties for Cognito
const cognitoAuthConfig = {
  authority: "https://cognito-idp.us-east-1.amazonaws.com/us-east-1_AlNPjKJtj",
  client_id: "6961qcc5ik6qg1rt0ucpa5vp8p",
  redirect_uri: "https://main.d2fzktvpiprrqk.amplifyapp.com/exercisepage.html", // Ensure this is the correct redirect URI
  response_type: "code",
  scope: "email openid phone",
};

// Create a new UserManager instance from the oidc-client-ts library
const userManager = new Oidc.UserManager(cognitoAuthConfig);

// Sign-in button handler
document.getElementById("signInBtn").addEventListener("click", () => {
  userManager.signinRedirect();
});

// Sign-out button handler (if needed in other pages)
document.getElementById("signOutBtn")?.addEventListener("click", () => {
  const logoutUri = "https://main.d2fzktvpiprrqk.amplifyapp.com/";
  userManager.signoutRedirect({ post_logout_redirect_uri: logoutUri });
});

// Check if user is already signed in
userManager.getUser().then((user) => {
  if (user) {
    console.log("User signed in:", user.profile);
    document.getElementById(
      "userInfo"
    ).innerText = `Hello, ${user.profile.email}`;
  } else {
    console.log("User not signed in");
  }
});

// Function to dynamically load the exercise page
function loadExercisePage() {
  const contentContainer = document.getElementById("content-container");

  fetch("exercisepage.html") // Adjust this path if necessary
    .then((response) => response.text())
    .then((html) => {
      contentContainer.innerHTML = html; // Inject the fetched page content into the container
    })
    .catch((err) => console.warn("Error loading the exercise page:", err));
}

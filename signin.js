// Import Amplify and Auth from the AWS Amplify library
import { Auth } from "aws-amplify";

// Configure Amplify (ensure aws-exports.js is correctly imported)
import awsconfig from "./aws-exports";
Auth.configure(awsconfig);

// Function to handle user login
async function signIn() {
  const email = document.getElementById("email").value; // Get the email input value
  const password = document.getElementById("password").value; // Get the password input value

  try {
    // Use AWS Amplify's Auth.signIn method to log in the user
    const user = await Auth.signIn(email, password);
    console.log("Successfully logged in:", user);

    // Redirect the user to the dashboard or home page after successful login
    window.location.href = "/dashboard.html"; // Change this URL to your desired destination
  } catch (error) {
    // Handle errors (e.g., incorrect username/password)
    console.error("Error logging in:", error);
    alert("Error logging in. Please check your credentials and try again.");
  }
}

// Attach the sign-in function to the login button click event
document.getElementById("submit").addEventListener("click", signIn);

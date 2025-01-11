// Import the necessary modules from AWS Amplify
import { Auth } from "aws-amplify";

// Configure AWS Amplify
import awsconfig from "./aws-exports"; // This should be your generated aws-exports.js file
Auth.configure(awsconfig);

// Function to handle user signup
async function signUp() {
  const username = document.getElementById("username").value; // Get username from input field
  const password = document.getElementById("password").value; // Get password from input field
  const email = document.getElementById("email").value; // Get email from input field

  try {
    const { user } = await Auth.signUp({
      username, // Username
      password, // Password
      attributes: {
        email, // Email
        // You can add more attributes like phone_number, given_name, etc.
      },
    });
    console.log(user); // You can log or alert the user for successful signup
    alert("Signup successful!");
  } catch (error) {
    console.error(error);
    alert("Error signing up: " + error.message);
  }
}

// Event listener for the signup form submission
document.getElementById("signupButton").addEventListener("click", signUp);

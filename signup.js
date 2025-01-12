// Import AWS Amplify
import { Auth } from "aws-amplify";

// Import your Amplify configuration
import awsconfig from "./aws-exports"; // Adjust path as needed

// Configure AWS Amplify
Auth.configure(awsconfig);

async function signUp(event) {
  event.preventDefault(); // Prevent form submission

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  console.log("Email: ", email);
  console.log("Password: ", password);
  console.log("Confirm Password: ", confirmPassword);

  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  try {
    const { user } = await Auth.signUp({
      username: email,
      password,
      attributes: { email },
    });

    console.log(user); // Check if the user is being created
    alert("Signup successful!");
    window.location.href = "exercisepage.html";
  } catch (error) {
    console.error("Error signing up: ", error);
    alert("Error signing up: " + error.message);
  }
}

// Event listener for the signup button click
document.getElementById("signupButton").addEventListener("click", signUp);

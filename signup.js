import { Auth } from "aws-amplify";
import awsconfig from "./src/aws-exports"; // Adjust path if necessary

Auth.configure(awsconfig);

async function signUp(event) {
  event.preventDefault(); // Prevent form submission

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  // Validate the input
  if (!email || !password || !confirmPassword) {
    alert("Please fill in all fields.");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  // Password validation (optional)
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/; // At least 6 characters, with letters and numbers
  if (!passwordRegex.test(password)) {
    alert(
      "Password must be at least 6 characters and contain both letters and numbers."
    );
    return;
  }

  try {
    const { user } = await Auth.signUp({
      username: email, // Use email as the username
      password,
      attributes: { email }, // You can add other attributes if needed
    });

    console.log(user); // Log the user object for debugging
    alert("Signup successful!");
    window.location.href = "exercisepage.html"; // Redirect after successful signup
  } catch (error) {
    console.error("Error signing up: ", error);
    alert("Error signing up: " + error.message);
  }
}

// Event listener for the signup button click
document.getElementById("signupButton").addEventListener("click", signUp);

import { AuthProvider } from "react-oidc-context";
import ReactDOM from "react-dom/client"; // Ensure this is imported
import React from "react";
import App from "./App"; // Import your App component
import { UserManager } from "oidc-client-ts"; // Import the UserManager from oidc-client-ts

const cognitoAuthConfig = {
  authority: "https://cognito-idp.us-east-1.amazonaws.com/us-east-1_AlNPjKJtj",
  client_id: "6961qcc5ik6qg1rt0ucpa5vp8p",
  redirect_uri: "https://main.d2fzktvpiprrqk.amplifyapp.com/", // Adjust as needed
  response_type: "code",
  scope: "phone openid email",
};

// Create an instance of UserManager
const userManager = new UserManager(cognitoAuthConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));

// Wrap the application with AuthProvider to provide auth context
root.render(
  <React.StrictMode>
    <AuthProvider {...cognitoAuthConfig}>
      <App />
    </AuthProvider>
  </React.StrictMode>
);

// Adding event listener for SignIn button
document.getElementById("signInBtn")?.addEventListener("click", () => {
  // Trigger the signinRedirect from UserManager
  userManager.signinRedirect();
});

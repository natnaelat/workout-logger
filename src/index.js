// index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App"; // Ensure this matches the path to your App component
import "./index.css";
import { AuthProvider } from "react-oidc-context";

const cognitoAuthConfig = {
  authority: "https://cognito-idp.us-east-1.amazonaws.com/us-east-1_AlNPjKJtj",
  client_id: "6961qcc5ik6qg1rt0ucpa5vp8p",
  redirect_uri: "https://main.d2fzktvpiprrqk.amplifyapp.com/",
  response_type: "code",
  scope: "email openid phone",
};

const root = ReactDOM.createRoot(document.getElementById("root"));

// wrap the application with AuthProvider
root.render(
  <React.StrictMode>
    <AuthProvider {...cognitoAuthConfig}>
      <App />
    </AuthProvider>
  </React.StrictMode>
);

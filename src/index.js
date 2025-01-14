import React from "react";
import ReactDOM from "react-dom/client";
import { AuthProvider } from "react-oidc-context";
import App from "./App";
import "./index.css";

// OIDC configuration for Cognito
const cognitoAuthConfig = {
  authority: "https://cognito-idp.us-east-1.amazonaws.com/us-east-1_AlNPjKJtj",
  client_id: "6961qcc5ik6qg1rt0ucpa5vp8p",
  redirect_uri: "https://main.d2fzktvpiprrqk.amplifyapp.com/",
  response_type: "code",
  scope: "phone openid email",
};

const root = ReactDOM.createRoot(document.getElementById("root"));

// Wrap the application with AuthProvider to provide authentication context
root.render(
  <React.StrictMode>
    <AuthProvider {...cognitoAuthConfig}>
      <App />
    </AuthProvider>
  </React.StrictMode>
);

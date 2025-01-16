// index.js
import React from "react"; // Import React
import ReactDOM from "react-dom/client"; // Import ReactDOM
import { AuthProvider } from "react-oidc-context";
import App from "./App"; // Import your App component
import "./index.css";

const cognitoAuthConfig = {
  authority: "https://cognito-idp.us-east-1.amazonaws.com/us-east-1_hQ49bQz4C",
  client_id: "1d3ouichhlsmuldvukp7u0altg",
  redirect_uri: "https://main.d3q0mk338bbbko.amplifyapp.com/exercise",
  response_type: "code",
  scope: "phone openid email",
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

// index.js
import React from "react"; // Import React
import ReactDOM from "react-dom/client"; // Import ReactDOM
import { AuthProvider } from "react-oidc-context";
import App from "./App"; // Import your App component

const cognitoAuthConfig = {
  authority: "https://cognito-idp.us-east-1.amazonaws.com/us-east-1_4KSxWHrdJ",
  client_id: "12q7uj83n3hppb93ram0s5t6bk",
  redirect_uri: "https://main.d2fzktvpiprrqk.amplifyapp.com/",
  response_type: "code",
  scope: "aws.cognito.signin.user.admin email openid phone profile",
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

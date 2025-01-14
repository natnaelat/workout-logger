import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Amplify } from "aws-amplify";
import awsconfig from "./aws-exports"; // Ensure the path is correct
import "./index.css";

// Configure Amplify with the aws-exports.js
Amplify.configure(awsconfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

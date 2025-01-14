import React, { useState, useEffect } from "react";
import { Auth } from "aws-amplify";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Check the current session on component mount
  useEffect(() => {
    const checkUser = async () => {
      try {
        const currentUser = await Auth.currentAuthenticatedUser();
        setUser(currentUser);
      } catch (err) {
        setError("User not authenticated");
      } finally {
        setLoading(false);
      }
    };

    checkUser();
  }, []);

  // Sign out logic
  const signOut = async () => {
    try {
      await Auth.signOut();
      setUser(null);
    } catch (err) {
      console.error("Error signing out", err);
    }
  };

  // Sign in redirect logic
  const signIn = async () => {
    try {
      await Auth.federatedSignIn();
    } catch (err) {
      setError("Error during sign-in");
    }
  };

  // Loading, error, or authenticated user view
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Show authenticated user details or sign-in button
  if (user) {
    return (
      <div>
        <pre>Hello: {user.username}</pre>
        <pre>Email: {user.attributes.email}</pre>
        <button onClick={signOut}>Sign out</button>
      </div>
    );
  }

  return (
    <div>
      <button onClick={signIn}>Sign in with AWS Cognito</button>
    </div>
  );
}

export default App;

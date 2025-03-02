import React from "react";
import { useAuth } from "react-oidc-context";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; // Updated imports
import "./App.css"; // Assuming your styles are in App.css
import ExercisePage from "./exercisepage"; // Import the ExercisePage component
import LogPage from "./loggerpage"; // Import the LogPage component

function App() {
  // const auth = useAuth();

  // const signOutRedirect = () => {
  //   // const clientId = "1d3ouichhlsmuldvukp7u0altg";
  //   // const logoutUri = "https://main.d3q0mk338bbbko.amplifyapp.com/";
  //   // const cognitoDomain =
  //   //   "https://us-east-1hq49bqz4c.auth.us-east-1.amazoncognito.com";

  //   // Sign out from local app and redirect to Cognito logout
  //   auth.removeUser().then(() => {
  //     window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(
  //       logoutUri
  //     )}`;
  //   });
  // };

  // const handleSignIn = () => {
  //   auth.signinRedirect();
  // };

  // if (auth.isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (auth.error) {
  //   return <div>Encountering error... {auth.error.message}</div>;
  // }

  return (
    <Router>
      <div className="App">
        {/* Navigation Bar */}
        <nav className="navbar">
          <div className="navbar__container">
            <a href="/" id="navbar__logo">
              <i className="fas fa-dumbbell"></i> Workout Tracker
            </a>
            <div className="navbar__toggle" id="mobile-menu">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
            <ul className="navbar__menu">
              <li className="navbar__item">
                <Link to="/" className="navbar__links" id="home-link">
                  Home
                </Link>
              </li>
              <li className="navbar__item">
                <Link
                  to="/exercise"
                  className="navbar__links"
                  id="exercise-link"
                >
                  Logs
                </Link>
              </li>
              <li className="navbar__btn">
                {auth.isAuthenticated ? (
                  <button className="button" onClick={signOutRedirect}>
                    Sign Out
                  </button>
                ) : (
                  <button
                    className="button"
                    onClick={() => auth.signinRedirect()}
                  >
                    Sign In
                  </button>
                )}
              </li>
            </ul>
          </div>
        </nav>

        {/* Routes for the app */}
        <Routes>
          {/* Home Route */}
          <Route
            path="/"
            element={
              <>
                <div className="main">
                  <div className="main__container">
                    <div className="main__content">
                      <h1>Improve Your Health.</h1>
                      <h2>Reach Your Goals.</h2>
                      <button className="main__btn" onClick={handleSignIn}>
                        Get Started
                      </button>
                    </div>
                    <div className="main__img--container">
                      <img
                        src="/images/pic1.svg"
                        alt="Workout illustration"
                        id="main__img"
                      />
                    </div>
                  </div>
                </div>
                <div className="services">
                  <h1>Change Your Life Today</h1>
                  <div className="services__container">
                    <div className="services__card">
                      <h2>See Change</h2>
                      <p>Start Today</p>
                      <button
                        className="button get-started"
                        onClick={handleSignIn}
                      >
                        Get Started
                      </button>
                    </div>
                    <div className="services__card">
                      <h2>Are you Ready?</h2>
                      <p>Take the leap</p>
                      <button
                        className="button get-started"
                        onClick={handleSignIn}
                      >
                        Get Started
                      </button>
                    </div>
                  </div>
                </div>
              </>
            }
          />
          {/* Exercise Page Route */}
          <Route path="/exercise" element={<ExercisePage />} />
          {/* Log Page Route */}
          <Route path="/log" element={<LogPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

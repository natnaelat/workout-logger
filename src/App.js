import React from "react";
import { UserManager } from "oidc-client-ts";

const cognitoAuthConfig = {
  authority: "https://cognito-idp.us-east-1.amazonaws.com/us-east-1_AlNPjKJtj",
  client_id: "6961qcc5ik6qg1rt0ucpa5vp8p",
  redirect_uri: "https://main.d2fzktvpiprrqk.amplifyapp.com/",
  response_type: "code",
  scope: "phone openid email",
};

const userManager = new UserManager(cognitoAuthConfig);

function App() {
  const handleSignIn = () => {
    userManager.signinRedirect();
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar__container">
          <a href="/" id="navbar__logo">
            <i className="fas fa-dumbbell"></i>Workout Tracker
          </a>
          <div className="navbar__toggle" id="mobile-menu">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <ul className="navbar__menu">
            <li className="navbar__item">
              <a href="/" className="navbar__links" id="home-link">
                Home
              </a>
            </li>
            <li className="navbar__item">
              <a href="#" className="navbar__links" id="logs-link">
                Logs
              </a>
            </li>
            <li className="navbar__btn">
              <button className="button" id="signInBtn" onClick={handleSignIn}>
                Sign In
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <div className="main">
        <div className="main__container">
          <div className="main__content">
            <h1>Improve Your Health.</h1>
            <h2>Reach Your Goals.</h2>
            <button className="main__btn">
              <a href="/signup.html">Get Started</a>
            </button>
          </div>
          <div className="main__img--container">
            <img src="/images/pic1.svg" alt="pic" id="main__img" />
          </div>
        </div>
      </div>

      <div className="services">
        <h1>Change Your Life Today</h1>
        <div className="services__container">
          <div className="services__card">
            <h2>See Change</h2>
            <p>Start Today</p>
            <button>
              <a href="/signup.html">Get Started</a>
            </button>
          </div>
          <div className="services__card">
            <h2>Are you Ready?</h2>
            <p>Take the leap</p>
            <button>
              <a href="/signup.html">Get Started</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

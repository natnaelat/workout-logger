import React from "react";
import { useAuth } from "react-oidc-context";
import "./App.css"; // Assuming your styles are in App.css

function App() {
  const auth = useAuth();

  const signOutRedirect = () => {
    const clientId = "5cin4j2av72fvhg3q19k62et5a";
    const logoutUri = "<logout uri>";
    const cognitoDomain = "https://<user pool domain>";
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(
      logoutUri
    )}`;
  };

  const handleSignIn = () => {
    auth.signinRedirect();
  };

  if (auth.isLoading) {
    return <div>Loading...</div>;
  }

  if (auth.error) {
    return <div>Encountering error... {auth.error.message}</div>;
  }

  return (
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
              {auth.isAuthenticated ? (
                <button className="button" onClick={() => auth.removeUser()}>
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

      {/* Main Section */}
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

      {/* Services Section */}
      <div className="services">
        <h1>Change Your Life Today</h1>
        <div className="services__container">
          <div className="services__card">
            <h2>See Change</h2>
            <p>Start Today</p>
            <button className="button get-started" onClick={handleSignIn}>
              Get Started
            </button>
          </div>
          <div className="services__card">
            <h2>Are you Ready?</h2>
            <p>Take the leap</p>
            <button className="button get-started" onClick={handleSignIn}>
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* User Info Section */}
      {auth.isAuthenticated && (
        <div id="userInfo">
          <pre>Hello: {auth.user?.profile.email}</pre>
          <pre>ID Token: {auth.user?.id_token}</pre>
          <pre>Access Token: {auth.user?.access_token}</pre>
          <pre>Refresh Token: {auth.user?.refresh_token}</pre>
        </div>
      )}
    </div>
  );
}

export default App;

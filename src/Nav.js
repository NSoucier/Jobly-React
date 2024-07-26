import "./Nav.css";
import { Link } from "react-router-dom";

function Nav({ currentUser, logout }) {

  function logoutUser() {
    logout();
  }

  return (
    <>
      <p id="nav">
        <span id="brand">
          <Link to="/" id="nav-link">Jobly</Link>
        </span>

        {currentUser ? (
          <>

          </>
        ) : ''}

        {currentUser ? (
          <>
            <span id="route">
              <Link to="/companies" id="nav-link">Companies</Link>
            </span>
            <span id="route">
              <Link to="/jobs" id="nav-link">Jobs</Link>
            </span>
            <span id="signup">
              <Link to="/profile" id="nav-link">{currentUser}</Link>
            </span>
            <span id="login">
              <Link to="/" onClick={logout} id="nav-link">Logout</Link>
            </span>
          </>
        ) : (
          <>
            <span id="signup">
              <Link to="/signup" id="nav-link">Sign up</Link>
            </span>
            <span id="login">
              <Link to="/login" id="nav-link">Login</Link>
            </span>
          </>
        )}
      </p>
    </>
  );
}

export default Nav;

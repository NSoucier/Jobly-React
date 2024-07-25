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
          <Link to="/">Jobly</Link>
        </span>
        <span id="route">
          <Link to="/companies">Companies</Link>
        </span>
        <span id="route">
          <Link to="/jobs">Jobs</Link>
        </span>

        {currentUser ? (
          <>
            <span id="signup">
              <Link to="/profile">{currentUser}</Link>
            </span>
            <span id="login">
              <Link to="/" onClick={logout}>Logout</Link>
            </span>
          </>
        ) : (
          <>
            <span id="signup">
              <Link to="/signup">Sign up</Link>
            </span>
            <span id="login">
              <Link to="/login">Login</Link>
            </span>
          </>
        )}
      </p>
    </>
  );
}

export default Nav;

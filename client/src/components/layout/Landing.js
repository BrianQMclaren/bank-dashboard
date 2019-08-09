import React from "react";
import { Link } from "react-router-dom";

class Landing extends React.Component {
  render() {
    return (
      <div className="landing">
        <header>
          <Link className="logo" to="/">
            <h1>
              <strong>UNI</strong>BANK
            </h1>
          </Link>

          <button className="form-register-button">
            <Link to="/register">Sign up</Link>
          </button>
          <button className="form-login-button">
            <Link to="/login">Login</Link>
          </button>
        </header>
      </div>
    );
  }
}

export default Landing;

import React from "react";
import { Link } from "@reach/router";

class Register extends React.Component {
  state = {
    name: "",
    email: "",
    password: "",
    errors: {}
  };

  handleOnChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleOnSubmit = e => {
    e.preventDefault();
  };

  render() {
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    };
    console.log(newUser);
    const { errors } = this.state;
    return (
      <div>
        <nav>
          <Link className="logo" to="/">
            <strong>UNI</strong>BANK
          </Link>
          <h3>Register</h3>
          <Link to="/login">Log In</Link>
        </nav>

        <form className="form-register" onSubmit={this.handleOnSubmit}>
          <input
            onChange={this.handleOnChange}
            value={this.state.name}
            error={errors.name}
            type="text"
            id="name"
            placeholder="name"
          />
          <input
            onChange={this.handleOnChange}
            value={this.state.email}
            error={errors.email}
            type="email"
            id="email"
            placeholder="email"
          />
          <input
            onChange={this.handleOnChange}
            value={this.state.password}
            error={errors.password}
            type="password"
            id="password"
            placeholder="password"
          />
          <button className="form-register-button" type="submit">
            Sign up
          </button>
        </form>
      </div>
    );
  }
}

export default Register;

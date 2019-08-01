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
    this.setState({ [e.target.id]: [e.target.value] });
  };

  handleOnSubmit = e => {
    e.preventDefault();
  };

  render() {
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
            errors={errors.name}
            placeholder="name"
          />
          <input
            onChange={this.handleOnChange}
            value={this.state.email}
            errors={errors.email}
            placeholder="email"
          />
          <input
            onChange={this.handleOnChange}
            value={this.state.password}
            errors={errors.password}
            placeholder="password"
          />
          <button type="submit">Sign up</button>
        </form>
      </div>
    );
  }
}

export default Register;

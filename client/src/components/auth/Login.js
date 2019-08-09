import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";

class Login extends React.Component {
  state = {
    email: "",
    password: "",
    errors: {}
  };

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/accounts"); // push user to account when login
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/accounts"); // push user to dashboard when they login
    }
  }

  handleOnChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleOnSubmit = e => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(userData);
  };
  render() {
    const { errors } = this.state;
    return (
      <div>
        <nav>
          <Link className="logo" to="/">
            <strong>UNI</strong>BANK
          </Link>
          <h3>Login</h3>
          <Link to="/register">Register</Link>
        </nav>
        <form className="form-login" onSubmit={this.handleOnSubmit}>
          <input
            type="text"
            onChange={this.handleOnChange}
            value={this.state.email}
            error={errors.email}
            id="email"
            placeholder="email"
          />
          <input
            type="text"
            onChange={this.handleOnChange}
            value={this.state.password}
            error={errors.password}
            id="password"
            placeholder="password"
          />
          <button className="form-login-button" type="submit">
            Login
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);

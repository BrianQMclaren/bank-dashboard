import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";

class Register extends React.Component {
  state = {
    name: "",
    email: "",
    password: "",
    password2: "",
    errors: {}
  };

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/accounts");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  handleOnChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleOnSubmit = e => {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(newUser, this.props.history);
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
            error={errors.name}
            type="text"
            id="name"
            placeholder="Name"
          />
          <span>{errors.name}</span>
          <input
            onChange={this.handleOnChange}
            value={this.state.email}
            error={errors.email}
            type="email"
            id="email"
            placeholder="Email"
          />
          <span>{errors.email}</span>
          <input
            onChange={this.handleOnChange}
            value={this.state.password}
            error={errors.password}
            type="password"
            id="password"
            placeholder="Password"
          />
          <span>{errors.password}</span>
          <input
            onChange={this.handleOnChange}
            value={this.state.password2}
            error={errors.password2}
            type="password"
            id="password2"
            placeholder="Confirm password"
          />
          <span>{errors.password2}</span>
          <button className="form-register-button" type="submit">
            Sign up
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
  { registerUser }
)(withRouter(Register));

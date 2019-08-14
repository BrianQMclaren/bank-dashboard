import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import logout from "../../img/icons8-logout-rounded-up-30.png";
import notification from "../../img/icons8-topic-push-notification-24.png";
import profile from "../../img/icons8-circled-user-male-skin-type-6-30.png";

class Navigation extends React.Component {
  state = {
    query: ""
  };

  handleSearchTerm = event => {
    this.setState({
      query: event.target.value
    });
  };

  handleLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;
    return (
      <nav>
        <Link className="logo" to="/">
          <strong>UNI</strong>BANK
        </Link>
        <input
          onChange={this.handleSearchTerm}
          type="text"
          value={this.state.query}
          placeholder="Search"
        />
        <Link className="transfer" to="/transfer">
          <button className="btn--default" type="button" name="button">
            Money Transfer
          </button>
        </Link>
        <ul className="navbar">
          <li className="profile">
            <img src={profile} alt="profile face" />
            Hello, {user.name}
          </li>
          <li>
            <img src={notification} alt="notification icon" />
          </li>
          <li className="logout">
            Logout
            <img
              onClick={this.handleLogoutClick}
              src={logout}
              alt="logout icon"
            />
          </li>
        </ul>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  plaid: state.plaid
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Navigation);

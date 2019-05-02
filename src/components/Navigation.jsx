import React from "react";
import { Link } from "@reach/router";
import logout from "../../public/img/icons8-logout-rounded-up-30.png";
import notification from "../../public/img/icons8-topic-push-notification-24.png";
import profile from "../../public/img/icons8-circled-user-male-skin-type-6-30.png";

class Navigation extends React.Component {
  state = {
    query: ""
  };

  handleSearchTerm = event => {
    this.setState({
      query: event.target.value
    });
  };
  render() {
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
        <Link to="/account">
          <button className="btn--default" type="button" name="button">
            Money Transfer
          </button>
        </Link>
        <ul className="navbar">
          <li className="profile">
            <img src={profile} alt="profile face" />
            Hello, Thomas
          </li>
          <li>
            <img src={notification} alt="notification icon" />
          </li>
          <li className="logout">
            <img src={logout} alt="logout icon" />
            Logout
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;

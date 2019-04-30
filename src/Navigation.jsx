import React from "react";
import { Link } from "@reach/router";

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
        <ul>
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

          <li>Hello Brian</li>
          <li>Notifications</li>
          <li>Logout</li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;

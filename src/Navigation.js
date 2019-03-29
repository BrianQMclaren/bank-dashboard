import React from "react";

class Navigation extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <input type="text" name="search" value="Search" />
          <button className="btn--default" type="button" name="button">
            Money Transfer
          </button>
          <li>Hello Brian</li>
          <li>Notifications</li>
          <li>Logout</li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;

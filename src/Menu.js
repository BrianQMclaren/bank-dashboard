import React from "react";

class Menu extends React.Component {
  render() {
    return (
      <section className="side-menu">
        <aside>
          <ul className="sidebar">
            <i className="fas fa-home" />
            <li>Dashboard</li>
            <i className="fas fa-briefcase" />
            <li>Accounts</li>
            <i className="fas fa-money-bill-alt" />
            <li>Savings</li>
            <i className="fas fa-credit-card" />
            <li>Cards</li>
            <i className="fas fa-archive" />
            <li>Loans</li>
            <i className="fas fa-chart-line" />
            <li>Investments</li>
            <i className="fas fa-file-alt" />
            <li>Contacts</li>
          </ul>
        </aside>
      </section>
    );
  }
}

export default Menu;

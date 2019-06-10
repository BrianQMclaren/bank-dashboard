import React from "react";

const Menu = props => {
  return (
    <section className="side-menu">
      <aside>
        <ul className="sidebar">
          <i className="fas fa-home active" />
          <li>{props.home}</li>
          <i className="fas fa-briefcase" />
          <li>{props.savings}</li>
          <i className="fas fa-money-bill-alt" />
          <li>{props.bills}</li>
          <i className="fas fa-credit-card" />
          <li>{props.credit}</li>
          <i className="fas fa-archive" />
          <li>{props.loans}</li>
          <i className="fas fa-chart-line" />
          <li>{props.invest}</li>
          <i className="fas fa-file-alt" />
          <li>{props.contact}</li>
        </ul>
      </aside>
    </section>
  );
};

export default Menu;

import React from "react";
import { render } from "react-dom";
import { Link } from "@reach/router";

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <Link to="/">D3Bank Dashboard</Link>
        </header>

        <div className="wrapper">
          <nav>
            <ul>
              <input type="text" name="search" value="Search" />
              <button class="btn--default" type="button" name="button">
                Money Transfer
              </button>
              <li>Hello Brian</li>
              <li>Notifitcations</li>
              <li>Logout</li>
            </ul>
          </nav>
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

          <header>
            <h3>Dashboard</h3>
            <p>You are in the main panel</p>
            <button
              className="btn--success modules-button"
              type="button"
              name="button"
            >
              Add Modules
            </button>
          </header>

          <section>
            <div className="top-dashboard">
              <div className="panel">
                <h3>summary</h3>
                <p>balance</p>
                <p className="balance">10 346,78 PLN</p>
                <button
                  className="btn--info details-button"
                  type="button"
                  name="button"
                >
                  More Details
                </button>
              </div>
              <div className="panel">
                <div className="cards-header">
                  <h3>your cards</h3>
                  <div className="cards">
                    <select>
                      <option value="">**** **** **** 0789</option>
                    </select>
                  </div>
                </div>

                <h3 className="name">Tomasz Kowalski</h3>
                <ul>
                  <li>Card:</li>
                  <li>Card Type:</li>
                  <li>Account:</li>
                  <li>Card Number:</li>
                  <li>Expiry date:</li>
                  <li>Status:</li>
                  <li>Blocked:</li>
                  <li>Debit</li>
                  <li className="cus-accnt">Debit MasterCard PayPass</li>
                  <li className="cus-accnt">Saving Account</li>
                  <li className="cus-accnt">687676******0789</li>
                  <li className="cus-accnt">31.03.2019</li>
                  <li className="cus-accnt">Active</li>
                  <li className="cus-accnt">743.00 PLN</li>
                </ul>
                <div className="acc-options">
                  <p>
                    <a href="" className="more-details">
                      More Details
                    </a>
                  </p>
                  <div className="card-button">
                    <button className="btn--info" type="button" name="button">
                      Withhold Card
                    </button>
                    <button
                      className="btn--success"
                      type="button"
                      name="button"
                    >
                      Change Pin
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bottom-dashboard">
              <div className="panel bottom first-child">
                <div className="history">
                  <h4>History</h4>
                  <h4 className="active">today</h4>
                  <h4>yesterday</h4>
                  <div className="transactions">
                    <div className="row">
                      <p>Cafe Latte - Starbucks</p>
                      <p>$5.89</p>
                    </div>
                    <div className="row">
                      <p>Double Bacon Cheesburger - ShackShake</p>
                      <p>$14.42</p>
                    </div>
                    <div className="row">
                      <p>Iphone XR - Apple HQ</p>
                      <p>$749.99</p>
                    </div>
                    <div className="row">
                      <p>Amazon Prime - HBO</p>
                      <p>$14.99</p>
                    </div>
                    <div className="row">
                      <p>Project - Kickstarter</p>
                      <p>$29.99</p>
                    </div>
                  </div>
                  <button
                    className="btn--info view-button"
                    type="button"
                    name="button"
                  >
                    View More
                  </button>
                </div>
              </div>
              <div className="panel bottom">
                <div className="charges">
                  <h4>Charges</h4>
                  <h4 className="active">week</h4>
                  <h4>month</h4>
                </div>
                <button
                  className="btn--info view-button"
                  type="button"
                  name="button"
                >
                  More Details
                </button>
              </div>
              <div className="panel bottom last-child">
                <h4>Messages</h4>
                <div className="msg-board">
                  <div className="row">
                    <p>
                      Lorem ipsum dolor sit, amet consectetur elit. Distinctio
                      officiis officia vitae perspiciatis!
                    </p>
                    <p className="name">Karmen Electra</p>
                  </div>
                  <div className="row">
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Distinctio officiis officia vitae perspiciatis!
                    </p>
                    <p className="name">Monika Nowaz</p>
                  </div>
                  <div className="row">
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Distinctio officiis officia vitae perspiciatis!
                    </p>
                    <p className="name">Debbie Major</p>
                  </div>
                  <div className="row">
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Distinctio officiis officia vitae perspiciatis!
                    </p>
                    <p className="name">Brandon Jones</p>
                  </div>
                </div>
                <button
                  className="btn--info view-button"
                  type="button"
                  name="button"
                >
                  View More
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

render(React.createElement(App), document.getElementById("root"));

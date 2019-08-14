import React from "react";
import "core-js/stable";
import "regenerator-runtime/runtime";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getTransactions, addAccount } from "../../actions/accountActions";
import TopPanel from "./TopPanel";
import BottomPanel from "./BottomPanel";
import LineChart from "../dashboard/LineChart";
import DonutChart from "../dashboard/DonutChart";
import credit from "../../img/icons8-mastercard.svg";

class Panels extends React.Component {
  componentDidMount() {
    const { accounts } = this.props;
    this.props.getTransactions(accounts);
  }

  //add account
  handleOnSuccess = (token, metadata) => {
    const { accounts } = this.props;
    const plaidData = {
      public_token: token,
      metadata: metadata,
      accounts: accounts
    };
    this.props.addAccount(plaidData);
  };

  render() {
    const { user, accounts } = this.props;
    const { transactions } = this.props.plaid;

    console.log(transactions);

    return (
      <section>
        <div className="top-dashboard">
          <TopPanel>
            <h3>summary</h3>
            <p>balance</p>
            <p className="balance">10,346.78 USD</p>
            <div className="line">
              <LineChart />
            </div>
            <button
              className="btn--info details-button"
              type="button"
              name="button"
            >
              More Details
            </button>
          </TopPanel>
          <TopPanel>
            <div className="cards-header">
              <h3>your cards</h3>
              <div className="cards">
                <select>
                  <option value="">**** **** **** 0789</option>
                </select>
              </div>
            </div>
            <div className="customer-account">
              <h3 className="name">{user.name}</h3>
              <ul className="customer-acc">
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
                <li className="cus-accnt">687676078977****</li>
                <li className="cus-accnt">31.03.2019</li>
                <li className="cus-accnt">Active</li>
                <li className="cus-accnt">743.00 USD</li>
              </ul>
              <img
                className="cus-credit-card"
                src={credit}
                alt="visa credit card"
              />
            </div>

            <div className="acc-options">
              <p>
                <Link to="/" className="more-details">
                  More Details
                </Link>
              </p>
              <div className="card-button">
                <button className="btn--info" type="button" name="button">
                  Withhold Card
                </button>
                <button className="btn--success" type="button" name="button">
                  Change Pin
                </button>
              </div>
            </div>
          </TopPanel>
        </div>

        <div className="bottom-dashboard">
          <BottomPanel className="first-child">
            <div className="history">
              <h4>History</h4>
              <h4 className="active">today</h4>
              <h4>yesterday</h4>

              {transactions.map(account => {
                return account.transactions.map(transaction => {
                  return (
                    <>
                      <div
                        key={transaction.transaction_id}
                        className="transactions"
                      >
                        <div className="row">
                          <p>{transaction.name}</p>
                          <p>${transaction.amount}</p>
                        </div>
                      </div>
                    </>
                  );
                });
              })}

              <button
                className="btn--info view-button"
                type="button"
                name="button"
              >
                View More
              </button>
            </div>
          </BottomPanel>

          <BottomPanel>
            <div className="charges">
              <h4>Charges</h4>
              <h4 className="active">week</h4>
              <h4>month</h4>
            </div>
            <div className="chart">
              <DonutChart width={300} height={200} />
            </div>
            <button
              className="btn--info view-button"
              type="button"
              name="button"
            >
              More Details
            </button>
          </BottomPanel>

          <BottomPanel className="last-child">
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
          </BottomPanel>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  plaid: state.plaid
});

export default connect(
  mapStateToProps,
  { getTransactions, addAccount }
)(Panels);

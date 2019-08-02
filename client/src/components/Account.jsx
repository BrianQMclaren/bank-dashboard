import React from "react";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { getAccounts, addAccount } from "../../actions/accountActions";
import Dashboard from "./Dashboard";
import PlaidLink from "react-plaid-link";
import plaid from "plaid";

const PLAID_CLIENT_ID = process.env.CLIENT_ID;
const PLAID_SECRET = process.env.SECRET;
const PLAID_PUBLIC_KEY = process.env.PUBLIC_KEY;

const client = new plaid.Client(
  PLAID_CLIENT_ID,
  PLAID_SECRET,
  PLAID_PUBLIC_KEY,
  plaid.environments.sandbox,
  { version: "2018-05-22" }
);

class Account extends React.Component {
  componentDidMount() {
    this.props.getAccounts();
  }

  // Add account
  handleOnSuccess = (token, metadata) => {
    const plaidData = {
      public_token: token,
      metadata: metadata
    };
    this.props.addAccount(plaidData);
  };

  // Logout
  handleLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;
    const { accounts, accountsLoading } = this.props.plaid;

    let dashboardContent;

    if (accounts == null || accountsLoading) {
      dashboardContent = <div>Loading...</div>;
    } else if (accounts.length > 0) {
      dashboardContent = <Dashboard user={user} accounts={accounts} />;
    } else {
      // user has no linked accounts
      dashboardContent = (
        <div className="wrapper">
          <h3>
            Welcome, <b>{user.name}</b>
          </h3>
          <p>To get started link your first bank account</p>
          <>
            <PlaidLink
              className="plaid"
              clientName="UNIBANK"
              env="sandbox"
              product={["auth", "transactions"]}
              publicKey={process.env.PUBLIC_KEY}
              onExit={this.handleLogoutClick}
              onSuccess={this.handleOnSuccess}
              onScriptLoad={() => this.setState({ loaded: true })}
            >
              Open Link and connect your bank!
            </PlaidLink>
          </>
        </div>
      );
    }
    return <div>{dashboardContent}</div>;
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  plaid: state.plaid
});

export default connect(
  mapStateToProps,
  { logoutUser, getAccounts, addAccount }
)(Account);

import React from "react";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { getAccounts, addAccount } from "../../actions/accountActions";
import Dashboard from "./Dashboard";
import PlaidLink from "react-plaid-link";

class Accounts extends React.Component {
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
      // user has linked accounts
      dashboardContent = <Dashboard user={user} accounts={accounts} />;
    } else {
      // user has no linked accounts
      dashboardContent = (
        <div className="plaid-landing">
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
              publicKey={"e3b9a451ef03d85716196f21f33e1f"}
              onExit={this.handleLogoutClick}
              onSuccess={this.handleOnSuccess}
              onScriptLoad={() => this.setState({ loaded: true })}
            >
              Open Link and connect your bank!
            </PlaidLink>
            <button
              onClick={this.onLogoutClick}
              className="form-logout-button plaid"
            >
              Logout
            </button>
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
)(Accounts);

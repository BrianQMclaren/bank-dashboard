import React from "react";
import PlaidLink from "react-plaid-link";

class Account extends React.Component {
  state = {
    accounts: []
  };
  handleOnSuccess = (token, metadata) => {
    // send token to client server

    console.log(token, metadata);
  };
  handleOnExit() {
    // handle the case when user exits
  }
  render() {
    return (
      <div>
        <PlaidLink
          className="plaid"
          clientName="UNIBANK"
          env="development"
          product={["transactions"]}
          publicKey={process.env.PUBLIC_KEY}
          onExit={this.handleOnExit}
          onSuccess={this.handleOnSuccess}
        >
          Open Link and connect your bank!
        </PlaidLink>
      </div>
    );
  }
}

export default Account;

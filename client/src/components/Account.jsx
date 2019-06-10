import React from "react";
import PlaidLink from "react-plaid-link";
import plaid from "plaid";
import axios from "axios";

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
  state = {
    accounts: []
  };
  componentDidMount() {
    this.handleOnSuccess();
  }
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
          env="sandbox"
          product={["auth", "transactions"]}
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

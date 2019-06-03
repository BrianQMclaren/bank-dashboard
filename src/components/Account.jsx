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

var PUBLIC_TOKEN = null;
var ACCESS_TOKEN = null;
var ITEM_ID = null;

class Account extends React.Component {
  state = {
    accounts: []
  };
  componentDidMount() {
    this.handleOnSuccess();
    this.handleAuth();
  }
  handleOnSuccess = (publicToken, metadata) => {
    // send token to client server

    axios.post("/get_access_token").then(res => {
      PUBLIC_TOKEN = res.body.public_token;
      client
        .exchangePublicToken(PUBLIC_TOKEN, tokenResponse => {
          ACCESS_TOKEN = tokenResponse.access_token;
          ITEM_ID = tokenResponse.item_id;
          res.json({
            access_token: ACCESS_TOKEN,
            item_id: ITEM_ID,
            error: false
          });
        })
        .catch(error => console.log(error));
      console.log(metadata);
    });
  };
  handleAuth = () => {
    axios.get("/auth").then(res => {
      client
        .getAuth(ACCESS_TOKEN, (error, authResponse) => {
          return res.json({ error: null, auth: authResponse });
        })
        .catch(error => console.log(error));
    });
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

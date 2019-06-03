const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const plaid = require("plaid");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

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

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

app.post("/transactions/get", () => {
  client.getTransactions(
    access_token,
    "2018-01-01",
    "2018-02-01",
    {
      count: 250,
      offset: 0
    },
    (err, result) => {
      // handle err
      const transactions = result.transactions;
    }
  );
});

app.post("/accounts", (req, res, next) => {
  PUBLIC_TOKEN = res.body.public_token;
  client.exchangePublicToken(PUBLIC_TOKEN, (error, tokenResponse) => {
    if (error != null) {
      const msg = "Could not exchange public token";
      return res.json({ error: msg });
    }
    ACCESS_TOKEN = tokenResponse.access_token;
    ITEM_ID = tokenResponse.item_id;

    res.json({
      access_token: ACCESS_TOKEN,
      item_id: ITEM_ID,
      error: false
    });
  });
});

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, "dist")));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}`));

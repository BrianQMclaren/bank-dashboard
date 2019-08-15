const express = require("express");
const plaid = require("plaid");
const router = express.Router();
const passport = require("passport");
const moment = require("moment");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

// Load Account and User models
const Account = require("../../models/Account");
const User = require("../../models/User");

const PLAID_CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const PLAID_SECRET = process.env.REACT_APP_SECRET;
const PLAID_PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;

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

// Routes

// route GET api/plaid/accounts
// Get all accounts linked with plaid for a specific user

router.get(
  "/accounts",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Account.find({ userId: req.user.id })
      .then(accounts => res.json(accounts))
      .catch(err => console.log(err));
  }
);

// trade public token for access token and store credentials in database

router.post(
  "/accounts/add",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    PUBLIC_TOKEN = req.body.public_token;
    const userId = req.user.id;
    const institution = req.body.metadata.institution;
    const { name, institution_id } = institution;

    if (PUBLIC_TOKEN) {
      client
        .exchangePublicToken(PUBLIC_TOKEN)
        .then(exchangeResponse => {
          ACCESS_TOKEN = exchangeResponse.access_token;
          ITEM_ID = exchangeResponse.item_id;

          // check if account already exists
          Account.findOne({
            userId: req.user.id,
            institutionId: institution_id
          })
            .then(account => {
              if (account) {
                console.log("account already exists");
              } else {
                const newAccount = new Account({
                  userId: userId,
                  accessToken: ACCESS_TOKEN,
                  itemId: ITEM_ID,
                  institutionId: institution_id,
                  institutionName: name
                });
                newAccount.save().then(account => res.json(account));
              }
            })
            .catch(err => console.log(err));
          // MongoError
        })
        .catch(err => console.log(err));
      // PlaidError
    }
  }
);

router.delete(
  "/accounts/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Account.findById(req.params.id).then(account => {
      //Delete account
      account.remove().then(() => res.json({ success: true }));
    });
  }
);

// route POST api/plaid/accounts/auth
// Fetch auth account numbers

router.post(
  "/accounts/auth",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    let auth = [];

    const accounts = req.body;

    if (accounts) {
      accounts.forEach(function(account) {
        ACCESS_TOKEN = account.accessToken;
        const institutionName = account.institutionName;
        client
          .getAuth(ACCESS_TOKEN)
          .then(response => {
            auth.push({
              accountName: institutionName,
              auth: response.accounts
            });
            if (auth.length === accounts.length) {
              res.json(auth);
            }
          })
          .catch(err => console.log(err));
      });
    }
  }
);

// route POST api/plaid/accounts/transactions
// Fetch transactions from past 30 days

router.post(
  "/accounts/transactions",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const now = moment();
    const today = now.format("YYYY-MM-DD");
    const thirtyDaysAgo = now.subtract(15, "days").format("YYYY-MM-DD");

    const accounts = req.body;

    let transactions = [];

    if (accounts) {
      accounts.forEach(function(account) {
        ACCESS_TOKEN = account.accessToken;
        const institutionName = account.institutionName;
        client
          .getTransactions(ACCESS_TOKEN, thirtyDaysAgo, today)
          .then(response => {
            transactions.push({
              accountName: institutionName,
              transactions: response.transactions
            });
            if (transactions.length === accounts.length) {
              res.json(transactions);
            }
          })
          .catch(err => console.log(err));
      });
    }
  }
);

module.exports = router;

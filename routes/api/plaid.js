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

// Routes

// trade public token for access token and store credentails

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

          // check if account exists
          Account.findOne({
            userId: req.user.id,
            institutionId: institution_id
          })
            .then(account => {
              if (account) {
                console.log("account already exists");
              } else {
                const newAccount = newAccount({
                  userId: userId,
                  access_token: ACCESS_TOKEN,
                  itemId: ITEM_ID,
                  institutionId: institution_id,
                  institutionName: name
                });
                newAccount.save().then(account => res.json(account));
              }
            })
            .catch(err => console.log(err));
          MongoError;
        })
        .catch(err => console.log(err));
      PlaidError;
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

// get all accounts linked

router.get(
  "/accounts",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Account.find({ userId: req.user.id })
      .then(accounts => res.json(accounts))
      .catch(err => console.log(err));
  }
);

// Fetch transactions from past 30 days

router.post(
  "/accounts/transactions",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const now = moment();
    const today = now.format("YYYY-MM-DD");
    const thirtyDaysAgo = now.subtract(30, "days").format("YYYY-MM-DD");

    let transactions = [];

    const accounts = req.body;

    if (accounts) {
      accounts.forEach(account => {
        ACCESS_TOKEN = account.access_token;
        const institutionName = account.institutionName;

        client
          .getTransactions(ACCESS_TOKEN, thirtyDaysAgo, today)
          .then(res => {
            transactions.push({
              accountName: institutionName,
              transactions: res.transactions
            });
            // Don't send back response till all transactions have been added
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

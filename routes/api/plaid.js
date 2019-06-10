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

module.exports = router;

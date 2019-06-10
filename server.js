const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");
const passport = require("passport");

const app = express();

const users = require("./routes/api/users");
const plaid = require("./routes/api/plaid");

// DB Config
const db = require("./config/keys").mongoURI;
// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, "dist")));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}`));

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.use(cors());

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, "dist")));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}`));

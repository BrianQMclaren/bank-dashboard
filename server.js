const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const port = process.env.PORT || 3000;

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, "dist")));

// An api endpoint that returns a short list of items
app.get("/api/getList", (req, res) => {
  var list = ["item1", "item2", "item3"];
  res.json(list);
  console.log("Sent list of items");
});

// Handles any requests that don't match the ones above
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

app.listen(port, () => console.log(`listening on port ${port}`));

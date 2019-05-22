const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}`));

app.get("/express_backend", (req, res) => {
  res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
});

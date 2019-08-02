import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import Landing from "./Landing";
import Dashboard from "./Dashboard";
import Transfer from "./Transfer";
import Register from "./Register";
import Login from "./Login";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Landing path="/" />
          <Dashboard path="/account" />
          <Transfer path="/transfer" />
          <Register path="/register" />
          <Login path="/login" />
        </Router>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));

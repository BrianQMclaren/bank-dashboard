import React from "react";
import { render } from "react-dom";
import { Link, Router } from "@reach/router";
import Dashboard from "./Dashboard";
import Account from "./Account";

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <Link to="/">UNIBank</Link>
        </header>
        <Router>
          <Dashboard path="/" />
          <Account path="/account" />
        </Router>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));

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
          <Link to="/">D3Bank Dashboard</Link>
        </header>
        <Router>
          <Dashboard path="/" />
          <Account path="/account/:id" />
        </Router>
      </div>
    );
  }
}

render(React.createElement(App), document.getElementById("root"));

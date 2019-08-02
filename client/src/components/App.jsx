import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";

import { Provider } from "react-redux";
import store from "./store";

import Landing from "./Landing";
import Register from "./Register";
import Login from "./Login";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Router>
            <Landing path="/" />
            <Register path="/register" />
            <Login path="/login" />
          </Router>
        </div>
      </Provider>
    );
  }
}

render(<App />, document.getElementById("root"));

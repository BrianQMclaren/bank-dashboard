import React from "react";
import Navigation from "./Navigation";
import Menu from "./Menu";
import Panels from "./Panels";
import Header from "./Header";

class Dashboard extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Navigation />
        <Menu />
        <Header />
        <Panels />
      </div>
    );
  }
}

export default Dashboard;

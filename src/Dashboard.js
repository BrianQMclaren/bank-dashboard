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
        <Menu
          home="home"
          savings="savings"
          bills="bills"
          credit="credit"
          loans="loans"
          invest="investments"
          contact="contacts"
        />
        <Header />
        <Panels />
      </div>
    );
  }
}

export default Dashboard;

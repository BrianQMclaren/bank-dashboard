import React from "react";
import Navigation from "../layout/Navigation";
import Menu from "../layout/Menu";
import Panels from "../layout/Panels";
import Header from "../layout/Header";

class Dashboard extends React.Component {
  render() {
    const { user, accounts } = this.props;
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
        <Panels user={user} accounts={accounts} />
      </div>
    );
  }
}

export default Dashboard;

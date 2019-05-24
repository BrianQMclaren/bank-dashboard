import React from "react";

class Account extends React.Component {
  state = {
    list: []
  };
  componentDidMount() {
    this.getList();
  }
  getList = () => {
    fetch("/api/getList")
      .then(res => res.json())
      .then(list => this.setState({ list }));
  };
  render() {
    const { list } = this.state;
    return (
      <div className="wrapper">
        <h3>Bank Account Transfer</h3>
        {list.length ? (
          <div>
            {/* Render the list of items */}
            {list.map(item => {
              return <div>{item}</div>;
            })}
          </div>
        ) : (
          <div>
            <h2>No List Items Found</h2>
          </div>
        )}
      </div>
    );
  }
}

export default Account;

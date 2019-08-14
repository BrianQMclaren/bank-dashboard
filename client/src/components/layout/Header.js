import React from "react";

const Header = () => {
  return (
    <header className="sub-nav">
      <h3>Dashboard</h3>
      <p>You are in the main panel</p>
      <button
        className="btn--success modules-button"
        type="button"
        name="button"
      >
        Add Modules
      </button>
    </header>
  );
};

export default Header;

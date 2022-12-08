import React from "react";

const Header = () => {
  return (
    <header id="header">
      <div id="upper-logo">
        <h1 className="logo">
          <a href="/">
            <img src="/CarlyWebsite.jpg" id="header-logo"></img>
          </a>
        </h1>
      </div>
      <div id="topNav">
        <nav className="main-nav" data-content-field="navigation">
          <ul>
            <li className="page-collection">
              <a href="/">Welcome</a>
            </li>

            <li className="page-collection active-link">
              <a href="/about">About</a>
            </li>

            <li className="page-collection">
              <a href="/selectworks">Select Works</a>
            </li>

            <li className="page-collection">
              <a href="/contact">Contact</a>
            </li>
          </ul>
          <div className="page-divider"></div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

import React from "react";

const Header = () => {
  return (
    <header id="header">
      <div id="upper-logo">
        <h1 className="logo">
          <a href="/">
            <img
              src="/CarlyWebsite.jpg"
              id="header-logo"
              alt="Carly Anderson"
            ></img>
          </a>
        </h1>
      </div>
      <div id="topNav">
        <nav className="main-nav" data-content-field="navigation">
          <ul>
            <li className="page-collection">
              <a href="/" aria-label="Link to Welcome page" role="menuitem">
                Welcome
              </a>
            </li>

            <li className="page-collection active-link">
              <a href="/about" aria-label="Link to About page" role="menuitem">
                About
              </a>
            </li>

            <li className="page-collection">
              <a
                href="/selectworks"
                aria-label="Link to Select Works page"
                role="menuitem"
              >
                Select Works
              </a>
            </li>

            <li className="page-collection">
              <a
                href="/contact"
                aria-label="Link to Contact page"
                role="menuitem"
              >
                Contact
              </a>
            </li>
          </ul>
          <div className="page-divider"></div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

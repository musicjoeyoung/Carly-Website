import "./Header.scss"

import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">

      <a href="/" className="upper-logo-link">
        <img
          src="/CarlyWebsite.jpg"
          alt="Carly Anderson"
          className="upper-logo"
        />
      </a>

      <div className="navbar-container">
        <nav className="navbar" >
          <ul>
            <li className="page-collection">
              <NavLink to="/" aria-label="Link to Welcome page" role="menuitem">
                Welcome
              </NavLink>
            </li>

            <li className="page-collection">
              <NavLink to="/about" aria-label="Link to About page" role="menuitem">
                About
              </NavLink>
            </li>

            <li className="page-collection">
              <NavLink
                to="/selectworks"
                aria-label="Link to Select Works page"
                role="menuitem"
              >
                Select Works
              </NavLink>
            </li>

            <li className="page-collection">
              <NavLink
                to="/contact"
                aria-label="Link to Contact page"
                role="menuitem"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

    </header>
  );
};

export default Header;

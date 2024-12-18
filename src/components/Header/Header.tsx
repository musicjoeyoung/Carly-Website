import "./Header.scss"

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


      <nav className="navbar" >
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

    </header>
  );
};

export default Header;

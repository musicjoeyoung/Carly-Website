import "./HamburgerMenu.scss"

const HamburgerMenu = () => {
  return (
    <div className="hamburgerMenu">
      <img src="./dropdown.png" className="dropdownbtn" alt="dropdown button" />
      <div className="dropdownContent">
        <li className="li">
          <a href="/welcome">Welcome</a>
        </li>
        <li className="li">
          <a href="/about">About</a>
        </li>
        <li className="li">
          <a href="/selectworks">Select Works</a>
        </li>
        <li className="li">
          <a href="/contact">Contact</a>
        </li>
      </div>
    </div>
  );
};

export default HamburgerMenu;

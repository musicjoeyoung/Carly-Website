import "./HamburgerMenu.scss"

import { Link } from "react-router-dom";
import dropdown from "../../assets/images/dropdown.png"

const HamburgerMenu = () => {
  return (
    <div className="hamburgerMenu">
      <img src={dropdown} className="dropdownbtn" alt="dropdown button" />
      <div className="dropdownContent">
        <li className="li">
          <Link to="/welcome">Welcome</Link>
        </li>
        <li className="li">
          <Link to="/about">About</Link>
        </li>
        <li className="li">
          <Link to="/selectworks">Select Works</Link>
        </li>
        <li className="li">
          <Link to="/contact">Contact</Link>
        </li>
      </div>
    </div>
  );
};

export default HamburgerMenu;

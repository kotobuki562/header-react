import React from "react";
import logo from "./logo.svg";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
        </div>
        <div className="links-container">
          <ul className="links">
            <li>
              <a>home</a>
            </li>
            <li>
              <a>home</a>
            </li>
            <li>
              <a>home</a>
            </li>
            <li>
              <a>home</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

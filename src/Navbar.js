import React from "react";
import logo from "./logo.svg";
import { FaBars, FaTwitter } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button className="nav-toggle">
            <FaBars />
          </button>
        </div>
        <div className="links-container">
          <ul className="links">
            <li>
              <a>
                <FaTwitter />
              </a>
            </li>
            <li>
              <a>
                <FaTwitter />
              </a>
            </li>
            <li>
              <a>
                <FaTwitter />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

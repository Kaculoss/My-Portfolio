import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdClose, MdMenu } from "react-icons/md";

const NavMenu = () => {
  const [showNav, setShowNav] = useState(false);

  const activate = ({ isActive }) => ({
    color: isActive ? "#080f15" : "#16293c",
    fontWeight: isActive ? "bolder" : "bold",
    fontSize: isActive ? "1.5rem" : "1rem",
  });

  return (
    <div className="NavMenu-div">
      <div
        className="mobile-menu-icon"
        onClick={() => setShowNav(!showNav)}
        role="button"
        onKeyDown={() => setShowNav(!showNav)}
        tabIndex={0}
      >
        <MdMenu size={"3em"} />
      </div>
      <ul className={!showNav ? "navItems hide-item" : "navItems"}>
        <div
          className="closeNavIcon"
          onClick={() => setShowNav(!showNav)}
          role="button"
          onKeyDown={() => setShowNav(!showNav)}
          tabIndex={0}
        >
          <MdClose size={"3em"} />
        </div>
        <li>
          <NavLink
            to="/"
            style={activate}
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            style={activate}
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            style={activate}
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            style={activate}
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavMenu;

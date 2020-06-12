import React from "react";
import { NavLink } from "react-router-dom";
import "./NavLinks.css";

const Navlinks = () => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink exact to="/">
          ALL USERS
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/u1/places">
          MY PLACES
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/places/new">
          ADD PLACE
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/auth">
          AUTHENTICATE
        </NavLink>
      </li>
    </ul>
  );
};

export default Navlinks;

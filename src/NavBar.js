import React from "react";
import { NavLink } from "react-router-dom";

//styling for NavBar
const navStyles = {
    display: "inline-block",
    width: "75px",
    padding: "12px 20px",
    margin: "0px 10px 0px 10px",
    textDecoration: "none",
    color: "black",
  }
  
  function NavBar() {
    return (
      <nav>
        <NavLink exact to="/" style={navStyles}>Home</NavLink>
        <NavLink exact to="/explore" style={navStyles}>Explore</NavLink>
        <NavLink exact to="/create" style={navStyles}>Create</NavLink>
      </nav>
    )
  }

  export default NavBar;
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

import { Icon } from "semantic-ui-react";
import { GiHamburgerMenu } from "react-icons/gi";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectAuth, setNavigating } from "../Auth/LoginSlice";

function NavBar() {
  const [navbarIcon, setNavbarIcon] = useState(false);
  const [flag, setF] = useState(true);
  const dispatch = useDispatch();
  if (!flag) {
    dispatch(setNavigating(false));
  } else {
    dispatch(setNavigating(true));
  }
  const { isAuthenticated, user } = useSelector(selectAuth);

  return (
    <nav className="main-nav">
      <div
        className={
          navbarIcon ? "menu-link mobile-menu-link" : "navbar_container"
        }
      >
        <h2 id="title">Turbo Trader</h2>
        <ul className={flag ? "ul_nav" : "ul_nav2"}>
          <li>
            <NavLink
              to="/"
              onClick={() => {
                setF(true);
              }}
            >
              <h3>Home</h3>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Aboutus"
              onClick={() => {
                setF(false);
              }}
            >
              <h3>About US</h3>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Contact"
              onClick={() => {
                setF(false);
              }}
            >
              <h3>Contact</h3>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={isAuthenticated ? "/UserAc" : "/Login"}
              onClick={() => {
                setF(false);
              }}
            >
              {isAuthenticated ? (
                <h3>
                  <Icon name="user"></Icon>Your account
                </h3>
              ) : (
                <h3>Login / Sign up</h3>
              )}
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="hamburger-menu">
        <a href="#" onClick={() => setNavbarIcon(!navbarIcon)}>
          <GiHamburgerMenu size={50} />
        </a>
      </div>
    </nav>
  );
}

export default NavBar;

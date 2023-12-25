import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './Nav.css';
import {  Icon, Input } from "semantic-ui-react";
import { GiHamburgerMenu } from "react-icons/gi";

import { selectAuth } from "./LoginSlice";
import { useSelector } from "react-redux";
function NavBar() {
  const [navbarIcon, setNavbarIcon] = useState(false);
  const [flag, setF] = useState(true);
 
  const { isAuthenticated, user } = useSelector(selectAuth);
 
  return (
    <nav className="main-nav">
      <div className="logo">
        
          <img src="logo_2.png" className="logo" width={180} height={130} alt="Logo" id="logo_"/>
       
      </div>
      <div className={navbarIcon ? "menu-link mobile-menu-link" : "navbar_container"}>
        <ul>
          <li><NavLink to='/'><h2>Home</h2></NavLink></li>
          <li><NavLink to='/Aboutus' onClick={() => { setF(!flag) }}><h2>About US</h2></NavLink></li>
          <li><NavLink to='/Contact' onClick={() => { setF(!flag) }}><h2>Contact</h2></NavLink></li>
          <li>
            <NavLink to={isAuthenticated? '/UserAc' : '/Login'} onClick={() => { setF(!flag) }}>
              {isAuthenticated ? <h2 ><Icon name="user"></Icon>Your account</h2> : <h2 >Login</h2>}
            </NavLink>
          </li>
         <li>
         
          
          </li> 
          
        </ul>
        
       
      </div>
      <div className="hamburger-menu" align='left'>
        <a href="#" onClick={() => setNavbarIcon(!navbarIcon)}>
          <GiHamburgerMenu />
        </a>
      </div>
      <br />
    </nav>
  );
}

export default NavBar;

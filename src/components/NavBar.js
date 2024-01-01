import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './Nav.css';

import {  Icon, Dropdown } from "semantic-ui-react";
import { GiHamburgerMenu } from "react-icons/gi";

import { selectAuth } from "./LoginSlice";
import { useSelector } from "react-redux";
function NavBar() {
  const [navbarIcon, setNavbarIcon] = useState(false);
  const [flag, setF] = useState(true);
 
  const { isAuthenticated, user } = useSelector(selectAuth);

  return (
    <nav className="main-nav" >
      
      <div className={navbarIcon ? "menu-link mobile-menu-link" : "navbar_container"}>
        <h1 id="title">Turbo Trader</h1>
        <ul className={flag?"ul_nav":"ul_nav2"}>
          <li><NavLink to='/' ><h2 >Home</h2></NavLink></li>
          <li><NavLink to='/Aboutus' onClick={() => { setF(false) }}><h2  >About US</h2></NavLink></li>
          <li><NavLink to='/Contact' onClick={() => { setF(false) }}><h2  >Contact</h2></NavLink></li>
          <li>
            <NavLink to={isAuthenticated? '/UserAc' : '/Login'} onClick={() => { setF(false) }}>
              {isAuthenticated ? <h2  ><Icon name="user"></Icon>Your account</h2> : <h2 >Login / Sign up</h2>}
            </NavLink>
          </li>
        
          
        </ul>
        
       
      </div>
      <div className="hamburger-menu" align='left'>
        <a href="#" onClick={() => setNavbarIcon(!navbarIcon)}>
          <GiHamburgerMenu />
        </a>
      </div>
      
     
    </nav>
    

  );
}

export default NavBar;

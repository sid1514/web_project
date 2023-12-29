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
  const languageOptions = [
    { key: 'Arabic', text: 'Arabic', value: 'Arabic' },
    { key: 'Chinese', text: 'Chinese', value: 'Chinese' },
    { key: 'Danish', text: 'Danish', value: 'Danish' },
    { key: 'Dutch', text: 'Dutch', value: 'Dutch' },
    { key: 'English', text: 'English', value: 'English' },
    { key: 'French', text: 'French', value: 'French' },
    { key: 'German', text: 'German', value: 'German' },
    { key: 'Greek', text: 'Greek', value: 'Greek' },
    { key: 'Hungarian', text: 'Hungarian', value: 'Hungarian' },
    { key: 'Italian', text: 'Italian', value: 'Italian' },
    { key: 'Japanese', text: 'Japanese', value: 'Japanese' },
    { key: 'Korean', text: 'Korean', value: 'Korean' },
    { key: 'Lithuanian', text: 'Lithuanian', value: 'Lithuanian' },
    { key: 'Persian', text: 'Persian', value: 'Persian' },
    { key: 'Polish', text: 'Polish', value: 'Polish' },
    { key: 'Portuguese', text: 'Portuguese', value: 'Portuguese' },
    { key: 'Russian', text: 'Russian', value: 'Russian' },
    { key: 'Spanish', text: 'Spanish', value: 'Spanish' },
    { key: 'Swedish', text: 'Swedish', value: 'Swedish' },
    { key: 'Turkish', text: 'Turkish', value: 'Turkish' },
    { key: 'Vietnamese', text: 'Vietnamese', value: 'Vietnamese' },
  ]
  return (
    <nav className="main-nav" >
      <div className="logo">
          <img src="TurboTrader.png" className="logo" width={200} height={170} alt="Logo" id="logo_"/>
        
       
      </div>
      <div className={navbarIcon ? "menu-link mobile-menu-link" : "navbar_container"}>
        <ul className={flag?"ul_nav":"ul_nav2"}>
          <li><NavLink to='/' ><h2 >Home</h2></NavLink></li>
          <li><NavLink to='/Aboutus' onClick={() => { setF(false) }}><h2  >About US</h2></NavLink></li>
          <li><NavLink to='/Contact' onClick={() => { setF(false) }}><h2  >Contact</h2></NavLink></li>
          <li>
            <NavLink to={isAuthenticated? '/UserAc' : '/Login'} onClick={() => { setF(false) }}>
              {isAuthenticated ? <h2  ><Icon name="user"></Icon>Your account</h2> : <h2 >Login / Sign up</h2>}
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
      
     
    </nav>
    

  );
}

export default NavBar;

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
    <nav className="main-nav">
      <div className="logo">
        
          <img src="logo_2.png" className="logo" width={180} height={100} alt="Logo" id="logo_"/>
       
      </div>
      <div className={navbarIcon ? "menu-link mobile-menu-link" : "navbar_container"}>
        <ul>
          <li><NavLink to='/'><h3>Home</h3></NavLink></li>
          <li><NavLink to='/Aboutus' onClick={() => { setF(!flag) }}><h3>About US</h3></NavLink></li>
          <li><NavLink to='/Contact' onClick={() => { setF(!flag) }}><h3>Contact</h3></NavLink></li>
          <li>
            <NavLink to={isAuthenticated? '/UserAc' : '/Login'} onClick={() => { setF(!flag) }}>
              {isAuthenticated ? <h3><Icon name="user"></Icon>Your account</h3> : <h3 >Login / Sign up</h3>}
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
      
      <div style={{padding:'10px',paddingRight:'10px',width:'100px',height:'100px'}}>
      <Dropdown
     
    button
    className='icon'
    floating
    labeled
    icon='world'
    options={languageOptions}
    search
    text='Select Language'
    
  />
      </div>
    </nav>
    

  );
}

export default NavBar;

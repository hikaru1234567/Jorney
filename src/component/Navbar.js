import {React, useState} from 'react';
import { NavLink } from "react-router-dom";
import './Navbar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Logout from './Logout';


const Navbar = ({setIsAuth}) => {
const [isOpen, setIsOpen]=useState(false);

const toggleMenu=()=>{
  setIsOpen(!isOpen);
  console.log(isOpen);
};


  return (
    <header className="Home-header">
    <nav className="Home-nav">
      
    <a><FontAwesomeIcon className="menu-icon"   icon={faBars} onClick={toggleMenu} /></a>
        <div className="logo">Dev&Journey</div>
        <div className={`nav-items ${isOpen ? 'nav-active' : ''}`}>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/Work">Work</NavLink></li>
        <li><NavLink to="/Question">Question</NavLink></li>
        <li><NavLink to="/Project">Project</NavLink></li>
        <li><NavLink to="/Profile">Profile</NavLink></li>
        <li><Logout setIsAuth={setIsAuth}/></li>
        </div>
        <div className="user">
          {/* User icon */}
        </div>
      </nav>
    </header>
  )
}

export default Navbar;
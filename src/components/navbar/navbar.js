import React, { useState, useRef, useEffect } from 'react'
import './navbar.css';
import { NavLink } from "react-router-dom";

export default function Navbar() {

  const [navSize, setnavSize] = useState("10rem");
  const [navColor, setnavColor] = useState("transparent");
  
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#252734") : setnavColor("transparent");
    window.scrollY > 10 ? setnavSize("5rem") : setnavSize("10rem");
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);


  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div >


      <nav className="navbar">
        <div className="nav-container"  style={{
          backgroundColor: navColor,
          height: navSize,
          transition: "all 1s"
        }}>
          <NavLink exact to="/" className="nav-logo">
            Developer Elina
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"} >
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                className="nav-links"
                
                >
                  Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/profile"
                className="nav-links"
                
                >
                Profile
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                className="nav-links"
                
                >
                  About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="skills"
                className="nav-links"
                
                >
                  Skills
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/projects"
                className="nav-links"
                
                >
                  Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                className="nav-links"

                >
                  Contact
              </NavLink>
            </li>
          </ul>
        </div>

      
      </nav>
    </div>
  )
}



import React, { useState, useRef, useEffect } from 'react';
import {Link} from 'react-scroll'
import './navControl.css';


export default function NavControl() {
  const [navSize, setnavSize] = useState("10rem");
  const [navColor, setnavColor] = useState("transparent");
  
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#1b1b1b") : setnavColor("transparent");
    window.scrollY > 10 ? setnavSize("5rem") : setnavSize("10rem");
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <div className="container">
      <div className="nav-container" style={{
          backgroundColor: navColor,
          width: "100%",
          height: navSize,
          transition: "all 1s"
        }}>
          <div className="navLogo">
            Front-end developer Elina
          </div>
        <ul className="navList">
          <li className="navItem">
            <Link activeClass="active" to="home" spy={true} smooth={true}>
              Home
            </Link></li>
          <li className="navItem">
            <Link to="profile" spy={true} smooth={true}>
              Profile
            </Link></li>
          <li className="navItem">
            <Link to="about" spy={true} smooth={true}>
              About
            </Link></li>
          <li className="navItem">
            <Link to="skills" spy={true} smooth={true}>
              Skills
            </Link></li>
          <li className="navItem">
            <Link to="projects" spy={true} smooth={true}>
              Projects
            </Link></li>
          <li className="navItem">
            <Link to="contact" spy={true} smooth={true}>
              Contact
            </Link></li>
        </ul>
      </div>

    </div>
  )
}

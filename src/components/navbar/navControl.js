import React, { useState, useRef, useEffect } from 'react';
import {Link} from 'react-scroll'
import './navControl.css';


export default function NavControl() {
  const [navSize, setnavSize] = useState("5rem");
  const [navColor, setnavColor] = useState("transparent");
  const [logo, setLogo] = useState("0")
  
  const listenScrollEvent = () => {
    window.scrollY > 550 ? setnavColor("#1b1b1b") : setnavColor("transparent");
    window.scrollY > 100 ? setnavSize("5rem") : setnavSize("5rem");
    window.scrollY > 100 ? setLogo("1") : setLogo("0");
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
          <div className="navLogo" style={{
            opacity: logo,
            transition: "all 1s"
          }}>
            Wave.
          </div>
        <ul className="navList">
          <li className="navItem">
            <Link activeClass="active" to="home" spy={true} smooth={true}>
              HOME
            </Link></li>
          <li className="navItem">
            <Link to="profile" spy={true} smooth={true}>
              PROFILE
            </Link></li>
          <li className="navItem">
            <Link to="about" spy={true} smooth={true}>
              ABOUT
            </Link></li>
          <li className="navItem">
            <Link to="skills" spy={true} smooth={true}>
              SKILLS
            </Link></li>
          <li className="navItem">
            <Link to="projects" spy={true} smooth={true}>
              PROJECTS
            </Link></li>
          <li className="navItem">
            <Link to="contact" spy={true} smooth={true}>
              CONTACT
            </Link></li>
        </ul>
      </div>

    </div>
  )
}

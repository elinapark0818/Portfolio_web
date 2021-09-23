import React, { useState, useEffect } from 'react'
import Toggle from '../toggle/toggle'
import About from './about/about'
import Contact from './contact/contact'
import Home from './home/home'
import Profile from './profile/profile'
import Projects from './projects/projects'
import Skills from './skills/skills'

export default function Pages() {

  const [position, setPositon] = useState(0);
  function onScroll() {
    setPositon(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll",onScroll);
    };
  }, []);

  return (
    <div>
      <div id="home"><Home/></div>
      {/* <Toggle/> */}
      <div id="profile"><Profile/></div>
      <div id="about" style={{
          opacity: (position - 750) / 50,
        }}><About/></div>
      <div id="skills" style={{
          opacity: (position - 2300) / 50,
        }}><Skills/></div>
      <div id="projects" style={{
          opacity: (position - 3800) / 50,
        }}><Projects/></div>
      <div id="contact"><Contact/></div>
    </div>
  )
}

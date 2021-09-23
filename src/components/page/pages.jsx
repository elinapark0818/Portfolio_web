import React from 'react'
import Toggle from '../toggle/toggle'
import About from './about/about'
import Contact from './contact/contact'
import Home from './home/home'
import Profile from './profile/profile'
import Projects from './projects/projects'
import Skills from './skills/skills'

export default function Pages() {
  return (
    <div>
      <div id="home"><Home/></div>
      <Toggle/>
      <div id="profile"><Profile/></div>
      <div id="about"><About/></div>
      <div id="skills"><Skills/></div>
      <div id="projects"><Projects/></div>
      <div id="contact"><Contact/></div>
    </div>
  )
}

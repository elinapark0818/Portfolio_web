import React, { useState, useEffect } from 'react'
import styles from './pages.module.css';
import Toggle from '../toggle/toggle'
import About from './about/about'
import Contact from './contact/contact'
import Home from './home/home'
import Profile from './profile/profile'
import Projects from './projects/projects'
import Skills from './skills/skills'
import Spinner from '../spinner/spinner';

export default function Pages() {


  return (
    <div className={styles.pagesContainer}>
      <div id="home"><Home/></div>
      <Spinner/>
      <div id="profile"><Profile/></div>
      <div id="about"><About/></div>
      <div id="skills"><Skills/></div>
      <div id="projects"><Projects/></div>
      <div id="contact"><Contact/></div>
    </div>
  )
}

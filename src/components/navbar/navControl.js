import React, { useEffect, useRef, useState } from 'react';
import './navControl.css';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Navbar from './navbar';
import Profile from '../page/profile/profile';
import About from '../page/about/about';
import Skills from '../page/skills/skills';
import Projects from '../page/projects/projects';
import Contact from '../page/contact/contact';
import Home from '../page/home/home';

export default function NavControl() {

  return (
      <BrowserRouter>
      <Navbar/>
      <div className="pages">
        <Switch>
          <Route path='/'exact component={Home}/>
          <Route path='/profile' component={Profile}/>
          <Route path='/about' component={About}/>
          <Route path='/skills' component={Skills}/>
          <Route path='/projects' component={Projects}/>
          <Route path='/contact' component={Contact}/>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

import React from 'react';
import styles from './app.module.css';
import Home from './components/page/home/home';
import About from './components/page/about/about';
import Profile from './components/page/profile/profile';
import Skills from './components/page/skills/skills';
import Projects from './components/page/projects/projects';
import Contact from './components/page/contact/contact';
import TopBtn from './components/topBtn/topBtn';
import { ThemeProvider } from 'styled-components';
import theme from "./styles/theme/theme";
import NavControl from './components/navbar/navControl';
import Pages from './components/page/pages';


export default function App() {

  return (
    <ThemeProvider theme={theme}>
      <NavControl/>
      <Pages/>
      <TopBtn/>


    </ThemeProvider>
  );
}


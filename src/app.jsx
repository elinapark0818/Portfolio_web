import React from 'react';
import styles from './app.module.css';
// import Home from './components/page/home/home';
import About from './components/page/about/about';
import Profile from './components/page/profile/profile';
import Skills from './components/page/skills/skills';
import Projects from './components/page/projects/projects';
import Contact from './components/page/contact/contact';
import TopBtn from './components/topBtn/topBtn';
// import { useSpring, animated } from 'react-spring';
import { ThemeProvider } from 'styled-components';
import theme from "./styles/theme/theme";

import NavControl from './components/navbar/navControl';


export default function App() {
  // const display = useSpring({ 
  //   to: { opacity: 1}, from: { opacity: 0 } })

  return (
    <ThemeProvider theme={theme}>
    <div className={styles.app}>
      <NavControl/>
      <TopBtn/>
    {/* <header className={styles.header}>
      <animated.div style={display}>
        <Home/>
      </animated.div>
    </header> */}
    {/* <main className={styles.main}>
      <Profile />
      <About />
      <Skills />
      <Projects />
    </main>
    <footer className={styles.footer}>
      <Contact />
      
    </footer> */}
  </div>
    </ThemeProvider>
  );
}


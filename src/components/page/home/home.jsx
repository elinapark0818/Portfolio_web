import React, { useState, useEffect } from 'react';
import styles from './home.module.css';
import { useSpring, animated } from 'react-spring'

export default function Home() {

  

  const [fadeOut, setFadeOut] = useState("0")

  const listenScrollEvent = () => {
    window.scrollY > 100 ? setFadeOut("0") : setFadeOut("1");
  }

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);


  return (
    <div className={styles.container}>
      <img 
      className={styles.img}
      src="./img/home_img/dark-wave.jpg" 
      alt="wave" 
      />
      <div className={styles.titleWrap}>
        <animated.h1 className={styles.title}
          style={{
            opacity: fadeOut,
            transition: "all 1s"
          }}
          >
          Wave.
          <br/>Wherever
          <br/>Changeable
        </animated.h1>
        <p className={styles.homePs}
          style={{
            opacity: fadeOut,
            transition: "all 1s"
          }}
          >변화무쌍한 파도처럼 언제나 대응 가능한 와타시와 괴발자</p>
      </div>
    </div>
  )
}
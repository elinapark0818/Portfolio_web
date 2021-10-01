import React, { useState, useEffect } from 'react';
import styles from './home.module.css';
import { useSpring, animated } from 'react-spring'

export default function Home() {

  

  const [fadeOut, setFadeOut] = useState("1")

  const listenScrollEvent = () => {
    window.scrollY > 200 ? setFadeOut("0") : setFadeOut("1");
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
      <div className={styles.titleWrap}
      style={{
        opacity: fadeOut,
        transition: "all 1s",
        animationDelay: "300ms",
      }}>
        <h1 className={styles.title}
          data-aos="fade-right"
          >
          Wave.
        </h1>
        <h1 className={styles.title}
          data-aos="fade-right"
          data-aos-delay="300"
          >
          Possibility
        </h1>
        <h1 className={styles.title}
          data-aos="fade-right"
          data-aos-delay="600"
          >
          Changeable
        </h1>
        <p className={styles.homePs}
          data-aos="zoom-in-right"
          data-aos-delay="900"
          >
          변화무쌍한 파도처럼 언제나 대응 가능한 와타시와 괴발자</p>
      </div>
    </div>
  )
}
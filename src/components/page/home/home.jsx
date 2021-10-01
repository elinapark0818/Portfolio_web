import React, { useState } from 'react';
import styles from './home.module.css';
import { useSpring, animated } from 'react-spring'

export default function Home() {

  const flip = useState(false);

  const flipUp = useSpring({
    from: { opacity: 0, marginTop: -50},
    to: { opacity: flip ? 1 : 0, marginTop: 0 },
  })


  return (
    <div className={styles.container}>
      <img 
      className={styles.img}
      src="./img/home_img/dark-wave.jpg" 
      alt="wave" 
      />
      <div className={styles.titleWrap}>
        <animated.h1 className={styles.title}
          style={flipUp}
          >
          Wave.
          <br/>Wherever
          <br/>Changeable
        </animated.h1>
      </div>
    </div>
  )
}
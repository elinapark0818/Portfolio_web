import React from 'react';
import styles from './contact.module.css';
import { useSpring, animated } from 'react-spring'
import { SiGithub } from "react-icons/si";


export default function Contact() {

  const color = useSpring({
    loop: true,
    to: [
      { opacity: 1, color: '#ffff5a' },
      { opacity: 0.8, color: 'rgb(14,26,19)'},
    ],
    from: { opacity: 0.1, color: 'red' },
  })

  return (
    <div className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.title}>
          <button className={styles.contact_btn}>Contact</button>
          </div>
            <p className={styles.default}>"어제보다 더 발전한 오늘을 함께하기를"</p>
            <div className={styles.gmail}>
              <p className={styles.phone}> +82 10.2790.9453</p>
              <p className={styles.mail}>elinapark0818@gmail.com</p>
            </div>
            <animated.div className={styles.github} style={color}>
              <span className={styles.githubAdress}
              onClick={() => window.open('https://github.com/elinapark0818', '_blank')}> Go to github </span>
              <SiGithub className={styles.icon}
              onClick={() => window.open('https://github.com/elinapark0818', '_blank')}
              />
            </animated.div>
        </div>
        
    </div>
  )}

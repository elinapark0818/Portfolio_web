import React from 'react';
import styles from './contact.module.css';
import { SiGmail } from "react-icons/si";
import { SiGithub } from "react-icons/si";


export default function Contact() {
  return (
    <div className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.title}>
          <button className={styles.contact_btn}>Contact</button>
          </div>
        
          <div className={styles.gmail}>
            <SiGmail  className={styles.icon}/>
          </div>
            <div className={styles.github}>
              <SiGithub className={styles.icon}/>
            </div>
        </div>
    </div>
  )
}

import React from 'react';
import styles from './home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      {/* <img 
      className={styles.img}
      src="./img/home_img/wave.jpg" 
      alt="wave" 
      /> */}
      <h1 className={styles.title}>Front-end 개발자  박윤정의 포트폴리오입니다.</h1>
    </div>
  )
}
import React, { useState, useEffect } from 'react';
import styles from './profile.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


const Profile = () => {


  return (
    <div className={styles.profile}>
      <div className={styles.container}>
        <div className={styles.title}>
          <button className={styles.profile_btn}>Profile</button>
          </div>

          <main className={styles.main}>
            <div className={styles.image}>
              <img className={styles.avatar} 
                src="/img/profile_img/profile_img.jpg" 
                alt="profile_img" 
              />
              </div>

            <div 
              className={styles.description}
              data-aos="fade-up"
              >
              <h1>탄지로에 진심인,<br/>
              개발자 박윤정입니다.</h1>
              
              <div
                data-aos="fade-up"
                data-aos-delay="200"
                >
              <p className={styles.subTitle}>ABOUT ME</p>
              <p>박윤정<br/>
              1992.06.04</p>
              <p className={styles.subTitle}>EXPERIENCE</p>
              <p>한국교통대학교 졸업<br/>
              마이다스아이티(6개월)<br/>
              스마일게이트RPG(12개월)</p>
              </div>
            </div>
          </main>
          </div>
      </div>
      
  )
}

export default Profile;
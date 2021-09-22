import React from 'react';
import styles from './profile.module.css';


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

            <div className={styles.description}>
              <h3>이름 : 박 윤 정<br/>
              생년월일 : 1992.06.04<br/>
              학력 : 한국교통대학교 졸업<br/>
              마이다스아이티 QA (6개월)<br/>
              스마일게이트RPG GM (12개월)<br/>
              </h3>
            <br/>
              <h3>"사용성을 고려하여 설계하고<br/>
              편안한 기능을 구현하는 개발자가 될겁니다. <br/>
              도전을 두려워하지 않고, 기본에 충실하여 <br/>
              나만의 분야를 개척하여 인정받는 <br/> 
              멋있는 인생을 사는 것이 최종 목표입니다."</h3>
            </div>

          </main>
          </div>
      </div>
      
  )
}

export default Profile;
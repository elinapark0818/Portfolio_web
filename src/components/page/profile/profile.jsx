import React, { useState, useEffect } from 'react';
import styles from './profile.module.css';


const Profile = () => {

  const [position, setPositon] = useState(0);
  function onScroll() {
    setPositon(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll",onScroll);
    };
  }, []);
    

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
              style={{
                opacity: (position - 300) / 50,
              }}
              >
              <h3>이름 : 박 윤 정<br/>
              생년월일 : 1992.06.04<br/>
              학력 : 한국교통대학교 졸업<br/>
              마이다스아이티 QA (6개월)<br/>
              스마일게이트RPG GM (12개월)<br/>
              </h3>
              <br/>
              <div
              style={{
                opacity: (position - 500) / 50,
              }}
              >
              <h3>"소프트웨어에는 사실 의미있는 것들이 거의 없다.<br/>
              만일 그런 게 있다고 할지라도,<br/>
              유일한 성공척도는 고객들이 뭐가 문제인지 몰라<br/> 
              갈팡질팡하는 걸 도와주었냐 하는 것이다."<br/>
              - Jeff Atwood (StackOverFlow)
              </h3>
              </div>
            </div>
          </main>
          </div>
      </div>
      
  )
}

export default Profile;
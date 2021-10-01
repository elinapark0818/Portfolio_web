import React, {useEffect, useState} from 'react';
import styles from './about.module.css';
import { useSpring, animated } from 'react-spring'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


export default function About() {
  
  
  return (
      <div className={styles.about}>
        
        <div className={styles.container}>
          
          <div className={styles.title}>
          <button className={styles.about_btn}>About</button>
          </div>
          <div className={styles.psWrap}
            data-aos="fade-up">
          <p className={styles.ps}>많은 사람들에게 도움을 줄 수 있는<br/>
          친절한 개발자로 성장하기 위한<br/>
          훈련 과정.</p>
          </div>


          <animated.div className={styles.group}>

            <div className={styles.aboutHeader}>
              
              <p>
              ✔ 될 때까지 PERSISTENTLY <br/>
              ✔ 제로에서 시작하는 HABBIT<br/>
              ✔ 시간과 성장속도는 PROPORTIONAL
              </p>
              <br/>
            </div>
            <div className={styles.solved}
              data-aos="fade-up">
              <img src="./img/about_img/study.png" alt="임시" />
              <div className={styles.description}>
                <p>개발자의 기본소양은 문제해결능력!<br/>
                부딪치고 깨져도 포기하지 않는 힘!</p>
              </div>
            </div>
          <div className={styles.github}
              data-aos="fade-up">
              <img src="./img/about_img/study.png" alt="임시" />
              <div className={styles.description}>
                <p>기억 보다는 기록을<br/>
                  배우고 익힌 것을 보관하는 습관</p>
              </div>
            </div>
            
            <div className={styles.cs50}
              data-aos="fade-up">
              <img src="./img/about_img/study.png" alt="임시" />
              <div className={styles.description}>
                <p>컴퓨터 과학은 기본<br/>
                  모르면 안되는 것을 꼭 알자!</p>
              </div>
            </div>

            <div className={styles.dreamcoding}
              data-aos="fade-up">
              <img src="./img/about_img/study.png" alt="임시" />
              <div className={styles.description}>
                <p>"Don't forget code your dream!" <br/>
                  
                  양질의 교육으로 기초를 탄탄히!</p>
              </div>
            </div>

          </animated.div>
          

            
        </div>
      </div>  
  )
}

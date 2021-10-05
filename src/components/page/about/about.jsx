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
            >
          <p className={styles.ps}>많은 사람들에게 도움을 줄 수 있는<br/>
          친절한 개발자로 성장하기 위한<br/>
          나만의 훈련 과정.</p>
          </div>


          <animated.div className={styles.group}>

            <div className={styles.aboutHeader}>
              
              <p>
              ✔ 될 때까지 <b>PERSISTENTLY</b> <br/>
              ✔ 제로에서 시작하는 <b>HABBIT</b> <br/>
              ✔ 꼼꼼하게 기반을 다지는 <b>BASIC</b><br/>
              ✔ 놓치지 않을거에요 <b>THOROUGH</b><br/>
              ✔ 시간과 성장속도는 <b>PROPORTIONAL</b>
              </p>
              <br/>
            </div>
            <div className={styles.solved}
              data-aos="fade-up">
              <img src="./img/about_img/study.png" alt="임시" />
              <div className={styles.description}>
                <p><b>PERSISTENTLY</b> <br/>
                  개발자의 기본소양은 문제해결능력!<br/>
                  하루 1문제 알고리즘<br/>
                  #Baekjoon #Algorithm</p>
              </div>
            </div>
          <div className={styles.github}
              data-aos="fade-up">
              <img src="./img/about_img/study.png" alt="임시" />
              <div className={styles.description}>
                <p><b>HABBIT</b><br/>
                  기억 보다는 기록을<br/>
                  배우고 익힌 것을 보관하는 습관<br/>
                  #Github #Commit #1.1K</p>
              </div>
            </div>
            
            <div className={styles.cs50}
              data-aos="fade-up">
              <img src="./img/about_img/study.png" alt="임시" />
              <div className={styles.description}>
                <p><b>BASIC</b><br/>
                  컴퓨터 과학은 기본<br/>
                  모르면 아니되오<br/>
                  #boostcourse #ComputerSience</p>
              </div>
            </div>


            <div className={styles.dreamcoding}
              data-aos="fade-up">
              <img src="./img/about_img/study.png" alt="임시" />
              <div className={styles.description}>
                <p><b>THOROUGH</b><br/>
                  누구보다 꼼꼼하게<br/>
                  사이드이펙트도 놓치지 않기<br/>
                  #Debug #Quality </p>
              </div>
            </div>

            <div className={styles.dreamcoding}
              data-aos="fade-up">
              <img src="./img/about_img/study.png" alt="임시" />
              <div className={styles.description}>
                <p><b>PROPORTIONAL</b><br/>
                  "Don't forget code your dream!" <br/>
                  양질의 교육으로 기초를 탄탄히!<br/>
                  #Front-end #WebAPIs </p>
              </div>
            </div>

          </animated.div>
          

            
        </div>
      </div>  
  )
}

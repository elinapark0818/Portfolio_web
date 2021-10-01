import React, {useEffect, useState} from 'react';
import styles from './about.module.css';
import { useSpring, animated } from 'react-spring'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


export default function About() {
  const [isToggle, setToggle] = useState(false);
  const fade = useSpring({
    opacity: isToggle ? 1 : 0
  });

  
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
            <div className={styles.btnWrap}>
            <button
              className={styles.btn}
              onClick={()=> setToggle(!isToggle)}
              >+ 자세히 보기
            </button>
            </div>


          <animated.div 
            className={styles.group}
            style={fade}
            >

            <div className={styles.aboutHeader}>
              
              <p>
              ✔ 될 때까지 PERSISTENTLY <br/>
              ✔ 제로에서 시작하는 HABBIT<br/>
              ✔ 시간과 성장속도는 PROPORTIONAL
              </p>
              <br/>
            </div>
          <div className={styles.github}
              data-aos="fade-right">
              <img src="./img/about_img/github_img.png" alt="github" />
              <div className={styles.description}>
                <p>기억 보다는 기록을<br/>
                  배우고 익힌 것을 머리로만이 아닌<br/>
                  github에 보관하고 있습니다.</p>
              </div>
            </div>
            
            <div className={styles.cs50}
              data-aos="fade-left">
              <img src="./img/about_img/cs50_img.png" alt="cs50" />
              <div className={styles.description}>
                <p>컴퓨터 과학은 기본적으로 숙지할 것<br/>
                  '우아한Tech'에서 cs관련 영상도 틈틈히 시청하고<br/>
                  모르면 안되는 것을 꼭 알도록 노력합니다.</p>
              </div>
            </div>

            <div className={styles.dreamcoding}
              data-aos="fade-right">
              <img src="./img/about_img/dreamcoding_img.png" alt="cs50" />
              <div className={styles.description}>
                <p>"Don't forget code your dream!" <br/>
                  생활코딩과 더불어 언어의 기초를 다지는 데<br/>
                  큰 도움을 받은 강의였습니다.</p>
              </div>
            </div>

            <div className={styles.solved}
              data-aos="fade-left">
              <img src="./img/about_img/solved_img.png" alt="solved" />
              <div className={styles.description}>
                <p>알고리즘은 필수!<br/>
                개발자의 기본소양은 문제해결능력이라고 생각합니다.<br/>
                프로그래머스, 백준 사이트를 통해서<br/>
                부딪치고 깨져도 포기하지 않는 힘을 기르고 있습니다.</p>
              </div>
            </div>
          </animated.div>
          

            
        </div>
      </div>  
  )
}

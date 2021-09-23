import React from 'react'
import ReactDOM from 'react-dom'
import styles from './skills.module.css';
import { useSpring, animated } from 'react-spring';
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiPostcss } from "react-icons/si";
import { SiNetlify } from "react-icons/si";
import { SiGit } from "react-icons/si";
import { SiReactrouter } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiVisualstudiocode } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { SiJira } from "react-icons/si";

export default function Skills() {
  
  const colorful = useSpring({
    loop: true,
    from: { opacity: 0.5, color: "blue" },
    to: [{ opacity: 1, color: '#a1f4f7' },
    { opacity: 0.5, color: 'rgb(14,26,19)'},
      ],
  })

  return (

    <div className={styles.skills}>
      <div className={styles.container}>
        <div className={styles.title}>
          <button className={styles.skills_btn}>Skills</button>
            </div>

              <div className={styles.skill}>
                <ul className={styles.skill_category}>
                  <li className={styles.skill_item}>
                    <div>
                      <SiHtml5 className={styles.skill_icon} style={{color: 'red'}} />
                      </div>
                      <p className={styles.description}>Html5</p>
                  </li>
                  <li className={styles.skill_item}>
                    <div>
                      <SiCss3 className={styles.skill_icon} style={{color: 'blue'}}/>
                      </div>

                      <p className={styles.description}>CSS3</p>
                  </li>
                  <li className={styles.skill_item}>
                    <div>
                      <SiJavascript className={styles.skill_icon} style={{color: 'gold'}}/>
                      </div>

                      <p className={styles.description}>JavaScript</p>
                  </li>
                  <li className={styles.skill_item}>
                    <animated.div style={colorful}>
                    <SiReact className={styles.skill_icon} />
                      </animated.div>
                      <p className={styles.description}>React</p>
                  </li>
                </ul>
              </div>

              <div className={styles.skillset}>
              <div className={styles.graph}>
                    <div className={styles.setting}>
                        <span>HTML5</span>
                        
                    </div>
                    <div className={styles.htmlBar}>
                        <div className={styles.htmlValue}></div>
                    </div>
                </div>

                <div className={styles.graph}>
                    <div className={styles.setting}>
                        <span>CSS3</span>
                        
                    </div>
                    <div className={styles.cssBar}>
                        <div className={styles.cssValue}>
                        </div>
                    </div>
                </div>

                <div className={styles.graph}>
                    <div className={styles.setting}>
                        <span>JavaScript</span>
                        
                    </div>
                    <div className={styles.jsBar}>
                        <div className={styles.jsValue} >
                        </div>
                    </div>
                </div>

                <div className={styles.graph}>
                    <div className={styles.setting}>
                        <span>React</span>
                        
                    </div>
                    <div className={styles.reactBar}>
                        <div className={styles.reactValue}>
                        </div>
                    </div>
                </div>
              </div>

              <div className={styles.title}>
                <h2>Tool</h2>
              </div>

        <div className={styles.etc1}>
          <ul className={styles.etc_category1}>
            <li className={styles.etc_item}>
              <SiPostcss className={styles.etc_icon} />
              <p className={styles.description}>PostCSS</p>
            </li>
            <li className={styles.etc_item}>
              <SiNetlify className={styles.etc_icon} />
              <p className={styles.description}>Netlify</p>
            </li>
            <li className={styles.etc_item}>
              <SiGit className={styles.etc_icon} />
              <p className={styles.description}>Git</p>
            </li>
            <li className={styles.etc_item}>
              <SiReactrouter className={styles.etc_icon} />
              <p className={styles.description}>Router</p>
            </li>
          </ul>
          </div>
          
        <div className={styles.etc2}>  
          <ul className={styles.etc_category2}>
            <li className={styles.etc_item}>
              <SiGithub className={styles.etc_icon} />
              <p className={styles.description}>Github</p>
            </li>
            <li className={styles.etc_item}>
              <SiVisualstudiocode className={styles.etc_icon} />
              <p className={styles.description}>VScode</p>
            </li>
            <li className={styles.etc_item}>
              <SiFirebase className={styles.etc_icon} />
              <p className={styles.description}>Firebase</p>           
            </li>
            <li className={styles.etc_item}>
              <SiJira className={styles.etc_icon} />    
              <p className={styles.description}>Jira</p>          
            </li>
          </ul>
        </div>

      </div>
    </div>
  )
}
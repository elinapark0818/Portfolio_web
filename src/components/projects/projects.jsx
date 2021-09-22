import React from 'react';
import styles from './projects.module.css';

export default function Projects() {
  return (
    <div className={styles.projects}>
      <div className={styles.container}>
          <div className={styles.title}>
          <button className={styles.projects_btn}>Projects</button>
          </div>

          <header className={styles.categories}>
            <button 
            className={styles.category_btn}
            datatype="*">
              All <span className={styles.category_count}>5</span>
            </button>
            <button 
            className={styles.category_btn}
            datatype="Website">
              Website<span className={styles.category_count}>4</span>
            </button>
            <button 
            className={styles.category_btn}
            datatype="MiniGame">
              Mini-games<span className={styles.category_count}>1</span>
            </button>
          </header>
          
          <main className={styles.project_box}>
            
            <div className={styles.project}>
              <img 
                src="./img/project_img/todo.png" 
                alt="TodoList" 
                className={styles.project_img}
                />
                <div className={styles.project_description}>
                  <h3>To do list</h3>
                  <span>Html5, CSS3, Javascript</span>
                </div>
              
            </div>
            
            <div className={styles.project}>
              <img 
                src="./img/project_img/habit-tracker.png" 
                alt="Habit-tracker" 
                className={styles.project_img}
                />
                <div className={styles.project_description}>
                  <h3>Habit-tracker</h3>
                  <span>Html5, CSS3, React</span>
                </div>
            </div>
            
            <div className={styles.project}>
              <img 
                src="./img/project_img/portfolio.png" 
                alt="JavaScript portfolio" 
                className={styles.project_img}
                />
                <div className={styles.project_description}>
                  <h3>JavaScript portfolio</h3>
                  <span>Html5, CSS3, Javascript</span>
                </div>
            </div>
            
            <div className={styles.project}>
              <img 
                src="./img/project_img/coordinates.png" 
                alt="Realtime coordinates" 
                className={styles.project_img}
                />
                <div className={styles.project_description}>
                  <h3>Realtime coordinates</h3>
                  <span>Html5, CSS3, Javascript</span>
                </div>
            </div>
            
            <div className={styles.project}>
              <img 
                src="./img/project_img/carrot.png" 
                alt="minigame" 
                className={styles.project_img}
                />
                <div className={styles.project_description}>
                  <h3>Pick carrot game</h3>
                  <span>Html5, CSS3, Javascript</span>
                </div>
            </div>
          </main>
      </div>
    </div>
  )
}
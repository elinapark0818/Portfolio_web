import React from 'react'
import styles from './projectBox.module.css';

export default function ProjectBox() {

  return (
    <div className={styles.container}>  

      <div className={styles.project}>
        <div className={styles.projectImg}>
          <img src="./img/project_img/shopping.png" alt="shopping" />
        </div>
          <div className={styles.description}>
            <h3> Shopping list</h3>
            <h4 className={styles.text}> 
              Javascript <br/>
              
            </h4>
          </div>
      </div>
      <div className={styles.project}>
        <div className={styles.projectImg}>
          <img src="./img/project_img/todo.png" alt="todo" />
        </div>
          <div className={styles.description}>
            <h3> Todo list</h3>
            <h4 className={styles.text}> 
              Javascript <br/>
              
            </h4>
          </div>
      </div>

      <div className={styles.project}>
        <div className={styles.projectImg}>
          <img src="./img/project_img/habit-tracker.png" alt="habit-tracker" />
        </div>
          <div className={styles.description}>
            <h3>Habit Tracker</h3>
            <h4 className={styles.text}> 
              React Hook<br/>
              
            </h4>
          </div>
      </div>

      <div className={styles.project}>
        <div className={styles.projectImg}>

        <img src="./img/project_img/carrot.png" alt="carrot" />
        </div>
          <div className={styles.description}>
            <h3>Carrot game</h3>
            <h4 className={styles.text}> 
              Web APIs <br/>
              
            </h4>
          </div>
      </div>

      <div className={styles.project}>
        <div className={styles.projectImg}>

        <img src="./img/project_img/cardMaker.png" alt="cardMaker" />
        </div>
          <div className={styles.description}>
            <h3>Card Maker</h3>
            <h4 className={styles.text}> 
              firebase<br/>
              
            </h4>
          </div>
      </div>

      <div className={styles.project}>
        <div className={styles.projectImg}>

        <img src="./img/project_img/fullcalendar.png" alt="fullcalendar" />
        </div>
          <div className={styles.description}>
            <h3>Full Calendar</h3>
            <h4 className={styles.text}> 
              full-calendar library<br/>
              
            </h4>
          </div>
      </div>

      <div className={styles.project}>
        <div className={styles.projectImg}>

        <img src="./img/project_img/coordinates.png" alt="coordinates" />
        </div>
          <div className={styles.description}>
            <h3>Coordinates</h3>
            <h4 className={styles.text}> 
              getBoundingClientRect() <br/>
              window-load <br/>
              window-size <br/>
            </h4>
          </div>
      </div>

      <div className={styles.project}>
        <div className={styles.projectImg}>

        <img src="./img/project_img/mini-shopping.png" alt="mini-shopping" />
        </div>
          <div className={styles.description}>
            <h3>Clothes category</h3>
            <h4 className={styles.text}> 
              JavaScript <br/>
              json <br/>

            </h4>
          </div>
      </div>

      <div className={styles.project}>
        <div className={styles.projectImg}>

        <img src="./img/project_img/youtube.png" alt="youtube" />
        </div>
          <div className={styles.description}>
            <h3>Youtube mobile</h3>
            <h4 className={styles.text}> 
              Youtube APIs <br/>
              
            </h4>
          </div>
      </div>


    </div>

    
  )
}

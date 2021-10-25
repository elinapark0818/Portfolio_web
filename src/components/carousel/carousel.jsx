import React from 'react'
import styles from './carousel.module.css';

export default function Carousel() {

  return (
    <div className={styles.container}>  

      <div className={styles.project}>
        <img src="./img/project_img/todo.png" alt="todo" />
          <div className={styles.description}>
            <h3> To do list</h3>
            <h4> 
              document.querySelector() <br/>
              createItem() <br/>
              appendChild() <br/>
              scrollIntoView() <br/>
              document.createElement() <br/>
              setAttribute() <br/>
              addEventListener() <br/>
              innerHTML
            </h4>
          </div>
      </div>


    </div>

    
  )
}

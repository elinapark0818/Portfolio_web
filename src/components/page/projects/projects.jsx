import React from 'react';
import Carousel from '../../carousel/carousel';
import Spinner from '../../spinner/spinner';
import styles from './projects.module.css';

export default function Projects() {
  return (
    <div className={styles.projects}>
      <div className={styles.container}>
          <div className={styles.title}>
          <button className={styles.projects_btn}>Projects</button>
          </div>
          
          <main className={styles.project_box}>
            {/* <p className={styles.ready}>
              대규모 업데이트 준비 중</p> */}
            {/* <div className={styles.spinner}>
              <Spinner/>
            </div> */}
            <Carousel/>
          </main>
      </div>
    </div>
  )
}
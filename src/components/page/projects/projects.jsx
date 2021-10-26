import React from 'react';
import ProjectBox from '../../carousel/projectBox';
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
            <p className={styles.ready}>
              업데이트 중입니다</p>
            <div className={styles.spinner}>
              <Spinner/>
            </div>
            <ProjectBox/>
          </main>
      </div>
    </div>
  )
}
import React from 'react'
import styles from './spinner.module.css';

export default function Spinner() {
  return (
    <div className={styles.container}>
      <div className={styles.spinner}></div>
    </div>
  )
}

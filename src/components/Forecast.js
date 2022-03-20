import React from 'react'
import styles from './Forecast.module.css'

export default function Forecast() {
  return (
    <div className={styles.container}>
        <div>
            <p>Day of the week</p>
        </div>
        <div>
            <p>weather icons</p>
        </div>
        <div>
            <p>weather number (degrees)</p>
        </div>
        <div>
            <p>summary</p>
        </div>
    </div>
  )
}

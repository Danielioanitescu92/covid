import React from 'react'
import styles from './Counter.module.css'
import CountUp from 'react-countup';

const Counter = ({ country }) => {
    if (!country) {
      return '0';
    }
    return (
        <div className={styles.container}>
            <CountUp start={0} end={country} duration={1.5} separator="," />     
        </div>
    )
}

export default Counter

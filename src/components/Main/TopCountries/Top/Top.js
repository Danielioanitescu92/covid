import React from 'react'
import styles from './Top.module.css'

const Top = ({ country, newcases }) => {
    return (
        <div className={styles.container}>
            <h5>{country}</h5>
            <h6>{newcases}</h6>
        </div>
    )
}

export default Top

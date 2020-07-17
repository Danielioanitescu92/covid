import React from 'react'
import styles from './Card.module.css'
import Counter from './Counter/Counter'
import cx from 'classnames';

const Card = ({ country, thisname, border }) => {
    return (
        <div className={cx(styles.container, border)}>
            <h5>{thisname}</h5>
            <h2> <Counter country={country} /> </h2>
            <h6>{new Date().toDateString()}</h6>
        </div>
    )
}

export default Card

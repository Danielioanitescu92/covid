import React from 'react'
import styles from './TopCountries.module.css'
import Top from './Top/Top'

const TopCountries = ({ countries }) => {

    const myData = [].concat(countries)
        myData.sort((a, b) => a.NewConfirmed > b.NewConfirmed ? -1 : 1)

    return (
        <div className={styles.container}>
        <h4>Today's most confirmed</h4>
            {myData.slice(0, 5).map((item, i) => <li key={i}> <Top country={item.Country} newcases={item.NewConfirmed} /> </li>)}
        </div>
    )
}

export default TopCountries

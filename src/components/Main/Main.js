import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import Article from './Article/Article'
import styles from './Main.module.css'
import TopCountries from './TopCountries/TopCountries'

const Main = ({ country, countries, handlePickCountry }) => {
    return (
        <div className={styles.container}>
            <Sidebar countries={countries} handlePickCountry={handlePickCountry} />
            <Article country={country} />
            <TopCountries countries={countries} className={styles.topcountries} />
        </div>
    )
}

export default Main

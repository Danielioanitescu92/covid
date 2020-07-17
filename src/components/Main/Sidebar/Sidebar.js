import React from 'react'
import styles from './Sidebar.module.css'
import PickCountry from './PickCountry/PickCountry'
import TopCountries from './TopCountries/TopCountries'

const Sidebar = ({ countries, handlePickCountry }) => {
    return (
        <div className={styles.container}>
            <PickCountry countries={countries} handlePickCountry={handlePickCountry} />
            <TopCountries countries={countries} />
        </div>
    )
}

export default Sidebar

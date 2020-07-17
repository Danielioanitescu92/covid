import React from 'react'
import styles from './PickCountry.module.css'

const PickCountry = ({ countries, handlePickCountry }) => {

    return (
        <div className={styles.container}>
            <h4>Choose a country</h4>
            <select  onChange={e => handlePickCountry(e.target.value)}>
                <option value="">Global</option>
                {countries.map((country, index) => <option key={country.CountryCode} value={index}> {country.Country} </option>)}
            </select>
        </div>
    )
}

export default PickCountry
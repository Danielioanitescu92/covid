import React from 'react'
import styles from './TotalCases.module.css'
import cardStyles from '../Card/Card.module.css'
import Card from '../Card/Card'

const TotalCases = ({ country: { TotalConfirmed, TotalRecovered, TotalDeaths } }) => {
    return (
        <div className={styles.container}>
            <h4>Total Cases</h4>
            <div className={styles.cards}>
                <Card border={cardStyles.confirmed} country={TotalConfirmed} thisname='Total Confirmed' />            
                <Card border={cardStyles.recovered} country={TotalRecovered} thisname='Total Recovered' />            
                <Card border={cardStyles.deaths} country={TotalDeaths} thisname='Total Deaths' />   
            </div>         
        </div>
    )
}

export default TotalCases

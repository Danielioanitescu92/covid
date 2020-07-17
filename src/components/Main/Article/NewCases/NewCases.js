import React from 'react'
import styles from './NewCases.module.css'
import cardStyles from '../Card/Card.module.css'
import Card from '../Card/Card'

const NewCases = ({ country: { NewConfirmed, NewRecovered, NewDeaths } }) => {

    return (
        <div className={styles.container}>
            <h4>New Cases</h4>
            <div className={styles.cards}>
                <Card border={cardStyles.confirmed} country={NewConfirmed} thisname='New Confirmed' />            
                <Card border={cardStyles.recovered} country={NewRecovered} thisname='New Recovered' />            
                <Card border={cardStyles.deaths} country={NewDeaths} thisname='New Deaths' />   
            </div>         
        </div>
    )
}

export default NewCases

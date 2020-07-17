import React from 'react'
import styles from './Article.module.css'
import NewCases from './NewCases/NewCases'
import TotalCases from './TotalCases/TotalCases'

const Article = ({ country }) => {
    return (
        <div className={styles.container}>
            <NewCases country={country} />
            <TotalCases country={country} />
        </div>
    )
}

export default Article

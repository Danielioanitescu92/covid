import React from 'react'
import logo from './logo.png'
import styles from './Nav.module.css'

const Nav = ({ nav, dayone }) => {
    return (
        <div className={styles.container}>
            <img src={logo} alt="covid" />
            <div className={styles.first}>
                <h4>{nav ? nav : "GLOBAL"}</h4>
                <div className={styles.second}>
                    <div className={styles.one}> <h5>Day One:</h5> </div>
                    <div className={styles.two}></div>
                    <div className={styles.three}> <p>{dayone}</p> </div>                    
                </div>
            </div>
        </div>
    )
}

export default Nav

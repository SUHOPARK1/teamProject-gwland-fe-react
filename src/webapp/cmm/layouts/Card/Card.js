import React from 'react'
import styles from './Card.module.scss'

export default ({header,body})=>{
    return <>
    <div className={styles.wrap}>
        <div className={styles.content}>
            <div className={styles.card}>
                <div className={styles.cardHeader}>
                    {header}
                </div>
                <div className={styles.cardBody}>
                    {body}
                </div>
            </div>
        </div>
    </div>
    </>
}
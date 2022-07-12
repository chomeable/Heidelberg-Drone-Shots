import React from 'react'
import styles from '../styles/Faq.module.css'

export default function faq() {
    return (
        <div className={styles.faq}>
            <h1 className={styles.title}>FAQ</h1>
            {/* <div className={styles.grid}>
                <div className={styles.item}>
                    <details>
                        <summary>Wie lange dauert die Aufnahme?</summary>
                        <p>Die Aufnahme dauert ca. 6 Minuten.</p>
                    </details>
                </div>

                <div className={styles.item}>
                    <details>
                        <summary>Wie lange dauert die Aufnahme?</summary>
                        <p>Die Aufnahme dauert ca. 6 Minuten.</p>
                    </details>
                </div>
            </div> */}
            <div className={styles.item}>
                <details>
                    <summary>Wie lange dauert die Aufnahme?</summary>
                    <p>Die Aufnahme dauert ca. 6 Minuten.</p>
                </details>
            </div>
        </div>
    )
}

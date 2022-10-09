import Link from 'next/link'
import React from 'react'
import styles from '../styles/Faq.module.css'

export default function faq() {
    return (
        <div>
            <div className={styles.header}>
                <div><Link href="/faq">FAQ</Link></div>
                <h2 className={styles.title}>FAQ</h2>
                <div><Link href="/">HOME</Link></div>
            </div>

            <div className={styles.grid}>
                <div className={styles.faq}>
                    <div className={styles.faqtitle}>
                        <h1>Preise</h1>
                        <Link href='/faq/preise'>ÖFFNEN</Link>
                    </div>
                    <p>Wie wird der Preis zusammengesetzt?</p>
                </div>
            </div>
        </div>
    )
}

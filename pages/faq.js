import Link from 'next/link'
import React from 'react'
import styles from '../styles/Faq.module.css'

export default function faq() {
    return (
        <div>
            <div className={styles.header}>
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


                <div className={styles.faq}>
                    <div className={styles.faqtitle}>
                        <h1>Drohnen</h1>
                        <Link href='/faq/drohnen'>ÖFFNEN</Link>
                    </div>
                    <img width={128} alt="Drohne 1" src="https://geprc.com/wp-content/uploads/2022/06/16-2.jpg" />
                    <img width={128} alt="Drohne 2" src="https://imgaz1.staticbg.com/thumb/view/oaupload/banggood/images/7C/9C/bdeaca8e-c402-4c58-9e80-7afc1b08b528.jpg" />
                </div>
            </div>
        </div>
    )
}

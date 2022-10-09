import Link from 'next/link'
import React from 'react'
import styles from '../../styles/Faq.module.css'

export default function preise() {
    return (
        <div className={styles.page}>
            <div className={styles.header}>
                <div><Link href="/faq">FAQ</Link></div>
                <h2 className={styles.title}>Preise</h2>
                <div><Link href="/">HOME</Link></div>
            </div>

            <div className={styles.absatz}>
                <h1>Pauschalbetrag</h1>
                <div>
                    <p>Ein Pauschbetrag ist ein festgesetzter Mindestbetrag.</p>
                    <p>Unterschiedlich zwischen Privatperson und Unternehmen.</p>
                </div>
            </div>

            <div className={styles.absatz}>
                <h1>Aufwand</h1>
                <div>
                    <p>Abhängig von mehreren Aspekten.</p>
                    <p>Auf den Aufwand wirken sich die Drehzeit Aufwändigkeit und Schwierigkeit des Drehs aus.</p>
                </div>
            </div>

            <div className={styles.absatz}>
                <h1>Stabilisation</h1>
                <div>
                    <p>Stabilisation eines Videos ist wichtig und das best mögliche aus dem Video rauszubekommen.</p>
                    <div className={styles.videos}>
                        <video src="/videos/vid2.mp4" autoPlay loop={true}></video>
                        <video src="/videos/vid3.mp4" autoPlay loop={true}></video>
                    </div>
                </div>
            </div>

            <div className={styles.absatz}>
                <h1>Auftragstypen</h1>
                <h2>Privatperson oder Unternehmen</h2>
                <div>
                    <p>Unter einem Unternehmen versteht man eine wirtschaftlich-finanzielle und <br />
                        rechtliche Einheit, die einen bestimmten Zweck oder ein bestimmtes Ziel verfolgt. <br />
                        Bei Unternehmen der Privatwirtschaft ist dieses Ziel zumeist die Gewinnmaximierung.
                    </p>

                    <p>Unter Unternehmen fallen u.a auch Vereine, Gewerbe und Organisationen.</p>
                </div>
            </div>


        </div>
    )
}

import Link from 'next/link'
import React from 'react'
import styles from '../../styles/Faq.module.css'

export default function drohnen() {
    return (
        <div className={styles.page}>
            <div className={styles.header}>
                <div><Link href="/faq">FAQ</Link></div>
                <h2 className={styles.title}>Drohnen</h2>
                <div><Link href="/">HOME</Link></div>
            </div>

            <div className={styles.absatz}>
                <h1>Was sind das für Drohnen?</h1>
                <div>
                    <p>Wir nutzen FPV oder First Person View Drohnen, dass heisst man steuert die Drohne als säße man in ihr drin.</p>
                    <p>Diese Drohnen haben keine Hilfssysteme, dass heisst die Drohne stabilisiert sich nicht von selbst.</p>
                    <p>Weil es keine Hilfssysteme hat kann man sie lenken wie man es will und dass resultiert in spektakulären Aufnahmen.</p>
                </div>
            </div>

            <div className={styles.absatz2}>
                <h1>Cinewhoop</h1>
                <div>
                    <img src="https://geprc.com/wp-content/uploads/2022/06/16-2.jpg" />
                    <div>
                        <p>Eine Propellergeschützte Drohne, optimal für Indoor-Flüge. <br />
                            Ermöglicht es nahe an Personen/Objekten zu fliegen. <br />
                            Beschleunigung bis zu 100km/h. <br />
                            1200 Umdrehungen pro Minute. <br />
                            Flugzeit 7-9 Minuten pro Batterie. <br /> <br />
                            Man nutzt diese Drohne vorallem wen man nah an Menschen oder wichtigen Sachen, die nicht beschädigt werden dürfen fliegen muss da sie Propellerschützer hat.</p>
                    </div>
                </div>
            </div>

            <div className={styles.absatz2}>
                <h1>Freestyle Drohne</h1>
                <div>
                    <img src="https://imgaz1.staticbg.com/thumb/view/oaupload/banggood/images/7C/9C/bdeaca8e-c402-4c58-9e80-7afc1b08b528.jpg" />
                    <div>
                        <p>Eine schnelle und wendige Drohne, optimal für Verfolgungsshots oder Freestyle.<br />
                            Ermöglicht es atemberaubende Momente festzuhalten.<br />
                            Beschleunigung bis zu 150km/h.<br />
                            750 Umdrehungen pro Minute.<br />
                            Flugzeit 5-7 Minuten pro Batterie.<br /> <br />
                            Man nutzt diese Drohne bei sehr intensiven Flügen die viel manövrierbarkeit oder Flips erfordern da sie in dieser Kategorie jeder anderen Drohne überlegen ist. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

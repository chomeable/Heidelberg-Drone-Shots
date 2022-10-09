import React from 'react'
import styles from '../styles/Impressum.module.css'
import Link from 'next/link'
import Head from 'next/head'

export default function impressum() {
    return (
        <div className={styles.container}>
            <Head>
                <title>droneshots heidelberg</title>
                <meta name="description" content="Professionelle Drohnenaufnahmen" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.impressum}>
                <h1>Impressum</h1>

                <h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
                <p>Robin Lehmann, Tibor Molnar, Wada Hailu, Henrik Lehmann<br />
                    69126 Heidelberg</p>

                <h2>Kontakt</h2>
                <p>E-Mail: heidelberg.droneshots@gmail.com</p>
                <p>Internet: <Link href="https://droneshots-heidelberg.de/">droneshots-heidelberg.de</Link></p>

                <h2>Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle</h2>
                <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren <br /> vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>

                <p>Quelle: <Link href="https://www.e-recht24.de/impressum-generator.html">https://www.e-recht24.de/impressum-generator.html</Link></p>
            </div>
        </div>
    )
}

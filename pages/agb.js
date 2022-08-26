import Link from 'next/link'
import React from 'react'
import styles from '../styles/Agb.module.css'

export default function agb() {
    return (
        <div className={styles.agb}>
            <div>
                <h1>Die Allgemeine Geschäftsbedingungen</h1>

                <h2>Geltungsbereich</h2>
                <p>Die Allgemeine Geschäftsbedingungen (nachstehend &quot;AGB&quot;) gelten für alle Verträge zwischen <br />droneshots-heidelberg(nachstehend &quot;DH&quot;) und dem Kunden (nachstehend &quot;Sie&quot;, &quot;sich&quot;, etc.).</p>
                <p>Die AGB gelten für alle Verträge zwischen droneshots-heidelberg und dem Kunden.</p>

                <h2>§1 Übergabe des fertigen Produktes</h2>
                <p>Die fertige Ware(siehe Liste §2) wird dem Kunden von DH zum angeben Zeitpunkt(siehe §2) mängelfrei übergeben.</p>
                <p>Darunter ist zu verstehen, dass der Kunde zum vereinbarten Zeitpunkt die Ware annimmt und den vereinbarten Kaufpreis(siehe §11) DH zahlt.</p>

                <h2>§2 Bearbeitungszeit</h2>
                <p>Von der eigentlichen Aufnahme bis zum fertigen Produkt kann es bis zu <strong><u>48 Stunden</u></strong> dauern.</p>
                <p>Das fertige Produkt beinhaltet:</p>
                <ul className={styles.ul}>
                    <li>Stabilisierung der Aufnahme</li>
                    <li>Farbkorrektur der Aufnahme</li>
                    <li>Rendern der Aufnahme in der gewünschten Auflösung</li>
                    <li>(Wenn beantragt) Schnitt des Videos</li>
                </ul>

                {/* <h2>§3 Schadenersatz und rücksichtloses Verhalten</h2>
                <p>Außer bei unangemessener Fahrlässigkeit oder vorsätzlichen Fehlverhalten von droneshots-heidelberg Mitarbeitern(nachstehend &quot;DHM&quot;) stimmen sie auch zu, für sich selbst und im Namen aller mit dem Kunden verbunden Personen, bzw. aller Anwesenden.</p> */}

                <h2>§3 Serviceanfragen</h2>
                <p>Stellen sie bitte die folgend aufgelistete Dinge sicher:</p>
                <ul className={styles.ul}>
                    <li><p>An dem geplanten Ort ist das Fliegen und Aufnehmen mit einer Drohne erlaubt <br />(schauen sie ggf. auf <Link href="https://app.airmap.com" style="color: #0070f3"><a className={styles.link}>Airmap</a></Link> nach)</p></li>
                    <li><p>Der Drehort am geplanten Zeitpunkt zugänglich ist.</p></li>
                    <li><p>Der Drehort sicher und ungefährlich ist.</p></li>
                </ul>

                <h2>§4 Absagen & Verschiebungen</h2>
                <p>Absagen und Verschiebungen müssen mindestens 24 Stunden vor dem Dreh angekündigt werden.</p>
                <p>Erfolgt eines dieser Ereignisse zu spät wird dies mit einer Geldbuße von 15€ verrechnet.</p>
                <p>Verschiebungen werden bei folgenden Umständen werden bei nicht rechtzeitiger angkündigung nicht verrechnet:</p>
                <ul>
                    <li><p>Unfähigkeit des Kunden oder eines DH-Mitarbeiter wegen gesundheitlichlichen Notfällen sei das bei dem Kunden selbst oder in der Verwandtschaft am Dreh teilzunehmen.</p></li>
                    <li><p>Kurzzeitige wetterbedingte Planänderungen(siehe $7)</p></li>
                    <li><p>Nicht funktionstüchtiges Equipment (Drohne, Zübehör, etc.)</p></li>
                </ul>

                <h2>§5 Gewährleistungen</h2>

                <h2>§6 Schadenersatz</h2>

                <h2>§7 Wetterrichtlinie</h2>
                <p>Unter der Wetterrichtlinie werden folgende Ereignisse abgedeckt:</p>
                <ul>
                    <li><p>Regen, Gewitter und Schnee da das Equipment beschädigt werden kann. (siehe <Link href="https://www.wetteronline.de/regenradar/heidelberg"><a className={styles.link}>Regenradar Heidelberg</a></Link>)</p></li>
                    <li><p>Hitze(&gt;40°C), da dies zu gefährdung der anwesenden Personen führen kann.</p></li>
                    <li><p>Starke Winde (&gt;Windstufe 4)</p></li>
                </ul>
                <p>Wenn eines oder mehrere dieser Ereignisse auftreten sollte wird der Dreh ohne verrechnung verschoben.</p>


                <h2>§8 Eigentum des Produktes</h2>
                <p>Das fertige Produkt bekommt der Kunde ohne zusätzliche Kosten zur freien Verfügung.</p>
                <p>Im Vertrag, wird vereinbart, ob der Kunde der alleinige Besitzer bleibt oder ob er DH zum Miteigentümer ernennt und somit einen Preisnachlass für den nächsten Auftrag erhält (die höhe dessen wird ebenfalls im Vertrag behandelt).</p>

                <h2>§9 Datenschutz</h2>
                <p>Mit der ernennung von DH zum Miteigentümer gewähren sie DH gemäß Artikel 17 volles Recht auf das Produkt.</p>

                <h2>§10 Salvotorische Klausel</h2>
                <p>
                    Sollten sich eine oder mehrere der in diesen Allgemeinen Geschäftsbedingungen enthaltenen Bestimmungen
                    in irgendeiner Weise als ungültig, rechtswidrig oder nicht durchsetzbar erweisen, bleiben die Gültigkeit,
                    Rechtmäßigkeit und Durchsetzbarkeit der übrigen Bestimmungen davon unberührt. Diese Bestimmungen werden in
                    dem Umfang überarbeitet. Dies ist erforderlich, um sie durchsetzbar zu machen.
                </p>

                <h2>§11 Zahlungen & Verzugsgebühren</h2>
                {/* <p>Die Zahlung ist ohne Abzug innerhalb von 30 Tagen nach Erhalt der Rechnung fällig. Für überfällige Zahlungen wird eine Verzugsgebühr in zwei Schritten festgelegt:</p> */}
                <p>Die Zahlung ist ohne Abzug innerhalb von 30 Tagen nach Erhalt der Rechnung fällig. Für überfällige Zahlungen wird eine Verzugsgebühr in Höhe des höheren Betrags von</p>
                <ol>
                    <li>einer Verzugsgebühr von 50€ / Monat</li>
                    und
                    <li>10% des fälligen Betrages</li>
                    erhoben.
                </ol>

                <h2>§12 Auftrag</h2>
                <p></p>

                <h2>§12 Höhere Gewalt</h2>

                <h2>§13 Einverständniserklärung</h2>
                <p>Ich habe diee Allgemeine Geschäftsbedingungen vollständig gelesen und ihre Bedingungen vollständig verstanden. Hiermit bestätige ich frei und freiwillig die Allgemeinen Geschäftsbedingungen.</p>

                <br />
            </div>
        </div>
    )
}

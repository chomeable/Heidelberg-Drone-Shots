import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useLayoutEffect, useEffect } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {


  useLayoutEffect(() => {
    window.onscroll = () => {
      let scrollTop = document.documentElement.scrollTop;
      if (scrollTop > 440) {
        document.querySelectorAll('#row').forEach(e => {
          e.style = "transition: 1500ms; transform: scale(1);"
        })
      }

      if (window.innerWidth >= 900) {
        if (scrollTop < 440 || scrollTop > 1453) {
          document.querySelectorAll('#row').forEach(e => {
            e.style = "transition: 750ms; transform: scale(0);"
          })
        }
      }
      else if (scrollTop < 440 || scrollTop > 1896) {
        document.querySelectorAll('#row').forEach(e => {
          e.style = "transition: 750ms; transform: scale(0);"
        })
      }
    }
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>droneshots heidelberg</title>
        <meta name="description" content="Professionelle Drohnenaufnahmen" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.section}>
          <h1 className={styles.title}>
            Willkommen bei <Link href="/">droneshots heidelberg</Link>
          </h1>

          <p className={styles.description}>
            Professionelle Drohnenaufnahmen in freien oder geschlossenen Umgebungen
          </p>

          <div className={styles.wave}>
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={styles.shapefill}></path>
            </svg>
          </div>
        </div>

        <div className={styles.sec1}>
          <h1 className={styles.showreel}>VORSCHAU</h1>
          <div className={styles.grid}>
            <div className={styles.row} id="row">
              <video className={styles.vid} controls controlsList="nodownload" autoPlay muted>
                <source src="/videos/vid1.mp4" type="video/mp4" />
              </video>
              <div>
                <h1>Draußen Flug</h1>
                <h4>Information zur Drohne in dieser Aufnamhe</h4>
                <ul>
                  <li>Bis zu 150 km/h</li>
                  <li>Gut für freiluft Umgebungen</li>
                  <li>4k Aufnahmen möglich</li>
                  <li>Aufnahmen sind <Link href="/faq" className={styles.atag}>stabilisiert</Link></li>
                  <li>Aufnahmen sind <Link href="/faq" className={styles.atag}>color gegraded</Link></li>
                  <li>Flugdauer ~ 6 min <br /> (es werden mehrere Batterien verwendet)</li>
                  <li>~ 800g</li>
                  <li>17cm * 17cm + Propeller</li>
                </ul>
              </div>
            </div>

            <div className={styles.big}>
              <div className={styles.row} id="row">
                <div>
                  <h1>Drinnen Flug</h1>
                  <h4>Information zur Drohne in dieser Aufnamhe</h4>
                  <ul>
                    <li>Für nahe Aufnahmen zu Personen oder Gegenständen gedacht</li>
                    <li>Die Propeller sind geschützt deshalb besteht keine <br /> Verletzungsgefahr gefahr</li>
                    <li>4k Aufnahmen möglich</li>
                    <li>Aufnahmen sind <Link href="/faq" className={styles.atag}>stabilisiert</Link></li>
                    <li>Aufnahmen sind <Link href="/faq" className={styles.atag}>color gegraded</Link></li>
                    <li>Flugdauer ~ 7.5 min <br /> (es werden mehrere Batterien verwendet)</li>
                    <li>20cm * 20cm inkl. Propeller</li>
                  </ul>
                </div>
                <video className={styles.vid} controls controlsList="nodownload">
                  <source src="/videos/vid1.mp4" type="video/mp4" />
                </video>
              </div>
            </div>

            <div className={styles.small}>
              <div className={styles.row} id="row">
                <video className={styles.vid} controls controlsList="nodownload">
                  <source src="/videos/vid1.mp4" type="video/mp4" />
                </video>
                <div>
                  <h1>Drinnen Flug</h1>
                  <h4>Information zur Drohne in dieser Aufnamhe</h4>
                  <ul>
                    <li>Die Propeller sind geschützt deshalb besteht keine <br /> Verletzungsgefahr gefahr</li>
                    <li>4k Aufnahmen möglich</li>
                    <li>Aufnahmen sind <Link href="/faq" className={styles.atag}>stabilisiert</Link></li>
                    <li>Flugdauer ~ 7.5 min <br /> (es werden mehrere Batterien verwendet)</li>
                    <li>20cm * 20cm inkl. Propeller</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.sec2}>
          <div className={styles.wave2}>
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={styles.shapefill}></path>
            </svg>
          </div>
          {/* <form action="https://formsubmit.co/0da830855b437249ecd6df8913af57a0" method="POST" className={styles.form}> */}
          <form action="http://localhost:3000/api/form" method="POST" className={styles.form}>
            <h1>Kontaktiere Uns</h1>
            <div className={styles.formRow}>
              <label>NAME *</label>
              <input type="text" name="name" required placeholder='Geben sie ihren Namen ein' />
            </div>
            <div className={styles.formRow}>
              <label>EMAIL *</label>
              <input type="email" name="email" required placeholder='Geben sie ihre Email ein' />
            </div>
            <div className={styles.formRow}>
              <label>TYP DER AUFNAHME *</label>
              <select required name="typ">
                <option value="Privat">Privat</option>
                <option value="Event">Event</option>
                <option value="Öffentlich">Öffentlich</option>
              </select>
            </div>
            <div className={styles.formArea}>
              <label>ERZÄHLEN SIE UNS MEHR ÜBER IHRE IDEE *</label>
              <textarea name="message" required placeholder="Schreiben sie hier"></textarea>
            </div>
            <button type="submit">Send</button>
          </form>
        </div>
      </main >

      <footer className={styles.footer}>
        {/* <Link
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by chomeable
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </Link> */}
        <Link
          href="https://chomeable.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram Page
          {/* <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span> */}
        </Link>
        <Link
          href="https://chomeable.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>Powered by <strong>chomeable</strong></p>
          {/* <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span> */}
        </Link>
        <Link
          href="https://chomeable.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Youtube Page
          {/* <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span> */}
        </Link>
      </footer>
    </div >
  )
}

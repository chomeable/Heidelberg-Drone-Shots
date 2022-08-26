import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useLayoutEffect } from 'react'
import styles from '../styles/Home.module.css'

const rabatt = 0;
const aufwande = [
  12.50,
  15,
  20,
  27.50,
  37.50,
  50,
  65,
  82.50,
  100,
  119.99
]
const startPrice = 30;

export default function Home() {

  useLayoutEffect(() => {
    window.onscroll = () => {
      let scrollTop = document.documentElement.scrollTop;
      console.log(scrollTop)
      if (scrollTop > 440) {
        document.querySelectorAll('#row').forEach(e => {
          e.style = "transition: 1500ms; transform: scale(1);"
        })
      }

      if (window.innerWidth >= 900) {
        if (scrollTop < 440 || scrollTop > 3200) {
          document.querySelectorAll('#row').forEach(e => {
            e.style = "transition: 750ms; transform: scale(0);"
          })
        }
      }
      else if (scrollTop < 440 || scrollTop > 4000) {
        document.querySelectorAll('#row').forEach(e => {
          e.style = "transition: 750ms; transform: scale(0);"
        })
      }
    }

    renderSlider()
    recalculate()
  }, [])
  // useEffect(() => {
  //   document.addEventListener('DOMContentLoaded', () => {
  //     window.onscroll = () => {
  //       let scrollTop = document.documentElement.scrollTop;
  //       if (scrollTop > 440) {
  //         document.querySelectorAll('#row').forEach(e => {
  //           e.style = "transition: 1500ms; transform: scale(1);"
  //         })
  //       }

  //       if (window.innerWidth >= 900) {
  //         if (scrollTop < 440 || scrollTop > 1453) {
  //           document.querySelectorAll('#row').forEach(e => {
  //             e.style = "transition: 750ms; transform: scale(0);"
  //           })
  //         }
  //       }
  //       else if (scrollTop < 440 || scrollTop > 1896) {
  //         document.querySelectorAll('#row').forEach(e => {
  //           e.style = "transition: 750ms; transform: scale(0);"
  //         })
  //       }
  //     }
  //   })
  // }, [])

  let attributes = {
    pauschal: 'privat',
    aufwand: 1,
    schnitt: true,
  }

  const drones = [
    {
      img: "https://geprc.com/wp-content/uploads/2022/06/16-2.jpg",
      text: "Eine Propellergeschützte Drohne optimal für Indoor flüge und ermöglicht es nahe an Personen zu fliegen."
    },
    {
      img: "https://ae01.alicdn.com/kf/H4a6bc7c42aa34aa88db0a84438139074i/IFlight-Nazgul5-V2-240mm-5-zoll-4S-6S-FPV-Drone-BNF-mit-SucceX-E-F4-45A.jpg_Q90.jpg_.webp",
      text: "Eine schnelle und wendige Drohne gut zu nutzen für Verfolgungsshots oder Freestyle."
    }
  ]

  let slider = 0;

  function updateSlider(value) {
    // console.log(drones.length)
    // console.log(drones[1])
    // console.log(slider + value)
    if (slider + value < 0) {
      slider = drones.length - 1
      console.log(slider)
      renderSlider()
    }
    else if (slider + value > drones.length - 1) {
      slider = 0
      console.log(slider)
      renderSlider()
    }
    else {
      slider = slider + value
      console.log(slider)
      renderSlider()
    }
  }

  function renderSlider() {
    const text = document.getElementById("sliderText")
    const img = document.createElement("sliderImg")
    text.innerHTML = drones[slider].text
    sliderImg.src = drones[slider].img
  }

  const recalculate = e => {
    let price = startPrice;

    if (e) {
      if (e.target.name == 'aufwand' && e.target.value > 10)
        attributes[e.target.name] = 10
      else if (e.target.name == 'aufwand' && e.target.value < 1)
        attributes[e.target.name] = 1
      else if (e.target.name == 'schnitt')
        attributes[e.target.name] = e.target.checked
      else
        attributes[e.target.name] = e.target.value
    }

    price += attributes.pauschal == 'privat' ? 50 : 75;
    price += aufwande[attributes.aufwand - 1]
    price += attributes.schnitt == true ? 25 : 0;

    document.getElementById('calculatorResult').innerHTML = price + '€*'
    if (rabatt > 0) {
      let rabattPrice = Math.round(price * (100 - rabatt)) / 100;
      // document.getElementById('calculatorResult').innerHTML = `${price}€ <h7 style="font-size: 15px">-${rabatt}%</h7> = ${rabattPrice}€`
      document.getElementById('calculatorResult').innerHTML = `${rabattPrice}€* (inkl. -${rabatt}%)`
    }
  }

  const closeBanner = () => {
    document.getElementById('banner').style.transition = '500ms'
    document.getElementById('banner').style.opacity = '0'

    setTimeout(() => {
      document.getElementById('banner').style.display = 'none'
    }, 700)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>droneshots heidelberg</title>
        <meta name="description" content="Professionelle Drohnenaufnahmen" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <div className={styles.banner} id="banner">
        <div>
          <button onClick={() => closeBanner()}>&#x2716;</button>
        </div>
        <h2>30% Off</h2>
      </div> */}

      <main className={styles.main}>
        <div className={styles.section}>

          {/* <div className='menu_bar'>
            <img src='/drone-icon.ico' height='70px' /> 
          </div> */}
          {/* <img src='/drone-icon.ico' /> */}
          <embed src="/DH-Logo.svg" height="175" width="175" />
          <br />

          <h1 className={styles.title}>
            {/* <Link href="/">droneshots heidelberg</Link> */}Droneshots Heidelberg
          </h1>

          <p className={styles.description}>
            Professionelle Drohnenaufnahmen <br /> für Privatperson und <br /> Unternehmen
          </p>

          <div className={styles.wave}>
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={styles.shapefill}></path>
            </svg>
          </div>
        </div>

        <div className={styles.sec1}>
          <h1 className={styles.showreel}>PROJEKTE</h1>
          <div className={styles.grid}>
            <div className={styles.row} id="row">
              {/* <video className={styles.vid} controls controlsList="nodownload" autoPlay muted>
                <source src="https://youtu.be/90oX0VLorfk" />
              </video> */}
              <iframe className={styles.vid} src="https://www.youtube.com/embed/90oX0VLorfk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              <h2 className={styles.projektTitle}>VERFOLGUNG</h2>
            </div>

            <div className={styles.row} id="row">
              <video className={styles.vid} controls controlsList="nodownload">
                <source src="/videos/vid1.mp4" type="video/mp4" />
              </video>
              <h2 className={styles.projektTitle}>FREESTYLE</h2>
            </div>

            <div className={styles.row} id="row">
              <video className={styles.vid} controls controlsList="nodownload">
                <source src="/videos/vid1.mp4" type="video/mp4" />
              </video>
              <h2 className={styles.projektTitle}>KREATIV</h2>
            </div>
          </div>

          <div>
            <h2 style={{ color: "white" }}>Infos zu diesen Aufnahmen</h2>
            <ul style={{ color: "white" }}>
              <li>Bis zu 150 km/h</li>
              <li>Gut für freiluft Umgebungen</li>
              <li>Aufgenommen mit einer GoPro Hero 9</li>
              <li className={styles.flex}>Aufnahmen sind <Link href="/faq"><p className={styles.atag}>stabilisiert</p></Link></li>
              <li className={styles.flex}>Aufnahmen sind <Link href="/faq"><p className={styles.atag}>color gegraded</p></Link></li>
              <li className={styles.flex}>4k 60fps Aufnahmen möglich</li>
              <br />
              <li>Flugdauer ~ 6 min <br /> (es werden mehrere Batterien verwendet)</li>
              <li>~ 800g</li>
              <li>Reichweite &gt;1km </li>
              <li>17cm * 17cm + Propeller</li>
            </ul>
          </div>
        </div>

        <div className={styles.sec2}>
          <div className={styles.wave2}>
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={styles.shapefill}></path>
            </svg>
          </div>
          <form action="https://formsubmit.co/0da830855b437249ecd6df8913af57a0" method="POST" className={styles.form}>
            {/* <form action="/api/form" method="POST" className={styles.form}> */}
            <h1>KONTAKT</h1>
            <div className={styles.formRow}>
              <label>NAME *</label>
              <input type="text" name="name" required placeholder='Geben sie ihren Namen an' />
            </div>
            <div className={styles.formRow}>
              <label>EMAIL *</label>
              <input type="email" name="email" required placeholder='Geben sie ihre Email an' />
            </div>
            <div className={styles.formRow}>
              <select required name="typ">
                <option value="Privatperson">Privatperson</option>
                <option value="Unternehmen">Unternehmen</option>
                <option value="Andere">Andere</option>
              </select>
            </div>
            <div className={styles.formArea}>
              <label>ERZÄHLEN SIE UNS MEHR ÜBER IHRE IDEE *</label>
              <textarea name="message" required placeholder="Schreiben sie hier"></textarea>
            </div>
            <button type="submit">Send</button>
            <p>Mit dem senden diese Formulares stimmen sie den <Link href="/agb"><a className={styles.atag}>AGB</a></Link> zu</p>
          </form>
          <div className={styles.wave}>
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={styles.shapefill}></path>
            </svg>
          </div>
        </div>

        <div className={styles.sec3}>
          <h1 className={styles.showreel}>PREISE</h1>
          <br />
          <br />
          <div className={styles.prices}>
            <table className={styles.table}>
              <thead>
                <tr className={styles.tablehead}>
                  <th>BETREFF</th>
                  <th>PREIS</th>
                  <th>ERKLÄRUNG</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className={styles.tdtitle}>Pauschalbetrag</td>
                  <td>50€ bei Privatpersonen <br /> 75€ bei Unternehmen</td>
                  <td className={styles.tdinfo}>Eine Gebühr, die bei <u>jedem</u> Auftrag verbindlich ist.</td>
                </tr>
                <tr>
                  <td className={styles.tdtitle}>Aufwand</td>
                  <td>12,50€ - 120,00€</td>
                  <td className={styles.tdinfo}>Abhängig vom <u>Schwierigkeitsgrad</u> und <u>Zeitaufwand</u> der Aufnahme.</td>
                </tr>
                <tr>
                  <td className={styles.tdtitle}>Gerätekosten</td>
                  <td>30€</td>
                  <td className={styles.tdinfo}>Die Kosten für die <u>Wartung</u> des Gerätes in diesem Fall der Drohne.</td>
                </tr>
                <tr>
                  <td className={styles.tdtitle}>Videoschnitt</td>
                  <td>25€</td>
                  <td className={styles.tdinfo}>Professioneller Schnitt des Videos nach Wünschen des Kunden.</td>
                </tr>
                <tr>
                  <td className={styles.tdtitle}>Stabilisation + Farbkorrektur</td>
                  <td><s>20€</s>    <strong>Kostenlos</strong></td>
                  <td className={styles.tdinfo}>Eine Stabilisierung und Farbkorrektur der Aufnahme ist <u>inklusive</u>.</td>
                </tr>
              </tbody>
            </table>


            <div>
              <div className={styles.calculator}>
                <h3 style={{ fontSize: '25px', padding: '0' }}>Rechner</h3>
                <div className={styles.radiobtns}>
                  <div>
                    <input type="radio" name="pauschal" defaultChecked value="privat" id="privatperson" onInput={recalculate} />
                    <label htmlFor="privatperson">Privatpersonen</label>
                  </div>
                  {/* &lt;&gt; */}
                  <div>
                    <input type="radio" name="pauschal" value="unternehmen" id="unternehmer" onInput={recalculate} />
                    <label htmlFor="unternehmer">Unternehmen</label>
                  </div>
                </div>
                <div className={styles.calculatorRow}>
                  <label htmlFor="aufwand">Aufwand: </label>
                  <input type="number" name="aufwand" max={10} min={1} id="aufwand" onInput={recalculate} defaultValue={1} />
                </div>
                <div className={styles.calculatorRow} name="schnitt">
                  <label htmlFor="aufwand">Schnitt </label>
                  <input type="checkbox" name="schnitt" id="schnitt" onInput={recalculate} defaultChecked={true} />
                </div>

                <div className={styles.calculatorRow}>
                  <div className={styles.inputs}>
                    <h2 id="calculatorResult">0€</h2>
                  </div>
                  <p className={styles.warn}>* Dies sind nur <strong>geschätzte</strong> Summen zur Orientierung.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.sec4}>
          <div className={styles.wave2}>
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={styles.shapefill}></path>
            </svg>
          </div>
        </div>

        <div className={styles.sec5}>
          <h1 className={styles.title}>EQUIPMENT</h1>

          <br />

          <div className={styles.equipments}>
            <div className={styles.equipment}>
              <h2 className={styles.subtitle}>DROHNEN</h2>
              <br />
              <div className={styles.slider}>
                <button className={styles.sliderButton} onClick={() => updateSlider(-1)}>
                  &#x25C0;
                </button>
                {

                }
                <img src="https://geprc.com/wp-content/uploads/2022/06/16-2.jpg" id="sliderImg" />
                <button className={styles.sliderButton} onClick={() => updateSlider(1)}>
                  &#x25B6;
                </button>
              </div>
              <p id="sliderText">
              </p>
            </div>

            <div className={styles.equipment}>
              <h2 className={styles.subtitle}>KAMERA</h2>
              <br />
              <img src="https://res-5.cloudinary.com/grover/image/upload/e_trim/c_limit,f_auto,fl_png8.lossy,h_1280,q_auto,w_1280/v1600703377/w3qbobl36ahnmowjxjlb.png" />
              <p>
                Die Kamera die zur Aufnahme genutzt wird ist eine GoPro Hero 9 Black. <br />
                Sie wird gemeinsam mit einem ND filter für optimale farben und belichtung genutzt.
              </p>
            </div>
          </div>
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
        {/* <Link
          href="https://chomeable.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>Powered by <strong>chomeable</strong></p>
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </Link> */}
        <Link
          href="https://www.instagram.com/droneshots_heidelberg/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram Page
          {/* <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span> */}
        </Link>
        <Link
          href="https://www.youtube.com/channel/UC1TyGYAExdPEKKM8z6fSnNw"
          target="_blank"
          rel="noopener noreferrer"
        >
          Youtube Page
          {/* <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span> */}
        </Link>
        <Link
          href="/impressum"
          target="_blank"
          rel="noopener noreferrer"
        >
          Impressum
          {/* <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span> */}
        </Link>
        <Link
          href="/agb"
          target="_blank"
          rel="noopener noreferrer"
        >
          AGB
          {/* <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span> */}
        </Link>

      </footer>

      <br />
    </div >
  )
}

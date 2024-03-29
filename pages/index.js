import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useLayoutEffect, useState } from 'react'
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

  const [hasdate, setHasdate] = useState(false)

  useLayoutEffect(() => {
    window.onscroll = () => {
      let scrollTop = document.documentElement.scrollTop;
      if (scrollTop > 440) {
        document.querySelectorAll('#row').forEach(e => {
          e.style = "transition: 1500ms; transform: scale(1);"
        })
      }

      if (window.innerWidth >= 900) {
        if (scrollTop < 440) {
          document.querySelectorAll('#row').forEach(e => {
            e.style = "transition: 750ms; transform: scale(0);"
          })
        }
      }
      else if (scrollTop < 440) {
        document.querySelectorAll('#row').forEach(e => {
          e.style = "transition: 750ms; transform: scale(0);"
        })
      }
    }

    let touchstartX = 0
    let touchendX = 0

    function checkDirection() {
      if (touchendX < touchstartX) {
        updateSlider(-1)
        updateVid(-1)
      }
      if (touchendX > touchstartX) {
        updateSlider(1)
        updateVid(1)
      }
    }

    document.addEventListener("touchstart", e => {
      touchstartX = e.changedTouches[0].screenX
    })

    document.addEventListener('touchend', e => {
      touchendX = e.changedTouches[0].screenX
      checkDirection()
      setTimeout(() => { }, 3000)
    })

    renderSlider()
    // recalculate()
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
      img: "https://res.cloudinary.com/dyqweatbz/image/upload/v1684252375/droneshots-heidelberg/cinelog35_ckkdw9.png",
      text: "Eine Propellergeschützte Drohne, optimal für Indoor-Flüge. <br /> Ermöglicht es nahe an Personen/Objekten zu fliegen. <br />Beschleunigung bis zu 80km/h. <br /> 1200 Umdrehungen pro Minute. <br /> Flugzeit 7-9 Minuten pro Batterie."
    },
    {
      img: "https://res.cloudinary.com/dyqweatbz/image/upload/v1684252374/droneshots-heidelberg/nazgul5_pmce8i.png",
      text: "Eine schnelle und wendige Drohne, optimal für Verfolgungsshots oder Freestyle. <br /> Ermöglicht es atemberaubende Momente festzuhalten. <br />Beschleunigung bis zu 150km/h. <br /> 750 Umdrehungen pro Minute. <br /> Flugzeit 5-7 Minuten pro Batterie."
    }
  ]

  const videos = [
    {
      vid: "https://www.youtube.com/embed/dtHrlLrNZ54",

    },
    {
      vid: "https://www.youtube.com/embed/wat4SlyJSHs"
    },
    {
      vid: "https://www.youtube.com/embed/7JhWYBXatrw"
    }
  ]

  const goproList = [
    {
      img: "https://i.imgur.com/LzVTLb3.png",
      text: "Die Kamera die zur Aufnahme genutzt wird ist eine GoPro Hero 9 Black."
    },
    {
      img: "https://res.cloudinary.com/dyqweatbz/image/upload/v1684252375/droneshots-heidelberg/action2_snzh9u.png",
      text: "Eine Kamera leichter und daher besser geeignet für Indoor Flüge als die GoPro."
    },
    {
      img: "https://res.cloudinary.com/dyqweatbz/image/upload/v1684252375/droneshots-heidelberg/nd_dano0w.png",
      text: "Die GoPro wird gemeinsam mit einem ND- Filter genutzt, der für optimale farben und belichtung sorgt."
    }
  ]

  let slider = 0;

  function updateSlider(value) {
    if (slider + value < 0) {
      slider = drones.length - 1
      renderSlider()
    }
    else if (slider + value > drones.length - 1) {
      slider = 0
      renderSlider()
    }
    else {
      slider = slider + value
      renderSlider()
    }
  }

  let vid = 0;

  function updateVid(value) {
    if (vid + value < 0) {
      vid = videos.length - 1
      renderVid()
    }
    else if (vid + value > videos.length - 1) {
      vid = 0
      renderVid()
    }
    else {
      vid = vid + value
      renderVid()
    }
  }

  let gopro = 0;

  function updateGoProSlider(value) {
    if (gopro + value < 0) {
      gopro = goproList.length - 1
      renderGoPro()
    }
    else if (gopro + value > goproList.length - 1) {
      gopro = 0
      renderGoPro()
    }
    else {
      gopro = gopro + value
      renderGoPro()
    }
  }

  function renderSlider() {
    const text = document.getElementById("sliderText")
    const sliderImg = document.getElementById("sliderImg")
    text.innerHTML = drones[slider].text
    sliderImg.src = drones[slider].img
  }

  function renderVid() {
    const sliderVid = document.getElementById("sliderVid")
    sliderVid.src = videos[vid].vid
  }

  function renderGoPro() {
    const text = document.getElementById("goproSliderText")
    const sliderImg = document.getElementById("goproSliderImg")
    text.innerHTML = goproList[gopro].text
    sliderImg.src = goproList[gopro].img
  }

  // const recalculate = e => {
  //   let price = startPrice;

  //   if (e) {
  //     if (e.target.name == 'aufwand' && e.target.value > 10)
  //       attributes[e.target.name] = 10
  //     else if (e.target.name == 'aufwand' && e.target.value < 1)
  //       attributes[e.target.name] = 1
  //     else if (e.target.name == 'schnitt')
  //       attributes[e.target.name] = e.target.checked
  //     else
  //       attributes[e.target.name] = e.target.value
  //   }

  //   price += attributes.pauschal == 'privat' ? 50 : 75;
  //   price += aufwande[attributes.aufwand - 1]
  //   price += attributes.schnitt == true ? 20 : 0;

  //   const aufwandNumber = document.getElementById("aufwandNumber")
  //   aufwandNumber.innerHTML = attributes.aufwand

  //   document.getElementById('calculatorResult').innerHTML = price + '€*'
  //   if (rabatt > 0) {
  //     let rabattPrice = Math.round(price * (100 - rabatt)) / 100;
  //     // document.getElementById('calculatorResult').innerHTML = `${price}€ <h7 style="font-size: 15px">-${rabatt}%</h7> = ${rabattPrice}€`
  //     document.getElementById('calculatorResult').innerHTML = `${rabattPrice}€* (inkl. -${rabatt}%)`
  //   }
  // }

  const closeBanner = () => {
    document.getElementById('banner').style.transition = '500ms'
    document.getElementById('banner').style.opacity = '0'

    setTimeout(() => {
      document.getElementById('banner').style.display = 'none'
    }, 700)
  }

  const getCurrentDate = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;

    return today;
  }

  return (
    <div className={styles.container} lang='DE'>
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
            Professionelle Drohnenaufnahmen <br /> für Privatpersonen und <br /> Unternehmen
          </p>

          <div className={styles.wave}>
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={styles.shapefill}></path>
            </svg>
          </div>
        </div>

        <div className={styles.sec1}>
          <h1 className={styles.showreel}>PROJEKTE</h1>
          <div className={styles.equipment}>
            <div className={styles.slider}>
              <button className={styles.sliderButton} onClick={() => updateVid(-1)}>
                &#x25C0;
              </button>
              <iframe className={styles.vid} title='slidervideos' id="sliderVid" src="https://www.youtube.com/embed/dtHrlLrNZ54" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              <button className={styles.sliderButton} onClick={() => updateVid(1)}>
                &#x25B6;
              </button>
            </div>
          </div>

          <br />
          <br />

          <div className={styles.grid}>
            {/* <div className={styles.row} id="row">
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
            </div> */}
          </div>
        </div>

        <div className={styles.sec2}>
          <div className={styles.wave2}>
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={styles.shapefill}></path>
            </svg>
          </div>
          <form action="https://formsubmit.co/c5705b4e8ce652521920457b2428864c" method="POST" className={styles.form}>
            {/* <form action="/api/form" method="POST" className={styles.form}> */}
            <h1>KONTAKT</h1>
            <div className={styles.formRow}>
              <label htmlFor='name'>NAME *</label>
              <input type="text" name="name" required placeholder='Geben sie ihren Namen an' />
            </div>
            <div className={styles.formRow}>
              <label htmlFor='email'>EMAIL *</label>
              <input type="email" name="email" required placeholder='Geben sie ihre Email an' />
            </div>
            <div className={styles.formRow}>
              <label htmlFor='tel'>TELEFON *</label>
              <input type="tel" name="phone" pattern="+49[7-9]{2}-[0-9]{3}-[0-9]{4}" required placeholder='Geben sie ihre Nummer an' />
            </div>
            <div className={styles.formRow}>
              <select required name="typ">
                <option value="Privatperson">Privatperson</option>
                <option value="Unternehmen">Unternehmen</option>
                <option value="Andere">Andere</option>
              </select>
            </div>
            <div className={styles.formRow}>
              <label htmlFor='date'>PROJEKTDATUM</label>
              <input type="checkbox" checked={hasdate} onChange={(e) => setHasdate(e.target.checked)} name="hasdate" />
              {
                hasdate ? (
                  <input type="date" defaultValue={getCurrentDate()} min={getCurrentDate()} name="date"></input>
                ) : (
                  <></>
                )
              }
            </div>
            <div className={styles.formArea}>
              <label htmlFor='message'>ERZÄHLEN SIE UNS ÜBER IHRE IDEE *</label>
              <textarea name="message" required placeholder="Schreiben sie hier"></textarea>
            </div>
            <button type="submit">Send</button>
            <p>Mit dem versenden dieses Formulares stimmen sie den <Link href="/agb"><a className={styles.atag}>AGB</a></Link> zu</p>
            <p>Die Einsendung wird so früh wie möglich bearbeitet.</p>
          </form>
          <div className={styles.wave}>
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={styles.shapefill}></path>
            </svg>
          </div>
        </div>

        {/* <div className={styles.sec3}>
          <h1 className={styles.showreel}>PREISE</h1>
          <br />
          <br />
          <div className={styles.prices}>
            <table className={styles.table}>
              <thead>
                <tr className={styles.tablehead}>
                  <th>AUFTRAG</th>
                  <th>PREIS</th>
                  <th>INFO</th>
                </tr>
              </thead>

              <tbody className={styles.tbody}>
                <tr>
                  <td className={styles.tdtitle}>Pauschalbetrag</td>
                  <td className={styles.tdprice}>50€ Privatpersonen <br /> 75€ Unternehmen</td>
                  <td className={styles.tdinfo}>Gebühr, verbindlich bei jedem Projekt.</td>
                </tr>
                <tr>
                  <td className={styles.tdtitle}>Aufwand</td>
                  <td className={styles.tdprice}>12,50€ - 120,00€</td>
                  <td className={styles.tdinfo}>Abhängig von der Schwierigkeit und der Drehzeit des Projektes (1-10).</td>
                </tr>
                <tr>
                  <td className={styles.tdtitle}>Gerätekosten</td>
                  <td className={styles.tdprice}>30€</td>
                  <td className={styles.tdinfo}>Die Kosten für die Wartung des <a href="#equipment" className={styles.atag}>Equipments</a>.</td>
                </tr>
                <tr>
                  <td className={styles.tdtitle}>Videobearbeitung <br /> <p className={styles.nonthicc}>optional</p></td>
                  <td className={styles.tdprice}>20€</td>
                  <td className={styles.tdinfo}>Professioneller Videoschnitt nach Wünschen des Kunden.</td>
                </tr>
                <tr>
                  <td className={styles.tdtitle}>Stabilisation Farbkorrektur <br /> <p className={styles.nonthicc}>optional</p></td>
                  <td className={styles.tdprice}><s>20€</s>    <strong>KOSTENLOS</strong></td>
                  <td className={styles.tdinfo}>Stabilisierung und Farbkorrektur der Aufnahme.</td>
                </tr>
                <tr>
                  <td className={styles.tdtitle}>Fragen</td>
                  <td className={styles.tdprice} ><Link href="/faq/preise" >FAQ</Link></td>
                  <td className={styles.tdinfo}>Wollen sie mehr darüber wissen wie der Preis zusammengesetzt wird?</td>
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
                  <div>
                    <input type="radio" name="pauschal" value="unternehmen" id="unternehmer" onInput={recalculate} />
                    <label htmlFor="unternehmer">Unternehmen</label>
                  </div>
                </div>
                <div className={styles.calculatorRow}>
                  <div style={{ display: "flex", justifyContent: "space-between", height: "20px", alignItems: "center", marginTop: "10px" }}>
                    <label htmlFor="aufwand">Aufwand 1-10</label>
                    <p id="aufwandNumber"></p>
                  </div>
                  <input type="range" name="aufwand" max="10" min="1" id="aufwand" onInput={recalculate} defaultValue={1} />
                </div>
                <div className={styles.calculatorRow} name="schnitt">
                  <input type="checkbox" name="schnitt" id="schnitt" onInput={recalculate} defaultChecked={true} />
                  <label htmlFor="aufwand">Schnitt </label>
                </div>
                <div className={styles.calculatorRow} name="schnitt">
                  <input type="checkbox" />
                  <label htmlFor="aufwand">Stabilisation </label>
                </div>
                <div className={styles.calculatorRow} name="schnitt">
                  <input type="checkbox" />
                  <label htmlFor="aufwand">Farbkorrektur </label>
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
        </div> */}

        <div className={styles.sec3}>

          <h1 className={styles.title} id="equipment">EQUIPMENT</h1>

          <br />
          <br />
          <br />

          <div className={styles.equipments}>
            <div className={styles.equipment}>
              <h2 className={styles.subtitle}>DROHNEN</h2>
              <br />
              <div className={styles.slider}>
                <button className={styles.sliderButton} onClick={() => updateSlider(-1)}>
                  &#x25C0;
                </button>
                <img alt="sliderDrones" src="https://res.cloudinary.com/dyqweatbz/image/upload/v1684252375/droneshots-heidelberg/cinelog35_ckkdw9.png" id="sliderImg" style={{ borderRadius: "10px", backgroundColor: "transparent" }} />
                <button className={styles.sliderButton} onClick={() => updateSlider(1)}>
                  &#x25B6;
                </button>
              </div>
              <p id="sliderText">
              </p>
            </div>

            <br />

            <div className={styles.equipment}>
              <h2 className={styles.subtitle}>KAMERA</h2>
              <br />
              <div className={styles.slider}>
                <button className={styles.sliderButton} onClick={() => updateGoProSlider(-1)}>
                  &#x25C0;
                </button>
                <img alt="sliderCamera" src="https://i.imgur.com/LzVTLb3.png" id="goproSliderImg" />
                <button className={styles.sliderButton} onClick={() => updateGoProSlider(1)}>
                  &#x25B6;
                </button>
              </div>

              <p id="goproSliderText">
                Die Kamera die zur Aufnahme genutzt wird ist eine GoPro Hero 9 Black.
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
          href="https://www.youtube.com/channel/UC1TyGYAExdPEKKM8z6fSnNw"
          target="_blank"
          rel="noopener noreferrer"
        >
          Youtube
          {/* <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span> */}
        </Link>
        <Link
          href="https://www.instagram.com/droneshots.heidelberg/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
          {/* <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span> */}
        </Link>
        {/* <Link
          href="/faq"
          target="_blank"
          rel="noopener noreferrer"
        >
          FAQ
        </Link> */}
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
          href="/pdf/AGB.pdf"
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

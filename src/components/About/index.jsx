import React from 'react'
import pic1 from './media/image.png'
import pic2 from './media/image2.png'
import s from './index.module.css'

export default function About() {
  return (
    <section className='wrapper'>
      <h2>Über uns</h2>
      <div className={s.about_container}>
        <div>
          <p>"Ihr Zuhause in sicheren Händen – Hausmeisterdienste" </p>
          <p>Schnelle Auftragsabwicklung: Rufen Sie uns an oder hinterlassen Sie eine Anfrage auf unserer Website, und wir werden uns umgehend mit Ihnen in Verbindung setzen.</p>
<p>Bequeme Zeitplanung: Wir wählen eine für Sie bequeme Zeit für die Ausführung der Arbeiten. </p>
<p> Aufmerksamkeit für Details: Wir montieren die Möbel strikt nach Anleitung und achten auf jedes Detail.</p>
<p>Aufräumen nach der Arbeit: Nach Abschluss der Montage reinigen unsere Fachleute hinter sich und hinterlassen Ihr Zuhause sauber.</p>
<p>Verschwenden Sie nicht Ihre Kräfte und Nerven beim selbstständigen Möbelzusammenbau. Vertrauen Sie diese Aufgabe Profis an und genießen Sie das Ergebnis!</p>

<p>Rufen Sie uns noch heute an und erhalten Sie einen Rabatt auf Ihre erste Bestellung!</p>


        </div>
        <img src={pic1} alt='pic1' />
        <img src={pic2} alt='pic2' />
        <div>
          <p>"Profitieren Sie von unserem zuverlässigen Montageservice und unserer Erfahrung"</p>
          <p>Du benötigst helfende Hände?</p>
<p>Hättest du gerne Unterstützung beim Aufbau deiner neuen Möbel? Egal, ob du gerne Unterstützung hättest oder Zeit einsparen möchtest, unser Fachpersonal kann dir behilflich sein.</p> <p>Der Aufbau wird von unseren fachkundigen Möbelspediteuren am Anlieferungsort sorgfältig und gewissenhaft durchgeführt und beinhaltet den Zusammenbau des Möbelstücks, sowie falls nötig, die Anbringung an Boden, Wand oder Decke.</p>
        </div>
      </div>
    </section>
  )
}
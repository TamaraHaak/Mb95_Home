import React from 'react'
import SessionCardsContainer from '../SessionCardsContainer';
import s from '../Sessions/index.module.css'

export default function Sessions() {
  return (
    <section className='wrapper'>
      <h2>Service</h2>
    

<h3 className={s.text}>Warum Sie uns wählen sollten:
Zeitersparnis:<p></p> Unsere Fachleute arbeiten schnell und effizient, damit Sie Ihre neuen Möbel so schnell wie möglich genießen können. <p></p>
Erfahrung und Professionalität: Langjährige Erfahrung und tausende erfolgreich abgeschlossene Aufträge garantieren höchste Qualität der Montage.<p></p>
Erschwingliche Preise: Wir bieten wettbewerbsfähige Preise ohne versteckte Kosten.<p></p>
Alles unter Kontrolle: Wir kommen mit allen notwendigen Werkzeugen und Materialien. Sie müssen sich um nichts kümmern!<p></p>
Qualitätsgarantie: Auf alle Arbeiten geben wir eine Garantie, damit Sie sicher sein können, dass Ihre Möbel zuverlässig montiert sind.
</h3>



      <SessionCardsContainer />
    </section>
  )
}
import React from 'react'
import session_img from './pic7.JPG'
import session_imge from './pic8.png'
import session_image from './pic9.png'
import session_img1 from './pic10.JPG'
import session_img2 from './pic6.WEBP'
import SessionCard from '../SessionCard'
import s from './index.module.css'

export default function SessionCardsContainer() {

  const sessionCards = [
    {
      id: 1,
      title: 'Boden laminieren',
      img: session_img
    },
    {
      id: 2,
      title: 'Rasen mähen',
      img: session_imge
    },
    {
      id: 3,
      title: 'Malerarbeiten innen und außen',
      img: session_image
    },
    {
      id: 4,
      title: 'Möbelmontage',
      img: session_img2
    },
    {
      id: 5,
      title: 'Blätter reinigen',
      img: session_img1
    }
  ]

  return (
    <div className={s.sessions_container}>
      {
        sessionCards.map(el => <SessionCard key={el.id} {...el} />)
      }
    </div>
  )
}
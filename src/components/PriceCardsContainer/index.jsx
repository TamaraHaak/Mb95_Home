import React from 'react'
import PriceCard from '../PriceCard'
import s from './index.module.css'

export default function PriceCardsContainer() {

  const price_data = [
    {
       id: 1,
       title: 'Boden laminieren',
       cost: `ab 12€(1qm)`
    },
    {
       id: 2,
       title: 'Rasen mähen',
       cost: `ab 20€`
    },
    {
       id: 3,
       title: 'Malerarbeiten innen und außen',
       cost: `ab 10€(1qm)`
    },
    {
       id: 4,
       title: 'Möbelmontage',
       cost: `ab 500€`
    },
    {
       id: 5,
       title: 'Blätter reinigen',
       cost: `ab 20€`
    },
 ]

  return (
    <div className={s.price_container}>
      {
        price_data.map(el => <PriceCard key={el.id} {...el} />)
      }
    </div>
  )
}


  
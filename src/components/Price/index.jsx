import React from 'react'
import PriceCardsContainer from '../PriceCardsContainer'
import price_img from './thankyou.png'
import s from './index.module.css'

export default function Price() {
  return (
    <div className={['wrapper', s.price].join(' ')}>
      <h2>Preis</h2>
      <div>
        <PriceCardsContainer />
        <div>
          <img src={price_img} alt='thanks_card' />
          <p>Geschenkgutschein</p>
        </div>
      </div>
    </div>
  )
}
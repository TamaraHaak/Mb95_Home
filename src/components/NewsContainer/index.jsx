import React from 'react'
import news_pic from './media/img6.png'
import news_pic2 from './media/img9.png'
import news_pic3 from './media/img4.png'
import news_pic4 from './media/img8.png'
import news_pic5 from './media/img10.png'
import news_pic6 from './media/img3.png'
import NewsCard from '../NewsCard'
import s from './index.module.css'

export default function NewsContainer() {

  const newsCards = [
    {
      id: 1,
      title: 'Küchen',
      news_img: news_pic,
      date: 'jede Komlexität'
    },
    {
      id: 2,
      title: 'Kinderzimmer',
      news_img: news_pic2,
      date: 'jede Komlexität'
    },
    {
      id: 3,
      title: 'Schlafzimmer',
      news_img: news_pic3,
      date: 'jede Komlexität'
    },
    {
      id: 4,
      title: 'Büro',
      news_img: news_pic4,
      date: 'jede Komlexität'
    },
    {
      id: 5,
      title: 'Wohnzimmer',
      news_img: news_pic5,
      date: 'jede Komlexität'
    },
    {
      id: 6,
      title: 'Arbeitszimmer',
      news_img: news_pic6,
      date: 'jede Komlexität'
    }
  ]

  return (
    <div className={s.news_container}>
      {
        newsCards.map(el => <NewsCard key={el.id} {...el} />)
      }
    </div>
  )
}
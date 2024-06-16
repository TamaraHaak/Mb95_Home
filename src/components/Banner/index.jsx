import React from 'react'
import s from './index.module.css'
import banner_img from './pic5.jpg'

export default function Banner() {

  const banner_styles = {
    backgroundImage: `url('${banner_img}')`
  }

  return (
    <div className={[s.banner, 'wrapper'].join(' ')} style={banner_styles}>
     
      <h2>MÖBELMONTAGE UND HAUSSERVICE</h2>
    </div>
  )
}
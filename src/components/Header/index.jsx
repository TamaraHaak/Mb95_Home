import React from 'react'
import logo from './Home 2.ico'
import s from './index.module.css'
import { IoMenu } from "react-icons/io5"





const Header = ({ scrollToFooter }) => {


  return (
   
    <header className={[s.header, 'wrapper'].join(' ')}>
      <img src={logo} alt='logo' />
      <nav>
        <li>Haupt</li>
        <li>Service</li>
        <li>Bewertungen</li>
        <li>Кontakte</li>
        <li>Katalog</li>
        <li>Uber uns</li>
        <li>Preis</li>
      </nav>
      <div onClick={scrollToFooter}>Termin vereinbaren</div>
      <IoMenu className={s.menu_icon} />
    </header>
   
  )
};
 export default Header;
import React, { forwardRef }  from 'react';
import s from './index.module.css';
import inst_icon from './images/ic-instagram.png';
import whatsapp_icon from './images/ic-whatsapp.png';


const Footer = forwardRef((props, ref) => {

  return (
    <footer ref={ref}>

        <h1>Kontakt</h1>

        <div className={s.info_container}>
            <div className={s.info_card}>
                <h2>Telefon</h2>
                <h3>+49 1751147871</h3>
            </div>
            <div className={s.info_card}>
                <h2>Soziale</h2>
                <div className={s.images}>
                    <a href="https://www.instagram.com"><img src={inst_icon} alt="Instagram" /></a>
                    <a href="https://www.instagram.com/mb95_mobel_haus_service?igsh=ZDF1ajJ4MzZra3Iz"><img src={whatsapp_icon} alt="WhatsApp" /></a>
                </div>
            </div>
            <div className={s.info_card}>
                <h2>Address</h2> 
                <h3>Piracherstrasse 43, 84489 Burghausen</h3>
            </div>
            <div className={s.info_card}>
                <h2>Standortbestimmung</h2>
                <h3>Bayern</h3>
            </div>
        </div>

        <div className={s.map}>
            <iframe src="https://www.google.com/maps/embed?place/Blumenstraße+51,+80336+M%C3%BCnchen/@48.1324765,11.5653369,17z/data=!3m1!4b1!4m6!3m5!1s0x479ddf5edda761cd:0xfd9bf1433decbda0!8m2!3d48.1324729!4d11.5679172!16s%2Fg%2F11ghng1fwp?hl=ru&entry=ttu"></iframe>
        </div>
    </footer>
  )
});
export default Footer;
import React, { useEffect, useRef } from 'react';
import './App.css';
import About from './components/About';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Header from './components/Header';
import News from './components/News';
import Price from './components/Price';
import Sessions from './components/Sessions';

function App() {
  const footerRef = useRef(null);

  const scrollToFooter = () => {
    footerRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    let supportsPassive = false;

    // Проверка поддержки пассивных слушателей событий в браузере
    try {
      const opts = Object.defineProperty({}, 'passive', {
        get() {
          supportsPassive = true;
        }
      });
      window.addEventListener('test', null, opts);
    } catch (e) {
      // Нет необходимости обрабатывать ошибку, supportsPassive останется false
    }

    const handleScroll = () => {
      // Логика обработки прокрутки
      // Убедитесь, что здесь нет вызова setState или других изменений, вызывающих рендер
    };

    window.addEventListener('scroll', handleScroll, supportsPassive ? { passive: true } : false);
    
    return () => {
      window.removeEventListener('scroll', handleScroll, supportsPassive ? { passive: true } : false);
    };
  }, []); // Пустой массив зависимостей гарантирует выполнение эффекта только один раз

  return (
    <div>
      <Header scrollToFooter={scrollToFooter} />
      <Banner />
      <Sessions />
      <About />
      <Price />
      <News />
      <Footer ref={footerRef} />
    </div>
  );
}

export default App;
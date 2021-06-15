import React from 'react';

function Promo() {

  const scrollAboutRef = () => window.scrollTo({ top: 658, behavior: 'smooth' });

  return (
    <section className="promo">
      <div className="promo__container">
        <h1 className="promo__title">Учебный проект студента факультета Веб&#8209;разработки.</h1>
        <h2 className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</h2>
        <button onClick={scrollAboutRef} className="promo__button">Узнать больше</button>
      </div>
      <div className="promo__image"></div>
    </section>
  )
}

export default Promo;
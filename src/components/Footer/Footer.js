import React from 'react';

function Footer() {

  return (
    <footer className="footer">
      <h3 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
      <div className="footer__container">
        <p className="footer__copyright">&#169; 2021</p>
        <nav className="footer__navigate">
          <ul className="footer__links-list">
            <li className="footer__link-item"><a className="footer__link" target="_blank" rel="noreferrer" href="https://praktikum.yandex.ru/">Яндекс.Практикум</a></li>
            <li className="footer__link-item"><a className="footer__link" target="_blank" rel="noreferrer" href="https://github.com/yandex-praktikum">Github</a></li>
            <li className="footer__link-item"><a className="footer__link" target="_blank" rel="noreferrer" href="https://www.facebook.com/yandex.praktikum">Facebook</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

export default Footer;
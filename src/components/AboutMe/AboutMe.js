import React from "react";

import SectionTitle from "../SectionTitle/SectionTitle";

import photo from "../../images/aboutMe/photo.jpg";
import icon from "../../images/aboutMe/icon.png";

function AboutMe() {
  return (
    <section className="about_me">
      <SectionTitle text="Студент" />
      <div className="about-me__container">
        <div className="about-me__info-container">
          <p className="about-me__name">Анастасия</p>
          <p className="about-me__about">Фронтенд-разработчик, 32 года</p>
          <p className="about-me__article">
            Я родилась в Омске, но практически всю жизнь живу в Москве,
            закончила факультет управления МГУТУ. Недавно начала кодить. С 2014
            года работаю в компании «QIWI». После того, как пройду курс по
            веб-разработке, планирую начать заниматься фриланс-заказами и уйти с
            постоянной работы в офисе.
          </p>
          <ul className="about-me__social-list">
            <li className="about-me__social-link">Facebook</li>
            <li className="about-me__social-link">Github</li>
          </ul>
        </div>
        <img className="about-me__photo" src={photo} alt="фото студента"></img>
      </div>
      <h3 className="about-me__portfolio-title">Портфолио</h3>
      <ul className="about-me__portfolio-list">
        <li className="about-me__portfolio-link-item">
          <a
            className="about-me__portfolio-link"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/nastiash/how-to-learn"
          >
            Статичный сайт{" "}
            <img
              className="about-me__portfolio-icon"
              src={icon}
              alt="иконка ссылки"
            ></img>
          </a>
        </li>
        <li className="about-me__portfolio-link-item">
          <a
            className="about-me__portfolio-link"
            target="_blank"
            rel="noreferrer"
            href="https://nastiash.github.io/russian-travel/"
          >
            Адаптивный сайт{" "}
            <img
              className="about-me__portfolio-icon"
              src={icon}
              alt="иконка ссылки"
            ></img>
          </a>
        </li>
        <li className="about-me__portfolio-link-item">
          <a
            className="about-me__portfolio-link"
            target="_blank"
            rel="noreferrer"
            href="https://nastiash.github.io/mesto/index.html"
          >
            Одностраничное приложение{" "}
            <img
              className="about-me__portfolio-icon"
              src={icon}
              alt="иконка ссылки"
            ></img>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default AboutMe;

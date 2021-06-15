import React from "react";

import SectionTitle from "../SectionTitle/SectionTitle";

function Techs() {
  return (
    <section className="techs">
      <SectionTitle text="Технологии" />
      <div className="techs__container">
        <div className="techs__title">7 технологий</div>
        <div className="techs__subtitle">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </div>
      </div>
      <ul className="techs__list">
        <li className="techs__list_item">HTML</li>
        <li className="techs__list_item">CSS</li>
        <li className="techs__list_item">JS</li>
        <li className="techs__list_item">React</li>
        <li className="techs__list_item">Git</li>
        <li className="techs__list_item">Express.js</li>
        <li className="techs__list_item">mongoDB</li>
      </ul>
    </section>
  );
}

export default Techs;

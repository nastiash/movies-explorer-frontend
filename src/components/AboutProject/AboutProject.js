import React from "react";

import SectionTitle from "../SectionTitle/SectionTitle";

function AboutProject() {
  return (
    <section className="about-project">
      <SectionTitle text="О проекте" />
      <div className="about-project__columns">
        <div className="about-project__column">
          <h3 className="about-project__title">
            Дипломный проект включал 5 этапов
          </h3>
          <div className="about-project__article">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </div>
        </div>
        <div className="about-project__column">
          <h3 className="about-project__title">
            На выполнение диплома ушло 5 недель
          </h3>
          <div className="about-project__article">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </div>
        </div>
      </div>
      <div className="about-project__timing">
        <div className="about-project__timing-cell about-project__timing-cell_type_front">
          1 неделя
        </div>
        <div className="about-project__timing-cell about-project__timing-cell_type_back">
          4 недели
        </div>
        <div className="about-project__timing-cell about-project__timing-cell_type_caption">
          Back-end
        </div>
        <div className="about-project__timing-cell about-project__timing-cell_type_caption">
          Front-end
        </div>
      </div>
    </section>
  );
}

export default AboutProject;

import React from 'react';
import "./style.css";
import "./mediaqueries.css";

import Checkmark from "../assets/checkmark.png";
import ArrowPic from "../assets/arrow.png";
import NutricionClinica from "../assets/nutricionclinica.jpeg";
import SportsNutrition from "../assets/sportsnutrition.jpeg";
import HabitosAlimentarios from "../assets/habitosalimentarios.jpeg";


const ExperienceSection = () => {
  return (
    <section id="experience">
      <p className="section__text__p1">Servicios</p>
      <h1 className="title">Áreas de Trabajo</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          
          <div className="details-container" id='experience-container'>
          <div id='experience-title-container'>
          <img
                  src={Checkmark}
                  alt="Experience icon"
                  className="icon"
                />
            <h2 className="experience-sub-title">Nutrición Clínica</h2>
            </div>
            <div className="article-container">
              <article>
                <img
                  src={NutricionClinica}
                  alt="Experience icon"
                  className="nutricionclinicaimg"
                />

                <div>
                  <h3>Revitaliza tu salud con soluciones personalizadas</h3>
                  <p>En el centro de mi enfoque en nutrición clínica está la convicción de que la alimentación es fundamental para la recuperación y el mantenimiento de la salud. Especializado en planes nutricionales personalizados, ofrezco estrategias integrales para diversas condiciones, brindando consejería detallada y apoyo continuo para empoderarte en tu viaje hacia una mejor salud.</p>
                </div>
              </article>
              {/* Repeat similar code for other technologies */}
            </div>
          </div>

          <div className="details-container" id='experience-container'>
          <div id='experience-title-container'>
          <img
                  src={Checkmark}
                  alt="Experience icon"
                  className="icon"
                />
            <h2 className="experience-sub-title">Nutrición Deportiva</h2>
            </div>
            <div className="article-container">
              <article>
                <img
                  src={SportsNutrition}
                  alt="Experience icon"
                  className="nutricionclinicaimg"
                />
                <div>
                  <h3>Maximizando tu máximo nivel deportivo</h3>
                  <p>Como tu nutricionista deportivo, mi objetivo es maximizar tu rendimiento personalizado, adaptando tu alimentación para alinearse con tus metas atléticas. Especializado en diversas disciplinas deportivas, ofrezco estrategias nutricionales personalizadas que impulsan la energía, fortalecen la resistencia y aceleran la recuperación, guiándote hacia el éxito deportivo mediante enfoques específicos para cada actividad.</p>
                </div>
              </article>
              {/* Repeat similar code for other technologies */}
            </div>
          </div>

          <div className="details-container" id='experience-container'>
          <div id='experience-title-container'>
          <img
                  src={Checkmark}
                  alt="Experience icon"
                  className="icon"
                />
            <h2 className="experience-sub-title">Hábitos Alimentarios</h2>
            </div>
            <div className="article-container">
              <article>
                <img
                  src={HabitosAlimentarios}
                  alt="Experience icon"
                  className="nutricionclinicaimg"
                />
                <div>
                  <h3>Creando un equilibrio nutritivo</h3>
                  <p>Mi enfoque en la transformación de hábitos alimentarios es personalizado y holístico, buscando renovar tu relación con la comida de manera saludable y duradera. A través de la creación de un equilibrio nutritivo y el soporte continuo, te guío para integrar prácticas alimenticias que enriquezcan tu vida, mejoren tu bienestar y se adapten a tus ritmos naturales.</p>
                </div>
              </article>
              {/* Repeat similar code for other technologies */}
            </div>
          </div>
        </div>
      </div>
      <img
        src={ArrowPic}
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => (window.location.href = './#projects')}
      />
    </section>
  );
};

export default ExperienceSection;

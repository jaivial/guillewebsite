import React from 'react';
import "./style.css";
import "./mediaqueries.css";

import AboutPic from "../assets/about-pic.png";
import ExperienceIcon from "../assets/experience.png";
import EducationPic from "../assets/education.png";
import ArrowPic from "../assets/arrow.png";
import EducationLogo from "../assets/educationlogo.png";

const AboutSection = () => {
  return (
    <section id="about">
      <p className="section__text__p1">Cónoceme</p>
      <h1 className="title">Sobre Mi</h1>
      <div className="section-container">
        <div className="about__pic-container">
          <img
            src={AboutPic}
            alt="Profile picture"
            className="about-pic"
          />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img
                src={ExperienceIcon}
                alt="Experience icon"
                className="icon"
              />
              <h3>Dietista-Nutricionista</h3>
              <p>
                Colegiado (CV1797)
              </p>
            </div>
            <div className="details-container">
              <img
                src={EducationLogo}
                alt="Education icon"
                className="icon"
              />
              <h3>Grado en Nutrición Humana y Dietética</h3>
              <p>
               Universidad de Valencia (2021)
              </p>
            </div>
          </div>
          <div className="text-container">
            <p>
            Bienvenidos a mi consulta, soy Guillermo Fernández de la Torre, tu aliado en el camino hacia un bienestar integral. Como dietista-nutricionista colegiado (CV1797), mi compromiso es ofrecerte un acompañamiento cercano y personalizado, diseñando planes nutricionales que se ajustan a tus objetivos de salud y estilo de vida. Mi formación y experiencia en el campo de la nutrición son el fundamento sobre el que construyo cada estrategia, siempre con un enfoque basado en la evidencia científica.
            </p>
          </div>
        </div>
      </div>
      <img
        src={ArrowPic}
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => (window.location.href = './#experience')}
      />
    </section>
  );
};

export default AboutSection;

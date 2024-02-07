import React from 'react';
import "./style.css";
import "./mediaqueries.css";

import Checkmark from "../assets/checkmark.png";
import ArrowPic from "../assets/arrow.png";


const ExperienceSection = () => {
  return (
    <section id="experience">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Experience</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container" id='experience-container'>
            <h2 className="experience-sub-title">Frontend Development</h2>
            <div className="article-container">
              <article>
                <img
                  src={Checkmark}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>HTML</h3>
                  <p>Experienced</p>
                </div>
              </article>
              {/* Repeat similar code for other technologies */}
            </div>
          </div>
          <div className="details-container" id='experience-container'>
            <h2 className="experience-sub-title">Backend Development</h2>
            <div className="article-container">
              <article>
                <img
                  src={Checkmark}
                  alt="Experience icon"
                  className="icon"
                />
                <div>
                  <h3>PostgreSQL</h3>
                  <p>Basic</p>
                </div>
              </article>
              {/* Repeat similar code for other backend technologies */}
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

import React from 'react';
import "./style.css";
import "./mediaqueries.css";


const Footer = () => {
  return (
    <footer>
      <nav>
        <div className="nav-links-container">
          <ul className="nav-links">
            <li>
              <a href="#about">Sobre Mi</a>
            </li>
            <li>
              <a href="#experience">Servicios</a>
            </li>
            <li>
              <a href="#projects">Planes</a>
            </li>
            <li>
              <a href="#contact">Contacto</a>
            </li>
          </ul>
        </div>
      </nav>
      <p>Copyright © 2024 JAIME DIGITAL STUDIO. All Rights Reserved. <br /> <a href="www.jaimedigitalstudio.com">www.jaimedigitalstudio.com</a></p>
    </footer>
  );
};

export default Footer;

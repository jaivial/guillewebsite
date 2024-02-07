import React from 'react';
import './desktopnav.css';

const DesktopNav = () => {
  return (
    <nav id="desktop-nav">
      <div className="logo">GUILLERMO FERNÁNDEZ</div>
      <div>
        <ul className="nav-links">
          <li><a href="#about">Sobre mi</a></li>
          <li><a href="#experience">Experiencia</a></li>
          <li><a href="#projects">Planes</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default DesktopNav;

import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";
import { IconContext } from "react-icons";
import DesktopNav from "./desktopnav";
import LogoNombre from "../assets/LogoNombre2.png";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div>
          <div className="navbar">
            <Link to="#" className="menu-bars">
              <FaIcons.FaBars onClick={showSidebar} />
            </Link>
            <nav id="desktop-nav">
              <div className="logo">
                <img src={LogoNombre} alt="Guillermo Ferández Nutricionista" />
              </div>
              <div className="navbarlinks">
                <ul className="nav-links">
                  <li>
                    <a href="#about">Sobre mi</a>
                  </li>
                  <li>
                    <a href="#experience">Experiencia</a>
                  </li>
                  <li>
                    <a href="#projects">Planes y Precios</a>
                  </li>
                  <li>
                    <a href="#contact">Contacto</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;

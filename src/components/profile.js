import React from "react";
import { motion } from "framer-motion";
import "./style.css";
import "./mediaqueries.css";

import ProfilePic from "../assets/profile-pic.png";
import LinkedinImg from "../assets/linkedin.png";
import Whatsapp from "../assets/whatsappicon.png";
import Email from "../assets/email.png";

const ProfileSection = () => {

  const redirectToContact = () => {
    window.location.href = "./#contact";
  };
  const redirectToTarifas = () => {
    window.location.href = "./#projects";
  };

  const redirectToLinkedIn = () => {
    window.location.href = "https://linkedin.com/";
  };
  const redirectToEmail = () => {
    window.location.href = "mailto:guillermofernandez@hotmail.com";
  };

  const redirectToWhatsapp = () => {
    window.location.href = "https://wa.me/34681059411?text=Hola!%20Quiero%20pedir%20información%20para%20empezar%20un%20plan%20dietético%20contigo.";
  };

  const fadeInVariants = {
    hidden: { opacity: 0, y: -550, x: 0 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }, // Set duration to 1 second
  };
  
  const fadeInRightVariants = {
    hidden: { opacity: 0, x: 550, y: 0 },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 1.5 } }, // Set duration to 1 second
  };
  
  const fadeInDownVariants = {
    hidden: { opacity: 0, y: 500 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5 } }, // Set duration to 1 second
  };
  

  return (
    <motion.section
      id="profile"
      initial="hidden"
      animate="visible"
      
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="section__pic-container"
        variants={fadeInDownVariants}
      >
        <img src={ProfilePic} alt="John Doe profile picture" />
      </motion.div>
      <motion.div
        className="section__text"
        variants={fadeInRightVariants}
      >
        <p className="section__text__p1">Hola, soy</p>
        <h1 className="title">Guillermo Fernández</h1>
        <p className="section__text__p2">Nutricionista</p>
        <div className="btn-container">
          <button className="btn btn-color-2" onClick={redirectToTarifas}>
            VER PLANES
          </button>
          <button className="btn btn-color-1" onClick={redirectToContact}>
            CONTACTAR
          </button>
        </div>
        <div id="socials-container">
          <motion.img
            src={LinkedinImg}
            alt="My LinkedIn profile"
            className="icon"
            onClick={redirectToLinkedIn}
            whileHover={{ scale: 1.1 }}
          />
          <motion.img
            src={Whatsapp}
            alt="Enviame un Whatsapp"
            className="icon"
            onClick={redirectToWhatsapp}
            whileHover={{ scale: 1.1 }}
          />
          <motion.img
            src={Email}
            alt="Enviame un e-mail"
            className="icon"
            onClick={redirectToEmail}
            whileHover={{ scale: 1.1 }}
          />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default ProfileSection;

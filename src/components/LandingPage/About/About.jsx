import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about">
      <div className="about-info">
        <h3><span>Hola! Soy Javier</span></h3>
        <h1>IT Technician</h1>
        <p>
          Me presento como una persona de fácil trato, actitud franca y
          respetuosa, establezco vínculos laborales cordiales, propenso a crear
          un ambiente de trabajo productivo y comprometido con los objetivos
          empresariales. Apasionado de las nuevas tecnologías. Actualmente estoy
          trabajando como técnico informático y cursando un grado superior de
          administración de sistemas informáticos y redes al mismo tiempo.
        </p>
        <a className="about_btn" href="mailto:jrb01@iesemilidarder.com">
          <button>Enviar correo</button>
        </a>

        <div className="img-about">
          <img src="/assets/foto-perfil.jpg" alt="Foto Perfil" />
        </div>
      </div>
    </section>
  );
};

export default About;

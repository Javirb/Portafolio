import React from 'react';
import './Main.css';

const Main = () => {
  return (
    <main>

      <section className="contacto" id="contacto">
        <h2>Contacto</h2>
        <div className="informacion-contacto">
          <div className="dato-contacto">
            <h3>Email</h3>
            <p>jrb01@iesemilidarder.com</p>
          </div>
          <div className="dato-contacto">
            <h3>Teléfono</h3>
            <p>+1234567890</p>
          </div>
          <div className="dato-contacto">
            <h3>Ubicación</h3>
            <p>Palma de Mallorca</p>
          </div>
        </div>
      </section>

      <section className="experiencia" id="experiencia">
        <h2>Mi Experiencia Laboral</h2>
        <div className="contenedor-experiencia">
          <div className="trabajo">
            <h3>SAT Técnico Informático</h3>
            <p>ICONO - 2020 - Presente</p>
            <p>Técnico oficial de Lenovo y administrador de Atlassian Jira</p>
          </div>
          <div className="trabajo">
            <h3>Servibite</h3>
            <p>2018 - 2018</p>
            <p>FCT</p>
          </div>
        </div>
      </section>


      <section className="estudios" id="estudios">
        <h2>Mis Estudios</h2>
        <div className="contenedor-estudios">
          <div className="estudio">
            <h3>
              Técnico Superior en Administración de Sistemas Informáticos en Red
            </h3>
            <p>2021 - Actualidad</p>
          </div>
          <div className="estudio">
            <h3>Técnico en Sistemas Microinformáticos y Redes</h3>
            <p>2018 - 2020</p>
          </div>
          <div className="estudio">
            <h3>Título Profesional Básico en Informática y Comunicaciones</h3>
            <p>2016 - 2018</p>
          </div>
        </div>
      </section>



<section className="proyectos" id="proyectos">
  <h2>Mis Proyectos</h2>
  <div className="contenedor-proyectos">
    <div className="proyecto">
      <h3>Icono testing</h3>
      <p>Desarollo de una página de pruebas</p>
      <a href="https://riddick.netlify.app" >Ver Proyecto</a>

    </div>

    <div className="proyecto">
      <h3>Portafolio</h3>
      <p>Desarollo de un portafolio</p>
      <a href="https://61a538f8eede2d00637a5758--portafolio-javier-romero.netlify.app/">Ver Proyecto</a>

    </div>

    <div className="proyecto">
      <h3>Newsletter</h3>
      <p>Desarollo de un Newsletter</p>
      <a href="https://newletter-javier-romero.netlify.app/" >Ver Proyecto</a>

    </div>

  </div>
</section>

    </main>
  );
};

export default Main;

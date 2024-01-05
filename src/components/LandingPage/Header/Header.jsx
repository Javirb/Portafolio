import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <h4 className="logo"><a href="/">Portafolio</a></h4>

      <nav>
        <ul className="navbar-nav">
            <li><a href="#about">Acerca</a></li>
            <li><a href="#contacto">Contacto</a></li>
            <li><a href="#experiencia">Experiencia</a></li>
            <li><a href="#estudios">Estudios</a></li>
            <li><a href="#proyectos">Proyectos</a></li>
            <li><a href="/newsletter">Newsletter</a></li>

        </ul>

      </nav>

      <a className="nav_btn" href="/contact" target="_blank">
        <button>Contactar</button>
      </a>
</header>
  );
};

export default Header;

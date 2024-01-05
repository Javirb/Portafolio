import React from 'react';
import './Main.css';

const Main = () => {
  return (
    
    <main>
    <section className="newsletter" id="newsletter">
        <div className="newsletter-container">
            <h2>Únete a mi Boletín Informativo</h2>
            <p>Entérate de las últimas modificaciones y actualizaciones de mi portafolio.</p>
            <form className="formulario-newsletter" >
                <input type="email" name="email" placeholder="Ingresa tu email aquí" required/>
                <button type="submit">Suscribirse</button>
            </form>
        </div>
    </section>
</main>
  );
};

export default Main;

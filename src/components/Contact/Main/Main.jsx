import React from 'react';
import './Main.css';

const Main = () => {
  return (
    <main>
        <section className="contacto" id="contacto">
            <h2>Contacto</h2>
            <form  className="formulario-contacto">
                <div className="campo-formulario">
                    <label >Nombre:</label>
                    <input type="text" id="nombre" name="nombre" required />
                </div>
                <div className="campo-formulario">
                    <label >Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="campo-formulario">
                    <label >Mensaje:</label>
                    <textarea id="mensaje" name="mensaje" required></textarea>
                </div>
                <div className="campo-formulario">
                    <input type="submit" value="Enviar" />
                </div>
            </form>
        </section>
    </main>
  );
};

export default Main;

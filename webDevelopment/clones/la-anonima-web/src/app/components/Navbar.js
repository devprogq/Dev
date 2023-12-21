'use client'

import React, { useEffect } from 'react';
import { abrirDialog } from '../utils.js';

const ClientComponent = () => {
    useEffect(() => {
      // Asignar la función abrirDialog al evento click del elemento con id 'parrafo'
      const parrafo = document.getElementById('parrafo');
      parrafo.addEventListener('click', abrirDialog);
  
      // Limpieza al desmontar el componente
      return () => {
        parrafo.removeEventListener('click', abrirDialog);
      };
    }, []); // El segundo argumento del useEffect, [] significa que solo se ejecutará una vez al montar el componente
  
    return null; // No renderizamos nada ya que este componente solo maneja eventos
  };


export default function Navbar() {
  return (
    <>
        <p>Contanos, ¿de dónde sos?</p>
        <p id="parrafo" className='cursor-pointer underline' onClick={abrirDialog}>Elegir ciudad</p>

        <dialog id="miDialog">
            <form method="dialog">
                <section>
                <p>
                    <label htmlFor="Provincia">Elegir provincia</label>
                    <select id="Provincia">
                        <option></option>
                    </select>
                    <label htmlFor="Ciudad">Elegir ciudad</label>
                    <select id="Ciudad">
                        <option></option>
                    </select>
                </p>
                </section>
                <menu>
                    <button type="submit">Confirm</button>
                </menu>
            </form>
            </dialog>
    </>
)
}

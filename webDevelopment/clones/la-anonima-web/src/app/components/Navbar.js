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
      <div className='bg-blue-800 flex '>
        <p className='ml-36 text-white text-lg'>Contanos, ¿de dónde sos?</p>
        <p id="parrafo" className='cursor-pointer underline ml-5 text-white text-lg' onClick={abrirDialog}>Elegir ciudad</p>
      </div>
        <dialog id="miDialog" className=''>
  <form method="dialog" className='relative p-8'>
    <section className="h-[33%]">
      <p className="flex mb-4 text-xl font-bold justify-center">Cambiar mi ubicación</p>
      <p className="text-gray-600 flex justify-center text-center">
        Elegí tu localidad para ofrecerte promociones y beneficios especiales para vos
      </p>
      <div className="mt-4 space-y-4">
        <div className="relative">
          <label htmlFor="Provincia" className="block font-semibold">Elegir provincia</label>
          <div className="border rounded-md p-2">
            <select id="Provincia" className="w-full focus:outline-none">
              <option>BUENOS AIRES</option>
              <option>CHUBUT</option>
              <option>CORDOBA</option>
              <option>CORRIENTES</option>
              <option>LA PAMPA</option>
              <option>NEUQUEN</option>
              <option>RIO NEGRO</option>
              <option>SANTA CRUZ</option>
              <option>SANTA FE</option>
              <option>TIERRA DEL FUEGO</option>
            </select>
          </div>
        </div>
        <div className="relative">
          <label htmlFor="Ciudad" className="block font-semibold">Elegir ciudad</label>
          <div className="border rounded-md p-2">
            <select id="Ciudad" className="w-full focus:outline-none">
              <option></option>
            </select>
          </div>
        </div>
      </div>
    </section>
    <menu className="mt-8">
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Confirmar</button>
    </menu>
  </form>
</dialog>
    </>
)
}

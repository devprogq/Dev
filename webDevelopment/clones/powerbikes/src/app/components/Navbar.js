import React from 'react'

import classNames from 'classnames';

const list = classNames("hover:underline")


export default function Navbar() {
  return (
    <>
        <img src="" alt="Logo" ></img>

        <ul className='flex gap-6 space-x-4 cursor-pointer '>
            <li className={list}>INICIO</li>
            <li className={list}>NOSOTROS</li>
            <li className={list}>MOTOS</li>
            <li className={list}>TIENDA ONLINE</li>
            <li className={list}>SERVICE</li>
            <li className={list}>CONTACTO</li>

            <img src="" alt="Search"></img>

            <img src="" alt="Cart"></img>
        </ul>
    </>
  );
}

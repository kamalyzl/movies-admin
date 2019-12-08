import React from 'react'
import '../css/Header.css'
function Header () {
  return (
    <header className='header'>
      <div>
        <h1>
        Plataforma de Peliculas
        </h1>
      </div>
      <span className='icon'>
        <span className='subIcon'>
          <i className='fa fa-car' />
        </span>
      </span>
    </header>
  )
}

export default Header

import React from 'react'
import '../css/Header.css'
function Header () {
  return (
    <header className='header'>
      <div>
      Plataforma de Peliculas
      </div>
      <span className='icon'>
        <span className='subIcon'>
          <i class='fa fa-car' />
        </span>
      </span>
    </header>
  )
}

export default Header

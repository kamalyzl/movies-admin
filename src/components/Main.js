import React from 'react'
import '../css/Main.css'

function Main () {
  return (
    <main className='main'>
      <nav>
        <ul>
          <li>Peliculas</li>
          <li>Turnos</li>
          <li>Administradores</li>
          <li>Perfil</li>
        </ul>
      </nav>
      <section>
        <div>
          <h2>Peliculas</h2>
          <button>Nueva Pelicula</button>
        </div>
      </section>
    </main>
  )
}

export default Main

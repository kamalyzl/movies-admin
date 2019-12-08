import React from 'react'
import { Table } from 'react-bootstrap'
import nanoid from 'nanoid'
import '../css/Main.css'
import List from './List'

const date = new Date()

const array = [
  {
    id: 1,
    name: 'Jason Bourne',
    fpublicaction: date.toLocaleString(),
    status: 'Inactivo'
  },
  {
    id: 1,
    name: 'Alicia en el pais de las maravillas',
    fpublicaction: date.toLocaleString(),
    status: 'Inactivo'
  }
]
const id = nanoid()
function Main () {
  return (
    <main className='main'>
      <nav>
        <ul className='nav-ul'>
          <li>Peliculas</li>
          <li>Turnos</li>
          <li>Administradores</li>
          <li>Perfil</li>
        </ul>
      </nav>
      <section>
        <div className='first'>
          <h2>Peliculas</h2>
          <button>Nueva Pelicula</button>
        </div>

        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Fecha de publicacion</th>
              <th>Estado</th>
              <th>x</th>
            </tr>
          </thead>
          <tbody>
            {
              array && array.map((item) => {
                console.log(item)
                return (
                  <List
                    key={id}
                    id={item.id}
                    name={item.name}
                    status={item.status}
                    datePublic={item.fpublicaction}
                  />
                )
              })
            }
          </tbody>
        </Table>

      </section>
    </main>
  )
}

export default Main

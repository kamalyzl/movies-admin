import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Aside from '../components/Aside'
import Table from '../components/Table'
import Modals from '../components/Modal'
import '../css/Home.css'

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

function App () {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <div>
      <Header />
      <main className='main'>
        <Aside />
        <section>
          <div className='first'>
            <h2>Peliculas</h2>
            <button onClick={handleShow}>Nueva Pelicula</button>
            <Modals show={show} onHide={handleClose} />
          </div>
          <Table data={array} handleEdit={() => {}} handleTrash={() => {}} />
        </section>
      </main>
      <Footer />

    </div>
  )
}

export default App

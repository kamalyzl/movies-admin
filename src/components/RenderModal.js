
import Modals from './Modal'
import React from 'react'
const RenderModal = ({ handleShow, onPress, onChange, title, show, name, date, status }) => {
  return (
    <Modals show={show} onHide={handleShow} saveDate={onPress} title={title}>
      <div>
        <form className='form'>
          <label>
          Nombre de Pelicula
            <input type='text' name='name' value={name} onChange={onChange} required />
          </label>
          <label>
          Fecha de publicación
            <input type='date' name='date' value={date} onChange={onChange} required />
          </label>
          <label>
          Estado
            <select value={status} name='status' onChange={onChange}>
              <option value='Activo'>Activo</option>
              <option value='Inactivo'>Inactivo</option>
            </select>
          </label>
        </form>
      </div>
    </Modals>
  )
}

export default RenderModal

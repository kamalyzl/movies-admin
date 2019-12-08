import React from 'react'
import { Table } from 'react-bootstrap'
import nanoid from 'nanoid'
import 'bootstrap/dist/css/bootstrap.min.css'
import List from './List'

const id = nanoid()
const Tables = ({ data, handleEdit, handleTrash }) => {
  return (
    <div className='table-list'>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Fecha de publicacion</th>
            <th>Estado</th>
            <th>.</th>
          </tr>
        </thead>
        <tbody>
          {
            data && data.map((item) => {
              return (
                <List
                  key={id}
                  id={item.id}
                  name={item.name}
                  status={item.status}
                  datePublic={item.fpublicaction}
                  onClickEdit={handleEdit}
                  onClickTrash={handleTrash}
                />
              )
            })
          }
        </tbody>
      </Table>
    </div>
  )
}

export default Tables

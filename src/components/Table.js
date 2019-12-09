import React from 'react'
import { Table } from 'react-bootstrap'
import nanoid from 'nanoid'
import ReactLoading from 'react-loading'
import 'bootstrap/dist/css/bootstrap.min.css'
import List from './List'

const id = nanoid(5)
const Tables = ({ data, handleUpdate, handleTrash }) => {
  return data.length > 0 ? (
    <div className='table-list'>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Fecha de publicacion</th>
            <th>Estado</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {
            data && data.map((item) => {
              return (
                <List
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  status={item.status}
                  datePublic={item.date}
                  onClickEdit={() => handleUpdate(item)}
                  onClickTrash={() => handleTrash(item)}
                />
              )
            })
          }
        </tbody>
      </Table>
    </div>
  ) : <ReactLoading key={id} color='red' />
}

export default Tables

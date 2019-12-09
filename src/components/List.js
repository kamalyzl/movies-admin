import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

const List = ({ id, name, datePublic, status, onClickEdit, onClickTrash }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{datePublic}</td>
      <td>{status}</td>
      <td>
        <a href='#' className='table-icons'>
          <FontAwesomeIcon icon={faEdit} onClick={onClickEdit} />
        </a>
        <a href='#' className='table-icons'>
          <FontAwesomeIcon icon={faTrash} onClick={onClickTrash} />
        </a>
      </td>
    </tr>
  )
}

export default List

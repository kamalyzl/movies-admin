import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/Header.css'
function List ({ id, name, datePublic, status, action }) {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{datePublic}</td>
      <td>{status}</td>
      <td>{action}</td>
    </tr>
  )
}

export default List

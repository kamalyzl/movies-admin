import { Modal, Button } from 'react-bootstrap'
import React from 'react'
const Modals = ({ show, onHide, saveDate, children }) => {
  return (
    <>
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {children}
        </Modal.Body>
        <Modal.Footer>
          <Button variant='primary' onClick={saveDate}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Modals

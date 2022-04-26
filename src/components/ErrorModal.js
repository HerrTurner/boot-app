import React from 'react'
import { Modal } from 'react-bootstrap'

const ErrorModal = ({title, message}) => {
  return (

    <Modal size='lg' centered>
        <Modal.Header>{title}</Modal.Header>
        <Modal.Body>{message}</Modal.Body>
        <Modal.Footer>
            <Button onClick={onClose}>Close</Button>
        </Modal.Footer>
    </Modal>
  )
}

export default Error
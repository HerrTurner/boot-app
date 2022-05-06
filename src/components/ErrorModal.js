import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import './LoginForm.css'

const ErrorModal = ({show, onHide, title, message}) => {
  return (

    <Modal show={show} onHide={onHide} size='lg' centered>
        <Modal.Header>{title}</Modal.Header>
        <Modal.Body>{message}</Modal.Body>
        <Modal.Footer>
            <Button className='sign-up-button' onClick={onHide}>Close</Button>
        </Modal.Footer>
    </Modal>
  )
}

export default ErrorModal
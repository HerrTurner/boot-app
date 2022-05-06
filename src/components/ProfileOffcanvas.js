import React from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas'    
import Progress from './Progress'

const ProfileOffcanvas = ({show, onHide, title, message}) => {
  return (
    <Offcanvas show={show} onHide={onHide} placement='end'>
        <Offcanvas.Header closeButton variant='warning'>
            <Offcanvas.Title>{title}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <Progress/>
        </Offcanvas.Body>
    </Offcanvas>
  )
}

export default ProfileOffcanvas

import React from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import './LoginForm.css'

const Download = () => {


  return (
    <Container id="main-container" className='d-grid h-100 '>
      <h4 className='text-center mt-5'>Descargar Juego</h4>
      <Button className="w-40 sign-up-button" type="submit">
        <i className="bi bi-download">  </i>
        <a className='sign-up-alt' href='https://drive.google.com/drive/folders/1s-ESPulmZTWrsiFQvxSGcZS4epr5UcS-?usp=sharing' target='_blank' rel="noreferrer">Descargar</a>
      </Button>
    </Container>
  )
}

export default Download
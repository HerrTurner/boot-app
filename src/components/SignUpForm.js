import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import './LoginForm.css'
import logo from '../images/logo-h.png'
import ErrorModal from './ErrorModal'

const SignUpForm = () => {
  const form = useRef()
  const navigate = useNavigate()
  const [modalShow, setModalShow] = useState(false)
  const [msg, setMsg] = useState('')
  
  /*const handleSubmit = (event) => {
    event.preventDefault()

    //recuperar info del form
    const formData = new FormData(form.current)

  }*/

  const handleSubmitSignUp = async (e) => {
    e.preventDefault()

    
    const formData = new FormData(form.current)
    

    const response = await fetch("http://localhost:4000/signUp", 
                                  {method: 'POST', body: formData})
    const data = await response.json()
    if (data.mensaje === "Usuario insertado correctamente"){
      setMsg('Cuenta creada exitosamente')
      setModalShow(true)
      //navigate('/', {replace: true})
    } else {
      setMsg('Cuenta no creada')
      setModalShow(true)
    }
  }

  const handleNav = () => navigate('/', {replace: true})

  return (
    <Container id="main-container" className="d-grid h-100 back-image">
      <Form ref={form} onSubmit={handleSubmitSignUp}
      id="sign-in-form" className="w-100 text-center sign">
      <img src={logo}
            alt="Imagen del Tec" className="w-100 sign-up-logo mb-4" />
        <Form.Group className="mb-1">
          <Form.Control type="text" placeholder="Nombre Completo"
                        name="realname" required />
        </Form.Group>
        <Form.Group className="mb-1">
          <Form.Control type="text" placeholder="Usuario"
                        name="nickname" required />
        </Form.Group>
        <Form.Group className="mb-1">
          <Form.Control type="email" placeholder="Correo"
                        name="correo" required />
        </Form.Group>
        <Form.Group className="mb-1">
          <Form.Control type="password" placeholder="Contraseña"
                        name="contrasena" required />
        </Form.Group>
        <Button className="w-100 sign-up-button" type="submit">Crear cuenta</Button>
        <div className='w-100 mb-2 sign-up' onClick={handleNav}>Iniciar Sesión</div>
      </Form>  

      <ErrorModal show={modalShow}
                  title='Crear cuenta'
                  message={msg}
                  onHide={() => setModalShow(false)}/> 

    </Container>
  )
}

export default SignUpForm
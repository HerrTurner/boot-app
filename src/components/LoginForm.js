import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useRef } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import ErrorModal from './ErrorModal'
import './LoginForm.css'
import logo from '../images/logo-h.png'

const LoginForm = () => {
  const form = useRef()
  const navigate = useNavigate()
  const [modalShow, setModalShow] = useState(false)
  
  
  /*const handleSubmit = (event) => {
    event.preventDefault()

    //recuperar info del form
    const formData = new FormData(form.current)

  }*/

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData(form.current)
    const nickname = formData.get('user')

    const response = await fetch("http://localhost:4000/login", 
                                  {method: 'POST', body: formData})
    const data = await response.json()
    if (data.token !== '' && data.token !== undefined){
      localStorage.setItem('token', data.token)
      localStorage.setItem('idUsuario', data.idUsuario)
      localStorage.setItem('nickname', nickname)
  

      //sessionStorage.setItem('token', data.token)
      //let fecha = new Date()
      //fecha.setTime(fecha.getTime() + (3600*1000))
      //document.cookie = `token=${data.token}; expires=${fecha.toUTCString()}`

      navigate('/home', {replace: true})
    } else {
        setModalShow(true)
    }
  }

  return (
    <Container id="main-container" className="d-grid  h-100 back-image">
      <Form ref={form} onSubmit={handleSubmit}
      id="sign-in-form" className="w-100 text-center">
      <img src={logo}
            alt="AR Point logo" className="sign-up-logo mb-4" />
        <Form.Group className="mb-1">
          <Form.Control type="text" placeholder="Nombre de usuario"
                        name="user" required />
        </Form.Group>
        <Form.Group className="mb-1">
          <Form.Control type="password" placeholder="Contraseña"
                        name="password" required />
        </Form.Group>
        <Button className="sign-up-button w-100 mb-1" type="submit" variant="primary">Iniciar sesión</Button>
        <div className='w-100 mb-2'><NavLink className='sign-up' to='/resetpassword'>¿Olvidaste la contraseña?</NavLink></div>
        <div className='w-100 text-center'>¿No tienes cuenta?{' '}<NavLink className='sign-up' to='/signup'>Crea una cuenta</NavLink></div>
      </Form>
      <ErrorModal show={modalShow}
                  title='Error de inicio de sesión'
                  message='Usuario o contraseña incorrectas'
                  onHide={() => setModalShow(false)}/> 
 

        
    </Container>
  )
}

export default LoginForm
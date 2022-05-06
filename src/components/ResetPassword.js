import React from 'react'
import './LoginForm.css'
import logo from '../images/logo-h.png'
import ErrorModal from './ErrorModal'
import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const ResetPassword = () => {
    const form = useRef()
    const navigate = useNavigate()
    const [modalShow, setModalShow] = useState(false)
    const [msg, setMsg] = useState('')



    
    const handleSubmit = async (e) => {
    e.preventDefault()


    const formData = new FormData(form.current)
    setMsg('Contraseña actualizada correctamente')
    

    if (formData.get('password1') === formData.get('password2')){

        const resp = await fetch(`http://localhost:4000/getUserId/${formData.get('nickname')}`, 
                                    {method: 'GET',
                                     headers: {'x-access-token' : localStorage.getItem('token')}
                                    })

        const idUs = await resp.json()

        const response = await fetch(`http://localhost:4000/updatePassword/${formData.get('password1')}/${idUs.idUsuario}`, 
                                    {method: 'PUT',
                                     headers: {'x-access-token' : localStorage.getItem('token')}
                                    })

        const data = await response.json()
        
        if (data.mensaje === "Password updated successfully")
            setModalShow(true)
        } else {
            setMsg('No coinciden las contraseñas')
            setModalShow(true)
        }
        //navigate('/home', {replace: true})
  }

  const handleNav = () => navigate('/', {replace: true})


  return (
    <Container id="main-container" className="d-grid  h-100 back-image">
    <Form ref={form} onSubmit={handleSubmit}
                        id="sign-in-form" className="w-100 text-center">
        <img src={logo}
                alt="AR Point logo" className="sign-up-logo mb-4" />
        <Form.Group className="mb-1">
            <Form.Control type="text" placeholder="Nombre de usuario"
                            name="nickname" required />
        </Form.Group>
        <Form.Group className="mb-1">
            <Form.Control type="password" placeholder="Contraseña"
                            name="password1" required />
        </Form.Group>
        <Form.Group className="mb-1">
            <Form.Control type="password" placeholder="Confirmar Contraseña"
                            name="password2" required />
        </Form.Group>
        <Button className="sign-up-button w-100 mb-1" type="submit" variant="primary">Cambiar Contraseña</Button>
        <div className='w-100 mb-2 sign-up' onClick={handleNav}>Iniciar Sesión</div>
    </Form>
    <ErrorModal show={modalShow}
                title='Supuesto cambio de contraseña'
                message={msg}
                onHide={() => setModalShow(false)}/>      
    </Container>
  )
}

export default ResetPassword

import React, { useEffect, useRef, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import ErrorModal from './ErrorModal'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col' 
import './Friend.css'
import ListGroup from 'react-bootstrap/ListGroup'


const Friend = () => {
  const form = useRef()
  const [friends, setFriends] = useState([])
  const [modalShow, setModalShow] = useState(false)

  const navigate = useNavigate()

    // vacío, se ejecuta siempre que se renderiza el componente
    // [], se ejecuta la primera vez que se renderiza
    // [estado], se ejecuta cuando cambia el estado
    useEffect(()=>{
        getFriends();
    },[friends])

    const getFriends = async () =>{
        const response = await fetch(`http://localhost:4000/getFriendsFromId/${localStorage.getItem('idUsuario')}`, 
                                    {method: 'GET',
                                     headers: {'x-access-token' : localStorage.getItem('token')} 
                                    })
        const data = await response.json()
        
        setFriends(data)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
    
        const formData = new FormData(form.current)
        const response = await fetch(`http://localhost:4000/addFriend/${localStorage.getItem('idUsuario')}/${formData.get('nickname')}`, 
                                      {method: 'POST', headers: {'x-access-token' : localStorage.getItem('token')}})
        const data = await response.json()

        if (data.mensaje === "Friend added correctly"){
            setModalShow(true)
        }
      }

  return (
    <div>
        <h3 className='headers'>Amigos</h3>
        <Container className='mt-3'>
        <Form ref={form} onSubmit={handleSubmit}
                id="sign-in-form" className="w-100 text-center">
            <Row>
                <Col xs='9'>
                    <Form.Group className="mb-1">
                    <Form.Control type="text" placeholder="Nickname"
                                  name="nickname" required />
                    </Form.Group>
                </Col>
                <Col xs='3'>
                    <Button className="sign-up-button w-100 mb-1" type="submit" variant="primary">
                        <i className="bi bi-person-plus-fill"></i>
                    </Button>
                </Col>
            </Row>
        </Form>
        <ErrorModal show={modalShow}
                  title='Agregar Amigos'
                  message='Agregado Exitosamente'
                  onHide={() => setModalShow(false)}/>  
            <Row className='friend-ls'>
                <Col xs='4'>
                    <ListGroup variant="flush">
                    {
                        friends.map( friend => (
                            <ListGroup.Item className="friend" onClick={() => navigate(`./${friend.nickname}`)} key={friend.nickname}>
                                <i className="bi bi-person-fill"> </i>{friend.nickname}
                            </ListGroup.Item>
                        ))
                    }       
                    </ListGroup>
                </Col>
                <Col><Outlet/></Col>
            </Row>
        </Container>
    </div>
  )
}

export default Friend




import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './Layout.css'

import Container from 'react-bootstrap/Container'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'

export const Layout = () => {

    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem('token')
        navigate('/', {replace: true})

    }
  return (
    <main>
        <Navbar bg='dark' variant='dark'>
            <Container>
                <Navbar.Brand>
                    <img
                        alt=""
                        src="https://upload.wikimedia.org/wikipedia/commons/4/47/Logo_del_ITESM.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    <NavLink className="navBar" to='/home'>Tec-Verse{' '}</NavLink>
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Item>
                        <Nav.Link>
                            <NavLink className="navBar" to="/home/achievements">Achievements</NavLink>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <NavLink className="navBar" to="/home/friends">Friends</NavLink>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <NavLink className="navBar" to="/home/downloads">Downloads</NavLink>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
                <Nav>
                    <Nav.Item>
                        <Nav.Link>
                            <div className='btn-logout' onClick={handleLogout}>Sign Out<i className='bi bi-box-arrow-right'></i></div>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>
        <section>
            <Outlet></Outlet>
        </section>
    </main>  
    
    )
}

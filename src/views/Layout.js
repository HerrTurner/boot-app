import React, { useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './Layout.css'
import logo from '../images/logo.png'
import Container from 'react-bootstrap/Container'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import NavDropdown from 'react-bootstrap/NavDropdown'
import ProfileOffcanvas from '../components/ProfileOffcanvas'
import Swal from 'sweetalert2'

export const Layout = () => {

    const [offcanvasShow, setOffcanvasShow] = useState(false)


    const navigate = useNavigate()
    const goTo = (path) => {
        navigate(path, {replace: true} )
    }

    const handleLogout = () => {
        // Torybio estuvo aqui no me quiso dar labo web
        // Estado: Troste 
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
          })
          
          swalWithBootstrapButtons.fire({
            title: 'Cerrar Sesión',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Cerrar Sesión',
            cancelButtonText: 'Cancelar',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
              swalWithBootstrapButtons.fire(
                'Sesión terminada',
                'Se ha cerrado su cuenta.',
                'success'
              )

                localStorage.removeItem('token')
                localStorage.removeItem('idUsuario')
                localStorage.removeItem('nickname')
            navigate('/', {replace: true})
            }
          })
    }
  return (
    <main>
        <Navbar className='color-nav' variant='light'>
            <Container>
                <Navbar.Brand>
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    <NavLink className="navBar" to='/home'>AR Point{' '}</NavLink>
                </Navbar.Brand>
                <Nav className="me-auto">
                    
                    <NavDropdown title="Logros" className='color-nav'>
                        <NavDropdown.Item>
                            <div id="dd-items" onClick={() => goTo('/home/allachievements')}>Logros</div>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <div id="dd-items" onClick={() => goTo('/home/achievements')}>Mis Logros</div>
                        </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Item>
                            <Nav.Link className="navBar" onClick={() => goTo('/home/friends')}>Amigos</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                            <Nav.Link className="navBar" onClick={() => goTo('/home/downloads')}>Descargas</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                            <Nav.Link className="navBar" onClick={() => goTo('/home/about')}>El equipo</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Nav>
                  <Nav.Item>
                    <Nav.Link className="navBar" onClick={() => setOffcanvasShow(true)}><i className="bi bi-person-circle"></i></Nav.Link>
                  </Nav.Item>
                    <Nav.Item>
                      <Nav.Link>
                        <div className='btn-cerrar' onClick={handleLogout}>Cerrar sesión <i className='bi bi-box-arrow-right'></i></div>
                      </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>

        <ProfileOffcanvas show={offcanvasShow}
                  title='Perfil'
                  message='Usuario o contraseña incorrectas'
                  onHide={() => setOffcanvasShow(false)}/> 
                   
        <section>
            <Outlet className='h-100'></Outlet>
        </section>
    </main>  
    
    )
} 

import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import alex from '../images/Alejandro.jpeg'
import emma from '../images/Emmanuel.jpg'
import mike from '../images/Miguel.png'
import marco from '../images/Marco.jpg'
import turner from '../images/Jorge.png'
import './About.css'
import '../views/Layout.css'


const About = () => {
  return (
  <Container fluid>
  <Row>
    <h2 className='headers'>Quienes Somos</h2>
  </Row>
   <Row className='mt-3 h-100 team-bg'>
    <Col md={1}/>
    <Col md={2}>
      <Card className='card-item' style={{ width: '12rem' }}>
        <Card.Img variant="top" src={alex} />
        <Card.Body>
          <Card.Title>Alex Hidalgo</Card.Title>
          <Card.Text>
            Desarrollo en Unity en GPS
          </Card.Text>
        </Card.Body>
      </Card>
     </Col>
     <Col md={2}>
     <Card className='card-item' style={{ width: '12rem' }}>
        <Card.Img variant="top" src={emma} />
        <Card.Body>
          <Card.Title>Emmanuel Prieto</Card.Title>
          <Card.Text>
            Desarrollo en Unity en minijuegos
          </Card.Text>
        </Card.Body>
      </Card>
     </Col>
     <Col md={2}>
     <Card className='card-item' style={{ width: '12rem' }}>
        <Card.Img variant="top" src={marco} />
        <Card.Body>
          <Card.Title>Marco Gardida</Card.Title>
          <Card.Text>
            Desarrollo en Unity y Documentacion
          </Card.Text>
        </Card.Body>
      </Card>
     </Col>
     <Col md={2}>
     <Card className='card-item' style={{ width: '12rem' }}>
        <Card.Img variant="top" src={mike} />
        <Card.Body>
          <Card.Title>Miguel Jimenez</Card.Title>
          <Card.Text>
            Desarollo en Unity en Vuforia
          </Card.Text>
        </Card.Body>
      </Card>
     </Col>
     <Col md={2}>
     <Card className='card-item' style={{ width: '12rem' }}>
        <Card.Img variant="top" src={turner} />
        <Card.Body>
          <Card.Title>Jorge Turner</Card.Title>
          <Card.Text>
            Desarrollo Web y Documentación
          </Card.Text>
        </Card.Body>
      </Card>
     </Col>
     <Col md={1}/>
   </Row>
   </Container>
  )
}

export default About

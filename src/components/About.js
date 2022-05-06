import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import alex from '../images/alex.jpeg'
import emma from '../images/emma.jpeg'
import mike from '../images/mike.jpeg'
import marco from '../images/marco.jpeg'
import turner from '../images/turner.jpeg'
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
            Jijijaja
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
            No soy científico
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
            Simpático 24/7
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
            Reprobé Historia
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
            Funcionamos, apenas
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

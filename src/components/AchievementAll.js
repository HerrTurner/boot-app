import React, { useEffect, useState } from 'react'
import './Achievement.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col' 
import Accordion from 'react-bootstrap/Accordion'

const AchievementAll = () => {

    const [achievements, setAchievement] = useState([])

    useEffect(()=>{
        getAchievements();
    }, [])

    const getAchievements = async () =>{
        const response = await fetch(`http://localhost:4000/logros`, 
                                    {method: 'GET',
                                     headers: {'x-access-token' : localStorage.getItem('token')} 
                                    })
        const data = await response.json()
        
        setAchievement(data)
    }
  return (
    <Container>
        <Row><h3 className='headers'>Logros</h3></Row>
        <Row className='achievement-acc'>
            <Col></Col>
            <Col xs='11'>
                <Accordion defaultActiveKey="0" flush>
                    {
                        achievements.map( achievement => (
                            <Accordion.Item key={achievement.idLogro} eventKey={achievement.idLogro}>
                                <Accordion.Header> <i className="bi bi-lock-fill"></i>{achievement.nombre}</Accordion.Header>
                                <Accordion.Body>{achievement.descripcion}</Accordion.Body>
                            </Accordion.Item> 
                        ))
                    }
                </Accordion>
            </Col>
            <Col></Col>
        </Row>
    </Container>            
  )
}

export default AchievementAll
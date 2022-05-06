import React, { useEffect, useState } from 'react'
import './Achievement.css'
import ListGroup from 'react-bootstrap/ListGroup'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col' 
import Container from 'react-bootstrap/Container'
import { useParams } from 'react-router-dom'


const AchievementById = () => {

    const [achievements, setAchievement] = useState([])

    useEffect(()=>{
        getAchievements();
    }, [])
    const params = useParams()

    const getAchievements = async () =>{
        
        const resp = await fetch(`http://localhost:4000/getUserId/${params.idUsuario}`, 
                                    {method: 'GET',
                                     headers: {'x-access-token' : localStorage.getItem('token')}
                                    })

        const idUs = await resp.json()
        
        const response = await fetch(`http://localhost:4000/logrosWithId/${idUs.idUsuario}`, 
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
                <ListGroup variant="flush">
                    {
                        achievements.map( achievement => (
                            <ListGroup.Item key={achievement.nombre}>
                                <i className="bi bi-unlock-fill"> </i>{achievement.nombre}
                            </ListGroup.Item>
                        ))
                    }       
                </ListGroup>
            </Col>
            <Col></Col>
        </Row>
    </Container>
                
  )
}

export default AchievementById


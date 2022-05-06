import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col' 
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import profile from '../images/pp.png'
import './Progress.css'
import ProgressBar from 'react-bootstrap/ProgressBar'

const Progress = () => {

  const [experience, setExperience] = useState({experience: 0})
  const [friends, setFriends] = useState({})
  const [logros, setLogros] = useState({})
  const [logrosId, setLogrosId] = useState({})

    useEffect(()=>{
        getExperience();
    }, [])

    useEffect(()=>{
      getAchievements();
    }, [])

    useEffect(()=>{
      getAchievementsId();
    },[])

    useEffect(()=>{
      getFriends();
    }, [])

    const getExperience = async () =>{
        const response = await fetch(`http://localhost:4000/getExperience/${localStorage.getItem('nickname')}`, 
                                    {method: 'GET',
                                     headers: {'x-access-token' : localStorage.getItem('token')} 
                                    })
        const data = await response.json()
        
        setExperience(data[0])
    }
    

    const getFriends = async () =>{
      const response = await fetch(`http://localhost:4000/getFriendsFromId/${localStorage.getItem('idUsuario')}`, 
                                  {method: 'GET',
                                   headers: {'x-access-token' : localStorage.getItem('token')} 
                                  })
      const data = await response.json()
      setFriends(data)
  }

  const getAchievements = async () => {
    const response = await fetch(`http://localhost:4000/logros`,
                                  {method: 'GET',
                                   headers: {'x-access-token' : localStorage.getItem('token')} 
                                  })

    const data = await response.json()
    setLogros(data)

  }

  const getAchievementsId = async () => {
    const response = await fetch(`http://localhost:4000/logrosWithId/${localStorage.getItem('idUsuario')}`,
                                  {method: 'GET',
                                   headers: {'x-access-token' : localStorage.getItem('token')} 
                                  })

    const data = await response.json()
    setLogrosId(data)

  }

  return (
    <Container className="h-100">
      <Row xs='7'>
        <h5 className='welcome'>Hola {localStorage.getItem('nickname')},</h5>
      </Row>
      <Row className='text-center'>
        <Col><Image  className='profile' src={profile} roundedCircle fluid></Image></Col>
      </Row>
      <Row xs='7'>
        <Col></Col>
          <h5 className='objs'>Logros: {logrosId.length} de {logros.length}</h5>
          <ProgressBar className='objs-bar' max={logros.length} now={logrosId.length} label={`${logrosId.length} of ${logros.length}`} variant='warning' />
        <Col></Col>
      </Row >
      <Row xs='7'>
        <h5 className='objs'>Experiencia: {experience.experience}</h5>
      </Row>
      <Row xs='7'>
        <h5 className='objs'>Amigos: {friends.length}</h5>
      </Row>
    </Container>
  )
}

export default Progress
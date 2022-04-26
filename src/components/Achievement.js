import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Achievement = () => {

    const response = fetch("http://localhost:4000/login", 
                                  {method: 'GET'})
    const achievements = await response.json()
    
  return (
    <div className='achievements'>
        <article>
        <h1>Achievements</h1>
        <ul>
            {
                achievements.map( achievement => (
                    <li>
                        <Link to={'/games/'+achievement.id}>{achievement.name}</Link>                    
                    </li>
                ))
            }
        </ul>
        </article>
        <article>
            <Outlet/>
        </article>
    </div>
  )
}

export default Achievement


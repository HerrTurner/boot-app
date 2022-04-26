import './App.css'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Route,  Routes} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import { Layout } from './views/Layout'
import Home from './components/Home'
import Achievement from './components/Achievement'
import Friend from './components/Friend'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginForm/>}></Route>
        <Route path='/home' element={<Layout/>}>
          <Route index element={<Home/>}></Route>
          <Route path='achievements' element={<Achievement/>}></Route>
          <Route path='Friends' element={<Friend/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
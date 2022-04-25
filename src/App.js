import './App.css'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Route,  Routes} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import { Layout } from './views/Layout'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginForm/>}></Route>
        <Route path='/home' element={<Layout/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
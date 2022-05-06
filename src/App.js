import './App.css'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Route,  Routes} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import { Layout } from './views/Layout'
import Home from './components/Home'
import Achievement from './components/Achievement'
import Friend from './components/Friend'
import AchievementById from './components/AchievementById'
import About from './components/About'
import Download from './components/Download'
import SignUpForm from './components/SignUpForm'
import AchievementAll from './components/AchievementAll'
import ResetPassword from './components/ResetPassword'
import ProtectedRoute from './components/ProtectedRoute'
import Progress from './components/Progress'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginForm/>}></Route>
        <Route path='/signup' element={<SignUpForm/>}></Route>
        <Route path='/resetpassword' element={<ResetPassword/>}></Route>
        <Route path='/home' element={<ProtectedRoute><Layout/></ProtectedRoute>}>
          <Route index element={<Home/>}></Route>
          <Route path='achievements' element={<Achievement/>}></Route>
          <Route path='allachievements' element={<AchievementAll/>}></Route>
          <Route path='about' element={<About/>}></Route>
          <Route path='friends' element={<Friend/>}>
            <Route path=':idUsuario' element={<AchievementById/>}></Route>
          </Route>
          <Route path='downloads' element={<Download/>}></Route>
          <Route path='progress' element={<Progress/>}></Route>
        </Route>
        <Route path='*' element={<h1>404 - Not Found</h1>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
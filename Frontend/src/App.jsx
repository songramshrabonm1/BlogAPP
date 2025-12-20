import {  Route, Routes } from 'react-router'
import './App.css'
import { Home } from './Pages/Home'
import { About } from './Pages/About'
import { Dashboard } from './pages/Dashboard'
import { SignIn } from './pages/Authentication/SignIn'
import { SignUp } from './pages/Authentication/SignUp'
import { Blog } from './pages/Blog'

function App() {

  return (
    <>
     
      <Routes>
        <Route path='/' element = {<Home></Home>}></Route>
        <Route path='/blog' element= {<Blog></Blog>}></Route>
        <Route path='/about' element = {<About></About>}></Route>
        <Route path='/dashboard' element = {<Dashboard></Dashboard>}></Route>
        <Route path='/signIn' element = {<SignIn></SignIn>}></Route>
        <Route path='/signUp' element = {<SignUp></SignUp>}></Route>
      </Routes>
     
    </>
  )
}

export default App

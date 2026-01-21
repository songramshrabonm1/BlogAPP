import {  Route, Routes } from 'react-router'
import './App.css'
import { Home } from './Pages/Home'
import { About } from './Pages/About'
import { Dashboard } from './pages/Dashboard'
import { SignIn } from './pages/Authentication/SignIn'
import { SignUp } from './pages/Authentication/SignUp'
import { Blog } from './pages/Blog'
import { ForgetPassword } from './pages/Authentication/ForgetPassword'
import { Otp } from './pages/Authentication/Otp'
import { Navbar } from './Component/Navbar'
import { Header } from './Component/Header'
import { Newsletter } from './Component/Newsletter'
import ShuffleHero from './Component/ShuffleHero'
import PrivateRoute from './pages/PrivateRoute'

function App() {

  return (
    <>
      {/* <Routes>
        <Route path="/" element = {<Home></Home>}>
          <Route path='signIn/' element = {<SignIn></SignIn>}>
          
          </Route>
            <Route path='/forgetPassword' element= {<ForgetPassword></ForgetPassword>}></Route>
            <Route path='/otp' element= {<Otp></Otp>}></Route>
          <Route path='signUp' element = {<SignUp></SignUp>}></Route>
        
        </Route>
        <Route path='/blog' element= {<Blog></Blog>}></Route>
        <Route path='/about' element = {<About></About>}></Route>
        <Route path='/dashboard' element = {<Dashboard></Dashboard>}></Route>
      </Routes> */}
      <Routes>
        <Route path="/" element={<Home></Home>}>
          <Route path="signIn/" element={<SignIn></SignIn>}></Route>
          <Route path="signUp" element={<SignUp></SignUp>}></Route>
          <Route path="/blog" element={<Blog></Blog>}></Route>
          <Route path="/" element={<Header></Header>}></Route>
          <Route path="otp" element={<Otp></Otp>}></Route>
          <Route
            path="forgetPass"
            element={<ForgetPassword></ForgetPassword>}
          ></Route>
          <Route path='/private' element={<PrivateRoute></PrivateRoute>}> 
            <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
          </Route>
          <Route path="/about" element={<About></About>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App

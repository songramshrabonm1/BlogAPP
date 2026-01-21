import React from 'react'
import { Navbar } from '../Component/Navbar'
import { Header } from '../Component/Header'
import { BlogList } from '../Component/BlogList'
import { Newsletter } from '../Component/Newsletter'
import { Footer } from '../Component/Footer'
import { Outlet } from 'react-router-dom'
// import { Outlet } from 'react-router'

export const Home = () => {
  return (
    <div className='bg-black'>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

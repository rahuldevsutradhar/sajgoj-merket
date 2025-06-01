import React from 'react'
import Navbar from '../../layout/Navbar'
import Menubar from '../../layout/Menubar'
import Footer from '../../layout/Footer'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div>
        <Navbar/>
        <Menubar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default RootLayout
import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
export default function Layout() {
  return (
    <div style={{ padding: '20px 40px' }}>
        <Header />
        <div style={{ padding: '50px 0' }}>
            <Outlet />
        </div>
        <Footer/>
    </div>
  )
}

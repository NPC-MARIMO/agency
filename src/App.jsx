import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './Layout'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Work from './pages/Work'
export default function App() {
  return (
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/services' element={<Services />} />
          <Route path='/work' element={<Work />} />
        </Route>
      </Routes>

  )
}

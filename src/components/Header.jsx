import React, { useRef, useState } from 'react'
import './Header.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Sidebar from './Sidebar'

export default function Header() {

  const [menu, setMenu] = useState(0)

  const line1ref = useRef()
  const line2ref = useRef()

  const toggleMenu = (e) => {
    e.preventDefault()
    setMenu(prev => !prev)
  }

  useGSAP(() => {
    if (menu) {
      gsap.to(line1ref.current, {
        rotate: 45,
        y: 4,
        duration: 0.35,
        ease: "power3.inOut"
      })

      gsap.to(line2ref.current, {
        rotate: -45,
        y: -4,
        duration: 0.35,
        ease: "power3.inOut"
      })
    } else {
      gsap.to(line1ref.current, {
        rotate: 0,
        y: 0,
        duration: 0.35,
        ease: "power3.inOut"
      })

      gsap.to(line2ref.current, {
        rotate: 0,
        y: 0,
        duration: 0.35,
        ease: "power3.inOut"
      })
    }
  }, [menu])

  return (
    <div className="header">
      <h1>nexora</h1>

      <div onClick={toggleMenu} className="menu">
        <div ref={line1ref}></div>
        <div ref={line2ref}></div>
      </div>

      <Sidebar menu={menu} setMenu={setMenu} />
    </div>
  )
}
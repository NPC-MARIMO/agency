import React, { useEffect, useRef, useState } from 'react'
import './Header.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
gsap.registerPlugin(useGSAP)
export default function Header() {

  const [menu, setMenu] = useState(0)
  const line1ref = useRef()
  const line2ref = useRef()
  const toggleMenu = (e) => {
    e.preventDefault()
    if (menu == 0){
      gsap.to(line1ref.current, {
        rotate : 45,
        ease : 'power3.inOut',
        y: 4
      })
      gsap.to(line2ref.current, {
        rotate : -45,
        ease : 'power3.inOut',
        y: -4
      })
      setMenu(1)
    }
    if (menu == 1){
      gsap.to(line1ref.current, {
        rotate :0,
        ease : 'power3.inOut',
        y: 0
      })
      gsap.to(line2ref.current, {
        rotate : 0,
        ease : 'power3.inOut',
        y: 0
      })
      setMenu(0)
    }
  }

  return (
    <div className="header">
        <h1>nexora</h1>
        <div onClick={toggleMenu} className="menu">
            <div ref={line1ref} ></div>
            <div ref={line2ref} ></div>
        </div>
    </div>
  )
}

import React, { useRef } from 'react'
import './Sidebar.css'
import { ArrowUpRight } from 'lucide-react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP)
export default function Sidebar({ menu }) {
    const sideRef = useRef();

    useGSAP(() => {
        if (menu) {
            gsap.fromTo(
                sideRef.current,
                {
                    x: "-100%",
                    opacity: 0,
                },
                {
                    x: "0%",
                    opacity: 1,
                    duration: 0.8,
                    ease: "power3.out",
                }
            );
        }
    }, [menu]);



    if (!menu) return null
    return (
        <div ref={sideRef} className='sideb'>
            <div className='sidecon'>
                <div className='one' >
                    <span>Navigation</span>
                    <ul>
                        <li>Home <ArrowUpRight /></li>
                        <li>About  <ArrowUpRight /></li>
                        <li>Project  <ArrowUpRight /></li>
                        <li>Contact  <ArrowUpRight /></li>
                    </ul>
                </div>
                <div className='two' >
                    <span>Contact</span>
                    <h2>nexora@xyz.com</h2>
                    <h2>+12 3456789 78</h2>
                    <button>
                        Contact Us
                    </button>
                    <br />
                    <br />
                    <br />
                    <span>Legal Notice</span> {"    "}  {"    "}
                    <span>Privacy Policy</span>
                </div>

            </div>
        </div>
    )
}

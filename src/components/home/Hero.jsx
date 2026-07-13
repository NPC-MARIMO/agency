import React, { useRef } from 'react'
import './Hero.css'
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger)


export default function Hero() {

    let ptext = 'Where Brands Become Icons'.split(" ")

    const heroRef = useRef();
const hero2Ref = useRef();

const h1ref = useRef();
const pref = useRef();
const imgref = useRef();
    useGSAP(() => {
        gsap.from(h1ref.current, {
            fontSize: '5200px',
            duration: 0.8,
            ease: 'expo.out'
        })
        gsap.from(pref.current.children, {
            y: 20,
            opacity: 0,
            stagger: 0.12,
            duration: 0.8,
            ease: "power3.out",
            delay: 0.5
        });
        gsap.from(imgref.current, {
            opacity: 0,
            duration: 1,
            delay: 1,
            y : 300
        })


        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: heroRef.current,
                start: "top top",
                end: "+=150%",
                pin: true,
                scrub: 1,
                anticipatePin: 1
            }
        });
        
        tl.to(hero2Ref.current, {
            height: "100vh",
            duration: 1,
            ease: "none"
        }, 0)
        
        .to(imgref.current, {
            scale: 1.15,
            y: "0%",
            duration: 1,
            ease: "none"
        }, 0)
        
        .to(h1ref.current, {
            y: -120,
            opacity: 0,
            ease: "none"
        }, 0)
        
        .to(pref.current, {
            y: -80,
            opacity: 0,
            ease: "none"
        }, 0);
    })

    return (
        <div ref={heroRef} className='hero'>
            <div className='hero1'>
                <h1 ref={h1ref}>NEXORA</h1>
                <h2 ref={pref}>
                    {ptext.map((t, i) => (
                        <span key={i} className="word">
                            {t}
                        </span>
                    ))}
                </h2>
            </div>
            <div ref={hero2Ref} className='hero2'>
                <img ref={imgref} src="https://images.unsplash.com/photo-1629904853716-f0bc54eea481?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

            </div>
        </div>
    )
}

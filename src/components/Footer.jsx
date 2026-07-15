import React, { useRef } from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

export default function Footer() {
    const footerRef = useRef(null)

    useGSAP(() => {
        const q = gsap.utils.selector(footerRef);
    
        const titles = q(".h1 h1");
    
        gsap.set(titles[0], { yPercent: 0 });
        gsap.set(titles[1], { yPercent: 100 });
    
        gsap.set(q(".one1 > *"), {
            y: 60,
            opacity: 0
        });
    
        gsap.set(q(".one2 > div"), {
            y: 60,
            opacity: 0
        });
    
        gsap.set(q(".asdf > div"), {
            y: 40,
            opacity: 0
        });
    
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: footerRef.current,
                start: "top 80%",
                toggleActions: "restart none none reset"
            }
        });
    
        // Form
        tl.to(q(".one1 > *"), {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out"
        })
    
        // Links
        .to(q(".one2 > div"), {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out"
        }, "-=0.5")
    
        // Bottom
        .to(q(".asdf > div"), {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out"
        }, "-=0.5")
    
        // Logo
        .from(titles[0], {
            yPercent: 110,
            duration: 1,
            ease: "expo.inOut"
        })
    
        .to(titles[0], {
            yPercent: -210,
            duration: 1,
            ease: "expo.inOut"
        }, "-=0.3")
    
        .to(titles[1], {
            yPercent: -10,
            duration: 1,
            ease: "expo.inOut"
        }, "<");
    
    }, { scope: footerRef });
    return (
        <div className='footer' ref={footerRef}>
            <div className='one'>
                <div className='one1'>
                    <input placeholder ="Email" className='input' type="text" />
                    <textarea placeholder ="Describe Your Idea" className='input' name="" id=""></textarea>
                    <button>Let's Work Togather</button>
                </div>

                <div className='one2'>
                    <div>
                        <span>Links</span>
                        <Link to={"/"} className='links'>Home</Link>
                        <Link to={"/about"} className='links'>About</Link>
                        <Link to={"/project"} className='links'>Project</Link>
                        <Link to={"/contact"} className='links'>Contact</Link>
                    </div>

                    <div>
                        <span>Social</span>
                        <a href="">Insta</a>
                        <a href="">LinkedIn</a>
                    </div>
                </div>
            </div>

            <div className='two'>
                <div className='h1'>
                    <h1>NEXORA</h1>
                    <h1>NEXORA</h1>
                </div>

                <div className='asdf'>
                    <div>
                        <span>hello@nexora.com</span>
                        <span>+12 3456 6789</span>
                    </div>

                    <div>
                        <span>Privacy Policy</span>
                        <span>Legal Notice</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
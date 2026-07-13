import React, { useRef } from 'react'
import './About.css'



import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function About() {



    const aboutref = useRef()

    useGSAP(() => {

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: aboutref.current,
                start: "top 15%",
                end: "+=200%",
                pin: true,
                scrub: 1,
                anticipatePin: 1
            }
        });

        tl.from(".about-heading-word", {
            opacity: 0,
            stagger: 0.05,
            ease: "none"
        }, 0);

        tl.to(".about-heading-word", {
            opacity: 1,
            stagger: 0.05,
            ease: "expo"
        }, 0);

        tl.from(".quote-word", {
            opacity: 0,
            y: 200,
            stagger: 1,
            ease: "expo.in"
        }, 0.3);

        tl.from(".quote-word1", {
            opacity: 0,
            y: 200,
            stagger: 1,
            ease: "expo.in"
        });


        tl.from(".author", {
            opacity: 0,
            y: 40
        });

    });

    const h2text = "We unite design, development, and innovation to create digital products that solve real problems and leave a lasting impression.".split(" ")
    const spantext = '"Great products come from clear thinking, thoughtful design, and purposeful technology.'.split(",")
    return (

        <div className='about' ref={aboutref} >
            <div className='about1'>
                <span>Introduction</span>
                <h2>
                    {h2text.map((t) => (<h2 className='about-heading-word'>{" "}{t}{" "}</h2>))}

                </h2>
            </div>
            <div className='about2'>
               <div >  
               <h3>
                
                <span>{spantext.map((t) => (<span className='quote-word'>{t}</span>))}</span> <span className='quote-word1' style={{color : "#dadada"}}>This is what I believe"</span>

                </h3>
                <div className='author'>
                    <img src="" alt="" />
                    <div>
                        <h2>Ayan Sharma</h2>
                        <span>CEO</span>
                    </div>
                </div>
               </div>
            </div>
        </div>
    )
}

import React, { useRef } from 'react'
import './Projects.css'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger)
export default function Projects() {

    const projects = [
        {
            id: 1,
            title: "Evo Trends",
            category: "Full Stack E-Commerce",
            technologies: [
                "React",
                "Node.js",
                "Express",
                "MongoDB",
                "Redux Toolkit",
                "JWT",
            ],
            image: "https://images.unsplash.com/photo-1783628301708-c71042ce5622?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8",
            github: "https://github.com/username/evo-trends",
            live: "https://evo-trends.vercel.app",
            feild: "SEO",
        },
        {
            id: 2,
            title: "Legacy Vault",
            category: "Document Management",
            technologies: [
                "React",
                "Express",
                "MongoDB",
                "Cloudinary",
                "JWT",
            ],
            image: "https://images.unsplash.com/photo-1783628301708-c71042ce5622?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8",
            github: "https://github.com/username/legacy-vault",
            live: "https://legacy-vault.vercel.app",
            feild: "SEO",
        },
        {
            id: 3,
            title: "Orbit Shield",
            category: "AI Dashboard",
            technologies: [
                "React",
                "Three.js",
                "Python",
                "FastAPI",
                "Chart.js",
            ],
            image: "https://images.unsplash.com/photo-1783628301708-c71042ce5622?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8",
            github: "https://github.com/username/orbit-shield",
            live: "https://orbit-shield.vercel.app",
            feild: "SEO",
        },
        {
            id: 4,
            title: "NextBank",
            category: "Banking Application",
            technologies: [
                "Next.js",
                "MongoDB",
                "Express",
                "JWT",
                "REST API",
            ],
            image: "https://images.unsplash.com/photo-1783628301708-c71042ce5622?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8",
            github: "https://github.com/username/nextbank",
            live: "https://nextbank.vercel.app",
            feild: "SEO",
        },
        {
            id: 5,
            title: "Pixel Portfolio",
            category: "Creative Portfolio",
            technologies: [
                "React",
                "GSAP",
                "Framer Motion",
                "CSS Modules",
                "Vite",
            ],
            image: "https://images.unsplash.com/photo-1783628301708-c71042ce5622?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8",
            github: "https://github.com/username/pixel-portfolio",
            live: "https://portfolio.vercel.app",
            feild: "SEO",
        },
    ];

    const projref = useRef()
    const cards = gsap.utils.toArray(".itm")

    useGSAP(() => {

        const cards = gsap.utils.toArray(".itm");
    
        cards.forEach((card) => {
    
            const left = card.querySelector(".l");
            const center = card.querySelector(".c");
            const right = card.querySelector(".r");
    
            const tl = gsap.timeline({
                scrollTrigger:{
                    trigger:card,
                    start:"top 25%",
                    pin:true,
                    // scrub:true,
                    anticipatePin:1
                }
            });
    
            tl.from(left,{
                x:-80,
                opacity:0
            })
    
            .from(center,{
                scale:.8,
                opacity:0
            },"<")
    
            .from(right,{
                x:80,
                opacity:0
            },"<");
    
        });
    
    });


    return (
        <div ref={ projref} className='proj'>
            <div className='one'>
                <h1>Projects</h1>
            </div>
            <div className="two">
                {
                    projects?.map((item) => (
                        <>
                            <div className='itm'>
                                <div className='l'>
                                    <div>

                                        <h2>{item.id}. {item?.title} </h2>
                                        <span>{item?.category}</span>
                                    </div>
                                    <div className='tech' >
                                        {item?.technologies?.map((t) => (
                                            <>
                                                <span>{t}</span></>
                                        ))}
                                    </div>
                                </div>
                                <div className='c'>
                                    <img src={item.image} alt="" />
                                </div>

                                <div className='r'>
                                    <p>{item?.description}</p>
                                    <div>
                                        <button>View</button>
                                        <button>Repo</button>
                                    </div>
                                </div>

                            </div>
                        </>
                    ))
                }
            </div>
        </div>
    )
}

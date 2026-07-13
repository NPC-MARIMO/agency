import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./Services.css";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Services() {
    const servicesRef = useRef();

    useGSAP(() => {

        const ctx = gsap.context(() => {

            gsap.from(".service-title", {
                y: 80,
                opacity: 0,
                duration: 1,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: ".service-title",
                    start: "top 85%",
                    toggleActions: "play none none none"
                }
            });

            gsap.from(".service-desc", {
                y: 40,
                opacity: 0,
                duration: 1,
                delay: .2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".service-desc",
                    start: "top 85%",
                    toggleActions: "play none none none"
                }
            });

            gsap.from(".caro", {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".caro",
                    start: "top 85%",
                    toggleActions: "play none none none"
                }
            });

            gsap.utils.toArray(".ser21").forEach((card) => {

                gsap.from(card, {
                    y: 80,
                    opacity: 0,
                    duration: .8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                        toggleActions: "play none none none"
                    }
                });

            });

            gsap.from(".plus", {
                scale: 0,
                rotation: 180,
                stagger: .1,
                duration: .5,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: ".ser2",
                    start: "top 85%"
                }
            });

            ScrollTrigger.refresh();

        }, servicesRef);

        return () => ctx.revert();

    }, []);

    const skillSet = [
        "5 Web Designer",
        "3 Web Developer",
        "2 Branding Designer",
        "2 SEO Experts",
        "1 Consultant"
    ];

    const skill = [
        "Web Design",
        "Web Development",
        "Branding Designs",
        "SEO",
        "Consult"
    ];

    return (
        <div className="services" ref={servicesRef}>

            <div className="ser1">

                <div className="one">
                    <h1 className="service-title">
                        Services
                    </h1>
                </div>

                <div className="two">
                    <h2 className="service-desc">
                        <span>
                            We do not chase trends.
                            <br />
                        </span>

                        We focus on fundamentals:
                        understanding the problem,
                        designing with clarity,
                        and building with precision.
                    </h2>
                </div>

            </div>

            {/* <div className="caro">

                <div className="track">

                    {[...skillSet, ...skillSet].map((s, i) => (
                        <span className="item" key={i}>
                            {s}
                        </span>
                    ))}

                </div>

            </div> */}

            <div className="ser2">

                {skill.map((s, i) => (

                    <div className="ser21" key={i}>

                        <div>{i + 1}</div>

                        <div>
                            <h2>{s}</h2>
                        </div>

                        <div className="plus">+</div>

                    </div>

                ))}

            </div>

        </div>
    );
}
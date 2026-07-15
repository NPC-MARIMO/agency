import React, { useRef } from 'react'
import './Sidebar.css'
import { ArrowUpRight } from 'lucide-react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { Link } from 'react-router-dom'

export default function Sidebar({ menu, setMenu }) {
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

    if (!menu) return null;

    return (
        <div
            ref={sideRef}
            className="sideb"
            onClick={() => setMenu(0)}
        >
            <div
                className="sidecon"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="one">
                    <span>Navigation</span>
                    <ul>
                        <li>
                            <Link
                                to="/"
                                className="links"
                                onClick={() => setMenu(0)}
                            >
                                Home
                            </Link>
                            <ArrowUpRight />
                        </li>

                        <li>
                            <Link
                                to="/about"
                                className="links"
                                onClick={() => setMenu(0)}
                            >
                                About
                            </Link>
                            <ArrowUpRight />
                        </li>

                        <li>
                            <Link
                                to="/project"
                                className="links"
                                onClick={() => setMenu(0)}
                            >
                                Project
                            </Link>
                            <ArrowUpRight />
                        </li>

                        <li>
                            <Link
                                to="/contact"
                                className="links"
                                onClick={() => setMenu(0)}
                            >
                                Contact
                            </Link>
                            <ArrowUpRight />
                        </li>
                    </ul>
                </div>

                <div className="two">
                    <span>Contact</span>
                    <h2>nexora@xyz.com</h2>
                    <h2>+12 3456789 78</h2>

                    <button>Contact Us</button>

                    <br />
                    <br />
                    <br />

                    <span className="line">Legal Notice</span>{" "}
                    <span>Privacy Policy</span>
                </div>
            </div>
        </div>
    );
}
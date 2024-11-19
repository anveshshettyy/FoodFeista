import { useRef } from 'react'
import './index.css'
import Canvas from './Canvas'
import data from './data'
import LocomotiveScroll from 'locomotive-scroll';
import { useEffect, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import poster1 from "../public/images/poster1.jpg"
import burger from "../public/images/burger.jpg"
import logo from "../public/logo/FoodFiestaLogo.png"
import main from "../public/images/main.webp"
import { MdOutlineArrowOutward } from "react-icons/md";
import video1 from "../public/video/video2.mp4"

const Home = () => {

    const [showCanvas, setShowCanvas] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    const videoContainer = useRef(null);
    const video = useRef(null);
    const poster = useRef(null);
    const burgerP = useRef(null);
    const growingSpan = useRef(null);
    const hero = useRef(null);
    const headingref = useRef(null);

    useEffect(() => {
        const scroll = new LocomotiveScroll();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);

    useGSAP(() => {

        gsap.from(headingref.current, {
            y: 200,
            duration: 1,
            
        })

        gsap.from(hero.current, {
            y : -100,
            duration: 1,
        })

        gsap.from(poster.current, {
            x : 200,
            duration: 1,
            opacity: 0,
            scrollTrigger: {
                trigger: poster.current,
                start: "top 50%",
                end: "bottom 80% ",
                scrub: 1,
                
            }
        })

        gsap.from(burgerP.current, {
            x : -100,
            duration: 1,
            opacity: 0,
            scrollTrigger: {
                trigger: burgerP.current,
                start: "top 80%",
                end: "bottom 80% ",
                scrub: 2,
                
                
            }
        })

        gsap.to(video.current , {
            scale: 2.5,
            duration: 1,
            scrollTrigger: {
                trigger: video.current,
                start: "top 70%",
                end: "bottom 100% ",
                scrub: 1,
                
                yoyo: 1,
                
            }
        })

        headingref.current.addEventListener('mouseenter', (e) => {
            gsap.to(growingSpan.current, {
                scale: 3,
                pointerEvents: "none",
                color: "white",
                overflow: "visible",
                fontSize: "8px"
            })
        });

        headingref.current.addEventListener('mouseleave', (e) => {
            gsap.to(growingSpan.current, {
                scale: 1,
                color: "#FD2C2A",
                overflow: "hidden"
            })
        });

        headingref.current.addEventListener('click', (e) => {
            setShowCanvas(!showCanvas);
            if (!showCanvas) {
                gsap.set(growingSpan.current, {
                    top: e.clientY,
                    left: e.clientX
                });

                gsap.to(growingSpan.current, {
                    color: "#FD2C2A",
                    scale: 1000,
                    duration: 1,
                    opacity: 0,
                    ease: "power2.inOut",
                });

                gsap.to("body", {
                    backgroundColor: "#FD2C2A",
                    duration: 1,
                    ease: "power2.inOut"
                });
            } else {
                gsap.to(growingSpan.current, {
                    scale: 1,
                    duration: 2,
                    ease: "power2.inOut",
                    opacity: 1,
                    
                });

                gsap.to("body", {
                    backgroundColor: "#FFFAFA",
                    duration: 1,
                    ease: "power2.inOut"
                });
            }
        });

    }, [showCanvas]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!showCanvas) {
                gsap.to(growingSpan.current, {
                    top: e.clientY,
                    left: e.clientX,
                    duration: 0.3,
                    ease: "power2.out"
                });
            }
        };

        window.addEventListener('mousemove', handleMouseMove);

    }, [showCanvas]);
    return (
        <>
            <span
                ref={growingSpan} 
                className='growing rounded-full  z-10 bg-blend-difference flex items-center justify-center h-[30px] w-[30px] bg-[#FD2C2A] overflow-hidden text-[#FD2C2A]  fixed -top-[20px] -left-[20px]  '>
                <img src={logo} alt="" />
            </span>


            <div className=' relative min-h-screen w-full text-black font-["PP_Fragment"] overflow-x-hidden  main '>
                {showCanvas && data[0].map((canvasdets, index) => (
                    <Canvas details={canvasdets} />
                ))}

                <div className='h-full w-full  '>
                    <nav className={`fixed top-0 left-0 w-full  transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'
                        }`}>
                        <div className="container mx-auto px-6 py-4">
                            <div className="flex items-center justify-between">
                                <div className="text-xl font-bold">FoodFiesta</div>
                                <div className='flex items-center justify-between space-x-20 '>
                                    <div className="space-x-10 text-[2vh]">
                                        <a href="#" className="hover:text-gray-600 hover:underline  ">Our Mission</a>
                                        <a href="#" className="hover:text-gray-600 hover:underline ">Rate us</a>
                                        <a href="#" className="hover:text-gray-600 hover:underline ">About us</a>
                                        <a href="#" className="hover:text-gray-600 hover:underline ">Talk to us</a>
                                    </div>
                                    <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center cursor-pointer ">
                                        <div className="flex space-x-1">
                                            <div className="w-1 h-1 rounded-full bg-gray-600"></div>
                                            <div className="w-1 h-1 rounded-full bg-gray-600"></div>
                                            <div className="w-1 h-1 rounded-full bg-gray-600"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>

                    <div className='h-full w-full  mt-[9vh] px-5   '>

                        <div
                        ref={hero}
                        className='h-[50vh] -z-10 w-full  '>
                            <img className='h-full -z-10 w-full object-cover border-md' src={main} alt="" />
                        </div>


                        <div className=' w-full h-[35vh] cursor-pointer  mt-[2vh] overflow-hidden flex justify-center items-center   relative z-[1] '>
                            <h1
                                ref={headingref}
                                className='text-[40vh] mt-[50px] text-tighter '>FoodFiesta</h1>
                        </div>



                        <div className='relative z-[100]  '>
                            {showCanvas && data[1].map((canvasdets, index) => (
                                <Canvas details={canvasdets} />
                            ))}
                            <div className='h-[40vh] w-full relative z-[100]  flex items-center justify-center mt-[10vh] mb-[10vh]  '>
                                <div className='h-full w-[60%]  '>
                                    <div className='h-[10vh] w-full text-[2vh] '>
                                        
                                    </div>
                                    <div className='h-[30vh] w-full  text-wrap'>
                                        <h1 className='text-[4vh]'>Discover the best local restaurants, browse mouthwatering menus, and enjoy your favorite dishes delivered right to your door. Order now and satisfy your cravings in just a few clicks!</h1>
                                    </div>

                                </div>
                            </div>

                            <div className='h-[40vh] w-full relative z-[100]  px-24 '>
                                <div 
                                ref={burgerP}
                                className='h-full w-[30%] bg-yellow-500'>
                                    <img className='h-full w-full object-fill' src={burger} alt="" />
                                </div>
                            </div>

                            <div className='h-[80vh] w-full  flex items-center justify-center relative z-[100]  px-5'>
                                <div className='h-full w-[50%] px-20 py-44 '>
                                    <h1 className='text-[4vh] text-wrap'>“Food brings people together on many different levels. It's nourishment of the soul and body; it's truly love." - Giada De Laurentiis”</h1>
                                </div>
                                <div 
                                ref={poster}
                                className='h-full w-[50%] opacity-1 '>
                                    <img className='h-full w-full object-cover' src={poster1} alt="" />
                                </div>
                            </div>

                            <div ref={videoContainer} className='   h-[100vh] w-full  mt-[10vh]  flex items-center justify-center relative z-[100]  '>
                                <div ref={video} className=' h-[40vh] w-[75vh] rounded-md '>
                                <video 
                                    autoPlay 
                                    loop 
                                    muted 
                                    className="h-full w-full object-cover rounded-md"
                                >
                                    <source src={video1} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                </div>
                            </div>



                            <div className="h-[100vh] w-full flex flex-col items-center relative z-[100] -mt-[20vh] justify-center">
                                <div className='h-[50vh] w-full  p-32'>
                                    <h1 className='text-[4vh]  text-wrap'>"Ready to dive into something delicious? Start exploring our curated selection of local favorites and top-rated dishes. With FoodFiesta, browsing menus and placing your order is effortless—simply choose your meal, customize it your way, and track it in real time. Discover new flavors or enjoy your all-time favorites—your next meal is just a few clicks away!"</h1>
                                </div>
                                <div className="relative overflow-hidden border rounded-xl ">
                                    <a href="/section" className="text-[5vh] flex px-32 py-10 border-2 cursor-pointer  text-black relative duration-500">
                                        Make Your Order <div className=' text-[5.2vh] mt-1'> <MdOutlineArrowOutward /></div>
                                        <div className="absolute left-0 bottom-0 w-full h-0 bg-black  -z-10 transition-all duration-1000 hover-wave"></div>
                                    </a>
                                </div>
                            </div>

                            <style>
                                {`
                                    .hover-wave {
                                        transform: translateY(100%);
                                        transition: transform 0.3s ease-in-out;
                                    }
                                    
                                    a:hover {
                                        color: white;
                                        transition: color 0.3s ease-in-out;
                                    }

                                    a:hover .hover-wave {
                                        height: 100%;
                                        transform: translateY(0);
                                    }
                                `}
                            </style>




    
                        </div>

                        <footer className="w-full py-20  text-black">
                            <div className="container mx-auto px-5">
                                <div className="grid grid-cols-4 gap-x-10">
                                    <div className="space-y-6">
                                        <h3 className="text-[5vh] font-bold">FoodFiesta</h3>
                                        <p className="text-[2vh]">Bringing delicious meals from local restaurants straight to your doorstep.</p>
                                    </div>
                                    <div className="space-y-6">
                                        <h3 className="text-[5vh] font-bold">Quick Links</h3>
                                        <ul className="space-y-4 text-[2vh]">
                                            <li><a href="#" className="hover:text-gray-300">Browse Restaurants</a></li>
                                            <li><a href="#" className="hover:text-gray-300">How It Works</a></li>
                                            <li><a href="#" className="hover:text-gray-300">Become a Partner</a></li>
                                            <li><a href="#" className="hover:text-gray-300">Contact Us</a></li>
                                        </ul>
                                    </div>
                                    <div className="space-y-6">
                                        <h3 className="text-[5vh] font-bold">Contact</h3>
                                        <ul className="space-y-4 text-[2vh]">
                                            <li>support@foodfiesta.com</li>
                                            <li>+1 (555) 123-4567</li>
                                            <li>123 Foodie Avenue</li>
                                            <li>Gourmet City, FC 54321</li>
                                        </ul>
                                    </div>
                                    <div className="space-y-6">
                                        <h3 className="text-[5vh] font-bold">Follow Us</h3>
                                        <ul className="space-y-4 text-[2vh]">
                                            <li><a href="#" className="hover:text-gray-300">Facebook</a></li>
                                            <li><a href="#" className="hover:text-gray-300">Instagram</a></li>
                                            <li><a href="#" className="hover:text-gray-300">Twitter</a></li>
                                            <li><a href="#" className="hover:text-gray-300">TikTok</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="mt-20 pt-8 border-t border-white/20 text-[1.5vh] flex items-center justify-center">
                                    <p>&copy; 2024 FoodFiesta. All rights reserved. | Terms of Service | Privacy Policy</p>
                                </div>
                            </div>
                        </footer>




                    </div>

                </div>
            </div>

           
        </>
    )
}

export default Home

import React, { useEffect, useState, useRef } from 'react';
import Card from './Card';
import { TfiFilter } from "react-icons/tfi";
import { IoMdArrowDropdown } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

export default function OnlineDelivery() {
    const [data, setData] = useState([]);
    const [isFixed, setIsFixed] = useState(false);
    const navRef = useRef(null);
    const mainNavRef = useRef(null);
    const navigate = useNavigate();

    const links = [
        {
            name: "Filter",
            icon: <TfiFilter/>
        },
        {
            name: "Sort By",
            icon: <IoMdArrowDropdown/>
        },
        {
            name: "Fast Delivery",
            icon: ''
        },
        {
            name: "New on FoodFiesta",
            icon: ''
        },
        {
            name: "Ratings 4.0+",
            icon: ''
        },
        {
            name: "Pure Veg",
            icon: ''
        },
        {
            name: "Offers",
            icon: ''
        },
        {
            name: "Rs.300-Rs.600",
            icon: ''
        },
        {
            name: "Less than Rs.300",
            icon: ''
        },
        
    ]

    const fetchTopRestaurant = async () => {
        const response = await fetch('http://localhost:5000/top-restaurant-chains');
        const apiData = await response.json();
        setData(apiData);
    };

    useEffect(() => {
        fetchTopRestaurant();

        const handleScroll = () => {
            if (navRef.current && mainNavRef.current) {
                const offsetTop = navRef.current.offsetTop;
                if (window.scrollY >= offsetTop) {
                    setIsFixed(true);
                } else {
                    setIsFixed(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleProductClick = (product) => {
        navigate('/product', { state: { product } });
    };

    return (
        <>
            <style>
                {`
                    .fixed-nav {
                        position: fixed;
                        top: 0;
                        width: 100%;
                        background-color: white;
                        z-index: 1000; 
                    }
                    .hidden-nav {
                        display: none;
                    }
                `}
            </style>
            <div ref={mainNavRef} className={`main-nav ${isFixed ? 'hidden-nav' : ''}`}> 
                <div className='max-w-[1200px] mx-auto flex my-4 items-center justify-between'>
                    <div className='text-[25px] font-bold'></div>
                </div>
            </div>
            <div className='max-w-[1200px] mx-auto'>
                <div className='flex my-4 items-center justify-between'>
                    <div className='text-[25px] font-bold'>Restaurants with online food delivery in Mangalore</div>
                </div>
                <div className=' '>
                    <div
                        ref={navRef}
                        className={`fix-nav max-w-[1200px] mt-[8px] h-[63px] p-3 mx-auto flex   my-4 gap-3 duration-200 ${isFixed ? 'fixed-nav' : ''
                            }`}>
                        {
                            links.map(
                                (link, index) => {
                                    return <div key={index} className='p-2 rounded-md shadow flex items-center justify-center gap-2 cursor-pointer'>
                                        {link.name}
                                        {link.icon}
                                    </div>
                                }
                            )
                        }
                    </div>
                </div>
                <div className='grid grid-cols-4 gap-3'>
                    {data.map((d, i) => {
                        return <div key={i} onClick={() => handleProductClick(d)}>
                            <Card {...d} />
                        </div>;
                    })}
                </div>
                <hr className='my-3 border-[1px] mt-[30px]' />
            </div>
            
        </>
    );
}

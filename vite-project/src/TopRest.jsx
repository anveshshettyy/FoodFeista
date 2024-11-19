import React, { useEffect, useState } from 'react';
import { IoArrowBackSharp, IoArrowForwardSharp } from 'react-icons/io5';
import Card from './Card';

export default function TopRest() {
    const [data, setData] = useState([]);
    const [slide, setSlide] = useState(0);

    const fetchTopRestaurant = async () => {
        const response = await fetch('http://localhost:5000/top-restaurant-chains');
        const apiData = await response.json();
        setData(apiData);
    };

    useEffect(() => {
        fetchTopRestaurant();
    }, []);

    const nextSlide = () => {
        if (slide + 3 < data.length) {
            setSlide(slide + 2);
        }
    };

    const prevSlide = () => {
        if (slide > 0) {
            setSlide(slide - 2);
        }
    };

    return (
        <div className='max-w-[1200px] mx-auto'>
            <div className='flex my-4 items-center justify-between'>
                <div className='text-[25px] font-bold'>Top restaurant chains in Mangalore</div>
                <div className='flex'>
                    <div className='w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 flex justify-center items-center cursor-pointer'>
                        <IoArrowBackSharp onClick={prevSlide} />
                    </div>
                    <div className='w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 flex justify-center items-center cursor-pointer'>
                        <IoArrowForwardSharp onClick={nextSlide} />
                    </div>
                </div>
            </div>
            <div className='overflow-hidden'>
                <div className='flex gap-5' style={{ transform: `translateX(-${slide * 25}%)`, transition: 'transform 0.5s ease' }}>
                    {data.map((d, i) => (
                        <div key={i} className='min-w-[25%]'>
                            <Card {...d} />
                        </div>
                    ))}
                </div>
            </div>
            <hr className='my-3 border-[1px]' />
        </div>
    );
}

import React from 'react'
import logo from "../public/logo/FoodFiestaLogo.png"

export default function Footer() {
    return (
        <div className='w-full mt-[120px] text-white '>
            <div className='w-full  bg-slate-200 flex gap-10 px-[300px] '>
                <div className='w-[70vh] h-[80%]  py-[20px] '>
                    <h1 className='font-bold text-[#3D4046] text-[4.5vh]'>For better experience,download the  FoodFiesta app now</h1>
                </div>
                <div className='w-[46%] h-[80%]  mt-[10px] flex gap-5 p-[20px]'>
                    <img className='h-full w-1/2' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png" alt="" />
                    <img className='h-full w-1/2' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png" alt="" />
                </div>
            </div>
            <div className='w-full h-[50vh]  bg-[#02060C] flex justify-center items-center'>
                <div className='w-[60%] h-[90%]  mt-[50px] flex justify-evenly'>
                    <div className='h-full w-[20%] '>
                        <div className='w-full h-[30px] flex text-white font-bold mt-[10px]'>
                            <div className='w-[30px] h-[30px] '><img className='h-full w-full object-contain' src={logo} alt="" /></div>
                            <h1 className='text-[3vh]'>FoodFeista</h1>
                        </div>
                        <div className='w-full h-[50px] mt-[10px]'>
                            <h1 className='font-semibold text-slate-400'>© 2024 Bundl Technologies Pvt. Ltd</h1>
                        </div>
                    </div>
                    <div className='h-full w-[20%]  '>
                        <div className='mt-[10px] font-bold text-[2.5vh]'>
                            <h1 className='font-bold text-[2.5vh]'>Company</h1>
                            {[
                                "About",
                                "Careers",
                                "Team",
                                "FoodFeista One",
                                "FoodFeista Instamart",
                                "FoodFeista Genie"
                            ].map((items) =>
                                <h1 className='font-semibold text-slate-400 mt-[7px] hover:cursor-pointer text-[2.3vh]'>{items}</h1>)}
                        </div>
                    </div>
                    <div className='h-full w-[20%] '>
                        <div className='mt-[10px] font-bold text-[2.5vh]'>
                            <h1 className='font-bold text-[2.5vh]'>Contact us </h1>
                            {[
                                "Help & Support",
                                "Partner with us",
                                "Ride with us",

                            ].map((items) =>
                                <h1 className='font-semibold text-slate-400 mt-[7px] hover:cursor-pointer text-[2.3vh]'>{items}</h1>)}
                        </div>
                    </div>
                    <div className='h-full w-[20%] '>
                    <div className='mt-[10px] font-bold text-[2.5vh]'>
                            <h1 className='font-bold text-[2.5vh]'>We deliever to:</h1>
                            {[
                                "Bangalore",
                                "Gurgaon",
                                "Hyderabad",
                                "Delhi",
                                "Mumbai",
                                "Pune"
                            ].map((items) =>
                                <h1 className='font-semibold text-slate-400 mt-[7px] hover:cursor-pointer text-[2.3vh]'>{items}</h1>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

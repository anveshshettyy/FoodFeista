import React from 'react'

export default function Explore() {
  const Restro = ["Manglore" , "Pune" , "Mumbai", "Delhi" , "Hydrebad" , "Kolkata" , "Japiur" , "Nagpur", "Chennai" , "Chandigarh" , "Lucknow" , "Kerala"]

  const Restaurants = ["Chinsese Restaurant Near Me" , "Indian Restaurant Near Me" , "Kerala Restaurant Near Me", "Italian Restaurant Near Me" , "Andhra Restaurant Near Me" , "Punjabi Restaurant Near Me" , "Bengali Restaurant Near Me" , "North Indian Restaurant Near Me" , "Seafood Restaurant Near Me", "Mexican Restaurant Near Me", "Manglorean Restaurant Near Me" , "Barbecue Restaurant Near Me"];

  return (
    <div className='max-w-[1200px] mx-auto mt-[50px] '>
      <div className='w-full '>
        <h1 className='text-[25px] font-bold capitalize font-sans '>Best Place To Eat Across site</h1>
        <div className=' w-full h-full   '>
          {
            Restro.map((item) => (
              <button className='border rounded-xl text-[2.2vh] font-semibold h-[8.5vh] w-[35vh] mr-12 mt-5 '>Best Restaurants in {item} </button>
            ))
          }
        </div>
      </div>
      <div className='w-full  mt-[70px]'>
        <h1 className='text-[25px] font-bold capitalize font-sans '>Best Cuisines Near Me</h1>
        <div className=' w-full h-full   '>
          {
            Restaurants.map((items) => (
              <button className='border rounded-xl text-[2.2vh] font-semibold h-[8.5vh] w-[35vh] mr-12 mt-5 '>{items} </button>
            ))
          }
        </div>
      </div>
      <div className='w-full h-[15vh] mt-[70px] '> 
        <h1 className='text-[25px] font-bold capitalize font-sans '>Explore Every Restaurants Near Me</h1>
        <div className='w-full h-full  flex justify-between mt-[20px]'>
          <button className='w-[49%] h-1/2 border rounded-xl text-[2.2vh] font-semibold  '>Explore Restaurants Near Me</button>
          <button className='w-[49%] h-1/2 border rounded-xl text-[2.2vh] font-semibold  '>Explore Top Rated Restaurants Near Me</button>
        </div>

      </div>
    </div>
  )
}

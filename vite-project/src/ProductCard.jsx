import React, { useState } from 'react';
import pizza from "../public/images/pizza.jpg"
import banner from "../public/images/banner.png"

const ProductCard = () => {
  const [quantity, setQuantity] = useState(1);
  const pricePerItem = 179; // Base price for a single item
  const totalPrice = pricePerItem * quantity;

  // Increment and Decrement Functions
  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => {
    if (quantity > 1) setQuantity(prev => prev - 1);
  };

  return (
    <div className='min-h-screen w-full flex items-center justify-center text-black  '>
        <img className='absolute -z-10 top-0 left-0 w-full h-full object-cover' src={banner} alt="" />
      <div className='h-[80vh] w-[30%]   p-5 rounded-lg shadow-lg bg-[#f5f5f5] box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1)'>
        {/* Image Section */}
        <div className='h-[70%] w-full  flex items-center justify-center rounded-lg'>
          {/* Placeholder for Product Image */}
          <img className='h-[80%] w-full object-cover' src={pizza} alt="" />
        </div>

        {/* Details Section */}
        <div className='h-[30%] w-full -mt-10  p-4 rounded-lg  '>
          <h2 className='text-lg font-bold'>Pizza</h2>
          <p className='text-sm mt-1'>Restaurant Name: Pizza Hut</p>

          {/* Quantity and Price */}
          <div className='flex justify-between items-center mt-3'>
            <span className='text-lg font-semibold'>₹{totalPrice}</span>
            
            {/* Quantity Selector */}
            <div className='flex items-center gap-2'>
              <button
                onClick={decrementQuantity}
                className='bg-gray-300 text-gray-800 px-2 rounded-md font-bold'
                disabled={quantity <= 1}
              >
                -
              </button>
              <span className='text-lg font-semibold'>{quantity}</span>
              <button
                onClick={incrementQuantity}
                className='bg-gray-300 text-gray-800 px-2 rounded-md font-bold'
              >
                +
              </button>
            </div>
            
          </div>
          <div className='h-[45px] border-sm w-full mt-5 bg-red-600 text-white cursor-pointer hover:bg-red-700 flex items-center justify-center rounded-lg'>
            <h1>Buy Now</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

import React from 'react';
import p1 from '../assets/p1.jpg';
import p2 from '../assets/p2.jpg';

const Reviews = () => {
  return (
    <div className='w-full min-h-[500px] mt-40 px-5'>
      <h2 className='text-center font-bold text-2xl'>Customer Reviews</h2>

      <div className='mt-10 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20'>
        {/* Review 1 */}
        <div className='flex flex-col w-full max-w-md'>
          <p className='text-4xl font-bold'>"</p>
          <img src={p1} className='w-40 rounded-lg mx-2' alt="reviewer 1" />
          <p className='text-xl font-semibold mt-5'>Jhon Doe</p>
          <p className='text-sm text-gray-700'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis aspernatur excepturi autem cupiditate aut. Illum corporis earum deleniti explicabo ullam.
          </p>
        </div>

        {/* Review 2 */}
        <div className='flex flex-col w-full max-w-md'>
          <p className='text-4xl font-bold'>"</p>
          <img src={p2} className='w-40 rounded-lg mx-2' alt="reviewer 2" />
          <p className='text-xl font-semibold mt-5'>Jhon Doe</p>
          <p className='text-sm text-gray-700'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis aspernatur excepturi autem cupiditate aut. Illum corporis earum deleniti explicabo ullam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;

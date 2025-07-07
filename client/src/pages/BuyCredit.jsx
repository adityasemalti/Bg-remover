import React from 'react';

const BuyCredit = () => {
  return (
    <div className='min-h-screen w-full p-5 overflow-x-hidden'>
      <h1 className='font-bold text-3xl text-center'>Choose your <span className='font-bold text-transparent bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text'>plan</span></h1>

      <div className='flex flex-col sm:flex-row sm:flex-wrap gap-10 justify-center items-center mt-20'>
        {/* Plan 1 */}
        <div className='border w-[90%] sm:w-[200px] flex flex-col rounded-lg border-black py-5 shadow-md'>
          <p className='text-center text-2xl font-semibold mb-5'>Basic</p>
          <p className='text-center font-semibold text-gray-700 my-2'>Best for Personal use</p>
          <p className='text-center font-semibold my-1'>$10/100 credits</p>
          <button className='border py-1 px-2 text-white bg-green-600 rounded-full mx-auto mt-3 hover:bg-green-700'>
            Purchase
          </button>
        </div>

        {/* Plan 2 */}
        <div className='border w-[90%] sm:w-[200px] flex flex-col rounded-lg border-black py-5 shadow-md'>
          <p className='text-center text-2xl font-semibold mb-5'>Advanced</p>
          <p className='text-center font-semibold text-gray-700 my-2'>Best for Business use</p>
          <p className='text-center font-semibold my-1'>$50/500 credits</p>
          <button className='border py-1 px-2 text-white bg-green-600 rounded-full mx-auto mt-3 hover:bg-green-700'>
            Purchase
          </button>
        </div>

        {/* Plan 3 */}
        <div className='border w-[90%] sm:w-[200px] flex flex-col rounded-lg border-black py-5 shadow-md'>
          <p className='text-center text-2xl font-semibold mb-5'>Business</p>
          <p className='text-center font-semibold text-gray-700 my-2'>Best for Enterprise use</p>
          <p className='text-center font-semibold my-1'>$250/5000 credits</p>
          <button className='border py-1 px-2 text-white bg-green-600 rounded-full mx-auto mt-3 hover:bg-green-700'>
            Purchase
          </button>
        </div>
      </div>
      <h1 className='mt-40 text-center font-semibold text-3xl text-gray-800'>The <span className='font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>Payment Gateway Integration</span> Hasn't been <br /> enable due to confidential reasons !! <br /> Hope you Like my Project</h1>
    </div>
  );
};

export default BuyCredit;

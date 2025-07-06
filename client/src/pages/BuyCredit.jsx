import React from 'react'

const BuyCredit = () => {
  return (
    <div className='h-screen w-screen p-5'>
        <h1 className='font-bold text-3xl text-center'>Choose your plan</h1>
        <div className='flex flex-col sm:flex-row sm:gap-10 sm:justify-center'>
        <div className='border h-[300px] w-[200px] mt-40 flex flex-col rounded-lg border-black py-5'>
            <p className='text-center text-2xl font-semibold mb-5'>Basic</p>
            <p className='text-center font-semibold text-gray-700 my-2'>Best for Personal use</p>
            <p className='text-center font-semibold my-1'>$10/100 credits</p>
            <button className='border py-1 px-2 text-white  bg-green-600 rounded-full mx-auto mt-3'>Purchase</button>
        </div>
        <div className='border h-[300px] w-[200px] mt-40 flex flex-col rounded-lg border-black py-5'>
            <p className='text-center text-2xl font-semibold mb-5'>Advanced</p>
            <p className='text-center font-semibold text-gray-700 my-2'>Best for Business use</p>
            <p className='text-center font-semibold my-1'>$50/500 credits</p>
            <button className='border py-1 px-2 text-white bg-green-600 rounded-full mx-auto mt-3'>Purchase</button>
        </div>
        <div className='border h-[300px] w-[200px] mt-40 flex flex-col rounded-lg border-black py-5'>
            <p className='text-center text-2xl font-semibold mb-5'>Business</p>
            <p className='text-center font-semibold text-gray-700 my-2'>Best for Enterprise use</p>
            <p className='text-center font-semibold my-1'>$250/5000 credits</p>
            <button className='border py-1 px-2 text-white  bg-green-600 rounded-full mx-auto mt-3'>Purchase</button>
        </div>
        </div>
      
    </div>
  )
}

export default BuyCredit

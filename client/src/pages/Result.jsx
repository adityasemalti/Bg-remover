import React from 'react'
import Navbar from '../components/NAvbar'
import p1 from '../assets/p1.jpg'
const Result = () => {
  return (
    <div className='h-screen w-screen'>
      <Navbar/>

      <div className='mt-32 w-full bg-gray-500 p-5'>
        <div className='flex items-center justify-around'>
            {/* left */}
            <div>
                <p className='text-center font-semibold my-1 text-white text-lg'>Original</p>
                <img src={p1} alt="any" className='border rounded-lg'/>
            </div>

            {/* rigth */}
            <div>
                <p className='text-center font-semibold my-1 text-white text-lg'>Result</p>
                <img src={p1} alt="" className='border rounded-lg'/>
            </div>
        </div>
        <div className='mt-5 flex'>
            <button className='py-2 px-3 border rounded-full bg-white text-black mx-auto font-semibold hover:scale-105 duration-300'>Try Another Image</button>
            <button className='py-2 px-3 border rounded-full bg-white text-black mx-auto font-semibold hover:scale-105 duration-300'>Download</button>
        </div>
      </div>
    </div>
  )
}

export default Result

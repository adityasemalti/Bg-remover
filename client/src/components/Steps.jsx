import React from 'react'
import upload from '../assets/upload.png'
import logo from '../assets/logo.png'
import down from '../assets/down.png'
import slider from '../assets/slider1.jpg'
const Steps = () => {
    return (

        <div className='w-screen mt-20 '>
            <h2 className='text-center text-2xl font-bold text-gray-700'>Steps to Remove <span className='bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent'>Background</span>  <br /> from Your image</h2>
            <div className="flex flex-col md:flex-row   items-center justify-center md:justify-around mt-10">
                <div className='w-[300px] h-[100px]  mt-10 rounded-lg shadow flex items-center gap-2'>
                    <img src={upload} alt="" className='w-14 h-14 p-1'/>
                    <p className='font-semibold'>Upload image in jpg/jpeg format</p>
                </div>
                <div className='w-[300px] h-[100px]  mt-10 rounded-lg shadow flex items-center gap-2'>
                    <img src={logo} alt="" className='w-14 h-14'/>
                    <p className='font-semibold'>Remove Background</p>
                </div>
                <div className='w-[300px] h-[100px]  mt-10 rounded-lg shadow flex items-center gap-2'>
                    <img src={down} alt="" className='w-14 h-14 p-2'/>
                    <p className='font-semibold'>Download the image</p>
                </div>
                
            </div>

            <div className='mt-40'>
            <h2 className='text-xl text-gray-700 font-bold text-center'>Remove Background with High quality and accuracy</h2>
            <img src={slider} alt="" className='mx-auto mt-10 hover:scale-110 duration-500'/>
            </div>

        </div>
    )
}
export default Steps
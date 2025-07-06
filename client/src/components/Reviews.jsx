import React from 'react'
import p1 from '../assets/p1.jpg'
import p2 from '../assets/p2.jpg'
const Reviews = () => {
    return (
        <div className='w-full h-[500px] mt-40'>
            <h2 className='text-center font-bold text-2xl'>Customer Reviews</h2>
            <div className=' mt-10 flex items-center justify-center gap-20 px-5'>
            <div className=' flex flex-col  w-1/4'>
                <p className='text-4xl font-bold '>"</p>
                <img src={p1} className='w-40 rounded-lg mx-2' alt="" />
                <p className='text-xl font-semibold mt-5' >Jhon Doe</p>
                <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis aspernatur excepturi autem cupiditate aut. Illum corporis earum deleniti explicabo ullam.</p>
            </div>
            <div className='w-1/4 flex flex-col'>
                <p className='text-4xl font-bold '>"</p>
                 <img src={p2} className='w-40 rounded-lg mx-2 ' alt="" />

                <p className='text-xl font-semibold mt-5'>Jhon Doe</p>
                <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis aspernatur excepturi autem cupiditate aut. Illum corporis earum deleniti explicabo ullam.</p>
            </div>
        </div>
        </div>
    )
}

export default Reviews

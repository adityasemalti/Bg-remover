import React from 'react'
import logo from '../assets/logo.png'
import {useNavigate} from 'react-router-dom'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'
const Navbar = () => {
      const {openSignIn} = useClerk()
      const {isSignedIn, user}= useUser()
  return (
    <div className='w-full h-20 flex justify-between items-center py-5 px-3'>
      <div className= " h-20  flex gap-2 items-center  m-5" >
        <img src={logo} alt="logo" className='w-full h-full'/>
        <h3 className='font-bold text-xl '>Bg.remover</h3>
      </div>
      {
        isSignedIn ? <div>
          <UserButton/>
        </div>:<div className="">
        <button onClick={()=>{openSignIn({})}} className='border py-2 px-3 rounded-full mx-3 text-white bg-black active:scale-105 duration-300'>Get Started</button>
      </div>
      }
      
    </div>
  )
}

export default Navbar

import React, { useEffect } from 'react'
import logo from '../assets/logo.png'
import {useNavigate} from 'react-router-dom'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import coin from '../assets/coin.png'
const Navbar = () => {
  const navigate = useNavigate()

  const {credit, loadCreditsData} = useContext(AppContext)
      const {openSignIn} = useClerk()
      const {isSignedIn, user}= useUser()

      useEffect(()=>{
        if(isSignedIn)
        loadCreditsData()
      },[isSignedIn])

  return (
    <div className='w-full h-20 flex justify-between items-center py-5 px-3'>
      <div className= " h-20  flex gap-2 items-center  m-5" >
        <img src={logo} alt="logo" className='w-full h-full'/>
        <h3 className='font-bold text-xl '>Bg.remover</h3>
      </div>
      {
        isSignedIn ? <div className='flex gap-5 items-center'>
          <button onClick={()=>navigate('/buy')} className='flex items-center border mr-10 px-2 py-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-400 text-white font-semibold'>
            <img src={coin} alt="" className='w-8' />
            <p className='text-sm'>Credits: {credit}</p>
          </button>
          <UserButton/>
        </div>:<div className="">
        <button onClick={()=>{openSignIn({})}} className='border py-2 px-3 rounded-full mx-3 text-white bg-black active:scale-105 duration-300'>Get Started</button>
      </div>
      }
      
    </div>
  )
}

export default Navbar

import React from 'react'
import Navbar from '../components/NAvbar'
import Hero from '../components/Hero'
import Steps from '../components/Steps'
import Reviews from '../components/Reviews'
import Upload from '../components/Upload'

const HomePage = () => {
  return (
    <div className='h-screen w-screen'>
    <Navbar/>
    <Hero/>
    <Steps/>
    <Reviews/>
    <Upload/>
    </div>
  )
}

export default HomePage

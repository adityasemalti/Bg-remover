import React from 'react'
import Navbar from './components/NAvbar'
import Hero from './components/Hero'
import Steps from './components/Steps'
import Reviews from './components/Reviews'
import Upload from './components/Upload'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Result from './pages/Result'
import BuyCredit from './pages/BuyCredit'
import { SignInButton } from '@clerk/clerk-react'

const App = () => {

  return (
    <>
   <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/result' element={<Result/>}/>
    <Route path='/buy' element={<BuyCredit/>}/>
   </Routes>
   </>
  )
}

export default App

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Result from './pages/Result'
import BuyCredit from './pages/BuyCredit'
import {Toaster} from 'react-hot-toast'

const App = () => {

  return (
    <>
    <Toaster/>
   <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/result' element={<Result/>}/>
    <Route path='/buy' element={<BuyCredit/>}/>
    
   </Routes>
   </>
  )
}

export default App

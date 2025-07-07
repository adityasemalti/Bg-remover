import React from 'react';
import Navbar from '../components/NAvbar';
import Hero from '../components/Hero';
import Steps from '../components/Steps';
import Reviews from '../components/Reviews';
import Upload from '../components/Upload';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className='w-full min-h-screen overflow-x-hidden'>
      <Navbar />
      <Hero />
      <Steps />
      <Reviews />
      <Upload />
      <Footer/>
    </div>
  );
};

export default HomePage;

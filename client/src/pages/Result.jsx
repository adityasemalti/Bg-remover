import React, { useContext } from 'react';
import Navbar from '../components/NAvbar';
import p1 from '../assets/p1.jpg';
import { AppContext } from '../context/AppContext';

const Result = () => {
  const { resultImage, image } = useContext(AppContext);

  return (
    <div className='min-h-screen w-screen'>
      <Navbar />

      <div className='mt-32 w-full bg-gray-500 p-5'>
        <div className='flex flex-col md:flex-row items-center justify-around gap-4'>
          {/* left */}
          <div className='w-full md:w-2/3'>
            <p className='text-center font-semibold my-1 text-white text-lg'>Original</p>
            <img
              src={image ? URL.createObjectURL(image) : ''}
              alt=""
              className='border rounded-lg w-full max-w-[400px] mx-auto'
            />
          </div>

          {/* right */}
          <div className='w-full md:w-2/3'>
            <p className='text-center font-semibold my-1 text-white text-lg'>Result</p>
            <div>
              <img
                src={resultImage ? resultImage : ''}
                alt=""
                className='border rounded-lg w-full max-w-[400px] mx-auto'
              />
              {!resultImage && image && <p className='text-white text-center mt-2'>Loading...</p>}
            </div>
          </div>
        </div>

        {resultImage && (
          <div className='mt-5 flex flex-col md:flex-row justify-center items-center gap-4'>
            <button className='py-2 px-4 border rounded-full bg-white text-black font-semibold hover:scale-105 duration-300'>
              Try Another Image
            </button>
            <a
              href={resultImage}
              download
              className='py-2 px-4 border rounded-full bg-white text-black font-semibold hover:scale-105 duration-300'
            >
              Download
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Result;

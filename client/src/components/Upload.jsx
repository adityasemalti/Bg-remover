import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Upload = () => {
  const { removebg } = useContext(AppContext);

  return (
    <div className='w-full flex flex-col px-4 py-10'>
      <h1 className='text-2xl font-bold text-center'>
        Try It{' '}
        <span className='bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent'>
          Yourself
        </span>
      </h1>

      <label htmlFor="image">
        <div className='text-center mt-10 border py-3 w-full max-w-xs mx-auto rounded-full bg-gradient-to-r from-pink-600 to-purple-600 text-lg text-white hover:scale-105 duration-300 cursor-pointer'>
          Upload Image
        </div>
        <input
          onChange={(e) => {
            removebg(e.target.files[0]);
          }}
          type="file"
          accept='image/*'
          name="image"
          id="image"
          hidden
        />
      </label>
    </div>
  );
};

export default Upload;

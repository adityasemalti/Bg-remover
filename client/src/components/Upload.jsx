import React from 'react'

const Upload = () => {
  return (
    <div className='w-full flex flex-col'>
      <h1 className='text-2xl font-bold text-center'>Try It <span className='bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent'>Yourself</span></h1>
      <label htmlFor="image">
      <div className='text-center mt-10 border py-3 w-1/5 mx-auto rounded-full bg-gradient-to-r from-pink-600 to-purple-600 text-lg text-white'>
        Upload Image
      </div>
              <input type="file" name="image" id="image" hidden />

      </label>
    </div>
  )
}

export default Upload

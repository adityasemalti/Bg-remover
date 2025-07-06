import React from 'react'
import hero1 from '../assets/hero-1.png'
import hero2 from '../assets/hero2.jpg'

const Hero = () => {
    return (
        <div className="w-full px-4 md:px-10 mt-10">
           
            <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto gap-10">

                <div className="w-full md:w-1/2 space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-700">
                        Remove <span className="bg-gradient-to-r from-pink-600 to-purple-500 bg-clip-text text-transparent">background</span><br />
                        of any image you want
                    </h2>
                    <p className="text-gray-600">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Ipsum itaque recusandae pariatur expedita eaque repellat eos laborum quidem minus eveniet!
                    </p>

                    <label htmlFor="image" className="inline-block">
                        <div
                            className="mt-4 py-3 px-6 rounded-full text-white font-semibold bg-gradient-to-tr from-purple-600 to-pink-500 hover:scale-105 duration-150 cursor-pointer text-center"
                        >
                            Upload Image
                        </div>
                    </label>
                </div>


                <div className="w-full md:w-1/2 flex justify-center">
                    <img
                        src={hero1}
                        alt="Hero"
                        className="max-w-[400px] md:max-w-[500px] w-full rounded-lg"
                    />
                </div>
            </div>

          

            <div className="flex justify-center mt-10">
                <img
                    src={hero2}
                    alt="Hero bottom"
                    className="w-full max-w-[600px] rounded-lg"/>
            </div>
        </div>
    )
}

export default Hero

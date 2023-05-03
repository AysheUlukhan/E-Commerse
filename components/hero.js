import React from 'react'

const Hero = () => {
  return (
    <div className='flex justify-center items-center h-screen bg-fixed bg-center bg-cover custom-img '>
        <div className='text-center'>
            <h2 className='text-42 lg:text-73  font-bold leading-85 capitalize text-white leading-10 font-sans'>Make your fashion</h2>
            <h2 className='text-42 lg:text-73 font-bold leading-85 capitalize text-white'>look swanky.</h2>
            <button className='text-14 leading-4 bg-white font-medium text-rich-black tracking-wider py-10 px-50 mt-36'>Shop now</button>
        </div>
    </div>
  )
}

export default Hero
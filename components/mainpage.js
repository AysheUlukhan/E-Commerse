import React from 'react'

const Mainpage = () => {
  return (
    <div className='bg-cultured lg:px-105 xl:px-105 2xl:px-105 sm:px-15 xs:px-15 xxs:px-15'>
      <div className='grid grid-cols-3 xs:grid-cols-1 justify-center items-center gap-x-36 pt-136 sm:pt-80 xs:pt-80 xxs:pt-80'>
        <div className='text-center border border-timberwolf border-x-transparent p-30'>
          <i className="fa-solid fa-truck text-venetian-red"></i>
          <h3 className='text-22 font-semibold leading-6 pt-20'>Quick delivery</h3>
          <p className='text-gray-nickel text-16 font-normal leading-6 pt-8'>Inside City delivery within 5 days</p>
        </div>

        <div className='text-center border border-timberwolf border-x-transparent p-30'>
          <i className="fa-solid fa-truck text-venetian-red"></i>
          <h3 className='text-22 font-semibold leading-6 pt-20'>Quick delivery</h3>
          <p className='text-gray-nickel text-16 font-normal leading-6 pt-8'>Inside City delivery within 5 days</p>
        </div>

        <div className='text-center border border-timberwolf border-x-transparent p-30'>
          <i className="fa-solid fa-truck text-venetian-red"></i>
          <h3 className='text-22 font-semibold leading-6 pt-20'>Quick delivery</h3>
          <p className='text-gray-nickel text-16 font-normal leading-6 pt-8'>Inside City delivery within 5 days</p>
        </div>

      </div>

      <div className='pt-150'>
        <div className='text-center '>
          <h2 className='text-52 font-bold leading-10'>What’s trending</h2>
          <p className='text-gray-nickel text-16 font-normal leading-6 pt-6'>These are the products that are trending now.</p>
        </div>
      </div>

    </div>
  )
}

export default Mainpage
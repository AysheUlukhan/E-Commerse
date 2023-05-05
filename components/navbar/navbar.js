import Link from 'next/link'
import React, { useEffect } from 'react'
import { useState } from 'react';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'


const Navbar = () => {
    // const [navbar, setNavbar] = useState(false);
    const [nav, setNav] = useState(false)
    const [color, setColor] = useState('transparent')
    const [textColor, setTextColor] = useState('black')

    const handleNav = () => {
      setNav(!nav)
    };

    useEffect(()=>{
      const changeColor = () =>{
        if (window.scrollY >= 90) {
          setColor('white');
          setTextColor('black');
        }else{
          setColor('transparent');
          setTextColor('white');
        }
      };
      window.addEventListener('scroll',changeColor);
    }, []);

  return (





    <div style={{backgroundColor:`${color}`}} className='fixed left-0 top-0 w-full z-10 ease-in duration-300 border-b border-b-white'>
        <div className='m-auto flex justify-around items-center text-white'>
            <ul className='flex sm:hidden xs:hidden xxs:hidden uppercase' style={{color:`${textColor}`}}>
                <li>
                    <Link href='/home'>Home</Link>
                </li>
                <li className='ml-32'>
                    <Link href='/about'>About</Link>
                </li>
                <li className='ml-32'>
                    <Link href='/shop'>Shop</Link>
                </li>
                <li className='ml-32'>
                    <Link href='/blogs'>Blogs</Link>
                </li>
                <li className='ml-32'>
                    <Link href='/contact'>Contact</Link>
                </li>
            </ul>
            <div>
              <h2 style={{color:`${textColor}`}} className='text-30 font-medium pt-28 pb-27'>Swanky<span className='font-bold text-venetian-red'>.</span></h2>
            </div>

            <div style={{color:`${textColor}`}} className='flex sm:hidden xs:hidden xxs:hidden'>
              <p>Login</p>
              <p className='ml-33'>Search</p>
            </div>

        {/* Mobile Button */}
        <div onClick={handleNav} className='block xl:hidden lg:hidden 2xl:hidden z-10 '>
          {nav ? <AiOutlineClose size={20} style={{color:`${textColor}`}} />  : 
          <AiOutlineMenu size={20} style={{color:`${textColor}`}} />}
            
        </div>
        {/* Mobile Menu */}
        <div className={nav ? 'lg:hidden xl:hidden 2xl:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-black text-center easy-in duration-300 ' : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-black text-center easy-in duration-300 '}>
        <ul>
                <li className='font-semibold text-20 p-4'>
                    <Link href='/home'>Home</Link>
                </li>
                <li className='font-semibold text-20 p-4'>
                    <Link href='/about'>About</Link>
                </li>
                <li className='font-semibold text-20 p-4'>
                    <Link href='/shop'>Shop</Link>
                </li>
                <li className='font-semibold text-20 p-4'>
                    <Link href='/blogs'>Blogs</Link>
                </li>
                <li className='font-semibold text-20 p-4'>
                    <Link href='/contact'>Contact</Link>
                </li>
            </ul>


        </div>
        </div>

        <div>
            
        </div>

        <div>
            
        </div>
    </div>
  )
}

export default Navbar
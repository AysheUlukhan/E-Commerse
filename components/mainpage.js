import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper'
import 'swiper/css';
import Image from 'next/image'
import photo from '../assets/img/photo.svg'
import photo1 from '../assets/img/slide-foto1.svg'
import photo2 from '../assets/img/slide-foto2.svg'
import photo3 from '../assets/img/slide-foto3.svg'
import photo4 from '../assets/img/slide-foto4.svg'
import photo5 from '../assets/img/quotation.svg'
import photo6 from '../assets/img/photo6.svg'
import stylekick from '../assets/img/StyleKICK.svg'
import NOREMONHANKS from '../assets/img/NOREMON-HANKS.svg'
import fashionMax from '../assets/img/fashionMax.svg'
import woodyland from '../assets/img/woodyland.svg'
import t021 from '../assets/img/t021.svg'
import footerf1 from '../assets/img/footer-f1.svg'
import footerf2 from '../assets/img/footer-f1.svg'
import footerp3 from '../assets/img/footer-p3.svg'
import footerf4 from '../assets/img/footer-f4.svg'
import footerf5 from '../assets/img/footer-f5.svg'


const Mainpage = () => {
  SwiperCore.use([Autoplay])
  return (
    <div className='bg-cultured '>
      <div className='grid grid-cols-3 xs:grid-cols-1 justify-center items-center gap-x-36 pt-136 sm:pt-80 xs:pt-80 xxs:pt-80 lg:px-105 xl:px-105 2xl:px-105 sm:px-15 xs:px-15 xxs:px-15'>
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
          <h2 className='text-52 font-bold leading-10'>What’s Trending</h2>
          <p className='text-gray-nickel text-16 font-normal leading-6 pt-6 pb-40'>These are the products that are trending now.</p>
        </div>
      </div>

      <div className='lg:px-105 xl:px-105 2xl:px-105 sm:px-15 xs:px-15 xxs:px-15'>
        <Swiper
          spaceBetween={50}
          slidesPerView={4}
          loop={true}
          autoplay={{
            delay: 2000
          }}
        >
          <SwiperSlide>
            <div className='text-center'>
              <Image src={photo1} />
              <h2 className='text-22 font-bold leading-6 pt-6 capitalize'>Orange beanie</h2>
              <p className='font-bold text-14 leading-4 text-venetian-red pt-2'>$12.00</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='text-center'>
              <Image src={photo2} />
              <h2 className='text-22 font-bold leading-6 pt-6 capitalize'>leather coat</h2>
              <p className='font-bold text-14 leading-4 text-venetian-red pt-2'>$14.00</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='text-center'>
              <Image src={photo3} />
              <h2 className='text-22 font-bold leading-6 pt-6 capitalize'>Oversize shirt</h2>
              <p className='font-bold text-14 leading-4 text-venetian-red pt-2'>$12.00</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='text-center'>
              <Image src={photo4} />
              <h2 className='text-22 font-bold leading-6 pt-6 capitalize'>Flora print dress</h2>
              <p className='font-bold text-14 leading-4 text-venetian-red pt-2'>$14.00</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='text-center'>
              <Image src={photo3} />
              <h2 className='text-22 font-bold leading-6 pt-6'>Orange beanie</h2>
              <p className='font-bold text-14 leading-4 text-venetian-red pt-2'>$12.00</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='text-center'>
              <Image src={photo1} />
              <h2 className='text-22 font-bold leading-6 pt-6 capitalize'>Flora print dress</h2>
              <p className='font-bold text-14 leading-4 text-venetian-red pt-2'>$14.00</p>
            </div>
          </SwiperSlide>


        </Swiper>

        <div className='pt-42 text-center'>
          <button className='uppercase text-14 font-medium leading-4 py-10 px-50 bg-rich-black text-white '>Shop All</button>
        </div>
      </div>

      <div className='pt-150'>
        <Image src={photo} />
      </div>

      <div className='pt-150 lg:px-250 xl:px-250 2xl:px-250 sm:px-15 xs:px-15 xxs:px-15'>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2000
          }}
        >
          <SwiperSlide>
            <div className='text-center flex flex-col justify-center items-center'>
              <Image src={photo5} />
              <p className='font-normal italic text-24 leading-8 text-philippine-gray'>“Tempus oncu enim pellen tesque este pretium in neque, elit morbi sagittis lorem habi mattis Pellen tesque pretium feugiat vel morbi suspen dise sagittis lorem habi tasse morbi sagittis loreus oncu enim cursus.”</p>
              <div className='flex pt-31'>
                <i class="fa-sharp fa-solid fa-star"></i>
                <i class="fa-sharp fa-solid fa-star"></i>
                <i class="fa-sharp fa-solid fa-star"></i>
                <i class="fa-sharp fa-solid fa-star"></i>
                <i class="fa-sharp fa-solid fa-star"></i>
              </div>
              <p className='text-venetian-red font-bold text-14 leading-4 pt-9'>Emma Chamberlin</p>
            </div>
          </SwiperSlide>

        </Swiper>
      </div>

      <div className='pt-150'>
        <div className='text-center '>
          <h2 className='text-52 font-bold leading-10'>New arrivals</h2>
          <p className='text-gray-nickel text-16 font-normal leading-6 pt-6 pb-40'>These are the products that are trending now.</p>
        </div>
      </div>

      <div className='lg:px-105 xl:px-105 2xl:px-105 sm:px-15 xs:px-15 xxs:px-15'>
        <Swiper
          spaceBetween={50}
          slidesPerView={4}
          loop={true}
          autoplay={{
            delay: 2000
          }}
        >
          <SwiperSlide>
            <div className='text-center'>
              <Image src={photo1} />
              <h2 className='text-22 font-bold leading-6 pt-6 capitalize'>Orange beanie</h2>
              <p className='font-bold text-14 leading-4 text-venetian-red pt-2'>$12.00</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='text-center'>
              <Image src={photo2} />
              <h2 className='text-22 font-bold leading-6 pt-6 capitalize'>leather coat</h2>
              <p className='font-bold text-14 leading-4 text-venetian-red pt-2'>$14.00</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='text-center'>
              <Image src={photo3} />
              <h2 className='text-22 font-bold leading-6 pt-6 capitalize'>Oversize shirt</h2>
              <p className='font-bold text-14 leading-4 text-venetian-red pt-2'>$12.00</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='text-center'>
              <Image src={photo4} />
              <h2 className='text-22 font-bold leading-6 pt-6 capitalize'>Flora print dress</h2>
              <p className='font-bold text-14 leading-4 text-venetian-red pt-2'>$14.00</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='text-center'>
              <Image src={photo3} />
              <h2 className='text-22 font-bold leading-6 pt-6'>Orange beanie</h2>
              <p className='font-bold text-14 leading-4 text-venetian-red pt-2'>$12.00</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='text-center'>
              <Image src={photo1} />
              <h2 className='text-22 font-bold leading-6 pt-6 capitalize'>Flora print dress</h2>
              <p className='font-bold text-14 leading-4 text-venetian-red pt-2'>$14.00</p>
            </div>
          </SwiperSlide>


        </Swiper>

        <div className='pt-42 text-center'>
          <button className='uppercase text-14 font-medium leading-4 py-10 px-50 bg-rich-black text-white '>Shop All</button>
        </div>
      </div>

      <div className='pt-150 grid grid-cols-2'>
        <div className='outfits-foto1 flex justify-center items-center h-781  bg-center bg-cover'>
          <div>
            <h2 className='capitalize font-bold text-62 text-white pt-250'>Summer outfits</h2>
            <button className='uppercase text-14 leading-4 font-medium py-10 px-50 bg-white text-rich-black tracking-wider'>Shop collection</button>
          </div>
        </div>
        <div className='ml-20'>
          <div className='outfits-foto2 flex flex-col justify-center items-center h-380  bg-center bg-cover '>
            <h2 className='capitalize font-bold text-62 text-white'>gugles</h2>
            <button className='uppercase text-14 leading-4 font-medium py-10 px-50 border border-white text-white tracking-wider'>Shop it now</button>
          </div>
          <div className='outfits-foto3 flex flex-col justify-center items-center h-380  bg-center bg-cover mt-20'>
            <h2 className='capitalize font-bold text-62 text-white'>accessories</h2>
            <button className='uppercase text-14 leading-4 font-medium py-10 px-50 border border-white text-white tracking-wider'>Shop collection</button>
          </div>
        </div>
      </div>
      <div className='pt-150 lg:px-105 xl:px-105 2xl:px-105 sm:px-15 xs:px-15 xxs:px-15'>
        <div className='text-center'>
          <h2 className='font-bold text-52 leading-10'>Recent blogs</h2>
          <p className='text-gray-nickel font-normal text-16 leading-6 pt-6'>Read our news & articles about updates.</p>
        </div>
        <div className='pt-40 flex justify-center gap-x-5 text-center'>
          <div>
            <Image src={photo6} />
            <h2 className='font-bold text-22 leading-6 pt-14 capitalize'>Best comfortable clothes ideas</h2>
            <p className='font-normal text-16 leading-6 text-gray-nickel pt-4'>Justo maecenas facilisi cursus fermentum enim viverra.</p>
          </div>
          <div className='hover:h2'>
            <Image src={photo6} />
            <h2 className='font-bold text-22 leading-6 pt-14 text-venetian-red capitalize'>casual denim clothing for women</h2>
            <p className='font-normal text-16 leading-6 text-gray-nickel pt-4'>Sed sed eleifend vel sed elementum pharetra quam.</p>
          </div>
          <div>
            <Image src={photo6} />
            <h2 className='font-bold text-22 leading-6 pt-14'>Best poses for fashion photo</h2>
            <p className='font-normal text-16 leading-6 text-gray-nickel pt-4'>Viverra fringilla amet quis sollicitudin scelerisque nibh.</p>
          </div>
        </div>
        <div className='text-center pt-50'>
          <button className='uppercase font-medium text-14 leading-4 text-white bg-rich-black py-10 px-50'>Read all</button>
        </div>
      </div>

      <div className='pt-160  lg:px-105 xl:px-105 2xl:px-105 sm:px-15 xs:px-15 xxs:px-15 '>
        <div className='border border-y-timberwolf border-x-transparent flex items-center gap-36 py-54  '>
          <div >
            <Image src={stylekick} />
          </div>
          <div>
            <Image src={NOREMONHANKS} />
          </div>
          <div>
            <Image src={fashionMax} />
          </div>
          <div>
            <Image src={woodyland} />
          </div>
          <div>
            <Image src={t021} />
          </div>
        </div>
      </div>

      <div className='pt-150 lg:px-105 xl:px-105 2xl:px-105 sm:px-15 xs:px-15 xxs:px-15'>
        <h2 className='capitalize font-bold text-52 leading-10 text-center'>Shop our insta</h2>
        <div className='pt-40 flex sm:flex-col xs:flex-col xxs:flex-col justify-center gap-x-5'>
          <div >
            <Image src={footerf1} />
          </div>
          <div>
            <Image src={footerf1} />
          </div>
          <div>
            <Image src={footerp3} />
          </div>
          <div>
            <Image src={footerf4} />
          </div>
          <div>
            <Image src={footerf5} />
          </div>
        </div>

        <div className=''>
          <div className='flex sm:flex-col xs:flex-col xxs:flex-col justify-center items-center gap-x-32 pt-94'>
            <div>
              <h2 className='text-30 font-medium leading-10'>Swanky<span className='text-venetian-red'>.</span></h2>
              <p className='font-normal text-16 leading-6 text-gray-nickel pt-15'>Nisi, purus vitae, ultrices nunc. Sit ac sit suscipit hendrerit. Gravida massa volutpat aenean odio erat nullam fringilla.</p>
              <input type="email" placeholder="Enter your email address..." className='bg-transparent pt-20 text-16 font-normal leading-5 outline-0 border border-b border-t-transparent border-x-transparent placeholder:italic ' />

              <div className='gap-x-7 flex pt-40'>
                <div><i className="fa-brands fa-facebook-f text-venetian-red"></i></div>
                <div><i className="fa-brands fa-instagram text-gray-x11"></i></div>
                <div><i className="fa-brands fa-twitter text-gray-x11"></i></div>
                <div><i className="fa-brands fa-linkedin-in text-gray-x11"></i></div>
                <div><i className="fa-brands fa-youtube text-gray-x11"></i></div>
              </div>
            </div>

            <div>
              <h2>Quick links</h2>
              <p className='uppercase underline'>Home</p>
              <p className='uppercase'>About</p>
              <p className='uppercase'>Shop</p>
              <p className='uppercase'>Blogs</p>
              <p className='uppercase'>Contact</p>

            </div>

            <div>
              <h2 className='text-22 font-bold leading-6'>Help & info</h2>
              <p className='text-14 font-bold leading-4'>Track Your Order</p>
              <p className='text-14 font-bold leading-4'>Returns policies</p>
              <p className='text-14 font-bold leading-4'>Shipping + Delivery </p>
              <p className='text-14 font-bold leading-4'>Contact Us</p>
              <p className='text-14 font-bold leading-4'>Faqs</p>

            </div>

            <div>
              <h2 className='text-22 font-bold leading-6'>Contact us</h2>
              <p className='text-16 font-normal text-gray-nickel'>Do you have any queries or suggestions?
                <span className='font-medium text-rich-black'>yourinfo@gmail.com</span></p>
              <p className='text-16 font-normal text-gray-nickel'>If you need support? Just give us a call. 
                <span className='font-medium text-rich-black'>+55 111 222 333 44</span></p>


            </div>
          </div>
        </div>


      </div>

    </div>
  )
}

export default Mainpage
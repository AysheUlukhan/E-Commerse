import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper'
import 'swiper/css';
import Image from 'next/image'
import photo from 'C:/Users/HP/Desktop/e-commerse-swanky/assets/img/photo.svg'

import photo1 from '../../assets/img/slide-foto1.svg'
import photo2 from '../../assets/img/slide-foto2.svg'
import photo3 from '../../assets/img/slide-foto3.svg'
import photo4 from '../../assets/img/slide-foto4.svg'
import photo5 from '../../assets/img/quotation.svg'
import photo6 from '../../assets/img/photo6.svg'
import stylekick from '../../assets/img/StyleKICK.svg'
import NOREMONHANKS from '../../assets/img/NOREMON-HANKS.svg'
import fashionMax from '../../assets/img/fashionMax.svg'
import woodyland from '../../assets/img/woodyland.svg'
import t021 from '../../assets/img/t021.svg'
import footerf1 from '../../assets/img/footer-f1.svg'
import footerf2 from '../../assets/img/footer-f1.svg'
import footerp3 from '../../assets/img/footer-p3.svg'
import footerf4 from '../../assets/img/footer-f4.svg'
import footerf5 from '../../assets/img/footer-f5.svg'

const Mainpage = () => {
  SwiperCore.use([Autoplay])
  return (
    <div>
      <div className='flex justify-center items-center h-screen bg-fixed bg-center bg-cover custom-img '>
        <div className='text-center'>
          <h2 className='text-42 lg:text-73  font-bold leading-85 capitalize text-white leading-10 font-sans'>Make your fashion</h2>
          <h2 className='text-42 lg:text-73 font-bold leading-85 capitalize text-white'>look swanky.</h2>
          <button className='text-14 leading-4 bg-white font-medium text-rich-black tracking-wider py-10 px-50 mt-36'>Shop now</button>
        </div>
      </div>
      <div className='bg-cultured'>
        <div className='flex items-center justify-center '>

          <div class="grid grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 xxs:grid-cols-1 pt-150 sm:pt-80 xs:pt-80 xxs:pt-80 2xl:gap-x-32 ">


            <div class="">
              <div class="flex ">
                <div class="flex items-center sm:mb-30 xs:mb-30 xxs:mb-30">
                  <div className='text-center border border-timberwolf border-x-transparent p-30'>
                    <i className="fa-solid fa-truck text-venetian-red"></i>
                    <h3 className='text-22 font-semibold leading-6 pt-20'>Quick delivery</h3>
                    <p className='text-gray-nickel text-16 font-normal leading-6 pt-8'>Inside City delivery within 5 days</p>
                  </div>
                </div>

              </div>
            </div>

            <div class="">
              <div class="flex flex-col">
                <div class="flex items-center sm:mb-30 xs:mb-30 xxs:mb-30">
                  <div className='text-center border border-timberwolf border-x-transparent p-30'>
                    <i className="fa-solid fa-truck text-venetian-red"></i>
                    <h3 className='text-22 font-semibold leading-6 pt-20'>Quick delivery</h3>
                    <p className='text-gray-nickel text-16 font-normal leading-6 pt-8'>Inside City delivery within 5 days</p>
                  </div>
                </div>

              </div>
            </div>


            <div class="">
              <div class="flex flex-col">
                <div class="flex items-center">
                  <div className='text-center border border-timberwolf border-x-transparent p-30'>
                    <i className="fa-solid fa-truck text-venetian-red"></i>
                    <h3 className='text-22 font-semibold leading-6 pt-20'>Quick delivery</h3>
                    <p className='text-gray-nickel text-16 font-normal leading-6 pt-8'>Inside City delivery within 5 days</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

        <div className='pt-150'>
          <div className='text-center '>
            <h2 className='text-52 sm:text-32 xs:text-32 xxs:text-32 font-bold leading-10'>What’s Trending</h2>
            <p className='text-gray-nickel text-16 font-normal leading-6 pt-6 pb-40'>These are the products that are trending now.</p>
          </div>

          <div className='lg:px-105 xl:px-105 2xl:px-105 sm:px-15 xs:px-15 xxs:px-15 '>
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
                  <h2 className='text-22 sm:text-20 xs:text-20 xxs:text-20 font-bold leading-6 pt-6 capitalize'>Orange beanie</h2>
                  <p className='font-bold text-14 leading-4 text-venetian-red pt-2'>$12.00</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='text-center'>
                  <Image src={photo2} />
                  <h2 className='text-22 sm:text-20 xs:text-20 xxs:text-20 font-bold leading-6 pt-6 capitalize'>leather coat</h2>
                  <p className='font-bold text-14 leading-4 text-venetian-red pt-2'>$14.00</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='text-center'>
                  <Image src={photo3} />
                  <h2 className='text-22 sm:text-20 xs:text-20 xxs:text-20 font-bold leading-6 pt-6 capitalize'>Oversize shirt</h2>
                  <p className='font-bold text-14 leading-4 text-venetian-red pt-2'>$12.00</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='text-center'>
                  <Image src={photo4} />
                  <h2 className='text-22 sm:text-20 xs:text-20 xxs:text-20 font-bold leading-6 pt-6 capitalize'>Flora print dress</h2>
                  <p className='font-bold text-14 leading-4 text-venetian-red pt-2'>$14.00</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='text-center'>
                  <Image src={photo3} />
                  <h2 className='text-22 sm:text-20 xs:text-20 xxs:text-20 font-bold leading-6 pt-6'>Orange beanie</h2>
                  <p className='font-bold text-14 leading-4 text-venetian-red pt-2'>$12.00</p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className='text-center'>
                  <Image src={photo1} />
                  <h2 className='text-22 sm:text-20 xs:text-20 xxs:text-20 font-bold leading-6 pt-6 capitalize'>Flora print dress</h2>
                  <p className='font-bold text-14 leading-4 text-venetian-red pt-2'>$14.00</p>
                </div>
              </SwiperSlide>


            </Swiper>

            <div className='pt-42 text-center'>
              <button className='uppercase text-14 font-medium leading-4 py-10 px-50 bg-rich-black text-white '>Shop All</button>
            </div>

          </div>

        </div>

        <div className='pt-150 sm:pt-80 xs:pt-80 xxs:pt-80 '>
          <Image src={photo} />
        </div>

        <div className='pt-150 sm:pt-80 xs:pt-80 xxs:pt-80 lg:px-250 xl:px-250 2xl:px-250 sm:px-15 xs:px-15 xxs:px-15'>
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


        <div className='pt-150 sm:pt-80 xs:pt-80 xxs:pt-80'>
          <div className='text-center '>
            <h2 className='text-52 sm:text-32 xs:text-32 xxs:text-32 font-bold leading-10'>New arrivals</h2>
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

        {/* <div className='pt-150 grid grid-cols-2'>
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
      </div> */}

        <div className='pt-150 sm:pt-80 xs:pt-80 xxs:pt-80 lg:px-105 xl:px-105 2xl:px-105 sm:px-15 xs:px-15 xxs:px-15'>
          <div className='text-center'>
            <h2 className='font-bold text-52 sm:text-32 xs:text-32 xxs:text-32 leading-10'>Recent blogs</h2>
            <p className='text-gray-nickel font-normal text-16 leading-6 pt-6'>Read our news & articles about updates.</p>
          </div>
          <div className='pt-40 flex justify-center  text-center'>
            <div className='grid grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 xxs:grid-cols-1 gap-x-5'>
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
          </div>
          <div className='text-center pt-50'>
            <button className='uppercase font-medium text-14 leading-4 text-white bg-rich-black py-10 px-50'>Read all</button>
          </div>
        </div>

        <div className='pt-160 sm:pt-80 xs:pt-80 xxs:pt-80 lg:px-105 xl:px-105 2xl:px-105 sm:px-15 xs:px-15 xxs:px-15 '>
          <div className='border border-y-timberwolf border-x-transparent flex sm:flex-col xs:flex-col xxs:flex-col items-center gap-36 xs:gap-10 sm:gap-10 xxs:gap-10 py-54  '>
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

        <div className='pt-150 sm:pt-80 xs:pt-80 xxs:pt-80 lg:px-105 xl:px-105 2xl:px-105 sm:px-15 xs:px-15 xxs:px-15'>
          <h2 className='capitalize font-bold text-52 sm:text-32 xs:text-32 xxs:text-32 leading-10 text-center'>Shop our insta</h2>
          <div className='pt-40 flex justify-center '>
            <div className='grid grid-cols-5 sm:grid-cols-1 xs:grid-cols-1 xxs:grid-cols-1 gap-x-5 sm:gap-y-5 xs:gap-y-5 xxs:gap-y-5'>
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
          </div>

          <footer>
            <div className='pt-105 sm:pb-80 xs:pb-80 xxs:pb-80'>
              <div className='mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-2'>
                  <div className='mb-5'>
                    <h4 className='text-30 font-medium leading-10'>Swanky<span className='font-bold text-venetian-red'>.</span></h4>
                    <p className='pt-15 text-16 font-normal text-gray-nickel leading-6'>Nisi, purus vitae, ultrices nunc. Sit ac sit suscipit hendrerit. Gravida massa volutpat aenean odio erat nullam fringilla.</p>
                    <input type='email' className='placeholder:text-gray-nickel border border-b-gray-nickel border-t-transparent border-x-transparent outline-0 bg-transparent pt-20' placeholder='Enter your email address...' />
                    <div className='gap-x-7 flex pt-40'>
                      <div><i className="fa-brands fa-facebook-f text-venetian-red"></i></div>
                      <div><i className="fa-brands fa-instagram text-gray-x11"></i></div>
                      <div><i className="fa-brands fa-twitter text-gray-x11"></i></div>
                      <div><i className="fa-brands fa-linkedin-in text-gray-x11"></i></div>
                      <div><i className="fa-brands fa-youtube text-gray-x11"></i></div>
                    </div>
                  </div>
                  <div className='mb-5'>
                    <h4 className='text-22 font-bold leading-6'>Quick links</h4>
                    <ul>
                      <li className='uppercase text-14 font-bold leading-4 pt-15 underline'>Home</li>
                      <li className='uppercase text-14 font-bold leading-4 pt-8'>About </li>
                      <li className='uppercase text-14 font-bold leading-4 pt-8'>Shop</li>
                      <li className='uppercase text-14 font-bold leading-4 pt-8'>Blogs</li>
                      <li className='uppercase text-14 font-bold leading-4 pt-8'>Contact</li>
                    </ul>
                  </div>

                  <div className='mb-5'>
                    <h4 className='text-22 font-bold leading-6'>Help & info</h4>
                    <ul>
                      <li className='uppercase text-14 font-bold leading-4 pt-15'>Track Your Order</li>
                      <li className='uppercase text-14 font-bold leading-4 pt-8'>Returns policies </li>
                      <li className='uppercase text-14 font-bold leading-4 pt-8'>Shipping + Delivery </li>
                      <li className='uppercase text-14 font-bold leading-4 pt-8'>Contact Us</li>
                      <li className='uppercase text-14 font-bold leading-4 pt-8'>Faqs</li>
                    </ul>
                  </div>


                  <div className='mb-5'>
                    <h4 className='text-22 font-bold leading-6'>Contact us</h4>
                    <p className='text-16 font-normal text-gray-nickel pt-15'>Do you have any queries or suggestions?</p>
                    <p className='text-16 font-medium'>yourinfo@gmail.com</p>

                    <p className='text-16 font-normal text-gray-nickel pt-14'>If you need support? Just give us a call</p>
                    <p className='text-16 font-medium'>+55 111 222 333 44</p>
                    
                  </div>
                </div>

              </div>
              
            </div>
          </footer>


        </div>







      </div>
          <hr className='text-timberwolf'/>
              <div className='bg-cultured flex justify-around sm:flex-col xs:flex-col xxs:flex-col sm:px-15 xs:px-15 xxs:px-15 pt-20'>
                <div className='flex sm:flex-col xs:flex-col xxs:flex-col'>
                  <p className='text-gray-nickel text-16'>We ship with:</p>
                  <p className='text-gray-nickel text-16 pt-10'>Payment options:</p>

                </div>
                <div>
                  <p className='text-gray-nickel text-16 pt-20'>© Copyright 2022 Swanky. Design by <strong className='text-black underline'>TemplatesJungle</strong></p>

                </div>
              </div>
    </div>
  )
}

export default Mainpage
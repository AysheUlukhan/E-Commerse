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
import footerf6 from '../../assets/img/arcticons_post.svg'
import footerf7 from '../../assets/img/fa-brands_dhl.svg'
import visa from '../../assets/img/brandico_visa.svg'
import masterCard from '../../assets/img/brandico_mastercard.svg'
import paypal from '../../assets/img/fontisto_paypal.svg'


const Mainpage = () => {
  SwiperCore.use([Autoplay])
  return (
    <div>
      <div className='flex justify-center items-center h-screen bg-fixed bg-center bg-cover custom-img '>
        <div className='text-center'>
          <h2 className='text-42 lg:text-73  font-bold leading-85 capitalize text-white leading-10 font-sans'>Make your fashion</h2>
          <h2 className='text-42 lg:text-73 font-bold leading-85 capitalize text-white'>look swanky.</h2>
          <button className='text-14 leading-4 bg-white font-medium text-rich-black tracking-wider py-10 px-50 mt-36 uppercase'>Shop now</button>
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


        <div className='pt-150 sm:pt-80 xs:pt-80 xxs:pt-80 '>
          <div className=''>
            <div className='grid grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 xxs:grid-cols-1'>
              <div className='outfits-foto1 flex flex-col justify-center items-start 2xl:pl-108 xl:pl-108 lg:pl-108 sm:pl-20 xs:pl-20 xxs:pl-20 bg-center bg-cover '>
                <h2 className='capitalize font-bold text-62 sm:text-32 xs:text-32 xxs:text-32 text-white pt-250'>Summer outfits</h2>
                <button className='uppercase sm:mb-47 xs:mb-47 xxs:mb-47 text-14  leading-4 font-medium py-10 px-50 bg-white text-rich-black tracking-wider'>Shop collection</button>
              </div>
              <div className='2xl:ml-20 xl:ml-20 md:ml-20 sm:mt-20 xs:mt-20 xxs:mt-20'>
                <div className='outfits-foto2 flex flex-col justify-center items-start 2xl:pl-108 xl:pl-108 lg:pl-108 sm:pl-20 xs:pl-20 xxs:pl-20 h-380  bg-center bg-cover '>
                  <h2 className='capitalize font-bold text-62 sm:text-32 xs:text-32 xxs:text-32 text-white'>gugles</h2>
                  <button className='uppercase text-14 leading-4 font-medium py-10 px-50 border border-white text-white tracking-wider'>Shop it now</button>
                </div>
                <div className='outfits-foto3 flex flex-col justify-center items-start 2xl:pl-108 xl:pl-108 lg:pl-108 sm:pl-20 xs:pl-20 xxs:pl-20 h-380  bg-center bg-cover mt-20'>
                  <h2 className='capitalize font-bold text-62 sm:text-32 xs:text-32 xxs:text-32 text-white'>accessories</h2>
                  <button className='uppercase text-14 leading-4 font-medium py-10 px-50 border border-white text-white tracking-wider'>Shop collection</button>
                </div>

              </div>
            </div>
          </div>

        </div>

        <div className='pt-150 sm:pt-80 xs:pt-80 xxs:pt-80 lg:px-105 xl:px-105 2xl:px-105 sm:px-15 xs:px-15 xxs:px-15'>
          <div className='text-center'>
            <h2 className='font-bold text-52 sm:text-32 xs:text-32 xxs:text-32 leading-10'>Recent blogs</h2>
            <p className='text-gray-nickel font-normal text-16 leading-6 pt-6'>Read our news & articles about updates.</p>
          </div>
          <div className='pt-40 flex justify-center text-center'>
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

        







      </div>

    </div>
  )
}

export default Mainpage
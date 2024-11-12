import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import './Carousel.css';
import img1 from "../../assets/carousel-1.png"
import img2 from "../../assets/carousel-2.png"
import img3 from "../../assets/carousel-3.png"


const Carousel = () => {
  return (
        <section className='mt-16'>
          <div className="container__two">
            <Swiper
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              modules={[Pagination, Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className='w-full bg-[#F2F2F2] flex gap-[200px] items-center justify-center rounded-[50px] pb-10 max-[1040px]:flex-wrap-reverse max-[1040px]:gap-[50px] max-[600px]:gap-7'>
                  <div>
                    <h2 className='text-[64px] max-w-[588px] font-bold max-[800px]:text-[46px] max-[660px]:text-[32px] max-[450px]:text-[28px]'>Скидка 15% <br />на все подвесные светильники <br /><span className='py-3 px-6 rounded-[50px] bg-[#454545] text-white max-[660px]:py-[6px]'>до 5 февраля</span></h2>
                  </div>
                  <div>
                    <img src={img1} alt="" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='w-full h-full bg-[#F2F2F2] flex gap-[200px] items-center justify-center rounded-[50px] pb-10 max-[1040px]:flex-wrap-reverse max-[1040px]:gap-[50px] max-[600px]:gap-7 '>
                  <div>
                    <h2 className='text-[64px] max-w-[588px] font-bold max-[800px]:text-[46px] max-[660px]:text-[32px] max-[450px]:text-[28px]'>Скидка 50% <br />на все подвесные светильники <br /><span className='py-3 px-6 rounded-[50px] bg-[#454545] text-white max-[660px]:py-[6px] whitespace-nowrap'>до 23 февраля</span></h2>
                  </div>
                  <div>
                    <img src={img2} alt="" className='h-full'/>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='w-full bg-[#F2F2F2] flex gap-[200px] items-center justify-center rounded-[50px] pb-10 max-[1040px]:flex-wrap-reverse max-[1040px]:gap-[50px] max-[600px]:gap-7'>
                  <div>
                    <h2 className='text-[64px] max-w-[588px] font-bold max-[800px]:text-[46px] max-[660px]:text-[32px] max-[450px]:text-[28px]'>Скидка 5% <br />на все подвесные светильники <br /><span className='py-3 px-6 rounded-[50px] bg-[#454545] text-white max-[660px]:py-[6px]'>до 1 февраля</span></h2>
                  </div>
                  <div>
                    <img src={img3} alt="" />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
  )
}

export default React.memo(Carousel)
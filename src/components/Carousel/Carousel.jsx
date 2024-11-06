import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import './Carousel.css';
import img1 from "../../assets/carousel-1.png"

const Carousel = () => {
  return (
        <section className='mt-16'>
          <div className="container__two">
            <Swiper
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className='w-full bg-[#F2F2F2] flex gap-[200px] items-center justify-center rounded-[50px] pb-10'>
                  <div>
                    <h2 className='text-[64px] max-w-[588px] font-bold'>Скидка 15% <br />на все подвесные светильники <br /><span className='py-3 px-6 rounded-[50px] bg-[#454545] text-white'>до 5 февраля</span></h2>
                  </div>
                  <div>
                    <img src={img1} alt="" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
              <SwiperSlide>Slide 5</SwiperSlide>
              <SwiperSlide>Slide 6</SwiperSlide>
              <SwiperSlide>Slide 7</SwiperSlide>
              <SwiperSlide>Slide 8</SwiperSlide>
              <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
          </div>
        </section>
  )
}

export default Carousel
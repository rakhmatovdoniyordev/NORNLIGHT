import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import img1 from "../../assets/brand-1.png"
import img2 from "../../assets/brand-2.png"
import img3 from "../../assets/brand-3.png"

const Brands = () => {
  return (
    <section className='mb-24 max-[800px]:mb-12'>
        <div className="container__person">
            <div>
                <h2 className='text-[40px] font-bold mb-16 max-[990px]:text-[36px] max-[700px]:text-[28px]'>Только проверенные бренды</h2>
                <Swiper
                    spaceBetween={20}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                    breakpoints={{
                        300: {
                            slidesPerView: 1,
                        },
                        600: {
                            slidesPerView: 2,
                        },
                        900: {
                            slidesPerView: 3,
                        },
                        1160: {
                            slidesPerView: 4,
                        }
                    }}
                >
                    <SwiperSlide>
                        <div className='p-5 border-[1px] border-[#D9D9D9] h-[112px] flex justify-center items-center'>
                            <img loading='lazy' src={img1} alt="" className='object-contain'/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='p-5 border-[1px] border-[#D9D9D9] h-[112px] flex justify-center items-center'>
                            <img loading='lazy' src={img2} alt="" className='object-contain'/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='p-5 border-[1px] border-[#D9D9D9] h-[112px] flex justify-center items-center'>
                            <img loading='lazy' src={img3} alt="" className='object-contain'/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='p-5 border-[1px] border-[#D9D9D9] h-[112px] flex justify-center items-center'>
                            <img loading='lazy' src={img1} alt="" className='object-contain'/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='p-5 border-[1px] border-[#D9D9D9] max-h-[112px] flex justify-center items-center'>
                            <img loading='lazy' src={img2} alt="" className='object-contain'/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='p-5 border-[1px] border-[#D9D9D9] max-h-[112px] flex justify-center items-center'>
                            <img loading='lazy' src={img3} alt="" className='object-contain'/>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    </section>
  )
}

export default React.memo(Brands)
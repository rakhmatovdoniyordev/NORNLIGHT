import React, { useEffect, useState } from 'react'
import { FaRegHeart, FaHeart  } from 'react-icons/fa'
import { LiaShoppingCartSolid } from 'react-icons/lia'
import { MdOutlineClose } from 'react-icons/md'
import { VscArrowRight } from 'react-icons/vsc'
import { Link, NavLink } from 'react-router-dom'
import Modal from '../Modal/Modal'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import './style.css'
import { useStateValue } from '../../context'

const Products = ({data, title, btn}) => {
    const [show, setShow] = useState(null)
    const [isNavigationEnabled, setIsNavigationEnabled] = useState(window.innerWidth > 650);

    const [state, dispatch] = useStateValue()

    useEffect(() => {
        const handleResize = () => {
            setIsNavigationEnabled(window.innerWidth > 650);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const items = data?.map((product) => (
        <div key={product.id} className="flex flex-col">
            <div className='text-center relative'>
                    <img src={product.url} alt="" className='w-[200px] h-[200px]       mx-auto max-[550px]:w-[150px] max-[550px]:h-[150px] select-none cursor-pointer' onClick={()=> setShow(product)}/>
                    <div className='absolute top-0 right-7 cursor-pointer' onClick={()=> dispatch({type: "ADD__WISHLIST", payload: product})}>
                        {
                            state.wishlist?.some(pro => pro.id === product.id) ?
                            <FaHeart className='text-[#454545] text-2xl max-[550px]:text-[18px]'/>
                            :
                            <FaRegHeart  className='text-2xl max-[550px]:text-[18px]'/>
                        }
                    </div>
            </div>
            <div className='p-7 flex flex-col gap-6'>
                <div className='min-h-16 max-[550px]:min-h-10'>
                    <Link to={`/products/${product.id}`}>
                        <h2 className='text-xl font-medium'>{product.title}</h2>
                    </Link>
                </div>
                <div className='flex justify-between items-center'>
                    <div>
                        <p className='line-through text-[12px] font-medium text-[#9F9F9F] max-[550px]:text-[11px]'>{product.previousprice.brm("int", 0)}</p>
                        <strong className='text-[20px] font-bold max-[550px]:text-[16px]'>{product.discountprice.brm("int", 0)}</strong>
                    </div>
                    <div className='group py-[9px] px-5 border duration-500 rounded-[100px] bg-[#454545] hover:bg-white cursor-pointer' onClick={()=> dispatch({type: "ADD__CART", payload: product})}>
                        <NavLink>
                            <LiaShoppingCartSolid className='text-white text-[28px] group-hover:text-black max-[550px]:text-[20px]'/>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    ))
  return (
    <section className='mb-20'>
        <div className="container__person">
            <div className='flex justify-between items-center mb-10'>
                <h2 className={`text-[40px] font-bold max-[800px]:text-[36px] max-[600px]:text-[28px] mb-9`}>{title}</h2>
                <NavLink to={"/blog"} className={`py-[14px] px-[47px] rounded-[100px] border-[1px] border-[#454545] flex items-center gap-3 duration-500 hover:bg-[#454545] hover:text-white  max-[550px]:hidden ${btn}`}>Все товары <VscArrowRight/></NavLink>
            </div>
            <div className='grid grid-cols-4 gap-2 max-[1050px]:grid-cols-3 max-[800px]:grid-cols-2 max-[550px]:grid-cols-1'>
                {items}
            </div>
            {
                show &&
                <Modal close={setShow}>
                    <div key={show.id} className=' flex gap-6 flex-col items-center p-8 rounded-[22px] max-[650px]:gap-4 max-[990px]:p-6 max-[650px]:p-5 max-[500px]:p-4'>
                        <div className='w-full flex justify-end'>
                            <MdOutlineClose className='text-[40px] cursor-pointer w-11 h-11 border-[1px] border-black rounded-[50%] p-1' onClick={()=> setShow(null)}/>
                        </div>
                        <div className='w-full border flex justify-center items-center py-5 rounded-xl h-auto'>
                            <div className='w-[380px] h-[380px] max-[650px]:w-[300px] max-[430px]:w-[200px]'>
                                <Swiper
                                navigation={
                                    isNavigationEnabled ? true : false
                                }
                                pagination={true}
                                modules={[Navigation, Pagination]}
                                className="mySwiper">
                                    <SwiperSlide>
                                        <img src={show.url} alt="" className='max-w-[250px] max-h-[250px] mb-0 max-[650px]:max-w-[300px] max-[650px]:max-h-[300px] max-[440px]:max-w-[160px] max-[440px]:max-h-[160px] object-contain select-none'/>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src={show.url} alt="" className='max-w-[250px] max-h-[250px] mb-0 max-[650px]:max-w-[300px] max-[650px]:max-h-[300px] max-[440px]:max-w-[160px] max-[440px]:max-h-[160px] object-contain select-none'/>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src={show.url} alt="" className='max-w-[250px] max-h-[250px] mb-0 max-[650px]:max-w-[300px] max-[650px]:max-h-[300px] max-[440px]:max-w-[160px] max-[440px]:max-h-[160px] object-contain select-none'/>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        <div>
                            <Link to={`/products/${show.id}`}>
                                <button className='px-8 py-3 rounded-[50px] flex justify-center items-center border bg-[#454545] text-white font-medium tracking-widest duration-500 hover:bg-white hover:text-black'>See more</button>
                            </Link>
                        </div>
                    </div>
                </Modal>
            }
        </div>
    </section>
  )
}

export default React.memo(Products)
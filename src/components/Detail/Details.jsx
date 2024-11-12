import React, { useEffect, useState } from 'react'
import { FaAngleRight, FaRegHeart } from 'react-icons/fa'
import { NavLink, useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import {brm} from "number-brm"

const Details = () => {
    const {id} = useParams()
    const {data} = useFetch(`/products/${id}`)
    const [count, setCount] = useState(1);
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count > 0 ? count - 1 : 0);
    useEffect(()=>{
        window.scrollTo(0, 0)
    }, [])
  return (
    <section className='my-24'>
        <div className="container__person">
            <div className='mb-5 flex gap-3'>
                <NavLink to={"/"} className='flex items-center text-[#A2A2A2]'>Главная
                </NavLink>
                <span className='flex items-center gap-3 text-[#000] font-semibold cursor-pointer'><FaAngleRight/>Product: {data?.title}</span>
            </div>
            <div className='grid grid-cols-2 gap-14 max-[950px]:grid-cols-1'>
                <div className='w-full h-full flex justify-center items-center border'>
                    <img src={data?.url} alt="" className='w-2/4'/>
                </div>
                <div className='flex flex-col gap-10'>
                    <h2 className='text-[40px] font-medium'>{data?.title}</h2>
                    <div className='flex gap-4 items-center'>
                        <strong className='text-[40px] font-medium'>{data?.discountprice.brm("int", 0)} ₽</strong>
                        <del className='text-lg font-medium text-[#B3B3B3]'>{data?.previousprice.brm("int", 0)} ₽</del>
                    </div>
                    <p>{data?.description}</p>
                    <div className='flex gap-4 items-center'>
                        <div className="flex items-center justify-between border border-gray-300 rounded-md w-32 h-14">
                            <button onClick={decrement} className="text-2xl text-gray-500 px-4">-</button>
                            <span className="text-2xl">{count}</span>
                            <button onClick={increment} className="text-2xl text-gray-500 px-4">+</button>
                        </div>
                        <div className='max-[600px]:hidden'>
                            <NavLink className={`py-4 px-12 flex justify-center items-center bg-[#454545] rounded-[10px] border text-white duration-500 hover:bg-white hover:text-black`}>В корзину</NavLink>
                        </div>
                        <NavLink className={`flex justify-center items-center p-4 rounded-xl bg-[#F8F8F8]`}>
                            <FaRegHeart className='text-[22px]'/>
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className='mt-28 max-[990px]:mt-16 max-[600px]:mt-12'>
                <h2 className='text-[40px] font-medium mb-7 max-[990px]:text-[36px] max-[650px]:text-[32px] max-[500px]:text-[28px]'>Характеристика</h2>
                <div>
                    <div className='w-full h-16 flex justify-between border items-center px-6'>
                        <h4 className='font-medium'>Цвет</h4>
                        <p className='text-[#4c4c4c8f]'>{data?.color}</p>
                    </div>
                    <div className='w-full h-16 flex justify-between border items-center px-6 bg-[#F8F8F8]'>
                        <h4 className='font-medium'>Год</h4>
                        <p className='text-[#4c4c4c8f]'>{data?.year}</p>
                    </div>
                    <div className='w-full h-16 flex justify-between border items-center px-6'>
                        <h4 className='font-medium'>Размер</h4>
                        <p className='text-[#4c4c4c8f]'>{data?.size}</p>
                    </div>
                    <div className='w-full h-16 flex justify-between border items-center px-6 bg-[#F8F8F8]'>
                        <h4 className='font-medium'>Страна</h4>
                        <p className='text-[#4c4c4c8f]'>{data?.country}</p>
                    </div>
                    <div className='w-full h-16 flex justify-between border items-center px-6'>
                        <h4 className='font-medium'>Kатегории</h4>
                        <p className='text-[#4c4c4c8f]'>{data?.category}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Details
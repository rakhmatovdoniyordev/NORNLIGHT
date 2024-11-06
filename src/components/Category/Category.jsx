import React from 'react'
import { NavLink } from 'react-router-dom'
import { VscArrowRight } from "react-icons/vsc";
import { catalogItems } from '../../static';

const Category = () => {
    const content = catalogItems?.map((item)=> (
        <div key={item.id} className='flex justify-between p-8 bg-[#F2F2F2] rounded-[20px] duration-500 hover:bg-[#454545] hover:text-white'>
            <div className='flex flex-col justify-between'>
                <h3 className='text-xl font-medium cursor-pointer'>{item.title}</h3>
                <a href="#" className='flex items-center whitespace-nowrap gap-3'>{item.price} <VscArrowRight/></a>
            </div>
            <div>
                <img src={item.image} alt="" className='cursor-pointer'/>
            </div>
        </div>
    ))
  return (
    <section className='my-20'>
        <div className="container__person">
            <div className='flex justify-between items-center mb-10'>
                <h2 className='text-[40px] font-bold'>Каталог</h2>
                <NavLink to={"/catalog"} className='py-[14px] px-[47px] rounded-[100px] border-[1px] border-[#454545] flex items-center gap-3 duration-500 hover:bg-[#454545] hover:text-white'>Весь каталог <VscArrowRight/></NavLink>
            </div>
            <div className='w-full grid grid-cols-3 gap-5'>
                {content}
            </div>
        </div>
    </section>
  )
}

export default Category
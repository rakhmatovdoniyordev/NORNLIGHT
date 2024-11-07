import React from 'react'
import { VscArrowRight } from 'react-icons/vsc'
import { NavLink } from 'react-router-dom'
import { blogItems } from '../../static'
import { RxArrowTopRight } from "react-icons/rx";

const Blogitem = ({blogDisplay, btn, margin}) => {
    const blog = blogItems?.map(item=> (
        <div key={item.id} className='flex flex-col gap-6 border-b border-[#000] max-[600px]:mx-auto'>
            <div>
                <img src={item.image} alt="" />
            </div>
            <div className='flex justify-between items-center'>
                <a href='#' className='text-xl font-bold max-w-[310px]'>{item.title}</a>
                <p><RxArrowTopRight className='text-[28px] font-bold'/></p>
            </div>
            <div className='mb-7'>
                <p className='text-sm font-medium'>{item.date}</p>
            </div>
        </div>
    ))
  return (
    <section className={`${margin}`}>
        <div className="container__person">
            <div className='flex justify-between items-center mb-10'>
                <h2 className={`text-[40px] font-bold ${blogDisplay} max-[800px]:text-[36px] max-[600px]:text-[28px]`}>Блог</h2>
                <NavLink to={"/blog"} className={`py-[14px] px-[47px] rounded-[100px] border-[1px] border-[#454545] flex items-center gap-3 duration-500 hover:bg-[#454545] hover:text-white ${btn} max-[550px]:hidden`}>Перейти в блог <VscArrowRight/></NavLink>
            </div>
            <div className='grid grid-cols-3 gap-5 max-[990px]:grid-cols-2 max-[600px]:grid-cols-1'>
                {blog}
            </div>
        </div>
    </section>
  )
}

export default React.memo(Blogitem)
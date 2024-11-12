import React, { useMemo } from 'react'
import logo from "../../assets/logo.svg"
import visaCard from "../../assets/visacard.png"
import vk from "../../assets/vk.png"
import { footerItems } from '../../static'
import { Link, NavLink } from 'react-router-dom'

const Footer = () => {
  const content = footerItems?.map((item)=> (
    <div>
      <p className='mb-8 text-[24px] font-bold'>{item.title}</p>
      <div className='flex flex-col gap-[27px] text-[#A2A2A2]'>
        {item.items?.map((child)=> (
          <NavLink>{child}</NavLink>
        ))}
      </div>
    </div>
  ))
  return (
    <footer className='py-20 bg-[#F2F2F2]'>
      <div className="container__person">
        <div className='grid grid-cols-4 gap-36 max-[990px]:grid-cols-2 max-[990px]:gap-24 max-[550px]:grid-cols-1 max-[550px]:text-center max-[550px]:gap-10'>
          <div className='flex flex-col gap-[35px]'>
            <NavLink to={"/"}>
              <img src={logo} alt="" className='max-[550px]:mx-auto'/>
            </NavLink>
            <p>8 (800) 890-46-56</p>
            <img src={visaCard} alt="" className='max-w-[175px] max-h-[31px] max-[550px]:mx-auto'/>
            <p>Политика конфидециальности</p>
            <p>Пользовательское соглашение</p>
            <div className='flex gap-3 max-[550px]:mx-auto'>
              <img src={vk} alt="" />
              <img src={vk} alt="" />
              <img src={vk} alt="" />
            </div>
          </div>
            {content}
        </div>
      </div>
    </footer>
  )
}

export default React.memo(Footer)
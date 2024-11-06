import React from 'react'
import logo from "../../assets/logo.svg"
import visaCard from "../../assets/visacard.png"
import vk from "../../assets/vk.png"
import { footerItems } from '../../static'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  const content = footerItems?.map((item)=> (
    <div>
      <p className='mb-8 text-[24px] font-bold'>{item.title}</p>
      <div className='flex flex-col gap-[27px] text-[#A2A2A2]'>
        {item.items?.map((child)=> (
          <NavLink to={child}>{child}</NavLink>
        ))}
      </div>
    </div>
  ))
  return (
    <footer className='py-20 bg-[#F2F2F2]'>
      <div className="container__person">
        <div className='flex gap-36'>
          <div className='flex flex-col gap-[35px]'>
            <img src={logo} alt="" />
            <p>8 (800) 890-46-56</p>
            <img src={visaCard} alt="" />
            <p>Политика конфидециальности</p>
            <p>Пользовательское соглашение</p>
            <div className='flex gap-3'>
              <img src={vk} alt="" />
              <img src={vk} alt="" />
              <img src={vk} alt="" />
            </div>
          </div>
          <div className='flex gap-32'>
            {content}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
import React from 'react'
import { NavLink } from "react-router-dom"
import logo from "../../assets/logo.svg"
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { TbAntennaBars5 } from "react-icons/tb";
import { LiaShoppingCartSolid } from "react-icons/lia";

const Header = () => {
  return (
    <header>
        <div className="container__person">
            <div className='w-full h-[50px] flex justify-between items-center'>
                <ul className='flex gap-[27px] items-center h-full font-semibold text-[#A2A2A2] text-[14px]'>
                    <li>
                        <NavLink to={"/about"}><span>О компании</span></NavLink>
                    </li>
                    <li>
                        <NavLink to={"/shipping"}><span>Доставка и оплата</span></NavLink>
                    </li>
                    <li>
                        <NavLink to={"/return"}><span>Возврат</span></NavLink>
                    </li>
                    <li>
                        <NavLink to={"/garant"}><span>Гарантии</span></NavLink>
                    </li>
                    <li>
                        <NavLink to={"/contacts"}><span>Контакты</span></NavLink>
                    </li>
                    <li>
                        <NavLink to={"/blog"}><span>Блог</span></NavLink>
                    </li>
                </ul>
                <div className='flex gap-6 items-center'>
                    <p className='font-semibold text-[#474747]'>8 (800) 890-46-56</p>
                    <p className='font-semibold text-[#A2A2A2] text-[14px]'>Заказать звонок</p>
                </div>
            </div>
            <nav className='h-[60px] flex items-center gap-7'>
                <div>
                    <NavLink to={"/"}>
                        <img src={logo} alt="" />
                    </NavLink>
                </div>
                <div>
                    <a href="#" className='flex items-center gap-3 py-[14px] px-[27px] rounded-[100px] bg-[#454545] border-[1px] border-[#454545] text-white duration-500 hover:bg-white hover:text-[#454545]'><HiOutlineBars3CenterLeft className='text-[24px]'/> Каталог</a>
                </div>
                <form action="" className='flex p-4 items-center border-[1px] border-[#454545] rounded-[100px] flex-1'>
                    <input type="search" placeholder='Поиск по товарам' className='border-none indent-3 flex-1 outline-none'/>
                    <a href="#"><IoSearch className='text-[26px]'/></a>
                </form>
                <div className='flex gap-[31px] items-center'>
                    <a href="#" className='flex flex-col items-center gap-2 text-[14px] font-semibold'><FaRegHeart className='text-[23px]'/> Избранное</a>
                    <a href="#" className='flex flex-col items-center gap-2 text-[14px] font-semibold'><TbAntennaBars5 className='text-[24px]'/> Сравнение</a>
                    <a href="#" className='flex flex-col items-center gap-2 text-[14px] font-semibold'><LiaShoppingCartSolid className='text-[24px]'/> Корзина</a>
                </div>
            </nav>
        </div>
    </header>
  )
}

export default Header
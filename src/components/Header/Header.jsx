import React, { useState } from 'react'
import { NavLink } from "react-router-dom"
import logo from "../../assets/logo.svg"
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { TbAntennaBars5 } from "react-icons/tb";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { BiMenuAltRight } from "react-icons/bi";
import { MdOutlineClose } from "react-icons/md";

const Header = () => {
    const [menu, setMenu] = useState(false)
  return (
    <header>
        <div className="container__person">
            <div className='w-full h-[50px] flex justify-between items-center max-[990px]:hidden'>
                <ul className='flex gap-[27px] items-center h-full font-semibold text-[#A2A2A2] text-[14px]'>
                    <li>
                        <NavLink to={"/about"} className='navbar__link'><span>О компании</span></NavLink>
                    </li>
                    <li>
                        <NavLink to={"/shipping"} className='navbar__link'><span>Доставка и оплата</span></NavLink>
                    </li>
                    <li>
                        <NavLink to={"/return"} className='navbar__link'><span>Возврат</span></NavLink>
                    </li>
                    <li>
                        <NavLink to={"/garant"} className='navbar__link'><span>Гарантии</span></NavLink>
                    </li>
                    <li>
                        <NavLink to={"/contacts"} className='navbar__link'><span>Контакты</span></NavLink>
                    </li>
                    <li>
                        <NavLink to={"/blog"} className='navbar__link'><span>Блог</span></NavLink>
                    </li>
                </ul>
                <div className='flex gap-6 items-center'>
                    <p className='font-semibold text-[#474747]'>8 (800) 890-46-56</p>
                    <p className='font-semibold text-[#A2A2A2] text-[14px]'>Заказать звонок</p>
                </div>
            </div>
            <nav className='h-[60px] flex items-center gap-7 max-[990px]:my-4 relative max-[990px]:mb-28 max-[600px]:items-center'>
                <div className='hidden max-[990px]:block'>
                    <BiMenuAltRight className='text-[45px] max-[600px]:text-[30px]' onClick={()=> setMenu(!menu)}/>
                </div>
                <div className='max-[990px]:flex-1'>
                    <NavLink to={"/"}>
                        <img src={logo} alt="" />
                    </NavLink>
                </div>
                <div className='max-[990px]:hidden'>
                    <a href="#" className='flex items-center gap-3 py-[14px] px-[27px] rounded-[100px] bg-[#454545] border-[1px] border-[#454545] text-white duration-500 hover:bg-white hover:text-[#454545]'><HiOutlineBars3CenterLeft className='text-[24px]'/> Каталог</a>
                </div>
                <form action="" className='flex p-4 items-center border-[1px] border-[#454545] rounded-[100px] flex-1 max-[990px]:absolute max-[990px]:top-[80px] max-[990px]:w-full max-[990px]:z-10'>
                    <input type="search" placeholder='Поиск по товарам' className='border-none indent-3 flex-1 outline-none'/>
                    <a href="#"><IoSearch className='text-[26px]'/></a>
                </form>
                <div className='flex gap-[31px] items-center max-[600px]:gap-3 max-[600px]:items-center'>
                    <a href="#" className='flex flex-col items-center gap-2 text-[14px] font-semibold max-[500px]:text-[0px]'><FaRegHeart className='text-[23px] max-[600px]:text-[20px]'/> Избранное</a>
                    <a href="#" className='flex flex-col items-center gap-2 text-[14px] font-semibold max-[990px]:hidden'><TbAntennaBars5 className='text-[24px]'/> Сравнение</a>
                    <a href="#" className='flex flex-col items-center gap-2 text-[14px] font-semibold max-[600px]:text-[0px]'><LiaShoppingCartSolid className='text-[24px] max-[600px]:text-[24px]'/> Корзина</a>
                </div>
            </nav>
        </div>
                <div className={`w-screen absolute top-[-1100px]  text-center z-50 bg-[#45454549] h-screen duration-700 ${menu ? "top-[80px]" : "top-[-1100px]"}`}>
                    <div className='bg-white'>
                        <div className='h-8 w-full flex justify-end pr-4'>
                            <MdOutlineClose className='text-[22px]' onClick={()=> setMenu(!menu)}/>
                        </div>
                        <ul className='flex flex-col mb-7'>
                            <li className='py-[15px] border-t-[1px] border-b-[1px]'>
                                <NavLink to={"/about"} className='navbar__link'><span>О компании</span></NavLink>
                            </li>
                            <li className='py-[15px] border-t-[1px] border-b-[1px]'>
                                <NavLink to={"/shipping"} className='navbar__link'><span>Доставка и оплата</span></NavLink>
                            </li>
                            <li className='py-[15px] border-t-[1px] border-b-[1px]'>
                                <NavLink to={"/return"} className='navbar__link'><span>Возврат</span></NavLink>
                            </li>
                            <li className='py-[15px] border-t-[1px] border-b-[1px]'>
                                <NavLink to={"/garant"} className='navbar__link'><span>Гарантии</span></NavLink>
                            </li>
                            <li className='py-[15px] border-t-[1px] border-b-[1px]'>
                                <NavLink to={"/contacts"} className='navbar__link'><span>Контакты</span></NavLink>
                            </li>
                            <li className='py-[15px] border-t-[1px] border-b-[1px]'>
                                <NavLink to={"/blog"} className='navbar__link'><span>Блог</span></NavLink>
                            </li>
                        </ul>
                        <div className='text-center mb-8 max-w-[260px] mx-auto'>
                            <a href="#" className='flex items-center justify-center gap-3 py-[14px] px-[27px] rounded-[100px] bg-[#454545] border-[1px] border-[#454545] text-white duration-500 hover:bg-white hover:text-[#454545]'><HiOutlineBars3CenterLeft className='text-[24px]'/> Каталог</a>
                        </div>
                        <div className='flex flex-col gap-3 pb-9'>
                            <p className='font-semibold text-[#474747]'>8 (800) 890-46-56</p>
                            <p className='font-semibold text-[#A2A2A2] text-[14px]'>Заказать звонок</p>
                        </div>
                    </div>
                </div>
    </header>
  )
}

export default React.memo(Header)
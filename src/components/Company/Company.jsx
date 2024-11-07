import React from 'react'
import { FaAngleRight } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const Company = () => {
  return (
    <section className='my-[100px] max-[800px]:my-[40px]'>
        <div className="container__person">
            <div className='mb-5 flex gap-3'>
                <NavLink to={"/"} className='flex items-center text-[#A2A2A2]'>Главная
                </NavLink>
                <span className='flex items-center gap-3 text-[#000] font-semibold cursor-pointer'><FaAngleRight/>О компании</span>
            </div>
            <div className='flex gap-28 justify-between max-[750px]:flex-wrap max-[750px]:gap-11'>
                <div className='flex flex-col gap-8 max-[750px]:w-full'>
                    <h3 className='text-[64px] font-bold whitespace-nowrap max-[800px]:text-[42px] max-[550px]:text-[28px]'>О компании</h3>
                    <div className='flex flex-col gap-5 max-[750px]:w-full max-[750px]:justify-center'>
                        <div className='p-8 flex flex-col gap-20 justify-between bg-[#F2F2F2] rounded-2xl'>
                            <h3 className='text-[52px] font-bold'>170+ </h3>
                            <p className='text-[20px] font-medium'>Товаров</p>
                        </div>
                        <div className='p-8 flex flex-col gap-20 justify-between bg-[#F2F2F2] rounded-2xl'>
                            <h3 className='text-[52px] font-bold'>1000+ </h3>
                            <p className='text-[20px] font-medium'>Довольных покупателей</p>
                        </div>
                        <div className='p-8 flex flex-col gap-20 justify-between bg-[#F2F2F2] rounded-2xl'>
                            <h3 className='text-[52px] font-bold'>170+ </h3>
                            <p className='text-[20px] font-medium'>Товаров</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-8 max-w-[640px] text-[20px] font-medium'>
                    <div>
                        <p>Интернет-магазин NORNLIGHT предлагает широкий ассортимент светильников для освещения вашего дома или офиса. У нас вы найдете разнообразные модели светильников, от современных и стильных до классических и элегантных. Мы предлагаем качественные и надежные светильники от лучших производителей, которые подарят вам комфорт и уют.</p>
                    </div>
                    <div>
                        <p>Покупая светильники в нашем интернет-магазине, вы получаете отличное соотношение цены и качества. Мы осуществляем доставку по всей России, чтобы каждый клиент мог насладиться прекрасным светом и удобством покупки онлайн. Обратитесь к нам сегодня и превратите ваш дом в оазис тепла и света с NORNLIGHT!</p>
                    </div>
                    <div>
                        <p>Интернет-магазин NORNLIGHT предлагает широкий ассортимент светильников для освещения вашего дома или офиса. У нас вы найдете разнообразные модели светильников, от современных и стильных до классических и элегантных. Мы предлагаем качественные и надежные светильники от лучших производителей, которые подарят вам комфорт и уют.</p>
                    </div>
                    <div>
                        <p>Покупая светильники в нашем интернет-магазине, вы получаете отличное соотношение цены и качества. Мы осуществляем доставку по всей России, чтобы каждый клиент мог насладиться прекрасным светом и удобством покупки онлайн. Обратитесь к нам сегодня и превратите ваш дом в оазис тепла и света с NORNLIGHT!</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default React.memo(Company)
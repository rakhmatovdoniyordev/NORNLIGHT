import React from 'react'
import { FaAngleRight } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';

const Payment = () => {
  return (
    <>
        <section className='my-24'>
            <div className="container__person">
                <div className='mb-5 flex gap-3'>
                    <NavLink to={"/"} className='flex items-center text-[#A2A2A2]'>Главная
                    </NavLink>
                    <span className='flex items-center gap-3 text-[#000] font-semibold cursor-pointer'><FaAngleRight/> Доставка и оплата</span>
                </div>
                <div className='flex justify-between gap-[341px]'>
                    <div>
                        <h1 className='text-[64px] font-bold'>Доставка и оплата</h1>
                    </div>
                    <div className='flex flex-col gap-16'>
                        <div className='flex flex-col gap-7'>
                            <h2 className='text-[24px] font-semibold'>Доставка</h2>
                            <p className='text-[20px]'>Мы осуществляем доставку со склада по Москве и Московской области собственной курьерской службой. Транспортными компаниями нашу продукцию мы доставляем по всей территории РФ, а так же по всем странам СНГ. <span className='text-[#2F4DA3]'>Сроки доставки: 4—6 недель</span></p>
                        </div>
                        <div className='flex flex-col gap-7'>
                            <h2 className='text-[24px] font-semibold'>Курьерская доставка</h2>
                            <p className='text-[20px]'>БЕСПЛАТНО доставим в приделах МКАД любой заказ <span className='text-[#2F4DA3]'>от 5 000 ₽</span>.Заказы свыше <span className='text-[#2F4DA3]'>30 000 ₽</span>  имеют бесплатную доставку, включительно 15 км от МКАД</p>
                        </div>
                        <div className='flex flex-col gap-7'>
                            <h2 className='text-[24px] font-semibold'>Самовывоз</h2>
                            <p className='text-[20px]'>Любой заказ можно забрать самостоятельно по адресу: г. Москва, Дмитровское шоссе д.100с2</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className='mb-28'>
            <div className="container__two">
                <div className='w-full'>
                    <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4047.0956477138607!2d69.20762732989965!3d41.220654787475105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1730894537591!5m2!1sru!2s"
                    width="100%"
                    height="672"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map Embed">
                    </iframe>
                </div>
            </div>
        </section>
    </>
  )
}

export default Payment
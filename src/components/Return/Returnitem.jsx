import React from 'react'
import { FaAngleRight } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const Returnitem = () => {
  return (
    <section className='my-24'>
        <div className="container__person">
            <div className='mb-5 flex gap-3'>
                <NavLink to={"/"} className='flex items-center text-[#A2A2A2]'>Главная
                </NavLink>
                <span className='flex items-center gap-3 text-[#000] font-semibold cursor-pointer'><FaAngleRight/> Возврат</span>
            </div>
            <div className='flex justify-between gap-[341px] max-[990px]:gap-[100px] max-[750px]:flex-wrap max-[750px]:gap-[40px] max-[600px]:gap-[32px]'>
                    <div>
                        <h1 className='text-[64px] font-bold max-[990px]:text-[48px] max-[750px]:text-[36px] max-[600px]:text-[28px]'>Возврат</h1>
                    </div>
                    <div className='flex flex-col gap-16 max-[750px]:gap-9'>
                        <div className='flex flex-col gap-7'>
                            <h2 className='text-[24px] font-semibold'>Обмен и возврат по желанию покупателя</h2>
                            <p className='text-[20px]'>Если товар по каким-то причинам не подошел вам, вы имеете право вернуть его или обменять на другой в течение 7 дней* с момента покупки при соблюдении следующих условий:</p>
                            <ul className='pl-10'>
                                <li className='list-disc text-[#2F4DA3]'>Товар имеет первоначальный вид, имеется товарная кондиция;</li>
                                <li className='list-disc text-[#2F4DA3]'>Товар имеет полную комплектацию, включая упаковочные материалы;</li>
                                <li className='list-disc text-[#2F4DA3]'>Товар не имеет следов подключался и не имеет признаков монтажа;</li>
                                <li className='list-disc text-[#2F4DA3]'>Упаковка товара не имеет повреждений, присутствует первоначальный товарный вид;</li>
                                <li className='list-disc text-[#2F4DA3]'>Есть документ, подтверждающий покупку в нашем интернет-магазине.</li>
                                <li className='list-disc text-[#2F4DA3]'>Для возврата товара необходимо привезти его к нам в офис.</li>
                                <li className='list-disc text-[#2F4DA3]'>Товар из других городов можно прислать нам транспортной компанией, при этом услуги транспортной компании  оплачиваются клиентом.</li>
                                <li className='list-disc text-[#2F4DA3]'>*В течение 14 дней для отдельных брендов. При оформлении заказа уточните у менеджера</li>
                            </ul>
                        </div>
                        <div className='flex flex-col gap-7'>
                            <h2 className='text-[24px] font-semibold'>Обмен и возврат по ошибке продавца</h2>
                            <p className='text-[20px]'>Причины обмена или возврата по ошибке продавца:</p>
                            <ul className='pl-10'>
                                <li className='list-disc text-[#2F4DA3]'>Неполная комплектация товара</li>
                                <li className='list-disc text-[#2F4DA3]'>Брак или дефект товара</li>
                                <li className='list-disc text-[#2F4DA3]'>Если вы выявили дефект, брак или неполную комплектацию товара, необходимо сделать фото дефекта и отправить на почту mail@at-svet.ru, указав краткое описание характера брака/</li>
                                <li className='list-disc text-[#2F4DA3]'>Мы заменим бракованный товар или довезем недостающие части. Доставка будет осуществлена бесплатно</li>
                            </ul>
                        </div>
                        <div className='flex flex-col gap-7'>
                            <h2 className='text-[24px] font-semibold'>Возврат денежных средств</h2>
                            <p className='text-[20px]'>Возврат денежных средств осуществляется путем перевода на банковские реквизиты покупателя при наличии заявления от покупателя.</p>
                        </div>
                    </div>
                </div>
        </div>
    </section>
  )
}

export default React.memo(Returnitem)
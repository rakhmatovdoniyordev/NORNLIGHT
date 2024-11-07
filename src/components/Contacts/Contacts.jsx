import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Contacts = () => {
  return (
    <>
      <section className="mt-24">
        <div className="container__person">
          <div className="flex justify-between items-center max-[700px]:flex-wrap max-[700px]:gap-8">
            <div className="flex flex-col">
              <div className="mb-5 flex gap-3">
                <NavLink to={"/"} className="flex items-center text-[#A2A2A2]">
                  Главная
                </NavLink>
                <span className="flex items-center gap-3 text-[#000] font-semibold cursor-pointer">
                  <FaAngleRight /> Контакты
                </span>
              </div>
              <div>
                <h3 className="text-[64px] font-bold max-[990px]:text-[48px] max-[750px]:text-[36px] max-[600px]:text-[28px]">Контакты</h3>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-semibold">8 (800) 890-46-56</h2>
              <p className="max-w-[209px]">Пн-Пт: 10:00 до 19:00Сб-Вс: заказ через корзину Телефоны: </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-12 mb-24">
        <div className="container__two">
            <div className="relative h-auto">
                <div className='w-full'>
                    <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4047.0956477138607!2d69.20762732989965!3d41.220654787475105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1730894537591!5m2!1sru!2s"
                    width="100%"
                    height="672"
                    style={{ border: 0, borderRadius: 15 }}
                    allowFullScreen=""
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map Embed">
                    </iframe>
                </div>
                <div className="absolute w-full bottom-8 max-[1000px]:relative max-[1000px]:mt-10 max-[1000px]:shadow-xl">
                    <div className="container__person">
                        <div className="flex justify-between p-14 bg-white rounded-2xl items-center max-[1000px]:flex-wrap max-[1000px]:gap-4">
                            <div>
                                <h2 className="text-2xl font-semibold mb-3">Адрес магазина</h2>
                                <p>г. Москва, Дмитровское шоссе д.100с2</p>
                            </div>
                            <div>
                                <h2 className="text-2xl font-semibold mb-3">Почта</h2>
                                <p>NORNLIGHT@mail.ru</p>
                            </div>
                            <div>
                                <h2 className="text-2xl font-semibold mb-3">Телефон</h2>
                                <p>8 (800) 890-46-56</p>
                            </div>
                            <div>
                                <button className="py-3 px-11 rounded-[100px] bg-[#454545] text-white border duration-500 hover:bg-white hover:text-black">Оставить заявку</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default React.memo(Contacts);

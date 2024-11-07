import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Garanty = () => {
  return (
    <section className="my-24">
      <div className="container__person">
        <div className="mb-5 flex gap-3">
          <NavLink to={"/"} className="flex items-center text-[#A2A2A2]">
            Главная
          </NavLink>
          <span className="flex items-center gap-3 text-[#000] font-semibold cursor-pointer">
            <FaAngleRight /> Гарантии
          </span>
        </div>
        <div className="flex justify-between gap-[341px] max-[990px]:gap-[100px] max-[750px]:flex-wrap max-[750px]:gap-[40px] max-[600px]:gap-[32px]">
          <div>
            <h1 className="text-[64px] font-bold max-[990px]:text-[48px] max-[750px]:text-[36px] max-[600px]:text-[28px]">Гарантии</h1>
          </div>
          <div className="flex flex-col gap-16 max-[750px]:gap-9">
            <div className="flex flex-col gap-1">
              <h2 className="text-[24px] font-semibold">
                Обмен и возврат по желанию покупателя
              </h2>
              <p className="text-[20px]">
                Все товары в магазине «NornLight» имеют гарантию. Она заявляется
                производителем и имеет определенный срок действия на различные
                группы товаров. Если ваше изделие вышло из строя в
                течение гарантийного срока вы можете обратиться к нам и получить
                бесплатный ремонт. Для этого нужно:
              </p>
              <ul className="ml-10">
                <li className="list-disc text-xl">
                  Предоставить чек, накладную или сообщить почту или номер
                  телефона, указанные при оформлении заказа.
                </li>
                <li className="list-disc text-xl">
                  Привезти товар к нам на склад или отправить его транспортной
                  компанией.
                </li>
                <li className="list-disc text-xl">
                  После товар отправляется на экспертизу и ремонт. Если ремонт
                  невозможен, мы обменяем изделие на аналогичное либо вернем
                  деньги за покупку.
                </li>
              </ul>
              <p className="text-xl">
                Обращаем внимание, что «А-Свет» не является сервисным центром, а
                выполняет роль посредника между клиентом и поставщиком. Поэтому
                сроки проведения ремонта могут отличаться для товаров различных
                брендов.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Garanty);

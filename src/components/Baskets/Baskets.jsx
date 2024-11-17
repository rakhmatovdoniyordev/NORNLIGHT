import React, { useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useStateValue } from "../../context";
import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";

const Baskets = () => {
  const [state, dispatch] = useStateValue();
  console.log(state);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    comments: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const [isAgreed, setIsAgreed] = useState(false);

  const handleSubmitPayment = (e) => {
    e.preventDefault();
    if (!isAgreed) {
      alert("Пожалуйста, примите условия обработки персональных данных");
      return;
    }
  };

  const items = state.cart?.map((product) => (
    <div key={product.id}>
      <div className="flex gap-4 p-4 items-center w-full max-[990px]:hidden">
        <div className="w-[10%]">
          <img
            src={product.url}
            alt={product.title}
            className="rounded-lg border w-[80px] h-[80px] mx-auto bg-white"
          />
        </div>
        <div className="w-[20%]">
          <h3 className="font-medium text-gray-900">{product.title}</h3>
          <p className="mt-1 text-sm text-gray-500">
            {(product.discountprice * product.amount).brm()}₽
          </p>
        </div>
        <div className="text-sm text-gray-500 w-[30%]">{product.description}</div>
        <div className="text-sm text-gray-500 text-center w-[20%]">
          {product.size}
        </div>
        <div className="flex items-center justify-between gap-5 w-[20%]">
          <div className="flex items-center gap-4">
            <button
              className="p-1 hover:bg-gray-100 rounded"
              onClick={() => dispatch({ type: "DEC_CART", payload: product })}
              disabled={product.amount <= 1}
            >
              <FiMinus className="w-4 h-4" />
              <span className="sr-only">Decrease quantity</span>
            </button>
            <span className="w-8 h-8 border-[1px] border-[#4545456b] rounded-[8px] flex justify-center items-center">
              {product.amount}
            </span>
            <button
              className="p-1 hover:bg-gray-100 rounded"
              onClick={() => dispatch({ type: "ADD__CART", payload: product })}
            >
              <FiPlus className="w-4 h-4" />
              <span className="sr-only">Increase quantity</span>
            </button>
          </div>
          <button
            className="p-1 hover:bg-gray-100 rounded ml-2"
            onClick={() => dispatch({ type: "REMOVE__CART", payload: product })}
          >
            <FiTrash2 className="text-[23px]" />
            <span className="sr-only">Remove item</span>
          </button>
        </div>
      </div>
      <div className="hidden max-[990px]:block w-full">
          <div className="w-full bg-[#F2F2F2] rounded-lg  overflow-hidden mb-3">
            <div className="p-5 max-[450px]:p-3">
              <div className="flex items-start gap-3 flex-wrap">
                <div className="w-20 h-20">
                  <img src={product.url} alt="" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-medium">{product.title}</h3>
                  <div className="mt-1 text-2xl font-bold">{(product.discountprice * product.amount).brm()}</div>
                  <div className="mt-2 text-sm text-gray-600">
                    <p>{product.description}</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-3 max-[350px]:gap-0">
                  <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-300 bg-white text-gray-600 hover:bg-gray-100 max-[350px]:"
                  onClick={() => dispatch({ type: "DEC_CART", payload: product })}
                  disabled={product.amount <= 1}>
                    <FiMinus />
                  </button>
                  <span className="w-12 text-center">{product.amount}</span>
                  <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-300 bg-white text-gray-600 hover:bg-gray-100"
                  onClick={() => dispatch({ type: "ADD__CART", payload: product })}>
                    <FiPlus />
                  </button>
                </div>
                <button className="text-gray-700 hover:text-gray-900"
                onClick={() => dispatch({ type: "REMOVE__CART", payload: product })}>
                  <FiTrash2 className="text-2xl"/>
                </button>
              </div>
            </div>
          </div>
      </div>
    </div>
  ));
  return (
    <section className="my-20">
      <div className="container__person">
        <div className="mb-5 flex gap-3">
          <Link to={"/"} className="flex items-center text-[#A2A2A2]">
            Главная
          </Link>
          <Link className="flex items-center text-[#A2A2A2] gap-4">
            <FaAngleRight /> Каталог
          </Link>
          <span className="flex items-center gap-3 text-[#000] font-semibold cursor-pointer">
            <FaAngleRight />
            Корзина
          </span>
        </div>
        <div>
          <h2 className="text-[40px] font-bold max-[800px]:text-[36px] max-[600px]:text-[28px] mb-8">
            Корзина
          </h2>
          <div className="w-full mx-auto">
            <div className="bg-[#F2F2F2] rounded-[20px] shadow px-11 py-7 max-[990px]:bg-transparent max-[990px]:shadow-none max-[990px]:py-0 max-[990px]:px-0">
              <div className="flex gap-4 p-4 text-sm text-gray-500 border-b max-[990px]:hidden">
                <div className="text-center w-[10%]">Фото</div>
                <div className="text-center w-[20%]">Товары</div>
                <div className="text-center w-[30%]">Описание</div>
                <div className="text-center w-[20%]">Артикул</div>
                <div className="text-center w-[20%]">Количество</div>
              </div>
              <div className="divide-y max-[990px]:divide-y-none">{items}</div>
            </div>
          </div>
          <div className="w-full mx-auto bg-[#F2F2F2] rounded-[20px] shadow-sm p-6 mt-5">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900">
                  Оформление
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="ФИО"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-full border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#003566] focus:border-transparent bg-transparent placeholder:text-gray-700"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Телефон"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-full border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#003566] focus:border-transparent bg-transparent placeholder:text-gray-700"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Электронная Почта"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-full border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#003566] focus:border-transparent bg-transparent placeholder:text-gray-700"
                  />
                </div>
              </div>

              <div className="space-y-4 max-w-[767px]">
                <h2 className="text-2xl font-semibold text-gray-900">
                  Доставка
                </h2>
                <input
                  type="text"
                  name="address"
                  placeholder="Адрес доставки"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-full border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#003566] focus:border-transparent bg-transparent placeholder:text-gray-700"
                />
                <textarea
                  name="comments"
                  placeholder="Комментарий"
                  value={formData.comments}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-2xl border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#003566] focus:border-transparent min-h-[120px] resize-y bg-transparent placeholder:text-gray-700"
                />
              </div>
            </form>
          </div>
          <div className="w-full bg-[#F2F2F2] p-6 mt-5 rounded-[20px]">
            <h2 className="text-[32px] font-bold text-gray-900 mb-6">Оплата</h2>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between items-center text-gray-600 max-[400px]:text-[14px]">
                <div className="flex items-center gap-1">
                  <span>Товары</span>
                  <span className="border-b border-dotted border-gray-300 flex-grow mx-2">
                    ....................................
                  </span>
                </div>
                <span className="whitespace-nowrap">{(state.cart?.reduce((total, item)=> total + (item.discountprice  * item.amount), 0)).brm()}</span>
              </div>

              <div className="flex justify-between items-center text-gray-600 max-[400px]:text-[14px]">
                <div className="flex items-center gap-1">
                  <span>Доставка</span>
                  <span className="border-b border-dotted border-gray-300 flex-grow mx-2">
                    ....................................
                  </span>
                </div>
                <span className="whitespace-nowrap">{ (state.cart?.reduce((a,b)=> a+ b.amount, 0) * 290).brm() }</span>
              </div>
            </div>

            <div className="text-2xl font-bold text-gray-900 mb-6">
              <p>
                {(state.cart?.reduce((total, item)=> total + (item.discountprice  * item.amount), 0) + state.cart?.reduce((a,b)=> a+ b.amount, 0) * 290).brm() }
              </p>
            </div>

            <form onSubmit={handleSubmitPayment} className="flex items-center gap-6 max-[600px]:flex-wrap">
              <button
                type="submit"
                disabled={!isAgreed}
                className="w-full bg-[#454545] text-white py-3 px-4 rounded-md hover:bg-[#252525] disabled:opacity-50 disabled:cursor-not-allowed transition-colors max-w-[400px] max-[600px]:mx-auto"
              >
                Купить
              </button>
              <label className="flex items-start gap-2 text-sm text-gray-600 cursor-pointer
              max-[600px]:mx-auto">
                <input
                  type="checkbox"
                  checked={isAgreed}
                  onChange={(e) => setIsAgreed(e.target.checked)}
                  className="mt-1 rounded border-gray-300 text-gray-900 focus:ring-gray-900"
                />
                <span>Я согласен на обработку моих персональных данных</span>
              </label>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Baskets);

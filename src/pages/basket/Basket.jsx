import React, { useEffect } from 'react'
import Baskets from '../../components/Baskets/Baskets'
import { useStateValue } from '../../context'
import cart from "../../assets/cartempty.png"
import { Link } from 'react-router-dom'

const Basket = () => {
    const [state, dispatch] = useStateValue()
    useEffect(()=> {
      window.scrollTo(0, 0)
    }, [])
  return (
    <>
        {
            state.cart.length  ?
                <Baskets/>
                :
                <div className='w-full h-full my-14'>
                    <div className='w-full flex justify-center items-center'>
                            <img src={cart} alt="" className='bg-white w-[400px] h-[400px] object-cover'/>
                    </div>
                    <div className='flex flex-col items-center gap-4'>
                            <h3 className='text-3xl font-semibold max-[400px]:text-[20px]'>В корзине пока пусто</h3>
                            <p className='text-lg max-[400px]:text-[14px]'>Начните с главной страницы — нужный товар можно найти через поиск или заглянуть в подборки</p>
                    </div>
                    <div className='flex justify-center mt-9'>
                            <Link to={"/"} className='px-7 py-2 border rounded-[50px] bg-[#454545] text-white duration-500 hover:bg-white hover:text-black'>Главная</Link>
                    </div>
                </div>
        }
    </>
  )
}

export default React.memo(Basket)
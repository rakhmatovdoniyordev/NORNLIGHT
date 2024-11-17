import React from 'react'
import { useStateValue } from '../../context'
import Products from '../Products/Products';
import wishlist from '../../assets/wishlist.webp'
import { Link } from 'react-router-dom';

const Wishlist = () => {
    const [state, dispatch] = useStateValue()
  return (
    <section className='mt-24'>
        <div className="container__person">
            {
                state.wishlist.length === 0 ?
                <div className='w-full h-full my-14'>
                    <div className='w-full flex justify-center items-center'>
                        <img src={wishlist} alt="" />
                    </div>
                    <div className='flex flex-col items-center gap-4'>
                        <h3 className='text-3xl font-semibold max-[400px]:text-[20px]'>Добавьте свой любимый</h3>
                        <p className='text-lg max-[400px]:text-[14px]'>Нажмите на символ ♡ на товаре.</p>
                    </div>
                    <div className='flex justify-center mt-9'>
                        <Link to={"/"} className='px-7 py-2 border rounded-[50px] bg-[#454545] text-white duration-500 hover:bg-white hover:text-black'>Главная</Link>
                    </div>
                </div>
                :
                <Products data={state.wishlist} title="Избранные товары" btn="hidden"/>
            }
        </div>
    </section>
  )
}

export default React.memo(Wishlist)
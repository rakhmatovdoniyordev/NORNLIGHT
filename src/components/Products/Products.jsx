import React from 'react'
import { FaRegHeart } from 'react-icons/fa'
import { LiaShoppingCartSolid } from 'react-icons/lia'
import { VscArrowRight } from 'react-icons/vsc'
import { Link, NavLink } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'

const Products = () => {
    const {data} = useFetch("products")

    const items = data?.map((product) => (
        <div key={product.id} className="flex flex-col">
            <div className='text-center relative'>
                <Link to={`/products/${product.id}`}>
                <   img src={product.url} alt="" className='w-[200px] h-[200px]       mx-auto max-[550px]:w-[150px] max-[550px]:h-[150px]'/>

                </Link>
                <FaRegHeart className='absolute top-0 right-7 text-2xl max-[550px]:text-[18px]'/>
            </div>
            <div className='p-7 flex flex-col gap-6'>
                <div className='min-h-16 max-[550px]:min-h-10'>
                    <h2 className='text-xl font-medium'>{product.title}</h2>
                </div>
                <div className='flex justify-between items-center'>
                    <div>
                        <p className='line-through text-[12px] font-medium text-[#9F9F9F] max-[550px]:text-[11px]'>{product.previousprice}</p>
                        <strong className='text-[20px] font-bold max-[550px]:text-[16px]'>{product.discountprice}</strong>
                    </div>
                    <div className='group py-[9px] px-5 border duration-500 rounded-[100px] bg-[#454545] hover:bg-white cursor-pointer'>
                        <NavLink>
                            <LiaShoppingCartSolid className='text-white text-[28px] group-hover:text-black max-[550px]:text-[20px]'/>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    ))
  return (
    <section className='mb-20'>
        <div className="container__person">
            <div className='flex justify-between items-center mb-10'>
                <h2 className={`text-[40px] font-bold max-[800px]:text-[36px] max-[600px]:text-[28px] mb-9`}>Популярные товары</h2>
                <NavLink to={"/blog"} className={`py-[14px] px-[47px] rounded-[100px] border-[1px] border-[#454545] flex items-center gap-3 duration-500 hover:bg-[#454545] hover:text-white  max-[550px]:hidden`}>Все товары <VscArrowRight/></NavLink>
            </div>
            <div className='grid grid-cols-4 gap-2 max-[1050px]:grid-cols-3 max-[800px]:grid-cols-2 max-[550px]:grid-cols-1'>
                {items}
            </div>
        </div>
    </section>
  )
}

export default Products
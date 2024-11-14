import React from 'react'
import Carousel from '../../components/Carousel/Carousel'
import Category from '../../components/Category/Category'
import Products from '../../components/Products/Products'
import { useFetch } from '../../hooks/useFetch'

const Home = () => {
  const {data} = useFetch("products")
  return (
    <div>
        <Carousel/>
        <Category/>
        <Products data={data} title="Популярные товары" btn="Все товары"/>
    </div>
  )
}

export default React.memo(Home)
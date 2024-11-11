import React from 'react'
import Carousel from '../../components/Carousel/Carousel'
import Category from '../../components/Category/Category'
import Products from '../../components/Products/Products'

const Home = () => {
  return (
    <div>
        <Carousel/>
        <Category/>
        <Products/>
    </div>
  )
}

export default React.memo(Home)
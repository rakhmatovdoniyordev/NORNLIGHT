import React, { useEffect } from 'react'
import Wishlist from '../../components/Wishlist/Wishlist'

const Favorites = () => {
  useEffect(()=> {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
        <Wishlist/>
    </>
  )
}

export default React.memo(Favorites)
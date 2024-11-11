import React, { useEffect } from 'react'
import Payment from "../../components/Payment/Payment"

const Shipping = () => {
  useEffect(()=> {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <Payment/>
    </>
  )
}

export default React.memo(Shipping)
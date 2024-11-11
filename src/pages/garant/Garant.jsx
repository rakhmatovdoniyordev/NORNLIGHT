import React, { useEffect } from 'react'
import Garanty from "../../components/Garanty/Garanty"

const Garant = () => {
  useEffect(()=> {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <Garanty/>
    </>
  )
}

export default React.memo(Garant)
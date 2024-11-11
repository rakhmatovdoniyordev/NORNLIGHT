import React, { useEffect } from 'react'
import Returnitem from '../../components/Return/Returnitem'

const Return = () => {
  useEffect(()=> {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
        <Returnitem/>
    </>
  )
}

export default React.memo(Return)
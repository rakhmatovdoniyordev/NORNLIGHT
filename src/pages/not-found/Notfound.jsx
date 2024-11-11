import React, { useEffect } from 'react'
import Not from '../../components/NotFound/Not'

const Notfound = () => {
  useEffect(()=> {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Not/>
  )
}

export default React.memo(Notfound)
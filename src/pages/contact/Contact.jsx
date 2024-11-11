import React, { useEffect } from 'react'
import Contacts from '../../components/Contacts/Contacts'

const Contact = () => {
  useEffect(()=> {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <Contacts/>
    </>
  )
}

export default React.memo(Contact)
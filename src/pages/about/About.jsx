import React from 'react'
import Blogitem from '../../components/Blog/Blogitem'
import Brands from '../../components/Brands/Brands'
import Company from '../../components/Company/Company'

const About = () => {
  return (
    <>
      <Company/>
      <Brands/>
      <Blogitem blogDisplay="block" btn="block" margin={"mb-24"}/>
    </>
  )
}

export default React.memo(About)
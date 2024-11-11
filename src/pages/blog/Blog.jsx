import React, { useEffect } from 'react'
import { FaAngleRight } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import Blogitem from '../../components/Blog/Blogitem'

const Blog = () => {
  useEffect(()=> {
    window.scrollTo(0, 0)
  }, [])
  return (
    <section className='mt-24'>
      <div className="container__person">
          <div className="mb-5 flex gap-3">
            <NavLink to={"/"} className="flex items-center text-[#A2A2A2]">
                  Главная
            </NavLink>
            <span className="flex items-center gap-3 text-[#000] font-semibold cursor-pointer">
                  <FaAngleRight /> Блог
            </span>
          </div>
          <Blogitem blogDisplay={"block"} btn="hidden" margin={"mb-0"}/>
          <Blogitem blogDisplay={"hidden"} btn="hidden" margin={"mb-24"}/>
      </div>
    </section>
  )
}

export default React.memo(Blog)
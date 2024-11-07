import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import not from "../../assets/404.png"

const Not = () => {
    const navigate = useNavigate()
  return (
    <section className='my-14'>
        <div className="container__person">
            <div className='flex flex-col items-center justify-center gap-11'>
                <img src={not} alt="" />
                <p>Похоже, ничего не нашлось :(</p>
                <button onClick={()=> navigate("/")} className='py-4 px-14 rounded-[100px] bg-[#454545] text-white border duration-500 hover:bg-white hover:text-black'>На главную</button>
            </div>
        </div>
    </section>
  )
}

export default React.memo(Not)
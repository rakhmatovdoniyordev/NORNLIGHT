import React, { useEffect } from 'react'

const Modal = ({children, close}) => {
    useEffect(()=> {
        document.body.style.overflow = "hidden"
        return ()=> {
            document.body.style.overflow = "auto"
        }
    }, [])
  return (
    <div>
        <div onClick={()=> close(null)} className='fixed top-0 left-0 w-full h-screen bg-[#00000081] z-[99]'></div>
        <div className='fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-white z-[100] rounded-[30px] w-[70%] max-[600px]:w-[80%]'>
            {children}
        </div>
    </div>
  )
}

export default Modal
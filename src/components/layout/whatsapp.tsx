import React from 'react'
import { RiWhatsappFill } from 'react-icons/ri'

const Whatsapp = () => {
  return (
    <a href='https://wa.link/zgsu0x' className='fixed z-50 cursor-pointer bottom-8 left-8'>
      <RiWhatsappFill className='text-green-400  text-4xl sm:text-5xl' />
      <span>
        <span className='top-0 right-0 flex flex-col justify-center pb-1 items-center text-white  absolute text-xs sm:text-base w-5 h-5 rounded-full bg-red-700'>1</span>
      </span>
    </a>
  )
}

export default Whatsapp

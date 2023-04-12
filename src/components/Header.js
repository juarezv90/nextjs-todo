import React from 'react'
import {FiUser} from 'react-icons/fi'

const Header = () => {
  return (
    <div className='sticky top-0 w-full left-0 flex items-center justify-between border-b p-4'>
      <h1 className='text-3xl sm:text-6xl'>TODO LIST</h1>
      <FiUser className='text-2xl sm:text-4xl duration-300 hover:opacity-40 cursor-pointer' />
    </div>
  )
}

export default Header

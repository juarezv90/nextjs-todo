import React from 'react'
import {BsInstagram, BsLinkedin, BsGithub} from "react-icons/bs"

const Footer = () => {
  return (
    <div  className="flex justify-center items-center text-[24px] gap-3 py-2">
      <BsInstagram className="duration-300 hover:opacity-30 cursor-pointer" />
      <BsLinkedin className="duration-300 hover:opacity-30 cursor-pointer" />
      <BsGithub className="duration-300 hover:opacity-30 cursor-pointer" />
    </div>
  )
}

export default Footer

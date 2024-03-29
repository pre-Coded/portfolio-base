import React from 'react'
import Image from '../../../node_modules/next/image'
import LogoImg from '../../assets/images/logo.png'

const Logo = () => {
  return (
    <Image
      src={LogoImg}
      className="h-16 w-32 object-contain"
    />
  )
}

export default Logo
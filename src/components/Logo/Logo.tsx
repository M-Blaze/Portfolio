import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Logo = () => {
  return (
    <Link href="/" passHref>
      <div className="logo cursor-pointer flex items-center">
        <Image src="/images/logo.svg" alt="M" layout="intrinsic" width="45px" height="45px" />
      </div>
    </Link>
  )
}

export default Logo

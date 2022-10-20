import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <div className="footer text-center capitalize p-2 text-xs xs:text-sm sm:text-md">
      copyright &copy; {currentYear} Dev_MoulikRai - all rights reserved
    </div>
  )
}

export default Footer

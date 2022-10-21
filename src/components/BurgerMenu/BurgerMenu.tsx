import React, { useCallback, useEffect, useState } from 'react'

interface BurgerMenuProps {
  headerRef: React.RefObject<HTMLHeadElement>
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ headerRef }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const hideOnClickOutside = useCallback(
    (event: MouseEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) {
        setIsMenuOpen((isOpen) => !isOpen)
      }
    },
    [headerRef]
  )

  const toggleMenu = () => {
    setIsMenuOpen((isOpen) => !isOpen)
  }

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('nav-active')
      document.body.addEventListener('click', hideOnClickOutside)
    } else {
      document.body.classList.remove('nav-active')
      document.body.removeEventListener('click', hideOnClickOutside)
    }

    return () => {
      document.body.removeEventListener('click', hideOnClickOutside)
    }
  }, [isMenuOpen, hideOnClickOutside])

  return (
    <div className="hamburger-menu w-7 h-5 relative md:hidden" onClick={toggleMenu}>
      <div className="menu-item"></div>
      <div className="menu-item"></div>
      <div className="menu-item"></div>
    </div>
  )
}

export default BurgerMenu

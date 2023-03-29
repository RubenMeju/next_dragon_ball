'use client'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import Logo from '../../../../public/letras_dragonball.png'
import MenuItems from './menuItems/MenuItems'

import StylesNavBar from './NavBar.module.css'

export default function NavBar() {
  const [scrollY, setScrollY] = useState()
  const onScroll = useCallback((event) => {
    const { pageYOffset, scrollY } = window
    console.log('yOffset', pageYOffset, 'scrollY', scrollY)
    setScrollY(window.pageYOffset)
  }, [])

  useEffect(() => {
    // add eventlistener to window
    window.addEventListener('scroll', onScroll, { passive: true })
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
      window.removeEventListener('scroll', onScroll, { passive: true })
    }
  }, [])
  return (
    <nav
      className={`
        ${StylesNavBar.navBar} ${scrollY >= '40' && StylesNavBar.navFixed}`}
    >
      <div className={StylesNavBar.cont_image}>
        <Image
          fill={true}
          src={Logo}
          className={StylesNavBar.image}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          priority={true}
          alt="Logo Dragon Ball"
        />
      </div>
      <MenuItems />
    </nav>
  )
}

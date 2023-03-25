'use client'

import Image from 'next/image'
import Logo from '../../../../public/letras_dragonball.png'
import { NavItems } from './navItems/NavItems'

import StylesNavBar from './NavBar.module.css'
import { ButtonBars } from './buttonBars/ButtonBars'
import { createContext, useState } from 'react'
import { MenuBars } from './menuBars/MenuBars'

export const NavBarContext = createContext()

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className={StylesNavBar.navBar}>
      <div className={StylesNavBar.cont_image}>
        <Image
          fill={true}
          src={Logo}
          className={StylesNavBar.image}
          // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          alt="Logo Dragon Ball"
        />
      </div>

      <NavBarContext.Provider value={{ isOpen, setIsOpen }}>
        <div className={StylesNavBar.navItems}>
          <NavItems />
        </div>

        <ButtonBars />
        <MenuBars />
      </NavBarContext.Provider>
    </nav>
  )
}

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
          src={Logo}
          fill={true}
          className={StylesNavBar.image}
          alt="Logo Dragon Ball"
        />
      </div>

      <NavItems />

      <NavBarContext.Provider value={{ isOpen, setIsOpen }}>
        <ButtonBars />
        <MenuBars />
      </NavBarContext.Provider>
    </nav>
  )
}

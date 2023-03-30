'use client'

import React, { createContext, useState } from 'react'
import { ButtonBars } from '../buttonBars/ButtonBars'
import { MenuBars } from '../menuBars/MenuBars'
import { NavItems } from '../navItems/NavItems'
import StylesMenuItems from './MenuItems.module.css'

export const NavBarContext = createContext()

export default function MenuItems(scrollY) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <NavBarContext.Provider value={{ isOpen, setIsOpen, scrollY }}>
      <div className={StylesMenuItems.navItems}>
        <NavItems />
      </div>

      <ButtonBars />
      <MenuBars />
    </NavBarContext.Provider>
  )
}

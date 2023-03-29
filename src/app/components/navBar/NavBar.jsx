'use client'
import { useHandleScrollY } from '@/app/hooks/useHandleScrollY'
import Image from 'next/image'
import Logo from '../../../../public/letras_dragonball.png'
import MenuItems from './menuItems/MenuItems'

import StylesNavBar from './NavBar.module.css'

export default function NavBar() {
  const scrollY = useHandleScrollY()
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

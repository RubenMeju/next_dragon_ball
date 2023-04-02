'use client'

import { useReadScrollY } from '@/app/hooks/useReadScrollY'
import Image from 'next/image'
import Logo from '../../../../public/letras_dragonball.png'
import MenuItems from './menuItems/MenuItems'

import StylesNavBar from './NavBar.module.css'

export default function NavBar() {
  const scrollY = useReadScrollY()
  console.log('scrollY', scrollY)
  return (
    <nav
      className={` ${StylesNavBar.navBar} ${
        scrollY >= '40' && StylesNavBar.fixed
      }`}
    >
      <div className={StylesNavBar.container}>
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
      </div>
    </nav>
  )
}

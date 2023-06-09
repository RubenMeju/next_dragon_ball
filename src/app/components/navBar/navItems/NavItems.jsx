import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useContext } from 'react'
import { pages } from '../const_nav'
import { NavBarContext } from '../menuItems/MenuItems'
import StylesNavItems from './NavItems.module.css'

export const NavItems = () => {
  const pathname = usePathname()
  const { setIsOpen } = useContext(NavBarContext)

  return (
    <ul className={StylesNavItems.ul}>
      {pages.map(({ name, href }) => (
        <li
          key={name}
          className={StylesNavItems.li}
          onClick={() => setIsOpen(false)}
        >
          <Link
            href={href}
            className={
              pathname === href ? StylesNavItems.selected : StylesNavItems.link
            }
          >
            {name}
          </Link>
        </li>
      ))}
    </ul>
  )
}

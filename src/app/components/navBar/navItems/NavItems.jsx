import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useContext } from 'react'
import { pages } from '../const_nav'
import { NavBarContext } from '../menuItems/MenuItems'
import stylesNavItems from './NavItems.module.css'

export const NavItems = () => {
  const pathname = usePathname()
  const { setIsOpen } = useContext(NavBarContext)
  return (
    <ul className={stylesNavItems.ul}>
      {pages.map(({ name, href }) => (
        <li
          key={name}
          className={stylesNavItems.li}
          onClick={() => setIsOpen(false)}
        >
          <Link
            href={href}
            className={
              pathname === href ? stylesNavItems.selected : stylesNavItems.link
            }
          >
            {name}
          </Link>
        </li>
      ))}
    </ul>
  )
}

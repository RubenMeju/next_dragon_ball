import Link from 'next/link'
import { pages } from '../const_nav'
import stylesNavItems from './NavItems.module.css'

export const NavItems = () => {
  return (
    <ul className={stylesNavItems.ul}>
      {pages.map(({ name, href }) => (
        <li key={name} className={stylesNavItems.li}>
          <Link href={href} className={stylesNavItems.link}>
            {name}
          </Link>
        </li>
      ))}
    </ul>
  )
}

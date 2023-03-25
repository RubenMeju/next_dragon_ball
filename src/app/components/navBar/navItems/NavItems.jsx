import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { pages } from '../const_nav'
import stylesNavItems from './NavItems.module.css'

export const NavItems = () => {
  const pathname = usePathname()
  return (
    <ul className={stylesNavItems.ul}>
      {pages.map(({ name, href }) => (
        <li key={name} className={stylesNavItems.li}>
          <Link
            href={href}
            className={
              (stylesNavItems.link,
              pathname === href ? stylesNavItems.selected : null)
            }
          >
            {name}
          </Link>
        </li>
      ))}
    </ul>
  )
}

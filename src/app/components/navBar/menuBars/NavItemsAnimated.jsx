import { motion } from 'framer-motion'
import Link from 'next/link'
import { useContext } from 'react'
import { pages, variants } from '../const_nav'
import { NavBarContext } from '../NavBar'
import StylesNavItemsAnimated from './NavItemsAnimated.module.css'

export const NavItemsAnimated = () => {
  const { isOpen, setIsOpen } = useContext(NavBarContext)

  return (
    <motion.ul
      initial="closed"
      animate={isOpen ? 'open' : 'closed'}
      variants={variants}
      transition={{ duration: 1 }}
    >
      {pages.map(({ name, href }) => (
        <li
          key={name}
          className={StylesNavItemsAnimated.li}
          onClick={() => {
            console.log('isOpen', isOpen)
            setIsOpen(!isOpen)
          }}
        >
          <Link href={href}>{name}</Link>
        </li>
      ))}
    </motion.ul>
  )
}

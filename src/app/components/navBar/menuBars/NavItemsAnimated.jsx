import { motion } from 'framer-motion'
import { useContext } from 'react'
import { variants } from '../const_nav'
import { NavBarContext } from '../menuItems/MenuItems'
import { NavItems } from '../navItems/NavItems'

export const NavItemsAnimated = () => {
  const { isOpen } = useContext(NavBarContext)

  return (
    <motion.div
      initial="closed"
      animate={isOpen ? 'open' : 'closed'}
      variants={variants}
      transition={{ duration: 1 }}
    >
      <NavItems />
    </motion.div>
  )
}

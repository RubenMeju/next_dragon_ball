import { motion } from 'framer-motion'
import { useContext } from 'react'
import { variants } from '../const_nav'
import { NavItemsAnimated } from './NavItemsAnimated'
import StylesMenuBars from './MenuBars.module.css'
import { NavBarContext } from '../menuItems/MenuItems'

export const MenuBars = () => {
  const { isOpen } = useContext(NavBarContext)

  return (
    <motion.div
      initial="closed"
      animate={isOpen ? 'open' : 'closed'}
      variants={variants}
      transition={{ duration: 0.5 }}
      className={StylesMenuBars.motionDiv}
    >
      <NavItemsAnimated />
    </motion.div>
  )
}

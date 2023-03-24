import { motion } from 'framer-motion'
import { useContext } from 'react'
import { variants } from '../const_nav'
import { NavBarContext } from '../NavBar'
import { NavItemsAnimated } from './NavItemsAnimated'
import StylesMenuBars from './MenuBars.module.css'

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

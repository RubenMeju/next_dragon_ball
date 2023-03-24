import { motion } from 'framer-motion'
import StylesButtonBars from './ButtonBars.module.css'
import { useContext } from 'react'
import { NavBarContext } from '../NavBar'

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="#fff"
    strokeLinecap="round"
    {...props}
  />
)

export const ButtonBars = () => {
  const { isOpen, setIsOpen } = useContext(NavBarContext)
  return (
    <motion.button
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      type="button"
      className={StylesButtonBars.motionButton}
      onClick={() => setIsOpen(!isOpen)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <Path
          variants={{
            closed: { d: 'M 2 2.5 L 20 2.5' },
            open: { d: 'M 3 16.5 L 17 2.5' }
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 }
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: 'M 2 16.346 L 20 16.346' },
            open: { d: 'M 3 2.5 L 17 16.346' }
          }}
        />
      </svg>
    </motion.button>
  )
}

import { AnimatePresence, motion } from 'framer-motion'
import { useContext } from 'react'
import Card from '../../Card/Card'
import { ModalContext } from '../CardModalAnimated'
import StylesCardModal from './CardModal.module.css'

export function CardModal() {
  const { selectedId, setSelectedId, datos } = useContext(ModalContext)

  return (
    <AnimatePresence>
      {selectedId && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={StylesCardModal.background}
        >
          <motion.div
            layoutId={selectedId}
            initial={{}}
            animate={{}}
            exit={{ opacity: 0 }}
            className={StylesCardModal.contCard}
          >
            <div>
              <Card
                id={datos.id}
                name={datos.name}
                image={datos.image}
                description={datos.description}
              />
            </div>
            <motion.button
              type="button"
              className={StylesCardModal.button}
              whileHover={{
                scale: 1.1,
                backgroundColor: 'rgb(58, 163, 255)',
                color: 'aliceblue'
              }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setSelectedId(null)}
            >
              Cerrar
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

import { AnimatePresence, motion } from 'framer-motion'
import { useContext } from 'react'
import Card from '../Card/Card'
import { ModalContext } from './CardModalAnimated'
import StylesPrueba from './Prueba.module.css'

export function CardModal() {
  const { selectedId, setSelectedId, datos } = useContext(ModalContext)

  return (
    <AnimatePresence>
      {selectedId && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={StylesPrueba.background}
        >
          <motion.div
            layoutId={selectedId}
            initial={{}}
            animate={{}}
            exit={{ opacity: 0 }}
            className={StylesPrueba.contCard}
          >
            <div>
              <Card
                id={datos.id}
                name={datos.name}
                image={datos.image}
                description={datos.description}
              />
            </div>
            <button
              type="button"
              className={StylesPrueba.button}
              onClick={() => setSelectedId(null)}
            >
              Cerrar
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

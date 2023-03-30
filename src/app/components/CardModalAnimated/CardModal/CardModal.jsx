import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { useContext } from 'react'
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
            className={StylesCardModal.contModal}
          >
            <motion.button
              type="button"
              className={StylesCardModal.btnExit}
              whileHover={{
                scale: 1.1
              }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setSelectedId(null)}
            ></motion.button>

            <div className={StylesCardModal.cardImage}>
              <Image
                fill={true}
                src={datos.image}
                className={StylesCardModal.image}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                loading="lazy"
                alt="Logo Dragon Ball"
              />
            </div>

            <div className={StylesCardModal.modalBody}>
              <p className={StylesCardModal.modalName}>{datos.name}</p>
              <p className={StylesCardModal.label}>Descripción</p>
              <p className={StylesCardModal.info}>{datos.description}</p>

              {datos.planet && (
                <div className={StylesCardModal.cardDetails}>
                  <div className={StylesCardModal.groupDetails}>
                    <p className={StylesCardModal.label}>Planeta:</p>
                    <p className={StylesCardModal.info}>
                      {datos.planet && datos.planet.name}
                    </p>
                  </div>
                  <div className={StylesCardModal.groupDetails}>
                    <p className={StylesCardModal.label}>Especie:</p>
                    <p className={StylesCardModal.info}>{datos.species}</p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

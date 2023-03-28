import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { useContext } from 'react'
import { ModalContext } from '../CardModalAnimated'
import StylesCardModal from './CardModal.module.css'
import svgPlanet from '../../../../../public/planet.svg'
import svgSkeleton from '../../../../../public/skeleton.svg'

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
            <div className={StylesCardModal.contCard}>
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
              <div className={StylesCardModal.cardInfo}>
                <p className={StylesCardModal.cardName}>{datos.name}</p>

                <div>
                  <p className={StylesCardModal.info}>{datos.description}</p>
                  <div className={StylesCardModal.cardDetails}>
                    <div className={StylesCardModal.groupDetails}>
                      <Image
                        src={svgPlanet}
                        alt="planet"
                        width={48}
                        height={48}
                      />
                      <p className={StylesCardModal.info}>
                        {datos.planet.name}
                      </p>
                    </div>
                    <div className={StylesCardModal.groupDetails}>
                      <Image
                        src={svgSkeleton}
                        alt="skeleton"
                        width={48}
                        height={48}
                      />
                      <p className={StylesCardModal.info}>{datos.species}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <motion.button
              type="button"
              className={StylesCardModal.button}
              whileHover={{
                scale: 1.1
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

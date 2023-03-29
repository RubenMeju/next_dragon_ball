'use client'
import Image from 'next/image'

import { motion } from 'framer-motion'
import { useContext } from 'react'
import { ModalContext } from '../CardModalAnimated'
import StylesCardAnimated from './CardAnimated.module.css'

export default function CardAnimated({ data }) {
  const { setSelectedId, setDatos } = useContext(ModalContext)
  return (
    <>
      <div className={StylesCardAnimated.containerCards}>
        {data.results.map((item) => (
          <motion.div
            className={StylesCardAnimated.cursorPointer}
            key={item.id}
            layoutId={item.id}
            initial={{}}
            animate={{}}
            exit={{ opacity: 0 }}
            onClick={() => {
              setSelectedId(item.id)
              setDatos(item)
            }}
          >
            <div className={StylesCardAnimated.card}>
              <div className={StylesCardAnimated.contImage}>
                <Image
                  fill={true}
                  src={item.image}
                  className={StylesCardAnimated.image}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                  // priority={true}
                  // placeholder="blur"
                  // blurDataURL="https://static.vecteezy.com/system/resources/previews/005/704/067/non_2x/rocket-ship-launch-flat-vector.jpg"
                  loading="lazy"
                  alt="Logo Dragon Ball"
                />
              </div>

              <div className={StylesCardAnimated.cardBody}>
                <p className={StylesCardAnimated.name}>{item.name}</p>
                <p className={StylesCardAnimated.info}>{item.escription}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  )
}

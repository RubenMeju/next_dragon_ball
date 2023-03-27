'use client'
import { motion } from 'framer-motion'
import { useContext } from 'react'
import Card from '../Card/Card'
import { ModalContext } from './CardModalAnimated'
import StylesPrueba from './Prueba.module.css'

export default function CardAnimated({ data }) {
  const { setSelectedId, setDatos } = useContext(ModalContext)
  return (
    <>
      <div className={StylesPrueba.containerCards}>
        {data.results.map((item) => (
          <motion.div
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
            <Card id={item.id} name={item.name} image={item.image} />
          </motion.div>
        ))}
      </div>
    </>
  )
}

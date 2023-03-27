'use client'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'
import Card from '../Card/Card'
import StylesPrueba from './Prueba.module.css'

export default function PruebaAnimated({ data }) {
  const [selectedId, setSelectedId] = useState(null)
  const [datos, setDatos] = useState([])
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
    </>
  )
}

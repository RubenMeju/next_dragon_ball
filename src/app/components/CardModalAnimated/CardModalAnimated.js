'use client'
import { createContext, useState } from 'react'
import CardAnimated from './CardAnimated/CardAnimated'
import { CardModal } from './CardModal/CardModal'

export const ModalContext = createContext()

export default async function CardModalAnimated({ data }) {
  const [selectedId, setSelectedId] = useState(null)
  const [datos, setDatos] = useState([])
  return (
    <>
      <ModalContext.Provider
        value={{ selectedId, setSelectedId, datos, setDatos }}
      >
        <CardAnimated />
        <CardModal />
      </ModalContext.Provider>
    </>
  )
}

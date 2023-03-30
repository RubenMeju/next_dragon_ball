'use client'
import { useState, useEffect } from 'react'

export const useReadScrollY = () => {
  const [scrollY, setScrollY] = useState(0)

  const listener = () => {
    setScrollY(window.pageYOffset)
  }

  useEffect(() => {
    window.addEventListener('scroll', listener)
    return () => {
      window.removeEventListener('scroll', listener)
    }
  }, [])
  return scrollY
}

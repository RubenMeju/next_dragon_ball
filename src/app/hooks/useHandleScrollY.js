'use client'

import { useEffect, useState } from 'react'

export const useHandleScrollY = () => {
  const [scrollY, setScrollY] = useState(window.scrollY)
  const handleScroll = () => {
    setScrollY(window.scrollY)
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return scrollY
}

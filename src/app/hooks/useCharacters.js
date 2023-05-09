'use client'

import { useEffect, useState } from 'react'
import { getCharacters } from '../services/getCharacters'

export const useCharacters = async () => {
  const [characters, setCharacters] = useState({})
  const [loading, setLoading] = useState(true)
  const [paramSearch, setParamSearch] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    setParamSearch(e.target[0].value)
  }
  const fetchCharacters = async () => {
    const characters = await getCharacters(paramSearch)
    setCharacters(characters)
    setLoading(false)
  }
  useEffect(() => {
    fetchCharacters()
  }, [paramSearch])

  return { characters, loading, paramSearch, handleSearch }
}

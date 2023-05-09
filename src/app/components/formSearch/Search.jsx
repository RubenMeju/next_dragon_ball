'use client'

import { useCharacters } from '@/app/hooks/useCharacters'

export default function Search() {
  const { handleSearch } = useCharacters()

  return (
    <form className="form" onSubmit={handleSearch}>
      <input type="text" placeholder="Buscar" />
      <button type="submit">Buscar</button>
    </form>
  )
}

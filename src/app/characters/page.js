'use client'
import { Suspense, useState } from 'react'
import CardModalAnimated from '../components/CardModalAnimated/CardModalAnimated'
import { getCharacters } from '../services/getCharacters'
import Loading from './loading'

export default async function page() {
  const [paramSearch, setParamSearch] = useState('')
  const characters = await getCharacters(paramSearch)

  const handleSearch = (e) => {
    e.preventDefault()
    setParamSearch(e.target[0].value)

    console.log(e.target[0].value)
  }

  return (
    <>
      <h1 className="title">Personajes</h1>
      <Suspense fallback={<Loading />}>
        <form className="form" onSubmit={handleSearch}>
          <input type="text" placeholder="Buscar" />
          <button type="submit">Buscar</button>
        </form>
        <CardModalAnimated data={characters} />
      </Suspense>
    </>
  )
}

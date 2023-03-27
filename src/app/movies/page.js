import React from 'react'
import PruebaAnimated from '../components/Prueba/PruebaAnimated'
import { getMovies } from '../services/getMovies'

export default async function page() {
  const movies = await getMovies()
  return (
    <div>
      <h1>Películas Dragon Ball</h1>

      <PruebaAnimated data={movies} />
    </div>
  )
}

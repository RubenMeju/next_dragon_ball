import CardModalAnimated from '../components/Prueba/CardModalAnimated'
import { getMovies } from '../services/getMovies'

export default async function page() {
  const movies = await getMovies()
  return (
    <div>
      <h1>Películas Dragon Ball</h1>

      <CardModalAnimated data={movies} />
    </div>
  )
}

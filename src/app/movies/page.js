import CardModalAnimated from '../components/CardModalAnimated/CardModalAnimated'
import { getMovies } from '../services/getMovies'

export default async function page() {
  const movies = await getMovies()
  return (
    <div>
      <h1 className="title">Películas Dragon Ball</h1>

      <CardModalAnimated data={movies} />
    </div>
  )
}

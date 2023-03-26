import { getMovies } from '@/app/services/getMovies'
import StylesListMovies from './ListMovies.module.css'
import Card from '../../components/Card/Card'

export default async function ListMovies() {
  const movies = await getMovies()
  return (
    <div className={StylesListMovies.listMovies}>
      {movies.results.slice(0, 15).map((movie) => (
        <Card key={movie.id} data={movie} />
      ))}
    </div>
  )
}

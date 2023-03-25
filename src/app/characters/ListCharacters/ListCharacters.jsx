import { getCharacters } from '@/app/services/getCharacters'
import Card from '../../components/Card/Card'
import StylesListCharacters from './ListCharacters.module.css'

export default async function ListCharacters() {
  const characters = await getCharacters()
  return (
    <div className={StylesListCharacters.listCharacters}>
      {characters.results.slice(0, 15).map((character) => (
        <Card key={character.id} character={character} />
      ))}
    </div>
  )
}

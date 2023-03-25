import Card from '../../components/Card/Card'
import StylesListCharacters from './ListCharacters.module.css'

const getCharacters = () => {
  return fetch('http://127.0.0.1:8000/api/character/').then((res) => res.json())
}
export default async function ListCharacters() {
  const characters = await getCharacters()
  console.log('characters', characters)
  return (
    <div className={StylesListCharacters.listCharacters}>
      {characters.results.slice(0, 5).map((character) => (
        <Card key={character.id} character={character} />
      ))}
    </div>
  )
}

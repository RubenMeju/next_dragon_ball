import Image from 'next/image'
import StylesCharactersHome from './CharactersHome.module.css'
import { getCharacters } from '../services/getCharacters'
import Link from 'next/link'

export default async function CharactersHome() {
  const characters = await getCharacters()
  return (
    <div className={StylesCharactersHome.container}>
      <h2 className={StylesCharactersHome.title}>Personajes</h2>
      <div className={StylesCharactersHome.card}>
        {characters.results.slice(0, 6).map((character) => (
          <div key={character.id} className={StylesCharactersHome.character}>
            <Image
              className={StylesCharactersHome.image}
              fill
              src={character.image}
              alt={character.name}
            />
          </div>
        ))}
      </div>

      <button className={StylesCharactersHome.button}>
        <Link href="/characters">Ver todos</Link>
      </button>
    </div>
  )
}

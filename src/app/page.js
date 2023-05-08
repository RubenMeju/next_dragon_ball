import CharactersHome from './home/CharactersHome'
import Header from './home/header/Header'

export default async function Home() {
  return (
    <>
      <Header />
      <CharactersHome />

      <h2>La serie</h2>
      <h3>Episodios</h3>
      <div>
        <ul>
          <li>Dragon Ball</li>
          <li>Dragon Ball Z</li>
          <li>Dragon Ball GT</li>
          <li>Dragon Ball Kai</li>
          <li>Dragon Ball Super</li>
        </ul>
      </div>
    </>
  )
}

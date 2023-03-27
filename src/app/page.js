import styles from './page.module.css'
import PruebaAnimated from './components/Prueba/PruebaAnimated'
import { getCharacters } from './services/getCharacters'

export default async function Home() {
  const characters = await getCharacters()
  return (
    <main className={styles.main}>
      <h1>Home page</h1>
      <PruebaAnimated data={characters} />
    </main>
  )
}

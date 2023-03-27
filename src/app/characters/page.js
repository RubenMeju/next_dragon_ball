import { Suspense } from 'react'
import PruebaAnimated from '../components/Prueba/PruebaAnimated'
import { getCharacters } from '../services/getCharacters'
import Loading from './loading'
import Styles from './styles.module.css'

export default async function page() {
  const characters = await getCharacters()
  return (
    <>
      <h1 className={Styles.title}>Personajes</h1>
      <Suspense fallback={<Loading />}>
        <PruebaAnimated data={characters} />
      </Suspense>
    </>
  )
}

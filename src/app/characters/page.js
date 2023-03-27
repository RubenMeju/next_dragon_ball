import { Suspense } from 'react'
import CardModalAnimated from '../components/Prueba/CardModalAnimated'
import { getCharacters } from '../services/getCharacters'
import Loading from './loading'
import Styles from './styles.module.css'

export default async function page() {
  const characters = await getCharacters()
  return (
    <>
      <h1 className={Styles.title}>Personajes</h1>
      <Suspense fallback={<Loading />}>
        <CardModalAnimated data={characters} />
      </Suspense>
    </>
  )
}

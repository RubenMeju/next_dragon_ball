import { Suspense } from 'react'
import CardModalAnimated from '../components/CardModalAnimated/CardModalAnimated'
import { getCharacters } from '../services/getCharacters'
import Loading from './loading'

export default async function page() {
  const characters = await getCharacters()
  return (
    <>
      <h1 className="title">Personajes</h1>
      <Suspense fallback={<Loading />}>
        <CardModalAnimated data={characters} />
      </Suspense>
    </>
  )
}

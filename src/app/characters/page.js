'use client'
import { Suspense } from 'react'
import CardModalAnimated from '../components/CardModalAnimated/CardModalAnimated'
import Loading from './loading'
import Search from '../components/formSearch/Search'

export default async function page() {
  // const [paramSearch, setParamSearch] = useState('')
  // const characters = await getCharacters(paramSearch)
  return (
    <>
      <h1 className="title">Personajes</h1>
      <Suspense fallback={<Loading />}>
        <Search />
        <CardModalAnimated />
      </Suspense>
    </>
  )
}

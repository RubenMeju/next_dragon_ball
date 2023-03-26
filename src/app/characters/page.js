import { Suspense } from 'react'
import ListCharacters from './ListCharacters/ListCharacters'
import Loading from './loading'
import Styles from './styles.module.css'

export default async function page() {
  return (
    <>
      <h1 className={Styles.title}>Personajes</h1>
      <Suspense fallback={<Loading />}>
        <ListCharacters />
      </Suspense>
    </>
  )
}

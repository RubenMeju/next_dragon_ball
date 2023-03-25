import ListCharacters from './ListCharacters/ListCharacters'
import Styles from './styles.module.css'
export default async function page() {
  return (
    <>
      <h1 className={Styles.title}>Personajes</h1>
      <ListCharacters />
    </>
  )
}

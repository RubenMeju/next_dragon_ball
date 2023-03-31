import Image from 'next/image'
import styles from './page.module.css'
import imagen from '../../public/capa.png'
import CharactersHome from './home/CharactersHome'
export default async function Home() {
  return (
    <main className={styles.main}>
      <h1 className="title">Universo Dragon Ball</h1>
      <div className={styles.contImage}>
        <Image
          src={imagen}
          alt="Imagen de Goku"
          fill={true}
          className={styles.img}
        />
      </div>
      <article className={styles.article}>
        <p className={styles.p}>
          Dragon Ball es una popular serie de manga y anime creada por Akira
          Toriyama en 1984.
        </p>
        <p className={styles.p}>
          La historia sigue las aventuras de un joven guerrero llamado Goku,
          quien con la ayuda de sus amigos, lucha contra villanos poderosos y
          busca las esferas del dragón para cumplir sus deseos.
        </p>
        <p className={styles.p}>
          La serie ha sido adaptada en varias formas, incluyendo series de
          televisión, películas y videojuegos, y ha ganado una gran base de fans
          en todo el mundo por su acción emocionante, personajes memorables y su
          mensaje positivo de perseverancia y amistad.
        </p>
      </article>

      <CharactersHome />
    </main>
  )
}

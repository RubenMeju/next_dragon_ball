import Image from 'next/image'
import StylesHeader from './Header.module.css'
import imagen from '../../../../public/capa.png'
export default function Header() {
  return (
    <header className={StylesHeader.header}>
      <div className={StylesHeader.contImage}>
        <Image
          src={imagen}
          alt="Imagen de Goku"
          fill={true}
          className={StylesHeader.img}
        />
      </div>
      <article className={StylesHeader.article}>
        <p className={StylesHeader.p}>
          Dragon Ball es una popular serie de manga y anime creada por Akira
          Toriyama en 1984.
        </p>
        <p className={StylesHeader.p}>
          La historia sigue las aventuras de un joven guerrero llamado Goku,
          quien con la ayuda de sus amigos, lucha contra villanos poderosos y
          busca las esferas del dragón para cumplir sus deseos.
        </p>
        <p className={StylesHeader.p}>
          La serie ha sido adaptada en varias formas, incluyendo series de
          televisión, películas y videojuegos, y ha ganado una gran base de fans
          en todo el mundo por su acción emocionante, personajes memorables y su
          mensaje positivo de perseverancia y amistad.
        </p>
      </article>
    </header>
  )
}

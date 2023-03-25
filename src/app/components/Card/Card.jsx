import Image from 'next/image'
import StylesCard from './Card.module.css'

export default function Card({ character }) {
  return (
    <div className={StylesCard.card}>
      <div className={StylesCard.contImage}>
        <Image
          fill={true}
          src={character.image}
          className={StylesCard.image}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          priority={true}
          alt="Logo Dragon Ball"
        />
      </div>

      <div className={StylesCard.cardBody}>
        <p className={StylesCard.name}>{character.name}</p>
        <p className={StylesCard.info}>{character.species}</p>
        <p className={StylesCard.info}>{character.planet.name}</p>
      </div>
    </div>
  )
}
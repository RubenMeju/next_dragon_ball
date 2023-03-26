import Image from 'next/image'
import StylesCard from './Card.module.css'

export default function Card({ data }) {
  return (
    <div className={StylesCard.card}>
      <div className={StylesCard.contImage}>
        <Image
          fill={true}
          src={data.image}
          className={StylesCard.image}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          // priority={true}
          // placeholder="blur"
          // blurDataURL="https://static.vecteezy.com/system/resources/previews/005/704/067/non_2x/rocket-ship-launch-flat-vector.jpg"
          loading="lazy"
          alt="Logo Dragon Ball"
        />
      </div>

      <div className={StylesCard.cardBody}>
        <p className={StylesCard.name}>{data.name ? data.name : data.title}</p>
        <p className={StylesCard.info}>{data.species ? data.species : null}</p>
        <p className={StylesCard.info}>
          {data.planet ? data.planet.name : null}
        </p>
      </div>
    </div>
  )
}

import style from './cardNom.module.scss';




function CardOfNomination
({id, title, description}) {
  return (
      <div className={style.card}>
          <div className={style.container}>
              <div className={style.title}>{title}</div>
              <img srcSet={new URL(`/public/nom/IconBack-${id}.svg`, import.meta.url).href}
                   className={style.image}
                   alt={''}/>

          </div>
          <div className={style.text}>{description}</div>

      </div>
  );
}

export default CardOfNomination
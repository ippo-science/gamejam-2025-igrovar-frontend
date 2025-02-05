import style from './cardUniq.module.scss';



function CardUniqOfJam({id_card, textBefore, textAccent, textAfter}) {
  return (
      <div className={style.card}>
        <img srcSet={new URL(`/public/uniq/TextBack0${id_card}.svg`, import.meta.url).href}
            className={style.image}
             alt={''}/>
        <div className={style.text}>
          <span>{textBefore} </span>
          <span className={style.accentRed}>{textAccent}</span>
          <span> {textAfter}</span>
        </div>
      </div>
  );
}

export default CardUniqOfJam;
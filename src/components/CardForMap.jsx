import style from './cardMap.module.scss';
import clsx from "clsx";


function CardForMap({title, subtitle, listItems, isLast=false}) {
  return (
    <div className={clsx(style.card, isLast && style.last)}>
        <h3 className={style.title}>{title}</h3>
        <h4 className={style.subtitle}>{subtitle}</h4>
        <ul className={style.list}>
            {Array.isArray(listItems) && listItems.map((item, index) => (
            <li key={index} className={style.listItem}
            >{item}</li>
            ))}
        </ul>
    </div>
  );
}
export default CardForMap;
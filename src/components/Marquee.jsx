import style from './marquee.module.scss';
import clsx from "clsx";



function Marquee() {

  return (
      <div className={style.marqueeWrapper}

      >
        <div

            className={clsx(style.marquee)}>
          {/* Дублированный контент для плавного зацикливания */}
          {Array(2).fill([
            {src: '/src/assets/RTUMIREA.svg', alt: 'RTU MIREA'},
            {src: '/src/assets/Logo.svg', alt: 'ИГРОВАР'},
            {src: '/src/assets/VKPlay.svg', alt: 'VK Play'},
            {src: '/src/assets/PROTOTYPE.svg', alt: 'PROTO TYPE'},
            {src: '/src/assets/APRIORI.svg', alt: 'APRI ORI'},
          ]).flat().map((item, index) => (
              <a href="#" key={index} className={style.icon}>
                <img src={new URL(item.src, import.meta.url).href} alt={item.alt}/>
              </a>
          ))}
        </div>
      </div>
  );
}

export default Marquee;
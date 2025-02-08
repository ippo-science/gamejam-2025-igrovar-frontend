import style from './marquee.module.scss';
import clsx from "clsx";



function Marquee({stopAnimation=false}) {

  return (
      <div className={style.marqueeWrapper}

      >
        <div

            className={clsx(style.marquee, stopAnimation && style.stopAnimation)}>
          {/* Дублированный контент для плавного зацикливания */}
          {Array(2).fill([
            {src: '/src/assets/logos/RTUMIREA.svg', alt: 'RTU MIREA'},
            {src: '/src/assets/logos/Logo.svg', alt: 'ИГРОВАР'},
            {src: '/src/assets/logos/VKPlay.svg', alt: 'VK Play'},
            {src: '/src/assets/logos/PROTOTYPE.png', alt: 'PROTO TYPE'},
            {src: '/src/assets/logos/APRIORI.svg', alt: 'APRI ORI'},
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
import style from './layout.module.scss'
import clsx from "clsx";
import {useEffect, useState} from "react";
import Blob from "./Blob.jsx";
import Marquee from "./Marquee.jsx";
import CardFAQ from "./CardFAQ.jsx";
import CardPerson from "./CardPerson.jsx";
import SliderPersons from "./SliderPersons.jsx";
const api = import.meta.env.VITE_API_URL;
const dateStart = new Date('2025-02-24T00:00:00');
const anonsDate = new Date('2025-01-03T00:00:00');
function Layout() {
    const [experts, setExperts] = useState(null);
    const [speakers, setSpeakers] = useState(null);




    const calculateTimeBeforeStart = () => {
        const difference = +dateStart - +new Date();
        let timeBeforeStart = {};
        if (difference > 0) {
            timeBeforeStart = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }
        return timeBeforeStart;
    };
    function getCountOfProgressItems() {
        const difference = +dateStart - +anonsDate;
        const now = +new Date() - +anonsDate;

        if (difference <= 0) {
            return 30;
        } else {
            return Math.floor(now / (difference / 30));
        }
    }
    const [beforeStart, setBeforeStart] = useState(calculateTimeBeforeStart());
    const [progressItems, setProgressItems] = useState([]);
    let count = progressItems.length;
    useEffect(() => {





        function smooth (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
        }
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', smooth);
        });
        const interval1 = setInterval(() => {
            if (count < getCountOfProgressItems()) {
                // console.log(count);
                count ++;
                setProgressItems(prev => [...prev, 0]);
            }
        }, 500);
        const interval2 = setInterval(() => {
            setBeforeStart(calculateTimeBeforeStart());
        }, 1000);
        return () => {
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.removeEventListener('click', smooth);
            });
            clearInterval(interval1);
            clearInterval(interval2);
        }
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(api + '/main');
                const data = await response.json();
                setExperts(data.experts);
                setSpeakers(data.speakers);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);





    return (
        <div className={style.layout}>
            <header className={style.header}>
                <Blob className={style.blobRight}/>
                <Blob className={style.blobLeft}/>
                <Blob className={style.blobTop}/>

                <nav className={style.nav}>
                    <ul className={style.menu}>
                        <li className={style.menuItem}>
                            <a href="#description" className={style.link}>О проекте</a>
                        </li>
                        <li className={style.menuItem}>
                            <a href="#steps" className={style.link}>Этапы проведения</a>
                        </li>
                        <li className={style.menuItem}>
                            {/* todo real link*/}
                            <a href={"#"} className={style.link}>Участвовать</a>
                        </li>
                        <li className={style.menuItem}>
                            <a href="#faq" className={style.link}>FAQ</a>
                        </li>
                    </ul>
                    <input type={"checkbox"} id={"toggle"} className={style.toggleCheckbox}/>
                    <label htmlFor={"toggle"} className={clsx(style.menuToggle, style.menuIcon)}>
                        <span></span>
                    </label>
                    <div className={style.boxLink}>
                        <a href={"#"} className={style.icon}>
                            {/*todo real link*/}
                            <img srcSet={new URL('/src/assets/logos/VK Logo.svg', import.meta.url).href} alt={'VK'}/>
                        </a>
                        <a href={"#"} className={style.icon}>
                            {/*todo real link*/}
                            <img srcSet={new URL('/src/assets/logos/Telegram.svg', import.meta.url).href} alt={'Telegram'}/>
                        </a>
                    </div>
                </nav>

                <div className={style.content}>
                    <h1 className={style.title}>Игровар</h1>
                    <div className={style.progressbar}>
                        {progressItems.map((_, index) => (
                            <div key={index} className={style.progressItem}></div>
                        ))}
                        <div className={style.progressText}>
                            <span>До начала </span>
                            <span className={style.span}>{beforeStart.days}</span>
                            <span> дней </span>
                            <span className={style.span}>{beforeStart.hours.toString().padStart(2, '0')}</span>
                            <span>:</span>
                            <span className={style.span}>{beforeStart.minutes.toString().padStart(2, '0')}</span>
                            <span>:</span>
                            <span className={style.span}>{beforeStart.seconds.toString().padStart(2, '0')}</span>

                        </div>
                    </div>
                    <Marquee/>

                </div>
            </header>

            <section className={style.section} id={"description"}>
                <h2 className={clsx(style.title, style.title2)}>Уникальность геймджема</h2>
                <div className={style.cards}>
                    <div className={style.card}>
                        <img srcSet={new URL('/public/card1.svg', import.meta.url).href} alt={'card1'}/>
                        <div className={style.text}>
                            Мероприятие,
                            <span className={style.accentRed}>объединяющее оценку геймдизайн-документов,
                                качества созданных игр и подходов к бизнес-планированию</span>
                            в игровой индустрии.
                        </div>
                    </div>
                    {/*<div className={style.card}>*/}
                    {/*    <img srcSet={new URL('/public/card2.svg', import.meta.url).href} alt={'card2'}/>*/}
                    {/*    <div className={style.text}>*/}
                    {/*        Путем оценки и обратной связи от экспертов в индустрии игр*/}
                    {/*        <span className={style.accentRed}>участники смогут улучшить свои навыки разработки игр</span>*/}
                    {/*        и получить ценный опыт для будущих проектов.*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className={style.card}>*/}
                    {/*    <img srcSet={new URL('/public/card3.svg', import.meta.url).href} alt={'card3'}/>*/}
                    {/*    <div className={style.text}>*/}
                    {/*        <span className={style.accentRed}>Учитываются различные аспекты создания игр,</span>*/}
                    {/*        включая тщательную проработку концепции игры, креативного дизайна,*/}
                    {/*        игровых механизмов, коммерческого потенциала проекта.*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className={style.card}>*/}
                    {/*    <img srcSet={new URL('/public/card3.svg', import.meta.url).href} alt={'card3'}/>*/}
                    {/*    <div className={style.text}>*/}
                    {/*        Использование*/}
                    {/*        <span className={style.accentRed}>уникальной платформы</span>*/}
                    {/*        на базе ВК.Плей и Skillbox*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </section>

            <section className={style.section}>
                <h2 className={style.title}>Номинации геймджема</h2>
                <Blob className={style.blobLeft}/>
                <div className={clsx(style.cards, style.cardsWrap)}>
                    <div className={style.card}>
                        <img srcSet={new URL('/public/nomination1.svg', import.meta.url).href} alt={'nomination1'}/>
                        <h3>Лучший из лучших</h3>
                        <div className={style.text}>Краткое описание номинации</div>
                    </div>
                    <div className={style.card}>
                        <img srcSet={new URL('/public/nomination2.svg', import.meta.url).href} alt={'nomination2'}/>
                        <h3>Я бы в это поиграл</h3>
                        <div className={style.text}>Краткое описание номинации</div>
                    </div>
                    <div className={style.card}>
                        <img srcSet={new URL('/public/nomination3.svg', import.meta.url).href} alt={'nomination3'}/>
                        <h3>Лучшая игра</h3>
                        <div className={style.text}>Краткое описание номинации</div>
                    </div>
                    <div className={style.card}>
                        <img srcSet={new URL('/public/nomination4.svg', import.meta.url).href} alt={'nomination4'}/>
                        <h3>Лучший бизнес</h3>
                        <div className={style.text}>Краткое описание номинации</div>
                    </div>
                </div>
            </section>

            <section className={style.section}>
                <h2 className={style.title}><span className={style.accentRed}
                >Эксперты</span> мероприятия</h2>
                <div className={style.text}>
                    Люди, имеющие большой бэкграунд
                    в сфере геймдева, которые определят лучших из лучших
                </div>
                    <SliderPersons persons={experts} accentColor={"red"} />

            </section>
            <section className={style.section} id={"steps"}>
                <h2 className={style.title}>Этапы проведения</h2>
                <Blob className={style.blobRight}/>
                <div className={style.map}>
                    <div className={style.card}>
                        <div>10 февраля - 23 февраля</div>
                        <h3>Подготовка к геймджему</h3>
                        <ul>
                            <li>Регистрация команд;</li>
                            <li>Онлайн мастер-классы;</li>
                            <li>Трансляции с капитанами команд.</li>
                        </ul>
                    </div>
                    <div className={style.card}>
                        <div>10 февраля - 23 февраля</div>
                        <h3>Подготовка к геймджему</h3>
                        <ul>
                            <li>Регистрация команд;</li>
                            <li>Онлайн мастер-классы;</li>
                            <li>Трансляции с капитанами команд.</li>
                        </ul>
                    </div>
                    <div className={style.card}>
                        <div>10 февраля - 23 февраля</div>
                        <h3>Подготовка к геймджему</h3>
                        <ul>
                            <li>Регистрация команд;</li>
                            <li>Онлайн мастер-классы;</li>
                            <li>Трансляции с капитанами команд.</li>
                        </ul>
                    </div>
                    <div className={style.card}>
                        <div>10 февраля - 23 февраля</div>
                        <h3>Подготовка к геймджему</h3>
                        <ul>
                            <li>Регистрация команд;</li>
                            <li>Онлайн мастер-классы;</li>
                            <li>Трансляции с капитанами команд.</li>
                        </ul>
                    </div>
                    <div className={style.card}>
                        <div>10 февраля - 23 февраля</div>
                        <h3>Подготовка к геймджему</h3>
                        <ul>
                            <li>Регистрация команд;</li>
                            <li>Онлайн мастер-классы;</li>
                            <li>Трансляции с капитанами команд.</li>
                        </ul>
                    </div>
                </div>
                <div className={style.card}>
                    <img srcSet={new URL('/public/running1.svg', import.meta.url).href} alt={'running1'}/>
                    <h3>РТУ МИРЭА</h3>
                    <div className={style.text}>Пр-кт Вернадского, 78с1</div>
                </div>
            </section>
            <section className={style.section}>
                <h2 className={style.title}><span className={style.accentGreen}
                >Спикеры</span> мероприятия</h2>
                <Blob className={style.blobLeft}/>
                <div className={style.text}>
                    Простите, я не придумал текст к этим крутым чувакам
                </div>
                <SliderPersons persons={speakers} accentColor={"green"}/>
            </section>
            <section className={style.section} id={"faq"}>
                <Blob className={style.blobRightFAQ}/>
                <h2 className={style.title}>Часто задаваемые вопросы</h2>
                <div className={style.text}>
                    Ознакомиться подробнее с порядком проведения
                    мероприятия можно в <a className={style.accentGreen} href={"#"}
                >Положении о геймджеме</a></div>

                <div className={clsx(style.cards, style.cardsColumn)}>
                    <CardFAQ question={"Как принять участие в геймджеме?"}
                             answer={"Для участия в геймджеме необходимо зарегистрироваться на сайте и создать команду. После этого вы сможете приступить к разработке игры."}/>
                    <CardFAQ question={"Какие номинации есть на геймджеме?"}
                                answer={"Краткий ответ на вопрос"}/>

                </div>

            </section>
            <footer className={style.footer}>
                <div className={style.content}>
                    <div className={style.text}>
                        Получи <span className={style.accentRed}> реальный опыт</span> разработки игры
                    </div>
                    <ul className={style.list}>
                        <li >
                            <a href={'#'} className={style.link}
                            >Условия участия</a>
                        </li>
                        <li>
                            <a className={style.link}
                                href={'#'}>Регламент геймджема</a>
                        </li>
                        <li>
                            <a className={clsx( style.link, style.accentRed)}
                               href={'#'}>Зарегистрироваться</a>
                        </li>
                    </ul>

                </div>
                <div className={style.boxLink}>
                    {Array(1).fill([
                        {src: '/src/assets/logos/RTUMIREA.svg', alt: 'RTU MIREA'},
                        {src: '/src/assets/logos/Logo.svg', alt: 'ИГРОВАР'},
                        {src: '/src/assets/logos/VKPlay.svg', alt: 'VK Play'},
                        {src: '/src/assets/logos/PROTOTYPE.svg', alt: 'PROTO TYPE'},
                        {src: '/src/assets/logos/APRIORI.svg', alt: 'APRI ORI'},
                    ]).flat().map((item, index) => (
                        <a href="#" key={index} className={style.icon}>
                            <img src={new URL(item.src, import.meta.url).href} alt={item.alt}/>
                        </a>
                    ))}
                </div>


            </footer>


        </div>
    )
}

export default Layout

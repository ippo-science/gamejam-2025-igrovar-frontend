import style from './layout.module.scss'
import clsx from "clsx";
import {useEffect, useState} from "react";
import Blob from "./Blob.jsx";
import Marquee from "./Marquee.jsx";
import CardFAQ from "./CardFAQ.jsx";

import SliderPersons from "./SliderPersons.jsx";
import CardUniqOfJam from "./CardUniqOfJam.jsx";
import CardOfNomination from "./CardOfNomination.jsx";
import CardForMap from "./CardForMap.jsx";
const api = import.meta.env.VITE_API_URL + '/api';
const dateStart = new Date('2025-02-24T00:00:00');
const anonsDate = new Date('2025-01-03T00:00:00');
function Layout() {
    const [experts, setExperts] = useState(null);
    const [speakers, setSpeakers] = useState(null);
    const [nominations, setNominations] = useState(null);
    const [faqs, setFaqs] = useState(null);
    // const [rewards, setRewards] = useState(null);
    const [checked, setChecked] = useState(false);



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
        const fetchData = async (url, setArray) => {
            try {
                const response = await fetch(api + url);
                const data = await response.json();
                setArray(data);
            } catch (error) {
                console.error(error);
            }
        };

        setExperts([
            {
                id: 1,
                first_name: 'Александр',
                last_name: 'Егоров',
                photo_url: new URL('/public/DSC_7005.jpg', import.meta.url).href,
                bio: 'Руководитель VK Play Indie, геймдизайнер',
                },
            {
                id: 2,
                first_name: 'Петр',
                last_name: 'Петров',
                photo_url: new URL('/public/coworking.png', import.meta.url).href,
                bio: 'Инженер-программист, разработчик игр',

            },
            {
                id: 3,
                first_name: 'Евгений',
                last_name: 'Медведев',
                photo_url: new URL('/public/medvedev.jpg', import.meta.url).href,
                bio: 'Программист, разработчик SPARTA 2035',
            }

        ]);
        setSpeakers([
            {
                id: 1,
                first_name: 'Александр',
                last_name: 'Егоров',
                photo_url: new URL('/public/egorov.png', import.meta.url).href,
                achievements: 'Руководитель VK Play Indie, геймдизайнер',
            },
            {
                id: 2,
                first_name: 'Петр',
                last_name: 'Петров',
                photo_url: new URL('/public/coworking.png', import.meta.url).href,
                achievements: 'Лучший разработчик игр 2021',

            },
            {
                id: 3,
                first_name: 'Сидор',
                last_name: 'Сидоров',
                photo_url: new URL('/public/coworking.png', import.meta.url).href,
                achievements: 'Лучший разработчик игр 2021',
            }

        ]);
        setNominations([
            {
                id: 1,
                title: 'Лучший из лучших',
                description: 'Номинация с абсолютным победителем'
            },
            {
                id: 2,
                title: 'Лучший геймдизайн',
                description: 'Номинация для самого лучшего геймдизайна'
            },
            {
                id: 3,
                title: 'Лучшая монетизация',
                description: 'Эти люди знают как получить денежки'
            },
            {
                id: 4,
                title: 'Ура, я в телевизоре',
                description: 'Специальная номинация от стримера'
            }
        ]);

        setFaqs([
            {
                question: 'Как зарегистрироваться?',
                answer: 'Для регистрации необходимо перейти на сайт indiehub.ru, найти джем ИГРОВАР и нажать кнопку "Зарегистрироваться"'
            },
            {
                question: 'Сколько человек может быть в команде',
                answer: 'От 1 до 5, так как более 5 призов от партнеров мы вам не найдем'
            },
            {
                question: 'На финале надо быть очно?',
                answer: 'Финал смешенного формата, так что если вы из другого города, то можно подключиться и онлайн. Но если есть вомзможность, то ждем вас очно!'
            },
            {
                question: 'Как отправить проект?',
                answer: 'Отправка проекта доступна на сайте indieHub.ru в разделе с геймджемом ИГРОВАР'
            }]);






        // fetchData('/experts', setExperts);
        // fetchData('/speakers', setSpeakers);
        // fetchData('/nominations', setNominations);
        // fetchData('/qa', setFaqs);
        // fetchData('/rewards', setRewards);


    }, []);





    return (
        <div className={style.layout}>
            <header className={style.header}>
                <Blob className={style.blobRight}/>
                <Blob className={style.blobLeft}/>
                <Blob className={style.blobTop}/>

                <nav className={clsx(style.nav, checked && style.navActive)}>
                    <input type={"checkbox"} id={"toggle"} className={style.toggleCheckbox}
                            checked={checked} onChange={() => setChecked(!checked)}
                    />
                    <label htmlFor={"toggle"} className={clsx(style.menuToggle, style.menuIcon)}>
                        <span></span>
                    </label>
                    <ul className={style.menu} onClick={() => setChecked(false)}>
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

                    <div className={style.boxLink}>
                        <a href={"#"} className={style.icon}>
                            {/*todo real link*/}
                            <img srcSet={new URL('/src/assets/logos/VK Logo.svg', import.meta.url).href} alt={'VK'}/>
                        </a>
                        <a href={"#"} className={style.icon}>
                            {/*todo real link*/}
                            <img srcSet={new URL('/src/assets/logos/Telegram.svg', import.meta.url).href}
                                 alt={'Telegram'}/>
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
                    <Marquee stopAnimation={checked}/>

                </div>
            </header>

            <section className={style.section} id={"description"}>
                <h2 className={clsx(style.title, style.title2)}>Уникальность геймджема</h2>
                <div className={style.cards}>

                    <CardUniqOfJam id_card={1} textBefore={"Мероприятие,"}
                                        textAccent={"объединяющее оценку геймдизайн-документов, " +
                                            "качества созданных игр и подходов к бизнес-планированию"}
                                        textAfter={"в игровой индустрии."}/>
                    <CardUniqOfJam id_card={2} textBefore={"Путем оценки и обратной связи от экспертов в индустрии игр"}
                                      textAccent={"участники смогут улучшить свои навыки разработки игр"}
                                        textAfter={"и получить ценный опыт для будущих проектов."}/>
                    <CardUniqOfJam id_card={3} textAccent={"Учитываются различные аспекты создания игр," }
                    textAfter={"включая тщательную проработку концепции игры, креативного дизайна," +
                                        "игровых механизмов, коммерческого потенциала проекта."}/>
                    <CardUniqOfJam id_card={4} textBefore={"Использование"}
                                        textAccent={"уникальной платформы"}
                                        textAfter={"indieHub"}/>



                </div>
            </section>

            <section className={style.section}>
                <h2 className={style.title}>Номинации геймджема</h2>
                <Blob className={style.blobLeft}/>
                <div className={clsx(style.cards, style.cardsWrap)}>
                    {Array.isArray(nominations) && nominations.map((nomination, index) => (
                        <CardOfNomination key={index} id={nomination.id} title={nomination.title} description={nomination.description}/>
                    ))}
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
                    <CardForMap title={"17 февраля - 23 февраля"} subtitle={"Подготовка к геймджему"}
                                listItems={["Регистрация команд;", "Онлайн мастер-классы;"]}/>
                    <CardForMap title={"24 февраля"} subtitle={"Открытие геймджема"}
                                listItems={["Научная конференция по Игровой Индустрии;", "Открытие темы геймджема"]}/>

                    <CardForMap title={"24 февраля - 3 марта"} subtitle={"Разработка игры"}
                                listItems={["Консультация с экспертами;", "Трансляция дневников разработчиков."]}/>
                    <CardForMap title={"4 марта - 16 марта"} subtitle={"Анализ и оценка работ"}
                                listItems={["Оценка игр экспертами", "Открытие зрительского голосования за лучший проект."]}/>
                    <CardForMap title={"10 марта"} subtitle={"Закрытие геймджема"}
                                isLast={true}
                                listItems={["Питч финалистов;", "Нетворкинг;", "Объявление победителей!"]}/>

                    <div className={style.card}>
                        <img srcSet={new URL('/public/coworking.png', import.meta.url).href} alt={''}/>
                        <h3 className={style.text}>РТУ МИРЭА</h3>
                        <div className={style.text}>Москва, Пр-кт Вернадского, 78с1</div>
                    </div>
                </div>
            </section>
            <section className={style.section}>
                <h2 className={style.title}><span className={style.accentGreen}
                >Спикеры</span> мероприятия</h2>
                <Blob className={style.blobLeft}/>
                <div className={style.text}>
                    Они слишком круты, чтобы мы смогли подобрать текст
                </div>
                <SliderPersons persons={speakers} accentColor={"green"}/>
            </section>
            <section className={style.section} id={"faq"}>
                <Blob className={style.blobRightFAQ}/>
                <h2 className={style.title}>Часто задаваемые вопросы</h2>
                <div className={style.text}>
                    Ознакомиться подробнее с порядком проведения
                    мероприятия можно в <a className={style.accentGreen} href={"https://vk.com/doc-229388188_684743066?hash=fbxAn9UCZoVNSxn5KSpYZrUjZPd0oNvx8dw28kAZk3o&dl=cYeEF8QlcybelkN57usMFkXQzxSME02X0Lo71GsOo5w"}
                >Положении о геймджеме</a></div>

                <div className={clsx(style.cards, style.cardsColumn)}>
                    {Array.isArray(faqs) && faqs.map((faq, index) => (
                        <CardFAQ key={index} question={faq.question} answer={faq.answer}/>
                    ))}

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
                                href={'https://vk.com/doc-229388188_684743066?hash=fbxAn9UCZoVNSxn5KSpYZrUjZPd0oNvx8dw28kAZk3o&dl=cYeEF8QlcybelkN57usMFkXQzxSME02X0Lo71GsOo5w'}>Регламент геймджема</a>
                        </li>
                        <li>
                            <a className={clsx( style.link, style.accentRed)}
                               href={'https://indiehub.ru/jam/?id=18'}>Зарегистрироваться</a>
                        </li>
                    </ul>

                </div>
                <div className={style.boxLink}>
                    {Array(1).fill([
                        {src: '/src/assets/logos/RTUMIREA.svg', alt: 'RTU MIREA'},
                        {src: '/src/assets/logos/Logo.svg', alt: 'ИГРОВАР'},
                        {src: '/src/assets/logos/VKPlay.svg', alt: 'VK Play'},
                        {src: '/src/assets/logos/PROTOTYPE.png', alt: 'PROTO TYPE'},
                        {src: '/src/assets/logos/APRIORI.png', alt: 'APRI ORI'},
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

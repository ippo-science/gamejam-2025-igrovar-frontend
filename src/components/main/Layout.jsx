import style from './layout.module.scss'
import clsx from "clsx";
import {useEffect, useState} from "react";

const dateStart = new Date('2025-02-24T00:00:00');
function Layout() {
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
    const [beforeStart, setBeforeStart] = useState(calculateTimeBeforeStart());

    useEffect(() => {
        const interval = setInterval(() => {
            setBeforeStart(calculateTimeBeforeStart());
        }, 1000);
        return () => clearInterval(interval);
    }, [beforeStart]);


    return (
        <>

            <header>
                <div className={style.blob}>
                </div>
                <nav>
                    <ul>
                        <li>
                            <a href="#">О проекте</a>
                        </li>
                        <li>
                            <a href="#">Этапы проведения</a>
                        </li>
                        <li>
                            <a href="#">Участвовать</a>
                        </li>
                        <li>
                            <a href="#">FAQ</a>
                        </li>
                    </ul>
                    <input type={"checkbox"} id={"menu-toggle"}/>
                    <label htmlFor={"menu-toggle"} className={clsx(style.menuToggle, style.menuIcon)}>
                        <span></span>
                    </label>
                    <a>
                        <img srcSet={new URL('/src/assets/VK Logo.svg', import.meta.url).href} alt={'VK'}/>
                    </a>
                    <a>
                        <img srcSet={new URL('/src/assets/Telegram.svg', import.meta.url).href} alt={'Telegram'}/>
                    </a>
                </nav>

                <div className={style.content}>
                    <h1>Игровар</h1>
                    <div className={style.progressbar}>До
                        начала {beforeStart.days} дней {beforeStart.hours} часов {beforeStart.minutes} минут {beforeStart.seconds} секунд
                    </div>
                    <div className={style.runnings}>
                        <img srcSet={new URL('/public/running1.svg', import.meta.url).href} alt={'running1'}/>
                        <img srcSet={new URL('/public/running2.svg', import.meta.url).href} alt={'running2'}/>
                        <img srcSet={new URL('/public/running3.svg', import.meta.url).href} alt={'running3'}/>
                        <img srcSet={new URL('/public/running4.svg', import.meta.url).href} alt={'running4'}/>
                        <img srcSet={new URL('/public/running5.svg', import.meta.url).href} alt={'running5'}/>
                    </div>
                </div>
            </header>

            <section className={style.section}>
                <h2>Уникальность геймджема</h2>
                <div className={style.cards}>
                    <div className={style.card}>
                        <img srcSet={new URL('/public/card1.svg', import.meta.url).href} alt={'card1'}/>
                        <div className={style.text}>
                            Мероприятие,
                            <span className={style.accent}>объединяющее оценку геймдизайн-документов,
                                качества созданных игр и подходов к бизнес-планированию</span>
                            в игровой индустрии.
                        </div>
                    </div>
                    <div className={style.card}>
                        <img srcSet={new URL('/public/card2.svg', import.meta.url).href} alt={'card2'}/>
                        <div className={style.text}>
                            Путем оценки и обратной связи от экспертов в индустрии игр
                            <span className={style.accent}>участники смогут улучшить свои навыки разработки игр</span>
                            и получить ценный опыт для будущих проектов.
                        </div>
                    </div>
                    <div className={style.card}>
                        <img srcSet={new URL('/public/card3.svg', import.meta.url).href} alt={'card3'}/>
                        <div className={style.text}>
                            <span className={style.accent}>Учитываются различные аспекты создания игр,</span>
                            включая тщательную проработку концепции игры, креативного дизайна,
                            игровых механизмов, коммерческого потенциала проекта.
                        </div>
                    </div>
                    <div className={style.card}>
                        <img srcSet={new URL('/public/card3.svg', import.meta.url).href} alt={'card3'}/>
                        <div className={style.text}>
                            Использование
                            <span className={style.accent}>уникальной платформы</span>
                            на базе ВК.Плей и Skillbox
                        </div>
                    </div>
                </div>
            </section>

            <section className={style.section}>
                <h2>Номинации геймджема</h2>
                <div className={style.cards}>
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
                <h2><span className={style.accent}
                >Эксперты</span> мероприятия</h2>
                <div className={style.text}>
                    Люди, имеющие большой бэкграунд
                    в сфере геймдева, которые определят лучших из лучших
                </div>
                <div className={clsx(style.cards, style.autoScroll)}>
                    <div className={style.card}>
                        <img srcSet={new URL('/public/expert1.svg', import.meta.url).href} alt={'expert1'}/>
                        <h3>
                            <span className={style.accent}>Фамилия</span>
                            Имя
                        </h3>
                        <div className={style.text}>Должность/достижения</div>
                    </div>

                    <div className={style.card}>
                        <img srcSet={new URL('/public/expert1.svg', import.meta.url).href} alt={'expert1'}/>
                        <h3>
                            <span className={style.accent}>Фамилия</span>
                            Имя
                        </h3>
                        <div className={style.text}>Должность/достижения</div>
                    </div>
                    <div className={style.card}>
                        <img srcSet={new URL('/public/expert1.svg', import.meta.url).href} alt={'expert1'}/>
                        <h3>
                            <span className={style.accent}>Фамилия</span>
                            Имя
                        </h3>
                        <div className={style.text}>Должность/достижения</div>
                    </div>
                    <div className={style.card}>
                        <img srcSet={new URL('/public/expert1.svg', import.meta.url).href} alt={'expert1'}/>
                        <h3>
                            <span className={style.accent}>Фамилия</span>
                            Имя
                        </h3>
                        <div className={style.text}>Должность/достижения</div>
                    </div>
                </div>

            </section>
            <section className={style.section}>
                <h2>Этапы проведения</h2>
                <div className={style.cards}>
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
                <h2><span className={style.accent}
                >Спикеры</span> мероприятия</h2>
                <div className={style.text}>
                    Простите, я не придумал текст к этим крутым чувакам
                </div>
                <div className={clsx(style.cards, style.autoScroll)}>
                    <div className={style.card}>
                        <img srcSet={new URL('/public/expert1.svg', import.meta.url).href} alt={'expert1'}/>
                        <h3>
                            <span className={style.accent}>Фамилия</span>
                            Имя
                        </h3>
                        <div className={style.text}>Должность/достижения</div>
                    </div>

                    <div className={style.card}>
                        <img srcSet={new URL('/public/expert1.svg', import.meta.url).href} alt={'expert1'}/>
                        <h3>
                            <span className={style.accent}>Фамилия</span>
                            Имя
                        </h3>
                        <div className={style.text}>Должность/достижения</div>
                    </div>
                    <div className={style.card}>
                        <img srcSet={new URL('/public/expert1.svg', import.meta.url).href} alt={'expert1'}/>
                        <h3>
                            <span className={style.accent}>Фамилия</span>
                            Имя
                        </h3>
                        <div className={style.text}>Должность/достижения</div>
                    </div>
                    <div className={style.card}>
                        <img srcSet={new URL('/public/expert1.svg', import.meta.url).href} alt={'expert1'}/>
                        <h3>
                            <span className={style.accent}>Фамилия</span>
                            Имя
                        </h3>
                        <div className={style.text}>Должность/достижения</div>
                    </div>
                </div>

            </section>
            <section className={style.section}>
                <h2>Часто задаваемые вопросы</h2>
                <div className={style.text}>
                    Ознакомиться подробнее с порядком проведения
                    мероприятия можно в <span className={style.accent}
                >Положении о геймджеме</span></div>

                <div className={style.cards}>
                    <div className={style.card}>
                        <h3>Как принять участие в геймджеме?</h3>
                        <div className={style.text}>Краткий ответ на вопрос</div>
                    </div>
                    <div className={style.card}>
                        <h3>Какие номинации есть на геймджеме?</h3>
                        <div className={style.text}>Краткий ответ на вопрос</div>
                    </div>
                </div>

            </section>
            <footer className={style.footer}>
                <div className={style.content}>
                    <div className={style.text}>
                        Получи <span className={style.accent}>реальный опыт</span>разработки игры
                    </div>
                    <ul className={style.list}>
                        <li>
                            <a href={'#'}>Условия участия</a>
                        </li>
                        <li>
                            <a href={'#'}>Регламент геймджема</a>
                        </li>
                        <li>
                            <a className={clsx(style.accent, style.link)}
                               href={'#'}>Зарегистрироваться</a>
                        </li>
                    </ul>

                </div>
                <div className={style.partners}>
                    <img srcSet={new URL('/public/running1.svg', import.meta.url).href} alt={'running1'}/>
                    <img srcSet={new URL('/public/running2.svg', import.meta.url).href} alt={'running2'}/>
                    <img srcSet={new URL('/public/running3.svg', import.meta.url).href} alt={'running3'}/>
                    <img srcSet={new URL('/public/running4.svg', import.meta.url).href} alt={'running4'}/>
                    <img srcSet={new URL('/public/running5.svg', import.meta.url).href} alt={'running5'}/>
                </div>


            </footer>


        </>
    )
}

export default Layout

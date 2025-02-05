import style from './cardPerson.module.scss';
import clsx from 'clsx';
import CardPerson from './CardPerson.jsx';
import { useEffect, useState } from 'react';

function SliderPersons({ persons, accentColor }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(0);
    const calculateVisibleItems = () => {
        const container = document.querySelector(".cards");
        const gap = Math.max(40, Math.min(128, 128 / 1920 * window.innerWidth ));
        const cardWidth = Math.max(200, Math.min(263, 263 / 1920 * window.innerWidth));
        const containerWidth = container.offsetWidth;
        let count = 0;
        while (containerWidth > cardWidth * (count + 1) + gap * count) {
            count++;

        }
        // console.log(count, containerWidth, cardWidth, gap);
        return count >  0 ? count : 1;
    };

    useEffect(() => {
        const updateSlides = () => {
            if (Array.isArray(persons) && persons.length > 0) {
                setVisibleCount(calculateVisibleItems());
            }
        };

        if (Array.isArray(persons) && persons.length > 0) {
            updateSlides();
        } else {
            window.addEventListener('resize', updateSlides);
        }
        return () => window.removeEventListener('resize', updateSlides);
    }, [persons]);

    const nextSlide = () => {
        setCurrentIndex((prev) => Math.min(prev + 1, persons.length - 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
    };

    return (
        <div className={clsx(style.slider, 'cards')}>
            {currentIndex > 0 && (
                <button className={clsx(style.button, style.buttonLeft)} onClick={prevSlide}></button>
            )}

            <div className={clsx(style.slideList, )}>
                {Array.isArray(persons) &&
                    persons
                    .slice(currentIndex, currentIndex + visibleCount)
                    .map((person, idx) => (
                    <CardPerson key={idx}

                                accentColor={accentColor} {...person} />
                ))}

            </div>

            {Array.isArray(persons) && currentIndex + visibleCount < persons.length && (
                <button className={clsx(style.button, style.buttonRight)} onClick={nextSlide}></button>
            )}
        </div>
    );
}

export default SliderPersons;

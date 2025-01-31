import style from './cardFAQ.module.scss';
import {useState} from "react";
import clsx from "clsx";


function CardFAQ({question="Как принять участие в геймджеме?",
                answer="Для участия в геймджеме необходимо зарегистрироваться на сайте и создать команду. После этого вы сможете приступить к разработке игры."}) {
  const [isOpen, setIsOpen] = useState(false);
    return (
      <div className={clsx(style.card, isOpen && style.opened)
      } onClick={() => {
        setIsOpen(!isOpen);
      }}>
        <h3 className={style.question}>{question}</h3>
          <div className={style.answer}>{answer}</div>
      </div>
  );
}

export default CardFAQ;
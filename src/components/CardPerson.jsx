import style from './cardPerson.module.scss';
import clsx from "clsx";
import React from "react";

const person = {
    "first_name": "",
    "last_name": "",
    "image": "",
    "description": ""
}

const CardPerson = (({ first_name=person.first_name,
                      last_name=person.last_name,
                      image=person.image,
                      description=person.description,
                        accentColor="red"
                    }) => {

  return (
      <div className={clsx(style.card, style[accentColor], "card")}>
        <img
            className={style.image}
            src={image}
            alt={""}
        />

          <div className={clsx(style.title, style.accent,

              )}>{first_name}</div>
            <div className={style.title}
            >{last_name}</div>

        <div className={style.description}>{
            description.length < 25 ? description : description.slice(0, 25) + "..." }</div>
      </div>
  );
});
export default CardPerson;
import style from './cardPerson.module.scss';
import clsx from "clsx";
import React from "react";



const CardPerson = (({ first_name="",
                      last_name="",
                      photo_url="",
                      bio="",
                        achievements="",
                        accentColor="red"
                    }) => {

  return (
      <div className={clsx(style.card, style[accentColor], "card")}>
        <img
            className={style.image}
            src={photo_url}
            alt={""}
        />

          <div className={clsx(style.title, style.accent,

              )}>{first_name}</div>
            <div className={style.title}
            >{last_name}</div>

          {bio && <div className={style.description}>{bio}</div>}
            {/*bio.length < 40 ? bio : bio.slice(0, 40) + "..." }</div>}*/}
          {achievements &&<div className={style.description}>{achievements}</div>}
             {/*achievements.length < 40 ? achievements : achievements.slice(0, 40) + "..." }</div>}*/}
      </div>
  );
});
export default CardPerson;
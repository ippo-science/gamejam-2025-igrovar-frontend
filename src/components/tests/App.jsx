import style from './App.module.scss'
import clsx from "clsx";

function App() {
    const imgUrl = new URL('/public/logo.svg', import.meta.url).href
    return (
      <>
          <img id={"logo"} srcSet={imgUrl} alt={''}/>
          <div className={clsx(style.accent, style.fonth1)}>Заголовок</div>
          <div className={clsx(style.accent, style.fonth2)}>Заголовок</div>
          <div className={clsx(style.accent, style.fonth3)}>Заголовок</div>
          <div className={clsx(style.card, style.font1)}>Текст</div>
          <div className={clsx(style.card, style.font2)}>Текст</div>
          <div className={clsx(style.card, style.font3)}>Текст</div>
          <div className={clsx(style.card, style.font4)}>Текст</div>
          <div className={clsx(style.card, style.font5)}>Текст</div>
          <div className={clsx(style.card, style.font6)}>Текст</div>


      </>
  )
}

export default App

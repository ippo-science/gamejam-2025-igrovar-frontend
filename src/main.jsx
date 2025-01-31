import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/normalize.scss'
import './styles/colors.scss'
import './styles/fonts.scss'
import './styles/icon.scss'
// import App from './components/tests/App.jsx'
import Layout from "./components/Layout.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Layout />
    {/*<App />*/}
  </StrictMode>,
)

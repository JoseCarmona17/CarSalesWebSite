import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { NavBar } from './components/NavBar'
import { MainPage } from './pages/MainPage'
import { Footer } from './components/Footer'
import { Delivery } from './pages/Delivery'
import { AboutUs } from './pages/AboutUs'
import { Contact } from './pages/Contact'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar />
    {/* <MainPage />
    <Delivery />
    <AboutUs /> */}
    <Contact />
    <Footer />
  </StrictMode>,
)

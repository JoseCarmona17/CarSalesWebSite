import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {NavBar} from './components/NavBar';
import { MainPage } from './pages/MainPage';
import {AboutUs} from './pages/AboutUs';
import {Contact} from './pages/Contact';
import {Sold} from './pages/Sold';
import {Delivery} from './pages/Delivery';
import { Footer } from './components/Footer';
import { Search } from './pages/Search';


export function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sold" element={<Sold />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path='/search' element={<Search/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}


import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Shoes from './components/Shoes';
import Home from './components/Home';
import Men from './components/Men';
import Navbar from './components/Navbar';
import Women from './components/Women';
import Footer from './components/Footer';
import FAQ from './components/FAQ';
import Product from './components/Product';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/Contact' element={<Contact/>} />
        <Route path="/women" element={<Women/>}/>
        <Route path="/Men" element={<Men/>}/>
        <Route path='/Men/:articleCode' element={<Product/>}/>
        <Route path="/shoes" element={<Shoes/>}/>
        <Route path="/faq" element={<FAQ/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Main from './pages/main/Main'; 
import Content from './pages/content/Content';
import About from './pages/content/About';
import Contact from './pages/contact/Contact';
import '../src/styles/global.css';




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/main' element={<Main />} />
        <Route path='/main/content' element={<Content />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import './App.css';
import {ThemeProvider} from './pages/ThemeContext'
import Home from './pages/Home';
import AboutMe from  './pages/AboutMe';
import Contact from './pages/Contact';
import Project from './pages/Project';
import AfricanCountries from './pages/AfricanCountries'


function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
      <nav>
        <Link to='/' >Home</Link>
        <Link to='/about' >About Me</Link>
        <Link to='/contact' >Contact</Link>
        <Link to='/project' >Projects</Link>
      </nav>
      <Routes>
        <Route path='/' element ={<Home />} />
        <Route path='/about' element ={<AboutMe />} />
        <Route path='/contact' element ={<Contact />} />
        <Route path='/project' element ={<Project />} />
        <Route path='/africanCountries' element ={<AfricanCountries />} />
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import './App.css';
import {ThemeProvider} from './pages/ThemeContext'
import Home from './pages/Home';
import AboutMe from  './pages/AboutMe';
import Contact from './pages/Contact';
import Project from './pages/Project';
import AfricanCountries from './pages/AfricanCountries'
import StopWatch from './pages/StopWatch'
import Alarm from './pages/Alarm'
import Timer from './pages/Timer'


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
        <Route path='/stopWatch' element = {<StopWatch/>} />
        <Route path='/alarm' element = {<Alarm/>} />
        <Route path='/timer' element = {<Timer/>} />
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

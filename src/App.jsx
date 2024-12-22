
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import MyWork from './components/MyWork';
import FAQ from './components/FAQ';
import Testimonial from './components/Testimonial';
import Login from './components/Login';
import Signup from './components/Signup';
import NavBar from './components/NavBar';

function App() {
  

  return (
    <>
      <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/Services' element={<Services/>}/>
        <Route path='/MyWork' element={<MyWork/>}/>
        <Route path='/FAQ' element={<FAQ/>}/>
        <Route path='/Testimonial' element={<Testimonial/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Signup' element={<Signup/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

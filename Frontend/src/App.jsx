import React from 'react'
import Home from './Pages/Home'
import {Route , Routes} from "react-router-dom";
import About from './Pages/About';
import Servises from './Pages/Servises';
import Joinus from './Pages/Joinus';
import ContactForm from './Pages/ContactForm';
import ServisesDetails from './Pages/ServisesDetails';

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/services' element={<Servises />} />
      <Route path='/services/:id' element={<ServisesDetails />} />
      <Route path='/join-us' element={<Joinus />} />
      <Route path='/contact' element={<ContactForm />} />
    </Routes>
    </>
  )
}

export default App

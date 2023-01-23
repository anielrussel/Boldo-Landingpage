import { Route, Routes } from 'react-router-dom'
import './App.css'
import { About, Home, Navbar, Product, Services } from './components'
import ScrollToTop from './components/ScrollToTop';

function App() {

  return (
    <div className="App">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<About />} />
      </Routes>
    </div>
  )
}

export default App
 
// Created by: Russel M. Aniel
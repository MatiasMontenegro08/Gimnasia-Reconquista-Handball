import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/inicio/Home'
import Categoria from './pages/categoria/Categoria'
import Footer from './Components/Footer/Footer'
import Torneo from './pages/torneos/Torneo'
import Nosotros from './pages/nosotros/Nosotros'
import './App.css'


function App() {

  return (
    <BrowserRouter>

        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/categorias' element={<Categoria/>} />
          <Route path='/torneos' element={<Torneo/>} />
          <Route path='/nosotros' element={<Nosotros/>} />
          {/* <Route path='/galeria' element={} /> */}
          {/* <Route path='*' element={} /> */}
        </Routes>
        <Footer />
    </BrowserRouter>
  )
}

export default App
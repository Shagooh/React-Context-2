import './App.css'
import Navbar from './components/Navbar'
import Detalles from './views/Detalles'
import Home from './views/Home'
import Pokemones from './views/Pokemones'
import { Routes, Route } from 'react-router-dom'
function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pokemones' element={<Pokemones />} />
        <Route path='/pokemones/:id' element={<Detalles/>} />
      </Routes>

    </>
  )
}

export default App

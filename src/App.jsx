import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Acart from './pages/Acart'
import Detail from './pages/Detail'
import Products from './pages/Products'
import Success from './pages/Success'

const App = () => {
  return (
    <div className=' container mx-auto'>
      <Nav />

      <Routes>
        <Route path='/' element={<Products/>} />
        <Route path='/acart' element={<Acart/>} />
        <Route path='/success' element={<Success/>} />
        <Route path='/detail/:id' element={<Detail/>} />
      </Routes>
    </div>
  )
}

export default App
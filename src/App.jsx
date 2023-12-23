import { useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import NavBar from './components/NavBar'
import NotFound from './components/NotFound'
import ImageGenerationForm from './components/Generator'

function App() {

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path="/generate" element={<ImageGenerationForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

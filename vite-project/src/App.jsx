import React from 'react'
import Home from './Home'
import Section from './Section'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductCard from './ProductCard'
import SignIn from './SignIn'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/section" element={<Section />} />
        <Route path="/product" element={<ProductCard />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  )
}

export default App

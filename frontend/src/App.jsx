import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/theme.css'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Products from './pages/Products'
import DroneSchool from './pages/DroneSchool'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Careers from './pages/Careers'
import ProductDetail from './pages/ProductDetail'

function App() {
  const [site, setSite] = useState(null)

  useEffect(() => {
    fetch('/api/site')
      .then((r) => r.json())
      .then((json) => {
        if (json && json.success) setSite(json.data)
      })
      .catch((err) => console.error('Failed to fetch site', err))
  }, [])

  return (
    <BrowserRouter>
      <Header site={site} />
      <main>
        <Routes>
          <Route path="/" element={<Home site={site} />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/drone-school" element={<DroneSchool />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
      </main>
      <Footer site={site} />
    </BrowserRouter>
  )
}

export default App

import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Company from './pages/Company'
import Solutions from './pages/Solutions'
import Contact from './pages/Contact'
import Recruit from './pages/Recruit'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company/*" element={<Company />} />
          <Route path="/solutions/*" element={<Solutions />} />
          <Route path="/contact/*" element={<Contact />} />
          <Route path="/recruit/*" element={<Recruit />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App 
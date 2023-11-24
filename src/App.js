import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import Plansprice from './Plansprice';
import Products from './Products';
import Contactus from './Contactus';
import './App.css';
import './Style.css';
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plansprice" element={<Plansprice />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contactus" element={<Contactus />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App
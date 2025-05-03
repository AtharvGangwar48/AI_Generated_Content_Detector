import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Developers from './pages/Developers';
import Trial from './pages/Trial';
import Suggestion from './pages/Suggestion';
import './styles/App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/developers" element={<Developers />} />
            <Route path="/trial" element={<Trial />} />
            <Route path="/suggestion" element={<Suggestion />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default App;
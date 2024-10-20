import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import DriverOwner from './pages/DriverOwner';
import Contact from './pages/Contact';
import Earn100Profits from './pages/Earn100Profits';
import Support from './pages/Support';
import ScrollToTop from './components/ScrollToTop';


function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/driver-owner" element={<DriverOwner />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/support" element={<Support />} />
            <Route path="/earn-100-profits" element={<Earn100Profits />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import RideWithUs from './pages/RideWithUs';
import DriverOwner from './pages/DriverOwner';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Safety from './pages/Safety';
import Testimonials from './pages/Testimonials';
import Preloader from './components/Preloader';

function LoadingWrapper({ children }) {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000); // 1 second loading time
    return () => clearTimeout(timer);
  }, [location]);

  if (loading) {
    return <Preloader />;
  }

  return children;
}

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<LoadingWrapper><Home /></LoadingWrapper>} />
            <Route path="/ride-with-us" element={<LoadingWrapper><RideWithUs /></LoadingWrapper>} />
            <Route path="/driver-owner" element={<LoadingWrapper><DriverOwner /></LoadingWrapper>} />
            <Route path="/contact" element={<LoadingWrapper><Contact /></LoadingWrapper>} />
            <Route path="/faq" element={<LoadingWrapper><FAQ /></LoadingWrapper>} />
            <Route path="/safety" element={<LoadingWrapper><Safety /></LoadingWrapper>} />
            <Route path="/testimonials" element={<LoadingWrapper><Testimonials /></LoadingWrapper>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
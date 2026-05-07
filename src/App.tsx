import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Solution } from './components/Solution';
import { Features } from './components/Features';
import { Process } from './components/Process';
import { Pricing } from './components/Pricing';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FAQPage } from './components/FAQPage';
import { PortfolioPage } from './components/PortfolioPage';

function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const el = document.querySelector(location.hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [location.pathname, location.hash]);

  return null;
}

function HomePage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden selection:bg-brand-orange selection:text-white" style={{ background: 'linear-gradient(180deg, #f8fafc 0%, #f8fafc 100%)' }}>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Features />
        <Process />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function FAQPageLayout() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden selection:bg-brand-orange selection:text-white" style={{ background: 'linear-gradient(180deg, #f8fafc 0%, #f8fafc 100%)' }}>
      <Navbar />
      <main className="pt-24 pb-16">
        <FAQPage />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/faq" element={<FAQPageLayout />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>
    </Router>
  );
}

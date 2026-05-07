import { useState, useEffect } from 'react';
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

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', onLocationChange);

    return () => {
      window.removeEventListener('popstate', onLocationChange);
    };
  }, []);

  if (currentPath === '/faq') {
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

  if (currentPath === '/portfolio') {
    return <PortfolioPage />;
  }

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

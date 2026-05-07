import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'What We Do', href: '/#what-we-do' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'How To Start', href: '/#how-to-start' },
    { name: 'Pricing', href: '/#pricing' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-white py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="/" className="flex-shrink-0" onClick={() => setIsMobileMenuOpen(false)}>
            <Logo />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base font-bold text-slate-600 hover:text-brand-orange transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/#how-to-start"
              className="bg-brand-orange-safe px-6 py-2.5 rounded-full font-bold text-base transition-all shadow-md shadow-brand-orange/20 hover:shadow-lg hover:shadow-brand-orange/30 active:scale-95"
            >
              Get Started
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-600 hover:text-brand-orange p-2"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out absolute w-full bg-white border-b border-slate-100 ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-1 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-4 text-base font-semibold text-slate-900 border-b border-slate-50 hover:text-brand-orange"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4">
            <a
              href="/#how-to-start"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-center bg-brand-orange-safe px-6 py-3 rounded-xl font-medium"
            >
              Get Started Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

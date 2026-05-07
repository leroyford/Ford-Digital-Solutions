import { Navbar } from './Navbar';
import { Footer } from './Footer';
import portfolio1_jpg from '../assets/portfolio1.jpg';
import portfolio2_jpg from '../assets/portfolio2.jpg';
import portfolio3_jpg from '../assets/portfolio3.jpg';
import portfolio4_jpg from '../assets/portfolio4.jpg';
import portfolio5_jpg from '../assets/portfolio5.jpg';

const galleryImages = [
  portfolio1_jpg,
  portfolio2_jpg,
  portfolio3_jpg,
  portfolio4_jpg,
  portfolio5_jpg
];

export function PortfolioPage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden selection:bg-brand-orange selection:text-white" style={{ background: 'linear-gradient(180deg, #f8fafc 0%, #f8fafc 100%)' }}>
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-display font-medium text-brand-purple mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              See how we've transformed text-only menus into stunning visual experiences for leading restaurants.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {galleryImages.map((src, index) => (
              <div key={index} className="w-full rounded-3xl overflow-hidden shadow-2xl relative bg-white group cursor-pointer hover:shadow-brand-orange/20 transition-all duration-500">
                <img 
                  src={src} 
                  alt={`Portfolio example ${index + 1}`} 
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

import { motion } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';
import { Logo } from './Logo';

export function Solution() {
  const navigate = useNavigate();
  return (
    <section className="bg-slate-50 border-y border-slate-200" id="what-we-do">
      
      {/* Solution Header block */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h3 className="text-center text-3xl md:text-5xl font-display font-bold text-brand-orange-safe mb-4">
          The Solution <span className="text-brand-purple font-light mx-2">|</span> What We Do.
        </h3>
      </div>

      {/* Split Hero inside Solution */}
      <div className="w-full bg-brand-purple-dark text-white relative overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%239C92AC\\' fill-opacity=\\'0.4\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}></div>
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-stretch">
          
          <div className="w-full md:w-5/12 p-8 md:p-16 lg:pr-24 flex flex-col justify-center">
            <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight mb-6">
              We Transform <br/>
              <span className="text-brand-orange">Text-Only <br/> Menus</span> <br/>
              Into Premium <br/>
              <span className="text-brand-purple bg-white px-2 py-1 mt-1 inline-block -mx-2 rounded-md mix-blend-screen text-slate-900">Image Menus.</span>
            </h2>
            <div className="w-24 h-1.5 bg-brand-orange mb-8 rounded-full"></div>
            <p className="text-xl md:text-2xl text-slate-300 font-medium mb-10 leading-relaxed md:w-4/5">
              At a fraction of the cost of <br/>
              a photographer, and <br/>
              delivered in 3-7 days.
            </p>
          </div>

          <div className="w-full md:w-7/12 relative min-h-[400px] md:min-h-[600px] overflow-hidden rounded-tl-[100px] md:rounded-tl-full bg-slate-800">
            <img 
              src="/images/happy-owner.png" 
              alt="Happy restaurant owner" 
              className="absolute inset-0 w-full h-full object-cover object-center opacity-80"
            />
            {/* Gradient overlay for blending */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-purple-dark via-transparent to-transparent"></div>
            <div className="absolute inset-0 bg-brand-purple/10 mix-blend-multiply"></div>
            
            {/* Logo bug bottom right */}
            <div className="absolute bottom-10 right-10 flex flex-col items-end">
              <div className="bg-white/95 backdrop-blur rounded-2xl p-4 shadow-2xl">
                <Logo />
              </div>
              <p className="text-white font-medium text-sm mt-3 shadow-sm bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm">
                Your Dishes Deserve To Be Seen.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards Section */}
      <div className="max-w-5xl mx-auto px-4 py-16 -mt-12 relative z-20 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 text-center border-t-4 border-brand-purple flex flex-col justify-center"
          >
            <div className="text-5xl font-display font-light text-slate-800 mb-2">30%</div>
            <p className="text-slate-600 font-medium leading-snug">Avg order increase<br/>with image menus</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-[#FFF4eb] rounded-3xl p-8 shadow-xl text-center border-t-4 border-brand-orange flex flex-col justify-center transform md:-translate-y-4"
          >
            <p className="text-brand-orange-light font-medium mb-2 uppercase tracking-wide text-sm">Traditional food<br/>photography costs</p>
            <div className="text-6xl font-display font-bold text-brand-orange">$8K</div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 text-center border-t-4 border-slate-300 flex flex-col justify-center"
          >
            <div className="text-5xl font-display font-light text-slate-800 mb-2">67%</div>
            <p className="text-slate-600 font-medium leading-snug">Diners influenced by<br/>menu photos</p>
          </motion.div>
        </div>
      </div>

      {/* Banner above gallery */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <img 
          src="/images/latest-banner.jpg" 
          alt="Boost Orders with Visual Menus" 
          className="w-full h-auto rounded-3xl shadow-2xl"
        />
      </div>

      <div className="w-full overflow-hidden bg-white py-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 flex justify-between items-end">
          <div>
            <h3 className="text-2xl font-display font-bold text-brand-purple">Our Latest Menu Transformations</h3>
            <p className="text-slate-500 mt-2">Swipe to see more or click to view full gallery</p>
          </div>
          <Link to="/portfolio" className="hidden sm:inline-flex items-center text-brand-orange-safe font-bold hover:text-brand-orange transition-colors">
            View All <span className="ml-2">→</span>
          </Link>
        </div>
        
        {/* Revolving Gallery (Marquee) */}
        <div 
          className="relative flex overflow-x-hidden group cursor-pointer" 
          onClick={(e) => {
            e.preventDefault();
            navigate('/portfolio');
          }}
        >
          <div className="flex animate-[marquee_40s_linear_infinite] group-hover:[animation-play-state:paused] whitespace-nowrap">
            {/* Double the images for seamless looping */}
            {[...Array(2)].map((_, loopIndex) => (
              <div key={loopIndex} className="flex gap-6 px-3">
                {[
                  "/images/Before&After.jpg",
                  "/images/Before&After2.jpg",
                  "/images/Before&After3.jpg",
                  "/images/Before&After4.jpg",
                  "/images/Before&After5.jpg"
                ].map((src, idx) => (
                  <div key={idx} className="w-[300px] md:w-[450px] aspect-[4/3] rounded-2xl overflow-hidden shadow-md flex-shrink-0 relative group/item">
                    <img 
                      src={src} 
                      alt={`Portfolio Menu ${idx + 1}`} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover/item:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/item:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                      <span className="text-white font-bold bg-brand-orange px-6 py-3 rounded-full">View Gallery</span>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-8 text-center sm:hidden px-4">
           <Link to="/portfolio" className="inline-flex items-center justify-center w-full bg-slate-100 text-slate-800 font-bold hover:bg-slate-200 transition-colors py-3 rounded-xl">
            View Full Portfolio
          </Link>
        </div>
      </div>

    </section>
  );
}

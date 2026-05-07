import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';



export function Hero() {
  return (
    <section className="relative pt-[88px] pb-16 md:pb-24 overflow-hidden">
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-[100vw] overflow-hidden mb-12 md:mb-16"
      >
        <img 
          src="/images/hero1.jpg" 
          alt="Premium Visual Menus" 
          className="w-full h-auto block"
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold text-slate-900 leading-tight tracking-tight mb-6"
          >
            Your Dishes Deserve <br className="hidden md:block"/> 
            <span className="italic text-brand-purple-safe">To Be Seen.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-600 mb-8 max-w-2xl mx-auto"
          >
            We transform Text-Only Menus into <span className="font-bold">premium visual menus</span>, in 48 hours, that <span className="font-bold">boost orders</span> by 30-70%.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="#how-to-start" className="w-full sm:w-auto bg-brand-orange-safe px-8 py-4 rounded-full font-semibold text-lg transition-transform hover:scale-105 shadow-xl shadow-brand-orange/20 flex items-center justify-center gap-2 group">
              Transform My Menu
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#what-we-do" className="w-full sm:w-auto px-8 py-4 rounded-full font-medium text-slate-700 hover:bg-slate-100 transition-colors">
              See How It Works
            </a>
          </motion.div>
        </div>

        {/* Hero Visual */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl ring-1 ring-slate-900/5"
        >
          <img 
            src="/images/hero2.png" 
            alt="Hero Menu Transformation" 
            className="w-full h-auto object-cover block"
          />
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-brand-orange/5 blur-3xl rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-32 w-80 h-80 rounded-full bg-brand-purple/5 blur-3xl pointer-events-none"></div>
    </section>
  );
}

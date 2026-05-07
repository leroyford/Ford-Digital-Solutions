import { motion } from 'motion/react';
import pricing_addons_png from '../assets/pricing-addons.png';

export function Pricing() {
  return (
    <section className="py-24 bg-white" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-display font-medium text-brand-purple mb-6">
            Pricing
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">
            Printable Menu Page Files:
          </h3>
          <p className="text-xl md:text-2xl font-light text-slate-600">
            Print-Ready Pdf (High-Resolution)
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto border-b border-slate-200 pb-16">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center p-8 border-r border-slate-100 last:border-0"
          >
            <div className="inline-block bg-brand-orange-safe text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-6">Option 1</div>
            <h4 className="text-3xl font-display font-bold text-slate-900 mb-4">
              Up to 25 Dish Menu
            </h4>
            <div className="text-5xl font-bold text-brand-orange-safe">
              $497
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center p-8 border-r border-slate-100 last:border-0"
          >
            <div className="inline-block bg-brand-orange-safe text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-6">Option 2</div>
            <h4 className="text-3xl font-display font-bold text-slate-900 mb-4">
              Up to 50 Dish Menu
            </h4>
            <div className="text-5xl font-bold text-brand-orange-safe">
              $897
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center p-8"
          >
            <div className="inline-block bg-brand-orange-safe text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-6">Option 3</div>
            <h4 className="text-3xl font-display font-bold text-slate-900 mb-4">
              Up to 75 Dish Menu
            </h4>
            <div className="text-5xl font-bold text-brand-orange-safe">
              $1,297
            </div>
          </motion.div>

        </div>

        {/* Add-ons Section */}
        <div className="mt-24 max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-display font-medium text-brand-purple mb-8 text-center">
            Add-ons
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Basic Addons */}
            <div className="bg-white border-2 border-slate-100 rounded-3xl p-8 md:p-10 shadow-lg">
              <h4 className="text-2xl font-bold text-brand-orange mb-8 uppercase tracking-wide">Basic</h4>
              <ul className="space-y-6 text-lg text-slate-700">
                <li>
                  <span className="font-bold text-xl text-slate-900">1. Choose Serving Dish Style:</span> <span className="text-brand-orange font-bold text-xl">$47</span>
                  <p className="text-base text-slate-500 mt-1 ml-4">(Simply send us a photo of plate style)</p>
                </li>
                <li>
                  <span className="font-bold text-xl text-slate-900">2. Physical Menu Jackets + Delivery:</span>
                  <ul className="pl-4 mt-2 space-y-2">
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-orange"></div> Vinyl Jacket 1 + laminated pages: <span className="text-brand-orange font-bold text-xl ml-auto">$47</span></li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-orange"></div> Vinyl Jacket 2 + laminated pages: <span className="text-brand-orange font-bold text-xl ml-auto">$77</span></li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-orange"></div> Faux/Gen. Leather Premium: <span className="text-brand-orange font-bold text-xl ml-auto">$97-$197</span></li>
                  </ul>
                </li>
                <li>
                  <span className="font-bold text-xl text-slate-900">3. Multilingual / Translated Menus:</span>
                  <ul className="pl-4 mt-2 space-y-2">
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-orange"></div> Language Pack ~ For a 50-item menu:</li>
                    <li className="flex items-center gap-2 pl-4"><div className="w-1 h-1 rounded-full bg-slate-400"></div> Any 1 extra language: <span className="text-brand-orange font-bold text-xl ml-auto">$197</span></li>
                    <li className="flex items-center gap-2 pl-4"><div className="w-1 h-1 rounded-full bg-slate-400"></div> Any 2 languages: <span className="text-brand-orange font-bold text-xl ml-auto">$297</span></li>
                    <li className="flex items-center gap-2 pl-4"><div className="w-1 h-1 rounded-full bg-slate-400"></div> Any 3 languages: <span className="text-brand-orange font-bold text-xl ml-auto">$397</span></li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-orange"></div> Dual-language menu design</li>
                    <p className="text-base text-slate-500 pl-4">(Side-by-side layout)</p>
                  </ul>
                </li>
              </ul>
            </div>

            {/* Premium Addons */}
            <div className="bg-white border-2 border-brand-purple rounded-3xl p-8 md:p-10 shadow-xl shadow-brand-purple/10">
              <h4 className="text-2xl font-bold text-brand-purple mb-8 uppercase tracking-wide">Premium</h4>
              <ul className="space-y-6 text-lg text-slate-700">
                <li>
                  <span className="font-bold text-xl text-slate-900">4. Seasonal (or Custom) Menu Refresh:</span>
                  <p className="text-base text-brand-purple font-medium mt-1 ml-4">(50% off original price)</p>
                </li>
                <li>
                  <span className="font-bold text-xl text-slate-900">5. Social Media Assets:</span> <span className="text-brand-purple font-bold text-xl">$147-$297</span>
                  <p className="text-base text-slate-500 mt-1 ml-4">(Dishes optimised for IG/FB, 5-10 posts)</p>
                </li>
                <li>
                  <span className="font-bold text-xl text-slate-900">6. Integrated-Ordering System:</span> <span className="text-brand-purple font-bold text-xl">$147 /pm</span>
                </li>
                <li>
                  <span className="font-bold text-xl text-slate-900">7. Branded Logo Menus:</span> <span className="text-brand-purple font-bold text-xl">$197</span>
                </li>
                <li>
                  <span className="font-bold text-xl text-slate-900">8. Priority 24-hr Turnaround:</span> <span className="text-brand-purple font-bold text-xl">$297</span>
                </li>
                <li>
                  <span className="font-bold text-xl text-slate-900">9. Window Menu Poster (A1/A0):</span> <span className="text-brand-purple font-bold text-xl">$297-$397</span>
                </li>
                <li>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-bold text-xl text-slate-900">10. QR Code Digital Menu:</span> 
                    <span className="text-brand-purple font-bold text-xl">$297</span>
                    <span className="bg-brand-purple text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase">Popular</span>
                  </div>
                  <p className="text-base text-slate-500 mt-1 ml-4">(Mobile-friendly + Printables)</p>
                </li>
                <li>
                  <span className="font-bold text-xl text-slate-900">11. Social Media Management / Automation:</span> <span className="text-brand-purple font-bold text-xl">$197-$397 /pm</span>
                </li>
                <li>
                  <span className="font-bold text-xl text-slate-900">12. Website Launch/Redesign:</span> <span className="text-brand-purple font-bold text-xl">From $2,997</span>
                </li>
              </ul>
            </div>

          </div>

          <div className="mt-16 w-full rounded-3xl overflow-hidden shadow-2xl relative group w-full mx-auto max-w-[1600px]">
            <img 
              src={pricing_addons_png} 
              alt="Premium menu examples" 
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

        </div>
      </div>
      
    </section>
  );
}

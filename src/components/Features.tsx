import { X, Check } from 'lucide-react';


export function Features() {
  const painPoints = [
    "You don't need to buy ingredients",
    "You don't need to cook anything",
    "You don't need a photographer",
    "You don't need to close for a day",
  ];

  const benefits = [
    "Boost customer orders by 30-70%",
    "Save thousands on photographers",
    "No need for ingredients or prep",
    "Have professional looking menus",
    "Easy QR code for customers",
  ];

  return (
    <section className="py-24 bg-white" id="past-clients">
      
      {/* Banner / Visual comparison */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mt-16 w-full mx-auto">
          <div className="w-full mx-auto mb-10 rounded-2xl overflow-hidden shadow-xl border border-slate-100 relative group max-h-[800px]">
            <img 
              src="/images/outdated-menu.jpg" 
              alt="The impact of a visual menu" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <h3 className="text-3xl font-display font-bold text-brand-purple-safe mb-4">
            Outdated Text-Only Menus Hurt Sales.
          </h3>
          <h4 className="text-3xl font-display font-bold text-brand-orange-safe inline-block px-6 py-2 rounded-xl" style={{ backgroundColor: 'rgba(255,128,0,0.1)' }}>
            While Photo-Menus Drive Orders
          </h4>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          
          {/* Pain Points Removed lists */}
          <div className="space-y-6">
            {painPoints.map((text, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className="bg-red-50 p-2 rounded-full flex-shrink-0">
                  <X className="w-6 h-6 text-red-500" strokeWidth={3} />
                </div>
                <span className="text-lg font-semibold text-slate-800">{text}</span>
              </div>
            ))}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
               <div className="bg-brand-orange/10 p-2 rounded-full flex-shrink-0">
                  <Check className="w-6 h-6 text-brand-orange" strokeWidth={3} />
                </div>
                <span className="text-xl font-bold text-brand-orange uppercase tracking-wide">We Handle Everything.</span>
            </div>
          </div>

          {/* Benefits */}
          <div className="space-y-6">
            {benefits.map((text, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className="bg-brand-orange/10 p-2 rounded-full flex-shrink-0">
                  <Check className="w-6 h-6 text-brand-orange" strokeWidth={3} />
                </div>
                <span className="text-lg font-semibold text-slate-800">{text}</span>
              </div>
            ))}
          </div>

        </div>

        <div className="mt-24 text-center max-w-4xl mx-auto bg-slate-50 border border-brand-purple/10 rounded-3xl p-10 md:p-16 relative">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[120px] text-brand-purple/20 font-serif leading-none h-10 overflow-visible">"</div>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-900 leading-relaxed z-10 relative">
            "Menus With Beautiful Dish Images Can Increase Sales Of Those Dishes Significantly."
          </h2>
        </div>
      </div>

    </section>
  );
}

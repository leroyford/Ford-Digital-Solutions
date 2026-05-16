import { motion } from 'motion/react';
import { X } from 'lucide-react';




export function Problem() {
  return (
    <section className="py-24 bg-white" id="problem">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
        <h2 className="text-3xl md:text-4xl font-display font-medium text-slate-900 leading-tight mb-8">
          "Without Photos, Customers Hesitate To Order, <br className="hidden md:block"/>
          <span className="font-bold">Especially Tourists Or First-Timers.</span>"
        </h2>
        <h2 className="text-3xl md:text-4xl font-display font-medium text-brand-orange-safe leading-tight mb-8">
          "When Customers Don't See Photos, They Play It Safe. <span className="font-bold">They Order The Most Familiar Thing. They Spend Less."</span>
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-center text-3xl md:text-5xl font-display font-bold text-brand-purple-safe mb-16">
          The Problem <span className="text-brand-orange font-light mx-2">|</span> The Old Way.
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Old way 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden mb-6 relative group">
              <img 
                src="/images/problem1.jpg" 
                alt="Buying ingredients" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
            </div>
            <X className="w-14 h-14 text-brand-orange mb-4" strokeWidth={3} />
            <h4 className="text-lg font-bold text-slate-900 text-center tracking-wide">
              Buying All The Ingredients<br />For The Menu Dishes
            </h4>
          </motion.div>

          {/* Old way 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center"
          >
            <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden mb-6 relative group">
              <img 
                src="/images/problem2.jpg" 
                alt="Chef cooking" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
            </div>
            <X className="w-14 h-14 text-brand-orange mb-4" strokeWidth={3} />
            <h4 className="text-lg font-bold text-slate-900 text-center tracking-wide">
              Spending Time Cooking Every<br />Menu Dish, Then Cleaning
            </h4>
          </motion.div>

          {/* Old way 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden mb-6 relative group">
              <img 
                src="/images/problem3.jpg" 
                alt="Photography studio" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
            </div>
            <X className="w-14 h-14 text-brand-orange mb-4" strokeWidth={3} />
            <h4 className="text-lg font-bold text-slate-900 text-center tracking-wide">
              Renting a Studio, Hiring<br />Expensive Photographer
            </h4>
          </motion.div>
        </div>

        <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl text-center">
          <p className="text-xl md:text-2xl font-bold text-slate-900">
            This Takes <span className="text-brand-orange">3-4 Days</span> Of Your Time 
            <span className="mx-2 text-slate-300">|</span> 
            + <span className="text-brand-purple">$3,000-$8,000</span> In Expense!
          </p>
        </div>
      </div>
    </section>
  );
}

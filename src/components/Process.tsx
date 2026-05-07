import React from 'react';
import { UploadCloud, PenTool, FileText, Clock, UtensilsCrossed } from 'lucide-react';
import { motion } from 'motion/react';
import process1_jpg from '../assets/process1.jpg';
import unsplash1_jpg from '../assets/unsplash1.jpg';

export function Process() {
  const steps = [
    {
      number: "1",
      title: "You Send Us Your Text-Only Menu",
      icon: <UploadCloud className="w-12 h-12 text-brand-orange" strokeWidth={1.5} />,
      color: "border-brand-orange text-brand-orange"
    },
    {
      number: "2",
      title: "We Design Your New Menu & Send For Approval",
      icon: <PenTool className="w-12 h-12 text-brand-orange" strokeWidth={1.5} />,
      color: "border-brand-orange text-brand-orange"
    },
    {
      number: "3",
      title: "We Send You Print-ready PDF or Digital QR menu",
      icon: <FileText className="w-12 h-12 text-brand-orange" strokeWidth={1.5} />,
      color: "border-brand-orange text-brand-orange"
    },
    {
      number: "4",
      title: "New Menus Delivered in 2-7 days",
      icon: <Clock className="w-12 h-12 text-brand-orange" strokeWidth={1.5} />,
      color: "border-brand-orange text-brand-orange",
      colSpan: "md:col-start-2"
    },
    {
      number: "5",
      title: "Your Customers Enjoy A New Visual Menu",
      icon: <UtensilsCrossed className="w-12 h-12 text-brand-orange" strokeWidth={1.5} />,
      color: "border-brand-orange text-brand-orange"
    }
  ];

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200 overflow-hidden" id="how-to-start">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-light text-brand-orange-safe mb-4">
            How To Start?
          </h2>
          <h3 className="text-5xl md:text-6xl font-display font-bold text-brand-purple-safe">
            5 Simple Steps
          </h3>
        </div>

        <div className="max-w-5xl mx-auto relative">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 relative z-10">
            {steps.slice(0, 3).map((step, idx) => (
              <StepCard key={idx} step={step} delay={idx * 0.1} />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10 w-full md:w-3/4 mx-auto">
             <div className="md:col-span-2">
                 <StepCard step={steps[3]} delay={0.3} />
             </div>
             <div className="md:col-span-2">
                 <StepCard step={steps[4]} delay={0.4} />
             </div>
          </div>
          
          <div className="mt-16 w-full rounded-3xl overflow-hidden shadow-2xl relative group mx-auto max-w-[1600px]">
            <img 
              src={process1_jpg} 
              alt="Process example" 
              className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
          </div>

        </div>
      </div>
      
      <div className="mt-32 relative bg-brand-purple overflow-hidden py-24">
        <img 
          src={unsplash1_jpg} 
          alt="Fine dining background" 
          className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity" 
        />
        <div className="absolute inset-0 bg-brand-purple-dark/40 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-purple-dark/80 via-brand-purple/50 to-brand-purple-dark/80"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-brand-orange mb-6">
            VISUAL MENUS <br className="hidden md:block"/>
            INSTANTLY BOOST ORDERS BY UP TO 30-70%.
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 font-light tracking-wide mb-12">
            AI Transforms Dull Text Menus into <span className="text-white font-medium">Irresistibly Appealing Visual Masterpieces.</span>
          </p>
          <a href="#pricing" className="inline-block bg-white text-slate-900 font-bold px-10 py-5 rounded-full uppercase tracking-widest text-sm hover:scale-105 transition-transform hover:shadow-2xl shadow-indigo-500/20">
            DITCH THE PHOTOSHOOT. CONTACT US TODAY!
          </a>
        </div>
      </div>
    </section>
  );
}

function StepCard({ step, delay }: { step: any, delay: number, key?: React.Key }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className={`bg-white rounded-3xl p-8 border-2 ${step.color} shadow-xl shadow-brand-orange/5 flex flex-col items-center text-center relative pt-12`}
    >
      <div className={`absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-white ${step.color} border-2 rounded-xl flex items-center justify-center font-bold text-2xl shadow-md -rotate-3`}>
        {step.number}
      </div>
      <div className="mb-6 opacity-80">
        {step.icon}
      </div>
      <h4 className="text-xl font-bold text-brand-purple leading-snug">
        {step.title}
      </h4>
    </motion.div>
  );
}

import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="py-12 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-slate-900 rounded-[2.5rem] p-10 md:p-16 flex flex-col md:flex-row justify-between items-center gap-10 overflow-hidden relative">
          
          {/* Subtle decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500 rounded-full blur-[100px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative z-10 max-w-xl">
             <p className="text-teal-500 font-bold text-xs tracking-wider uppercase mb-4">Try it now</p>
             <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to level up your payment process?</h2>
             <p className="text-slate-400 text-sm md:text-base">Supports small businesses with simple invoicing, powerful integrations, and cash flow management tools.</p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <button className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-4 px-8 rounded-xl transition-all shadow-lg shadow-teal-500/20 whitespace-nowrap">
              Get Started Now
            </button>
            <button className="bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-medium py-4 px-8 rounded-xl transition-all flex items-center justify-center gap-2 whitespace-nowrap">
              Learn More <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTA;
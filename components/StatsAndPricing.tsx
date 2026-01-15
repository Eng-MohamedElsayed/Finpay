import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const StatsAndPricing: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mission Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-teal-600 font-semibold text-xs tracking-wider uppercase mb-3">Our Mission</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">We've helped innovative companies</h2>
          <p className="text-slate-500 text-sm">Hundreds of all sizes and across all industries have made a big improvements with us.</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-24 border-b border-slate-100 pb-16">
          <div>
            <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">24%</div>
            <div className="text-sm font-medium text-slate-500">Revenue business</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">180K</div>
            <div className="text-sm font-medium text-slate-500">In annual revenue</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">10+</div>
            <div className="text-sm font-medium text-slate-500">Months of runway</div>
          </div>
        </div>

        {/* Pricing */}
        <div className="text-center mb-10">
           <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Choose Plan:</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Basic Plan */}
          <div className="bg-slate-50 rounded-3xl p-8 relative hover:shadow-lg transition-all cursor-pointer group h-64 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-slate-900">Plus</h3>
            </div>
            <div className="flex justify-between items-end">
              <span className="text-xl font-medium text-slate-900">£2.99/month</span>
              <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-colors">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Premium Plan */}
          <div className="bg-teal-600 rounded-3xl p-8 relative hover:shadow-xl hover:shadow-teal-500/20 transition-all cursor-pointer group h-64 flex flex-col justify-between overflow-hidden">
             {/* Geometric Pattern Background */}
            <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute right-[-20%] top-[-20%] w-[80%] h-[120%] bg-white transform rotate-12"></div>
                <div className="absolute left-[-10%] bottom-[-40%] w-[60%] h-[100%] bg-slate-900 transform -rotate-45"></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white">Premium</h3>
            </div>
            <div className="flex justify-between items-end relative z-10">
              <span className="text-xl font-medium text-white">£6.99/month</span>
              <div className="w-10 h-10 rounded-full bg-teal-500/50 border border-teal-400 flex items-center justify-center text-white group-hover:bg-white group-hover:text-teal-600 transition-colors">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default StatsAndPricing;
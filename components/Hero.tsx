import React from 'react';
import { ArrowRight, Wifi, CreditCard, LayoutDashboard } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tight mb-6">
              Get paid early <br />
              save automatically <br />
              all your pay.
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
              Supports small businesses with simple invoicing, powerful integrations, and cash flow management tools.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 max-w-md mb-12">
              <input 
                type="email" 
                placeholder="Your business email" 
                className="flex-1 bg-white border border-slate-200 rounded-full px-6 py-3.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all shadow-sm"
              />
              <button className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-3.5 px-8 rounded-full flex items-center justify-center gap-2 shadow-lg shadow-teal-500/30 transition-all">
                Get Started <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Logos */}
            <div className="flex flex-wrap gap-8 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <span className="font-bold text-xl text-slate-800">Klarna.</span>
              <span className="font-bold text-xl text-slate-800">coinbase</span>
              <span className="font-bold text-xl text-slate-800">instacart</span>
            </div>
          </div>

          {/* Right Visuals (Simulated UI) */}
          <div className="relative h-[500px] w-full hidden lg:block">
            {/* Background Decor */}
            <div className="absolute top-10 right-0 w-[120%] h-[120%] bg-gradient-to-bl from-slate-100 to-transparent rounded-full -z-10 blur-3xl opacity-60"></div>

            {/* Credit Card */}
            <div className="absolute top-0 right-10 z-20 w-72 h-44 bg-gradient-to-br from-teal-500 to-teal-700 rounded-2xl shadow-2xl p-6 text-white transform rotate-6 hover:rotate-0 transition-transform duration-500">
              <div className="flex justify-between items-start mb-8">
                <div className="w-10 h-6 bg-white/20 rounded-md"></div>
                <Wifi className="w-6 h-6 rotate-90" />
              </div>
              <div className="font-mono text-xl tracking-wider mb-2">234 **** ****</div>
              <div className="flex justify-between items-end mt-4">
                <span className="text-xs uppercase opacity-80">Credit Card</span>
                <span className="font-bold text-lg">VISA</span>
              </div>
            </div>

            {/* Dashboard Card */}
            <div className="absolute top-24 right-48 z-10 w-80 bg-white rounded-2xl shadow-xl border border-slate-100 p-5 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-600">
                   <div className="font-bold">D</div>
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">Dipa Inhouse</div>
                  <div className="text-xs text-slate-500">dipainhouse@gmail.com</div>
                </div>
              </div>
              
              <div className="mb-4">
                 <div className="text-xs text-slate-500 mb-1">Invoice Amount</div>
                 <div className="text-3xl font-bold text-slate-900">$1,876,580</div>
                 <div className="text-xs text-slate-400 mt-1">April 21, 2024</div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 border border-teal-100 bg-teal-50/50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <CreditCard className="w-4 h-4 text-slate-500" />
                    <span className="text-sm font-medium">Credit Card</span>
                  </div>
                  <div className="w-3 h-3 rounded-full bg-teal-500 ring-2 ring-teal-200"></div>
                </div>
                <div className="flex items-center justify-between p-3 border border-slate-100 rounded-xl hover:bg-slate-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <LayoutDashboard className="w-4 h-4 text-slate-500" />
                    <span className="text-sm font-medium">Bank Account</span>
                  </div>
                  <div className="w-3 h-3 rounded-full border border-slate-300"></div>
                </div>
              </div>

              <button className="w-full mt-6 bg-slate-900 text-white text-sm font-medium py-3 rounded-xl hover:bg-slate-800 transition-colors">
                Pay Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
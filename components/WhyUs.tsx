import React from 'react';
import { AreaChart, Area, ResponsiveContainer, Tooltip } from 'recharts';
import { ArrowLeftRight, Landmark } from 'lucide-react';

const data = [
  { name: 'Jan', value: 2000 },
  { name: 'Feb', value: 4500 },
  { name: 'Mar', value: 3800 },
  { name: 'Apr', value: 6200 },
  { name: 'May', value: 5400 },
  { name: 'Jun', value: 8700 },
];

const WhyUs: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-teal-600 font-semibold text-xs tracking-wider uppercase mb-3">Why Us</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Why they prefer Finpay</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Card 1: Businesses Count */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <h3 className="text-5xl md:text-7xl font-bold text-teal-500 mb-4">3k+</h3>
            <p className="text-lg font-medium text-slate-900">Businesses already running <br/> on Finpay</p>
          </div>

          {/* Card 2: Instant Withdraw */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col justify-center">
            <h3 className="text-xl font-bold text-slate-900 mb-8">Instant Withdraw your funds <br/> at any time</h3>
            <div className="flex items-center justify-center gap-8">
              <div className="w-16 h-16 bg-teal-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-teal-500/30">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <ArrowLeftRight className="w-6 h-6 text-slate-300 animate-pulse" />
              <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-white shadow-lg">
                <Landmark className="w-8 h-8" />
              </div>
            </div>
          </div>

          {/* Card 3: Asset Volatility Chart */}
          <div className="md:col-span-2 bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow overflow-hidden">
             <div className="flex flex-col md:flex-row justify-between items-end mb-6">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">No asset volatility</h3>
                  <p className="text-sm text-slate-500 max-w-xs">Generate returns on your cash reserves without making any investments.</p>
                </div>
                <div className="text-right">
                   <p className="text-xs text-slate-400 mb-1">Summary</p>
                   <p className="text-2xl font-bold text-slate-900">$1,876,580</p>
                </div>
             </div>
             
             <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data}>
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#14b8a6" stopOpacity={0.2}/>
                        <stop offset="95%" stopColor="#14b8a6" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff' }}
                      itemStyle={{ color: '#fff' }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#14b8a6" 
                      strokeWidth={3}
                      fillOpacity={1} 
                      fill="url(#colorValue)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
             </div>
             <div className="flex justify-between mt-4 px-2">
                {data.map(d => (
                  <span key={d.name} className="text-xs text-slate-400">{d.name}</span>
                ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
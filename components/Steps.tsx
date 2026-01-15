import React from 'react';

const Steps: React.FC = () => {
  const steps = [
    {
      id: "1",
      title: "Open your account",
      desc: "Sign up to finpay and set up your account from the dashboard."
    },
    {
      id: "2",
      title: "Transfer your money",
      desc: "Move money from to another account into and start to earning up."
    },
    {
      id: "3",
      title: "Watch your balance grow",
      desc: "Accessed instantly and remain insulated from market volatility."
    }
  ];

  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-teal-500 font-semibold text-xs tracking-wider uppercase mb-3">Step</p>
          <h2 className="text-3xl md:text-4xl font-bold max-w-xl leading-tight">Maximize your returns with a Reserve account that generates.</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="relative group">
              {/* Line connector for desktop */}
              {step.id !== "3" && (
                <div className="hidden md:block absolute top-8 left-12 w-full h-[1px] bg-slate-800 -z-10"></div>
              )}
              
              <div className="mb-6">
                <span className="text-5xl md:text-6xl font-bold text-slate-700 group-hover:text-teal-500 transition-colors duration-300">
                  {step.id}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed max-w-xs">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
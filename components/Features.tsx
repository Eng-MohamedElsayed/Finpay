import React from 'react';
import { RefreshCw, Landmark, ShieldCheck } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <RefreshCw className="w-6 h-6 text-teal-600" />,
      title: "Free transfers",
      description: "Create a financial experience and automate repeat purchases by scheduling recurring payments."
    },
    {
      icon: <Landmark className="w-6 h-6 text-teal-600" />,
      title: "Multiple account",
      description: "Run your operations with cash from your account and generate yield on funds stored in your account."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-teal-600" />,
      title: "Unmatched security",
      description: "Securely manage your finances with organization-wide MFA, card-locking, and account-level controls."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 max-w-3xl">
          <p className="text-teal-600 font-semibold text-xs tracking-wider uppercase mb-3">Future Payment</p>
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Experience that grows <br/> with your scale.</h2>
          <p className="text-slate-500 max-w-lg">Design a financial operating system that works for your business and streamlined cash flow management</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center mb-6 group-hover:bg-teal-100 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
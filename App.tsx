import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import WhyUs from './components/WhyUs';
import Steps from './components/Steps';
import StatsAndPricing from './components/StatsAndPricing';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <WhyUs />
        <Steps />
        <StatsAndPricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
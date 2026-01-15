import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-slate-50/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              F
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900">Finpay</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Products</a>
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Customers</a>
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Pricing</a>
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Learn</a>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-sm font-medium text-slate-900 hover:text-teal-600 transition-colors">
              Login
            </button>
            <button className="bg-teal-500 hover:bg-teal-600 text-white text-sm font-medium py-2.5 px-5 rounded-full transition-all shadow-md hover:shadow-lg">
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-200 shadow-xl py-4 px-4 flex flex-col space-y-4">
          <a href="#" className="block text-base font-medium text-slate-600 hover:text-slate-900">Products</a>
          <a href="#" className="block text-base font-medium text-slate-600 hover:text-slate-900">Customers</a>
          <a href="#" className="block text-base font-medium text-slate-600 hover:text-slate-900">Pricing</a>
          <a href="#" className="block text-base font-medium text-slate-600 hover:text-slate-900">Learn</a>
          <div className="pt-4 flex flex-col space-y-3 border-t border-slate-100">
            <button className="w-full text-center text-slate-900 font-medium py-2">Login</button>
            <button className="w-full bg-teal-500 text-white font-medium py-3 rounded-xl">Sign Up</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
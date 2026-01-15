import React from 'react';
import { Twitter, Linkedin, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 pt-16 pb-8 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
               <div className="w-6 h-6 bg-slate-900 rounded flex items-center justify-center text-white font-bold text-sm">F</div>
               <span className="font-bold text-xl text-slate-900">Finpay</span>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Solutions</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-teal-600">Small Business</a></li>
              <li><a href="#" className="hover:text-teal-600">Freelancers</a></li>
              <li><a href="#" className="hover:text-teal-600">Customers</a></li>
              <li><a href="#" className="hover:text-teal-600">Taxes</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-teal-600">About Us</a></li>
              <li><a href="#" className="hover:text-teal-600">Career</a></li>
              <li><a href="#" className="hover:text-teal-600">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Learn</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-teal-600">Blog</a></li>
              <li><a href="#" className="hover:text-teal-600">Ebooks</a></li>
              <li><a href="#" className="hover:text-teal-600">Guides</a></li>
              <li><a href="#" className="hover:text-teal-600">Templates</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-200">
           <p className="text-xs text-slate-400 mb-4 md:mb-0">© Finpay 2024. All Rights Reserved.</p>
           
           <div className="flex items-center gap-4">
              <span className="text-xs font-bold text-slate-900 mr-2">Follow us on</span>
              <a href="#" className="text-slate-900 hover:text-teal-600 transition-colors"><Twitter className="w-4 h-4" /></a>
              <a href="#" className="text-slate-900 hover:text-teal-600 transition-colors"><Linkedin className="w-4 h-4" /></a>
              <a href="#" className="text-slate-900 hover:text-teal-600 transition-colors"><Facebook className="w-4 h-4" /></a>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
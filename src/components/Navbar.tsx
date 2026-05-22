import { Search, User, Globe, Menu, Settings, FileText } from 'lucide-react';
import { useState } from 'react';
import AfaqLogo from './AfaqLogo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-gray-100 shadow-sm transition-all duration-300">
      {/* Top Banner */}
      <div className="bg-primary-950 text-white text-xs lg:text-sm py-2 px-4 hidden md:flex justify-between items-center tracking-wide">
        <div className="flex gap-4 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent-400 transition-colors font-semibold">الأفراد</a>
            <a href="#" className="text-gray-400 hover:text-accent-400 transition-colors">الأعمال</a>
            <a href="#" className="text-gray-400 hover:text-accent-400 transition-colors">النواقل والمشغلين</a>
          </div>
          <div className="flex gap-4 ms-auto items-center">
            <button
               onClick={() => window.dispatchEvent(new CustomEvent('open-academic-report'))}
               className="text-accent-400 font-bold hover:text-white transition-colors flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full text-xs"
            >
              <FileText className="w-3 h-3" />
              التقرير الأكاديمي
            </button>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">المستثمرون</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">الاستدامة</a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer group">
            <div className="transform group-hover:rotate-3 transition-transform">
              <AfaqLogo className="w-12 h-12" useOriginalColors={true} />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black text-dark-500 leading-none tracking-tight">آفاق للاتصالات</span>
              <span className="text-[10px] font-bold text-primary-600 uppercase tracking-widest mt-0.5">آفاق التواصل</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 space-x-reverse items-center bg-gray-50/50 px-6 py-2 rounded-full border border-gray-100/50">
            <a href="#" className="text-dark-500 hover:text-primary-600 font-bold transition-all px-2">الباقات</a>
            <a href="#" className="text-gray-500 hover:text-primary-600 font-semibold transition-all px-2">الأجهزة</a>
            <a href="#" className="text-gray-500 hover:text-primary-600 font-semibold transition-all px-2">الإنترنت المنزلي</a>
            <a href="#" className="text-gray-500 hover:text-primary-600 font-semibold transition-all px-2">عالم آفاق للاتصالات</a>
            <a href="#" className="text-gray-500 hover:text-primary-600 font-semibold transition-all px-2">الدعم والمساعدة</a>
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={() => {
                const event = new CustomEvent('open-social-settings');
                window.dispatchEvent(event);
                const target = document.getElementById('social-hub');
                if (target) {
                   target.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="flex items-center gap-2 text-dark-500 font-bold bg-white border border-gray-200 px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors shadow-sm" aria-label="Settings" title="إعدادات الموقع"
            >
              <Settings className="w-4 h-4 text-primary-600" />
              <span>إعدادات API</span>
            </button>
            <button className="text-gray-500 hover:text-primary-600 transition-colors w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-50" aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            <button className="flex items-center gap-1.5 text-gray-500 hover:text-primary-600 transition-colors px-2">
              <Globe className="w-5 h-5" />
              <span className="font-bold text-sm">EN</span>
            </button>
            <button className="bg-dark-500 hover:bg-primary-600 text-white px-6 py-2.5 rounded-2xl font-bold flex items-center gap-2 transition-all shadow-md active:scale-95">
              <User className="w-4 h-4" />
              <span>دخول</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-primary-600 focus:outline-none p-2 bg-gray-50 rounded-xl"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 absolute w-full shadow-2xl">
          <div className="px-4 pt-4 pb-6 space-y-2">
            <a href="#" className="block px-4 py-3 rounded-xl text-base font-bold text-dark-500 bg-gray-50">الباقات</a>
            <a href="#" className="block px-4 py-3 rounded-xl text-base font-semibold text-gray-600 hover:bg-gray-50">الأجهزة</a>
            <a href="#" className="block px-4 py-3 rounded-xl text-base font-semibold text-gray-600 hover:bg-gray-50">الإنترنت المنزلي</a>
            <a href="#" className="block px-4 py-3 rounded-xl text-base font-semibold text-gray-600 hover:bg-gray-50">عالم آفاق للاتصالات</a>
            <a href="#" className="block px-4 py-3 rounded-xl text-base font-semibold text-gray-600 hover:bg-gray-50">الدعم والمساعدة</a>
            <div className="border-t border-gray-100/50 my-4"></div>
            
            <button 
              onClick={() => {
                const event = new CustomEvent('open-social-settings');
                window.dispatchEvent(event);
                const target = document.getElementById('social-hub');
                if (target) {
                   target.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="w-full bg-white border border-gray-200 text-dark-500 px-4 py-3 rounded-xl font-bold flex items-center justify-center gap-2 mb-3 shadow-sm"
            >
              <Settings className="w-5 h-5 text-primary-600" />
              <span>إعدادات API</span>
            </button>

            <button 
              onClick={() => {
                setIsOpen(false);
                window.dispatchEvent(new CustomEvent('open-academic-report'));
              }}
              className="w-full bg-accent-50 border border-accent-100 text-dark-500 px-4 py-3 rounded-xl font-black flex items-center justify-center gap-2 mb-3 shadow-sm hover:bg-accent-100 transition-colors"
            >
              <FileText className="w-5 h-5 text-accent-600" />
              <span>التقرير الأكاديمي</span>
            </button>

            <button className="w-full bg-dark-500 text-white px-4 py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 shadow-md">
              <User className="w-5 h-5" />
              <span>تسجيل الدخول المستقل</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

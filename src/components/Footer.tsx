import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import AfaqLogo from './AfaqLogo';

export default function Footer() {
  return (
    <footer className="bg-dark-500 pt-20 pb-10 border-t border-dark-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="transform group-hover:rotate-3 transition-transform">
                <AfaqLogo className="w-10 h-10" useOriginalColors={true} />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black text-white leading-tight tracking-tight">آفاق للاتصالات</span>
                <span className="text-[10px] font-bold text-primary-500 uppercase tracking-widest">آفاق التواصل</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              نفخر بكوننا رواد الاتصالات في المملكة، نقدم حلول العصر بأسلوب مبتكر يلبي تطلعات الأفراد والأعمال ضمن رؤيتنا للمستقبل.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary-600 hover:text-white transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary-600 hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary-600 hover:text-white transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary-600 hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">آفاق للاتصالات اتصالات</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">عن آفاق للاتصالات</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">الاستدامة</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">علاقات المستثمرين</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">المركز الإعلامي</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">الوظائف</a></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">خدماتنا</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">باقات الموبايل</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">الإنترنت المنزلي الفايبر</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">ترقية الشريحة eSIM</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">باقات التجوال</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">الأجهزة الذكية</a></li>
            </ul>
          </div>

          {/* Links 3 - Support */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">الدعم والمساعدة</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">تواصل معنا</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">فروع آفاق للاتصالات</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">الأسئلة الشائعة</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">مجتمع آفاق للاتصالات</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">تقديم شكوى</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} آفاق للاتصالات (آفاق). جميع الحقوق محفوظة.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">الشروط والأحكام</a>
            <a href="#" className="hover:text-white transition-colors">سياسة الخصوصية</a>
            <a href="#" className="hover:text-white transition-colors">خريطة الموقع</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

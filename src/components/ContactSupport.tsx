import { Phone, Mail, MapPin, ClipboardList, Send, Headphones } from 'lucide-react';

export default function ContactSupport() {
  return (
    <section className="py-24 bg-dark-500 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-600/10 -skew-x-12 transform origin-top blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-accent-500/10 skew-x-12 transform origin-bottom blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Contact Details */}
          <div className="space-y-12">
            <div>
              <h2 className="text-sm font-bold text-accent-400 tracking-wider mb-2 uppercase">نبقى على تواصل</h2>
              <h3 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">شاركنا رأيك،<br/>نحن دائماً بخدمتك</h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                فريق الدعم الفني وخدمة العملاء في آفاق للاتصالات متاحون على مدار الساعة للرد على استفساراتكم وحل أي مشكلة تواجهونها لضمان تجربة سلسة.
              </p>
            </div>

            <div className="space-y-6 text-white text-lg relative">
              <div className="flex items-center gap-5 bg-white/5 p-5 rounded-2xl border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors">
                <div className="w-14 h-14 bg-primary-600 rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-primary-600/20">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-medium mb-1">خدمة العملاء (مكالمة مجانية)</p>
                  <p className="text-2xl font-black font-mono tracking-widest text-white">900</p>
                </div>
              </div>
              
              <div className="flex items-center gap-5 bg-white/5 p-5 rounded-2xl border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors">
                <div className="w-14 h-14 bg-primary-600 rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-primary-600/20">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-medium mb-1">البريد الإلكتروني للشكاوى والاستفسارات</p>
                  <p className="text-xl font-bold font-sans text-white">care@afaq.sa</p>
                </div>
              </div>

              <div className="flex items-center gap-5 bg-white/5 p-5 rounded-2xl border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors">
                <div className="w-14 h-14 bg-primary-600 rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-primary-600/20">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-medium mb-1">المركز الرئيسي</p>
                  <p className="text-lg font-bold text-white">برج آفاق للاتصالات، حي العليا، الرياض</p>
                </div>
              </div>
            </div>
          </div>

          {/* Direct Support Form */}
          <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-2xl relative border border-gray-100">
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-primary-600 rounded-2xl rotate-12 flex items-center justify-center shadow-xl shadow-primary-600/30 transition-transform hover:rotate-0 duration-300">
              <ClipboardList className="w-10 h-10 text-white -rotate-12" />
            </div>
            
            <h4 className="text-2xl md:text-3xl font-black text-dark-500 mb-2 mt-2">تواصل مع الدعم الفني</h4>
            <p className="text-gray-500 mb-8 text-sm md:text-base leading-relaxed">هل تواجه مشكلة أو تحتاج إلى مساعدة؟ افتح تذكرة وسيقوم فريقنا بالتواصل معك في أقرب وقت.</p>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">الاسم الكامل</label>
                  <input type="text" placeholder="اسمك الكريم" className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3.5 focus:ring-2 focus:ring-primary-500 outline-none transition-all text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">رقم الجوال (للتواصل)</label>
                  <input type="tel" placeholder="05XXXXXXXX" className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3.5 focus:ring-2 focus:ring-primary-500 outline-none transition-all text-sm text-left" dir="ltr" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">نوع الاستفسار</label>
                <select className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3.5 focus:ring-2 focus:ring-primary-500 outline-none transition-all text-sm">
                  <option>مشكلة في التغطية / الشبكة</option>
                  <option>استفسار عن الباقات</option>
                  <option>مشكلة في الفواتير / الرصيد</option>
                  <option>طلب تأسيس إنترنت منزلي</option>
                  <option>أخرى</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">تفاصيل الرسالة</label>
                <textarea 
                  rows={4}
                  placeholder="اشرح مشكلتك أو استفسارك هنا بكل وضوح لنسرع في خدمتك..."
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all resize-none text-sm"
                ></textarea>
              </div>

              <button className="w-full bg-dark-500 hover:bg-primary-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-primary-600/30 transform hover:-translate-y-1">
                <span className="text-lg">إرسال التذكرة</span>
                <Send className="w-5 h-5 rtl:rotate-180" />
              </button>
              
              <div className="bg-primary-50 text-primary-700 rounded-lg p-3 flex items-center justify-center gap-2 text-xs font-medium mt-2">
                <Headphones className="w-4 h-4 shrink-0" />
                <p>يتم الرد على التذاكر خلال مدة أقصاها 24 ساعة عمل.</p>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

import { Download, CheckCircle2, Star } from 'lucide-react';

export default function WhyAfaq() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-50 via-white to-white opacity-60"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Mockup Display */}
          <div className="relative order-2 lg:order-1">
            <div className="relative z-20 w-full max-w-sm mx-auto">
              {/* Phone Mockup Frame */}
              <div className="rounded-[3rem] border-[10px] border-dark-500 bg-white overflow-hidden shadow-2xl relative aspect-[9/19]">
                {/* Notch */}
                <div className="absolute top-0 inset-x-0 h-6 bg-dark-500 w-1/2 mx-auto rounded-b-2xl z-30"></div>
                
                {/* App UI Concept */}
                <div className="w-full h-full bg-gray-50 flex flex-col relative z-10">
                  <div className="bg-primary-600 pt-12 pb-6 px-6 rounded-b-[2.5rem] text-white">
                    <div className="flex justify-between items-center mb-6">
                      <p className="font-medium">أهلاً بك، أحمد</p>
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                        <Star className="w-5 h-5 text-accent-400" fill="currentColor" />
                      </div>
                    </div>
                    <p className="text-primary-100 text-sm mb-1">الرصيد الحالي</p>
                    <h2 className="text-4xl font-black text-white">45.00 <span className="text-lg">ريال</span></h2>
                  </div>
                  
                  <div className="p-6 flex-1">
                    <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 mb-4">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-500">البيانات</span>
                        <span className="font-bold text-dark-500">12 GB متبقي</span>
                      </div>
                      <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="w-3/4 h-full bg-primary-500 rounded-full"></div>
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-500">المكالمات</span>
                        <span className="font-bold text-dark-500">لامحدود</span>
                      </div>
                      <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="w-full h-full bg-accent-400 rounded-full"></div>
                      </div>
                    </div>
                    
                    <button className="w-full mt-6 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-xl py-3 font-bold shadow-md shadow-primary-500/20">
                      إدارة الباقة
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Glowing orb behind phone */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary-400 rounded-full blur-[100px] opacity-30 -z-10"></div>
          </div>
          
          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-black text-dark-500 mb-6 leading-tight">
              تحكم بكل شيء من <span className="text-primary-600">تطبيق آفاق للاتصالات</span>
            </h2>
            <p className="text-xl text-gray-500 leading-relaxed mb-10">
              صممنا تطبيق آفاق للاتصالات ليكون بوابتك الذكية لجميع خدماتنا. ادفع فواتيرك، راقب استهلاكك، وقم بترقية باقتك بضغطة زر واحدة ومن أي مكان.
            </p>
            
            <ul className="space-y-5 mb-10">
              {[
                'تفعيل فوري للشريحة الإلكترونية (eSIM)',
                'تتبع حي ومباشر لاستهلاك البيانات والمكالمات',
                'عروض وهدايا حصرية لمستخدمي التطبيق',
                'دعم فني مباشر على مدار الساعة',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary-500 shrink-0" />
                  <span className="text-lg font-medium text-dark-400">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <button className="bg-dark-500 hover:bg-dark-400 text-white px-6 py-3 rounded-xl flex items-center gap-3 transition-colors">
                <Download className="w-6 h-6" />
                <div className="text-right">
                  <p className="text-[10px] text-gray-300">متوفر على</p>
                  <p className="font-bold">App Store</p>
                </div>
              </button>
              <button className="bg-dark-500 hover:bg-dark-400 text-white px-6 py-3 rounded-xl flex items-center gap-3 transition-colors">
                <Download className="w-6 h-6" />
                <div className="text-right">
                  <p className="text-[10px] text-gray-300">احصل عليه من</p>
                  <p className="font-bold">Google Play</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

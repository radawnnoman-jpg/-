import { Users, Search, ShoppingBag, Heart, Share2, ArrowLeft } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'الوعي والاستكشاف',
    desc: 'الوصول للعميل عبر إعلانات السوشيال ميديا وحملات التأثير الرقمي التي تبرز التحول الرقمي.',
    icon: <Search className="w-6 h-6" />,
    color: 'bg-blue-50 text-blue-600 border-blue-200'
  },
  {
    id: 2,
    title: 'الاهتمام والتقييم',
    desc: 'تقديم محتوى تعليمي وقصص نجاح عبر منصاتنا لدعم قرار العميل وإبراز القيمة المضافة.',
    icon: <Users className="w-6 h-6" />,
    color: 'bg-emerald-50 text-emerald-600 border-emerald-200'
  },
  {
    id: 3,
    title: 'الشراء والتحويل',
    desc: 'تجربة شراء سلسة ومخصصة عبر تطبيق آفاق للاتصالات الذكي بفضل خوارزميات التوصية والذكاء الاصطناعي.',
    icon: <ShoppingBag className="w-6 h-6" />,
    color: 'bg-primary-50 text-primary-600 border-primary-200'
  },
  {
    id: 4,
    title: 'الاحتفاظ والولاء',
    desc: 'برامج مكافآت وتواصل مستمر لتقديم خدمات مابعد البيع بحسب أسلوب حياة العميل.',
    icon: <Heart className="w-6 h-6" />,
    color: 'bg-rose-50 text-rose-600 border-rose-200'
  },
  {
    id: 5,
    title: 'الترويج والمناصرة',
    desc: 'تحويل العميل الراضي إلى سفير للعلامة التجارية يشارك تجربته الإيجابية والمبادرات الاجتماعية.',
    icon: <Share2 className="w-6 h-6" />,
    color: 'bg-accent-50 text-accent-500 border-accent-200'
  }
];

export default function CustomerJourney() {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-accent-500 tracking-wider mb-2 uppercase">تخطيط التجربة</h2>
          <h3 className="text-3xl md:text-5xl font-black text-dark-500 mb-6">رحلة العميل الرقمية</h3>
          <p className="text-gray-500 text-lg leading-relaxed">
            تم تصميم كل نقطة اتصال في التسويق لتتوافق مع احتياجات العميل وسلوكه الرقمي، مما يخلق رحلة سلسة من الاستكشاف وحتى الولاء والانتماء للعلامة التجارية.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-100 via-primary-300 to-accent-100 transform -translate-y-1/2 z-0"></div>

          <div className="grid md:grid-cols-5 gap-6 relative z-10">
            {steps.map((step, index) => (
              <div key={step.id} className="relative group">
                <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col items-center text-center">
                  
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center border-4 border-white shadow-md mb-6 transition-transform group-hover:scale-110 group-hover:rotate-6 ${step.color}`}>
                    {step.icon}
                  </div>
                  
                  <div className="flex-1">
                    <div className="text-xs font-bold text-gray-400 mb-2">المرحلة {step.id}</div>
                    <h4 className="font-black text-dark-500 mb-3">{step.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                  </div>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 z-20 w-8 h-8 bg-white border border-gray-200 rounded-full items-center justify-center shadow-sm">
                    <ArrowLeft className="w-4 h-4 text-gray-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

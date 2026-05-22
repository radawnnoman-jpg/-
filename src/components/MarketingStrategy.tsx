import { ArrowLeft, Target, Smartphone, Rocket, Building2, Leaf } from 'lucide-react';

const strategies = [
  {
    title: 'التركيز على العملاء والتخصيص',
    desc: 'إرساء تجربة مخصصة لكل عميل باستخدام تقنيات الذكاء الاصطناعي وتحليل البيانات، وتصميم رسائل تسويقية تروي قصة العلامة التجارية وتربط الخدمات بأسلوب حياة العملاء.',
    icon: <Target className="w-8 h-8" />,
    color: 'bg-primary-50 text-primary-600'
  },
  {
    title: 'منظومة الاتصال الرقمي المتكاملة',
    desc: 'تطبيق My Afaq يمثل الواجهة التسويقية والتفاعلية الأبرز، إلى جانب إطلاق حملات مستهدفة عبر شبكات التواصل الاجتماعي بأسلوب مبتكر.',
    icon: <Smartphone className="w-8 h-8" />,
    color: 'bg-accent-50 text-accent-500'
  },
  {
    title: 'نهج "آفاق" الاستراتيجي',
    desc: 'توسيع وإبراز النمو في الخدمات الرقمية الأساسية والقطاعات الناشئة وتجديد صورتنا كشريك موثوق ومبتكر يدعم التحول الرقمي في المنطقة.',
    icon: <Rocket className="w-8 h-8" />,
    color: 'bg-blue-50 text-blue-600'
  },
  {
    title: 'قنوات التواصل المباشر وقطاع الأعمال',
    desc: 'مئات المراكز كنقاط اتصال لتعزيز الثقة، وبرامج شركاء النجاح المخصصة B2B لدعم الشركات الصغيرة والمتوسطة وتطوير أعمالهم.',
    icon: <Building2 className="w-8 h-8" />,
    color: 'bg-indigo-50 text-indigo-600'
  },
  {
    title: 'الاستدامة والمحتوى المحلي',
    desc: 'استخدام العلاقات العامة لتسليط الضوء على دورنا الريادي في دعم المحتوى المحلي (روافد)، والتزامنا بحوكمة الشركات والاستدامة البيئية.',
    icon: <Leaf className="w-8 h-8" />,
    color: 'bg-emerald-50 text-emerald-600'
  }
];

export default function MarketingStrategy() {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-sm font-bold text-accent-500 tracking-wider mb-2 uppercase">النهج الاستراتيجي</h2>
            <h3 className="text-3xl md:text-5xl font-black text-dark-500 mb-6 leading-tight">
              استراتيجية الاتصال التسويقي 
            </h3>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              تعتمد استراتيجية الاتصال التسويقي لمجموعة آفاق للاتصالات على التحول الرقمي الشامل وفهم احتياجات العملاء بدقة. تدمج الاستراتيجية بين القنوات الرقمية والتفاعل الشخصي لدعم استراتيجية الشركة، مما يضمن تقديم تجربة استثنائية وحلول تقنية متطورة للأفراد وقطاع الأعمال.
            </p>
            
            <div className="flex flex-col gap-4">
              {strategies.map((item, idx) => (
                <div key={idx} className="flex gap-4 p-5 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-md transition-all">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 ${item.color}`}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-dark-500 mb-1">{item.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="mt-8 bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 px-8 rounded-xl transition-colors shadow-lg shadow-primary-600/30 flex items-center gap-2">
              <span>تواصل مع فريق التسويق</span>
              <ArrowLeft className="w-5 h-5 rtl:rotate-180" />
            </button>
          </div>
          
          <div className="relative sticky top-24">
            <div className="absolute inset-0 bg-primary-600 rounded-[3rem] transform rotate-3 scale-105 opacity-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200" 
              alt="فريق التسويق في آفاق للاتصالات" 
              className="relative z-10 w-full h-[600px] object-cover rounded-[3rem] shadow-2xl"
            />
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-3xl shadow-xl z-20 border border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center text-accent-500 font-black text-2xl">
                  +85%
                </div>
                <div>
                  <p className="text-dark-500 font-bold mb-1">تفاعل رقمي مستمر</p>
                  <p className="text-gray-400 text-sm">عبر حملاتنا المبتكرة</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

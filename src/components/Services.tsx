import { ArrowLeft, Rocket, Home, Gamepad2, Presentation } from 'lucide-react';

const services = [
  {
    title: 'باقات الموبايل',
    subtitle: 'مفوتر ومسبق الدفع',
    desc: 'اكتشف باقات مصممة لتناسب احتياجاتك، مع بيانات لامحدودة وتطبيقات سوشيال ميديا مجانية.',
    icon: <Rocket className="w-10 h-10" />,
    image: 'https://images.unsplash.com/photo-1601972599720-36938d4ecd31?auto=format&fit=crop&q=80&w=800',
    tag: '5G'
  },
  {
    title: 'آفاق للاتصالات فايبر',
    subtitle: 'إنترنت منزلي خارق',
    desc: 'سرعات تصل إلى 1000 ميجابت في الثانية، لعائلة متصلة دائماً وبدون أي تقطيع.',
    icon: <Home className="w-10 h-10" />,
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800',
    tag: 'Fiber'
  },
  {
    title: 'آفاق للاتصالات للأعمال والتسويق',
    subtitle: 'حلول تسويقية ورقمية',
    desc: 'منصات تسويق ذكية، وتحليل البيانات لبناء حملات تسويقية مباشرة للمؤسسات لتعزيز أرباحهم وتطوير أعمالهم.',
    icon: <Presentation className="w-10 h-10" />,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
    tag: 'B2B'
  }
];

export default function Services() {
  return (
    <section className="py-24 bg-gray-50" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center md:text-right mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-primary-600 tracking-wider mb-2 uppercase">حلولنا وخدماتنا</h2>
            <h3 className="text-3xl md:text-4xl font-black text-dark-500">عالم من الخيارات المصممة <br className="hidden md:block"/> لراحتك وتطلعاتك</h3>
          </div>
          <button className="text-primary-600 font-bold flex items-center gap-2 hover:text-primary-700 transition-colors">
            <span>عرض كل الخدمات</span>
            <ArrowLeft className="w-5 h-5" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group rounded-[2rem] overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col cursor-pointer">
              <div className="h-48 relative overflow-hidden">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-500/80 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold border border-white/30">
                  {service.tag}
                </div>
                <div className="absolute bottom-4 right-4 text-white">
                  {service.icon}
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <p className="text-sm text-primary-600 font-bold mb-1">{service.subtitle}</p>
                <h4 className="text-2xl font-black text-dark-500 mb-4">{service.title}</h4>
                <p className="text-gray-500 leading-relaxed mb-8 flex-1">
                  {service.desc}
                </p>
                <button className="flex items-center gap-2 text-dark-500 font-bold group-hover:text-primary-600 transition-colors mt-auto">
                  <span>المزيد من التفاصيل</span>
                  <ArrowLeft className="w-5 h-5 transform group-hover:-translate-x-2 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

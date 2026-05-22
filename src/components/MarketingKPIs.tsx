import { BarChart3, TrendingUp, Target, Activity, ArrowUpRight } from 'lucide-react';

const kpis = [
  {
    title: 'معدل الاحتفاظ بالعملاء (CRR)',
    value: '92%',
    change: '+4.5%',
    trend: 'up',
    desc: 'يشير إلى نجاح برامج الولاء وخدمات ما بعد البيع المميزة.',
    icon: <Activity className="w-6 h-6" />,
    color: 'text-emerald-500'
  },
  {
    title: 'صافي نقاط الترويج (NPS)',
    value: '78',
    change: '+12',
    trend: 'up',
    desc: 'مؤشر قوي على رضا العملاء واستعدادهم لتوصية خدماتنا.',
    icon: <Target className="w-6 h-6" />,
    color: 'text-blue-500'
  },
  {
    title: 'تكلفة الاستحواذ على العميل (CAC)',
    value: '145 ر.س',
    change: '-15%',
    trend: 'down',
    desc: 'انخفاض التكلفة بفضل الاستهداف الذكي والذكاء الاصطناعي.',
    icon: <TrendingUp className="w-6 h-6" />,
    color: 'text-accent-500'
  },
  {
    title: 'معدل التحويل الرقمي',
    value: '18.4%',
    change: '+3.2%',
    trend: 'up',
    desc: 'نمو المبيعات عبر تطبيق آفاق للاتصالات والمنصات الإلكترونية الذكية.',
    icon: <BarChart3 className="w-6 h-6" />,
    color: 'text-primary-500'
  }
];

export default function MarketingKPIs() {
  return (
    <section className="py-24 bg-dark-500 border-t border-dark-400 text-white relative overflow-hidden">
      {/* Background abstract elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-500/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div>
            <h2 className="text-sm font-bold text-accent-400 tracking-wider mb-2 uppercase">قياس الأداء</h2>
            <h3 className="text-3xl md:text-5xl font-black mb-4">مؤشرات النجاح الاستراتيجية (KPIs)</h3>
            <p className="text-gray-400 text-lg max-w-2xl">
              لا يقتصر الإبداع على إطلاق الحملات، بل نقيس نجاحنا عبر مؤشرات أداء دقيقة تعكس العائد على الاستثمار ومدى رضى وولاء قاعدتنا الجماهيرية.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {kpis.map((kpi, index) => (
            <div key={index} className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md hover:bg-white/10 transition-colors">
              <div className="flex justify-between items-start mb-8">
                <div className={`p-3 rounded-2xl bg-white/10 ${kpi.color}`}>
                  {kpi.icon}
                </div>
                <div className={`flex items-center gap-1 text-sm font-bold px-2.5 py-1 rounded-full ${kpi.trend === 'up' ? 'text-emerald-400 bg-emerald-400/10' : 'text-emerald-400 bg-emerald-400/10'}`}>
                  {kpi.change}
                  <ArrowUpRight className={`w-4 h-4 ${kpi.trend === 'down' ? 'transform rotate-90' : ''}`} />
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="text-gray-400 text-sm font-bold mb-1">{kpi.title}</h4>
                <div className="text-4xl font-black text-white">{kpi.value}</div>
              </div>
              
              <p className="text-gray-400 text-sm leading-relaxed border-t border-white/10 pt-4 mt-auto">
                {kpi.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

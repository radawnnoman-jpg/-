import { ArrowRight, TrendingUp, Users, PieChart, Briefcase, Download } from 'lucide-react';

const stats = [
  {
    title: 'الإيرادات',
    value: '77.82',
    unit: 'مليار ريال',
    year: '2025',
    icon: <TrendingUp className="w-8 h-8 text-primary-600" />,
    trend: '+5.73%',
    color: 'bg-primary-50'
  },
  {
    title: 'صافي الربح',
    value: '15.13',
    unit: 'مليار ريال',
    year: '2025',
    icon: <PieChart className="w-8 h-8 text-emerald-600" />,
    trend: '+4.2%',
    color: 'bg-emerald-50'
  }
];

const secondaryStats = [
  {
    title: 'الحصة السوقية',
    value: '73%',
    desc: 'من إجمالي الإيرادات في سوق الاتصالات',
    icon: <PieChart className="w-6 h-6 text-accent-500" />,
    color: 'bg-accent-50 text-accent-600'
  },
  {
    title: 'الموظفون',
    value: '19,863',
    desc: 'كوادر وطنية وعالمية تدعم نجاحنا',
    icon: <Users className="w-6 h-6 text-blue-500" />,
    color: 'bg-blue-50 text-blue-600'
  },
  {
    title: 'التواجد الدولي',
    value: '9',
    desc: 'دول في قارتي آسيا وأوروبا',
    icon: <Briefcase className="w-6 h-6 text-purple-500" />,
    color: 'bg-purple-50 text-purple-600'
  }
];

export default function FinancialReports() {
  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div>
            <h2 className="text-sm font-bold text-accent-500 tracking-wider mb-2 uppercase">علاقات المستثمرين</h2>
            <h3 className="text-3xl md:text-5xl font-black text-dark-500 mb-4">الأرقام والمؤشرات الرئيسية</h3>
            <p className="text-gray-500 text-lg max-w-xl">
              نلتزم بالشفافية والنمو المستدام، مستندين إلى قوة عملياتنا التابعة، مع تطبيق أعلى معايير الحوكمة المالية.
            </p>
          </div>
          <button className="bg-white border border-gray-200 hover:border-primary-500 text-dark-500 font-bold flex items-center justify-center gap-3 px-6 py-4 rounded-xl shadow-sm hover:shadow-md transition-all">
            <span>تحميل التقرير السنوي 2025</span>
            <Download className="w-5 h-5 text-primary-600" />
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100 relative overflow-hidden group">
              <div className="flex justify-between items-start mb-12">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${stat.color}`}>
                  {stat.icon}
                </div>
                <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                  <TrendingUp className="w-4 h-4" />
                  <span>{stat.trend}</span>
                </div>
              </div>
              
              <div>
                <p className="text-gray-400 font-bold mb-2">{stat.title} ({stat.year})</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl md:text-7xl font-black text-dark-500 tracking-tight">{stat.value}</span>
                  <span className="text-xl font-bold text-gray-500">{stat.unit}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {secondaryStats.map((stat, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex items-center gap-6 hover:shadow-lg transition-shadow">
               <div className={`w-14 h-14 rounded-full flex items-center justify-center shrink-0 ${stat.color}`}>
                  {stat.icon}
               </div>
               <div>
                 <h4 className="text-3xl font-black text-dark-500 mb-1 leading-none">{stat.value}</h4>
                 <p className="text-sm font-bold text-gray-800 mb-1">{stat.title}</p>
                 <p className="text-xs text-gray-400">{stat.desc}</p>
               </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 flex items-center justify-center">
            <button className="text-primary-600 font-bold hover:text-primary-700 hover:underline flex items-center gap-2">
              <span>عرض القوائم المالية المفصلة</span>
              <ArrowRight className="w-4 h-4 rtl:-scale-x-100" />
            </button>
        </div>
      </div>
    </section>
  );
}

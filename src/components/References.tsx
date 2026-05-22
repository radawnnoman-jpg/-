import { BookOpen, Link, FileText, ExternalLink, Cloud } from 'lucide-react';

const references = [
  {
    id: 1,
    title: 'التقرير السنوي 2025 – مجموعة stc',
    desc: 'الإيرادات 77.82 مليار، الربح 15.13 مليار، قائمة الشركات التابعة.',
    url: '#',
    icon: <FileText className="w-5 h-5" />,
    type: 'تقرير مالي'
  },
  {
    id: 2,
    title: 'صفحة التقارير السنوية الرسمية – stc',
    desc: 'جميع التقارير من 2005 إلى 2025 معتمدة من Deloitte.',
    url: 'https://www.stc.com.sa/content/stc/sa/ar/corporate/investors/financial-reports.html',
    icon: <BookOpen className="w-5 h-5" />,
    type: 'موقع رسمي'
  },
  {
    id: 3,
    title: 'صفحة "من نحن" – stc Group',
    desc: 'الرؤية، الاستراتيجية، الشركات التابعة (DARE 2.0).',
    url: 'https://www.stc.com.sa/content/stc/sa/ar/corporate/about-us.html',
    icon: <Link className="w-5 h-5" />,
    type: 'موقع رسمي'
  },
  {
    id: 4,
    title: 'دراسة حالة IBM – التحول السحابي الهجين لـ stc',
    desc: 'تفاصيل منصة السحابة الهجينة والشراكة التكنولوجية.',
    url: 'https://www.ibm.com/case-studies/stc',
    icon: <Cloud className="w-5 h-5" />,
    type: 'دراسة حالة'
  },
  {
    id: 5,
    title: 'التقرير السنوي 2024 – مجموعة stc',
    desc: 'البيانات التشغيلية: الموظفين 19,863، الحصة السوقية 73%.',
    url: '#',
    icon: <FileText className="w-5 h-5" />,
    type: 'تقرير مالي'
  }
];

export default function References() {
  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100" id="references">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
          <div>
            <h2 className="text-sm font-bold text-accent-500 tracking-wider mb-2 uppercase">التوثيق والمصادر</h2>
            <h3 className="text-3xl font-black text-dark-500">المراجع العلمية والروابط التشعبية</h3>
          </div>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm bg-white">
          <table className="w-full text-right border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="p-4 font-bold text-dark-500 w-16 text-center">#</th>
                <th className="p-4 font-bold text-dark-500">المصدر</th>
                <th className="p-4 font-bold text-dark-500">التفاصيل / الربط بالتكليف</th>
                <th className="p-4 font-bold text-dark-500 w-48 text-center">الرابط المباشر</th>
              </tr>
            </thead>
            <tbody>
              {references.map((ref, index) => (
                <tr key={ref.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                  <td className="p-4 text-center font-bold text-gray-400">{index + 1}</td>
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center shrink-0">
                        {ref.icon}
                      </div>
                      <span className="font-bold text-dark-500">{ref.title}</span>
                    </div>
                  </td>
                  <td className="p-4 text-sm text-gray-500 leading-relaxed">
                    {ref.desc}
                  </td>
                  <td className="p-4 text-center">
                    <a 
                      href={ref.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-100 hover:bg-primary-600 hover:text-white text-gray-600 text-sm font-bold transition-colors w-full justify-center"
                    >
                      <span>تصفح</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

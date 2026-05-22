import { Lightbulb, Layers, Users, Zap } from 'lucide-react';

const recommendations = [
  {
    title: 'تحويل "دعوة للعمل" إلى مؤشرات أداء يومية',
    desc: 'اللغة الملهمة في استراتيجية stc (call to action) تحتاج إلى ترجمة عملية إلى مؤشرات KPI يومية قابلة للقياس في جميع الإدارات، إلى جانب ربطها بأنظمة المكافآت والعقوبات لضمان التنفيذ الفعال على جميع المستويات التنظيمية.',
    icon: <Zap className="w-8 h-8" />,
    color: 'text-amber-500 bg-amber-50'
  },
  {
    title: 'توسيع الشراكات العالمية في الذكاء الاصطناعي التوليدي',
    desc: 'مع التركيز على المحور الثالث (المنظومة الرقمية)، يُوصى بتعزيز الشراكات مع شركات AI متخصصة مثل Microsoft (بفضل استثمارها في OpenAI) أو Google (منصة Gemini) لتسريع الابتكار في خدمات العملاء الرقمية وتحليل البيانات.',
    icon: <Layers className="w-8 h-8" />,
    color: 'text-blue-500 bg-blue-50'
  },
  {
    title: 'إنشاء منصة داخلية لقياس "التوافق الثقافي"',
    desc: 'اقتراح بناء منصة تفاعلية داخلية تقيس بشكل دوري مدى فهم وتطبيق الموظفين للقيم المشتركة (خاصة قيمة "people-first")، مع تقديم تقارير آنية للإدارة العليا وحوافز للفرق الأكثر توافقاً ثقافياً.',
    icon: <Users className="w-8 h-8" />,
    color: 'text-emerald-500 bg-emerald-50'
  }
];

export default function StrategicRecommendations() {
  return (
    <section className="py-24 bg-white border-t border-gray-100 relative overflow-hidden" id="recommendations">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-primary-50 rounded-2xl mb-4">
            <Lightbulb className="w-8 h-8 text-primary-600" />
          </div>
          <h2 className="text-sm font-bold text-accent-500 tracking-wider mb-2 uppercase">متطلبات الامتياز</h2>
          <h3 className="text-3xl md:text-5xl font-black text-dark-500 mb-6">التوصيات الاستراتيجية والابتكار</h3>
          <p className="text-gray-500 text-lg leading-relaxed">
            بناءً على تحليل نموذج 7S لمجموعة stc، نقدم توصيات استراتيجية مبتكرة ومستندة إلى فجوات حقيقية وفرص نمو، تستهدف الحفاظ على أعلى درجات التوافق بين العناصر الصلبة والناعمة.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {recommendations.map((rec, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${rec.color}`}>
                {rec.icon}
              </div>
              <h4 className="text-xl font-black text-dark-500 mb-4 leading-relaxed group-hover:text-primary-600 transition-colors">
                {rec.title}
              </h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                {rec.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

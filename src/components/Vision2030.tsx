import { Lightbulb, Leaf, Users2, ShieldCheck } from 'lucide-react';

const visionPillars = [
  {
    title: 'مجتمع حيوي',
    desc: 'توفير بنية تحتية رقمية عالمية المستوى ترفع من جودة الحياة وتوفر منصات ذكية وخدمات رقمية لجميع فئات المجتمع.',
    icon: <Users2 className="w-8 h-8" />
  },
  {
    title: 'اقتصاد مزدهر',
    desc: 'تمكين رواد الأعمال والشركات الناشئة من خلال حلول الاتصالات الذكية وتقنيات السحابة، لدعم الاقتصاد الرقمي.',
    icon: <Lightbulb className="w-8 h-8" />
  },
  {
    title: 'وطن طموح',
    desc: 'استثمار في الكفاءات الوطنية الشابة، وتحقيق الريادة في تبني التقنيات الحديثة مثل الجيل الخامس والذكاء الاصطناعي.',
    icon: <ShieldCheck className="w-8 h-8" />
  },
  {
    title: 'الاستدامة',
    desc: 'الالتزام بحماية البيئة وتبني ممارسات رقمية خضراء تتماشى مع رؤية المملكة للوصول للحياد الصفري الكربوني.',
    icon: <Leaf className="w-8 h-8" />
  }
];

export default function Vision2030() {
  return (
    <section className="py-24 bg-[#01594F] text-white relative overflow-hidden">
      {/* Decoration lines */}
      <div className="absolute top-0 right-0 py-8 opacity-10 pointer-events-none">
        <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#FFFFFF" d="M47.7,-57.2C59.2,-46.8,64.2,-28.9,64.7,-11.6C65.2,5.6,61.2,22.2,52,35.4C42.8,48.6,28.4,58.4,11.8,63.4C-4.8,68.4,-23.7,68.5,-40.4,59.8C-57.1,51,-71.5,33.4,-75,13.7C-78.5,-6,-71,-27.7,-57.8,-42.6C-44.5,-57.5,-22.3,-65.5,-1.9,-63.3C18.6,-61.2,36.2,-67.6,47.7,-57.2Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-[#EAA639] mb-4 uppercase tracking-widest font-serif">
            التكامل مع رؤية 2030
          </h2>
          <h3 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
            شريك في بناء<br/>المستقبل الرقمي للمملكة
          </h3>
          <p className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
            تضع آفاق للاتصالات أهداف رؤية المملكة 2030 كبوصلة توجه كافة أعمالها ومبادراتها، إيماناً منا بأن التقنية هي المحرك الأساسي لتحقيق الأهداف الوطنية المستدامة.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {visionPillars.map((pillar, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-[2rem] p-8 hover:bg-white/10 transition-colors">
              <div className="w-16 h-16 bg-[#EAA639] text-[#01594F] rounded-2xl flex items-center justify-center mb-6">
                {pillar.icon}
              </div>
              <h4 className="text-2xl font-black text-[#EAA639] mb-4">{pillar.title}</h4>
              <p className="text-white/70 text-sm leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

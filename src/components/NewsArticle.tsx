import { Calendar, User, Share2, ArrowRight, Sparkles, BrainCircuit, Target, Trophy, Users, Database, ShieldAlert, Cpu } from 'lucide-react';
import { motion } from 'motion/react';

export default function NewsArticle({ onBack }: { onBack?: () => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-white rounded-[2rem] border border-gray-100 shadow-sm overflow-hidden relative"
    >
      {/* Article Header Image */}
      <div className="relative h-96 w-full overflow-hidden group">
        <img 
          src="https://images.unsplash.com/photo-1531297172867-4d4ce2e266a3?auto=format&fit=crop&q=80&w=1600" 
          alt="هاكاثون آفاق للذكاء الاصطناعي" 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-500 via-dark-500/60 to-transparent"></div>
        
        {/* Live Data Counters Overlay */}
        <div className="absolute top-8 left-8 hidden lg:flex flex-col gap-3 z-20">
          <div className="bg-dark-500/60 backdrop-blur-md border border-white/10 rounded-xl p-3 text-white flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-primary-500/20 flex items-center justify-center border border-primary-500/30">
              <Users className="w-5 h-5 text-primary-400" />
            </div>
            <div>
              <p className="text-xs text-gray-400">المبتكرون المسجلون</p>
              <p className="text-lg font-black tracking-tight font-mono">1,240 <span className="text-primary-400 animate-pulse">●</span></p>
            </div>
          </div>
          <div className="bg-dark-500/60 backdrop-blur-md border border-white/10 rounded-xl p-3 text-white flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-accent-500/20 flex items-center justify-center border border-accent-500/30">
              <Database className="w-5 h-5 text-accent-400" />
            </div>
            <div>
              <p className="text-xs text-gray-400">البيانات المعالجة</p>
              <p className="text-lg font-black tracking-tight font-mono">4.5 TB <span className="text-accent-400 animate-pulse">●</span></p>
            </div>
          </div>
        </div>

        <div className="absolute top-6 right-6 flex items-center gap-4 z-10">
          {onBack && (
            <button 
              onClick={onBack}
              className="bg-white/20 hover:bg-white/40 backdrop-blur-md text-white p-2 rounded-full transition-colors"
            >
              <ArrowRight className="w-5 h-5 rtl:-scale-x-100" />
            </button>
          )}
          <span className="bg-primary-500 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-md shadow-primary-500/20 flex items-center gap-2 border border-primary-400/50">
            <Sparkles className="w-4 h-4" />
            تغطية حية
          </span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
          <h1 className="text-3xl md:text-5xl font-black mb-4 leading-tight tracking-tight">
            هاكاثون "آفاق" للذكاء الاصطناعي: سباق الابتكار لصياغة قطاع الاتصالات
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-gray-200 text-sm font-medium">
            <div className="flex items-center gap-2 bg-white/10 border border-white/10 px-3 py-1.5 rounded-lg backdrop-blur-md">
              <Calendar className="w-4 h-4 text-primary-400" />
              <span>24 مايو 2026</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 border border-white/10 px-3 py-1.5 rounded-lg backdrop-blur-md">
              <User className="w-4 h-4 text-primary-400" />
              <span>الواحة الرقمية - آفاق للاتصالات</span>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="p-8 md:p-12 lg:px-20 bg-sadu-pattern relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-50rounded-full blur-[100px] opacity-50 -translate-y-1/2 translate-x-1/3 mix-blend-multiply pointer-events-none"></div>
        
        <div className="prose prose-lg max-w-4xl mx-auto prose-headings:font-black prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-primary-600 relative z-10">
          
          <p className="text-xl md:text-2xl font-medium text-dark-500 leading-relaxed mb-10 text-center border-b border-gray-100 pb-10">
            في إطار التزام <span className="font-bold text-primary-600">آفاق للاتصالات</span> بدعم رؤية المملكة 2030 وتمكين التحول الرقمي الشامل، نعلن عن انطلاق الحدث التقني الأبرز الذي يجمع بين طموح الطلاب الأكاديميين والخبرة المؤسسية لموظفي قطاع الاتصالات وتقنية المعلومات، لترسيخ الهوية الرقمية الوطنية.
          </p>

          <div className="mb-16">
             <h3 className="text-xl font-black text-dark-500 mb-8 text-center flex justify-center items-center gap-3">
                <span className="w-12 h-px bg-gray-200"></span>
                شركاء العمارة الرقمية
                <span className="w-12 h-px bg-gray-200"></span>
             </h3>
             <div className="flex flex-wrap justify-center items-center gap-6">
                
                {/* Cyber Arch Partner STC */}
                <div className="relative group/arch">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#4A2D73]/20 to-transparent blur-xl transition-all group-hover/arch:blur-2xl"></div>
                  <div className="relative overflow-hidden w-40 h-48 bg-white border border-[#4A2D73]/10 rounded-t-full rounded-b-2xl shadow-sm flex flex-col items-center justify-center gap-2 p-6 transition-transform group-hover/arch:-translate-y-2">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#4A2D73]/5 to-transparent pointer-events-none"></div>
                    <div className="absolute top-0 left-0 w-full h-1/2 border-t-4 border-[#4A2D73]/40 rounded-t-full"></div>
                    <span className="text-4xl font-black tracking-widest text-[#4A2D73]">stc</span>
                    <span className="text-[10px] text-gray-400 font-bold tracking-widest uppercase">شريك استراتيجي</span>
                  </div>
                </div>

                {/* Cyber Arch Partner Zain */}
                <div className="relative group/arch">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#00A9A4]/20 to-transparent blur-xl transition-all group-hover/arch:blur-2xl"></div>
                  <div className="relative overflow-hidden w-40 h-48 bg-white border border-[#00A9A4]/10 rounded-t-full rounded-b-2xl shadow-sm flex flex-col items-center justify-center gap-2 p-6 transition-transform group-hover/arch:-translate-y-2">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#00A9A4]/5 to-transparent pointer-events-none"></div>
                    <div className="absolute top-0 left-0 w-full h-1/2 border-t-4 border-[#00A9A4]/40 rounded-t-full"></div>
                    <span className="text-4xl font-black tracking-wider text-black">Zain<span className="text-[#00A9A4]">.</span></span>
                    <span className="text-[10px] text-gray-400 font-bold tracking-widest uppercase">الشريك التقني</span>
                  </div>
                </div>

             </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-black text-dark-500 mb-6 flex items-center gap-3">
              <Target className="w-7 h-7 text-primary-500" />
              أهداف الهاكاثون
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed bg-white/60 backdrop-blur-md p-6 rounded-2xl border border-primary-100 shadow-[0_4px_20px_rgba(0,194,138,0.03)] relative overflow-hidden">
              <span className="absolute -right-4 -top-4 w-24 h-24 bg-primary-50 rounded-full blur-xl"></span>
              يهدف الهاكاثون إلى خلق بيئة تنافسية محفزة للابتكار، حيث تتلاقى الطاقات الشابة مع الممارسات المهنية لإنتاج مشاريع تعتمد على النماذج اللغوية الكبيرة (LLMs) والتعلم الآلي. نسعى من خلال هذا السباق إلى تطوير حلول تقنية ذكية تخدم البنية التحتية للمدن السعودية الذكية مستقبلاً، وترتقي بجودة الاتصال لمستويات غير مسبوقة.
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-black text-dark-500 mb-6 flex items-center gap-3">
              <BrainCircuit className="w-7 h-7 text-primary-500" />
              المسارات التقنية (العمارة الرقمية)
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/80 backdrop-blur-sm border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-lg hover:border-primary-300 transition-all group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-primary-500 transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top"></div>
                <div className="flex items-center gap-3 mb-3">
                  <Cpu className="w-6 h-6 text-primary-600" />
                  <h4 className="text-lg font-bold text-dark-500">مسار "قمة طويق" للشبكات المتقدمة</h4>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">
                  استخدام خوارزميات التنبؤ المتقدمة لرفع كفاءة شبكات الجيل الخامس (5G) والحد من الأعطال، وإدارة معدل نقل البيانات ديناميكياً لتلائم جغرافية المملكة.
                </p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-lg hover:border-primary-300 transition-all group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-accent-500 transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top"></div>
                <div className="flex items-center gap-3 mb-3">
                  <User className="w-6 h-6 text-accent-600" />
                  <h4 className="text-lg font-bold text-dark-500">مسار "الضيافة الرقمية" للعملاء</h4>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">
                  ابتكار آليات استجابة آلية وتحليل سلوك المستخدمين لتقديم حلول مستوحاة من كرم الضيافة السعودية لتلبية تطلعات المشترك الفردية.
                </p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-lg hover:border-primary-300 transition-all group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-green-500 transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top"></div>
                <div className="flex items-center gap-3 mb-3">
                  <Sparkles className="w-6 h-6 text-green-600" />
                  <h4 className="text-lg font-bold text-dark-500">مسار "نيوم" للاستدامة التقنية الخضراء</h4>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">
                  تطوير حلول تعتمد على إنترنت الأشياء لتقليل البصمة الكربونية وترشيد استهلاك الطاقة داخل مراكز البيانات والأبراج لمستقبل أخضر.
                </p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-lg hover:border-primary-300 transition-all group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-red-500 transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top"></div>
                <div className="flex items-center gap-3 mb-3">
                  <ShieldAlert className="w-6 h-6 text-red-600" />
                  <h4 className="text-lg font-bold text-dark-500">مسار "أبها" للأمن السيبراني العالي</h4>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">
                  الاعتماد على الذكاء الاصطناعي للكشف المبكر عن الثغرات والتهديدات الأمنية والاستجابة التلقائية لحماية جدار الحماية والبروتوكولات.
                </p>
              </div>
            </div>
          </div>

          {/* ... Rewards section simplified and rest of file remains ... */}
          <div className="flex flex-col md:flex-row gap-8 mb-12">
            <div className="flex-1 bg-gradient-to-br from-primary-50 to-white border border-primary-100 p-8 rounded-3xl relative overflow-hidden">
              <Users className="absolute top-0 right-0 w-32 h-32 text-primary-500/10 -translate-y-6 translate-x-6" />
              <h3 className="text-xl font-black text-dark-500 mb-4 relative z-10">الفئات المستهدفة</h3>
              <ul className="space-y-3 relative z-10 text-gray-700 font-medium">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary-500 shadow-[0_0_8px_rgba(0,194,138,0.6)]"></span>
                  طلاب وطالبات التخصصات التقنية في الجامعات السعودية.
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary-500 shadow-[0_0_8px_rgba(0,194,138,0.6)]"></span>
                  المطورون وعلماء البيانات المستقلون.
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary-500 shadow-[0_0_8px_rgba(0,194,138,0.6)]"></span>
                  موظفو قطاع الاتصالات وتقنية المعلومات (ICT).
                </li>
              </ul>
            </div>
            
            <div className="flex-1 bg-gradient-to-br from-accent-50 to-white border border-accent-100 p-8 rounded-3xl relative overflow-hidden">
              <Trophy className="absolute top-0 left-0 w-32 h-32 text-accent-500/10 -translate-y-6 -translate-x-6" />
              <h3 className="text-xl font-black text-dark-500 mb-4 relative z-10">الجوائز والتمكين</h3>
              <ul className="space-y-3 relative z-10 text-gray-700 font-medium">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent-500 shadow-[0_0_8px_rgba(196,160,82,0.6)]"></span>
                  جوائز مالية تتجاوز الـ 500,000 ريال سعودي.
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent-500 shadow-[0_0_8px_rgba(196,160,82,0.6)]"></span>
                  احتضان أفضل المشاريع في منشآت "الواحة الرقمية".
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent-500 shadow-[0_0_8px_rgba(196,160,82,0.6)]"></span>
                  فرص توظيف وتدريب داخلي لأبرز المواهب المشاركة.
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center py-8 border-t border-gray-100">
            <h3 className="text-2xl font-black text-dark-500 mb-4">هل أنت مستعد لصناعة التغيير؟</h3>
            <p className="text-gray-500 mb-8 max-w-xl mx-auto">
              بادر بتسجيل فريقك الآن وكن جزءاً من مسيرة الابتكار التقني وريادة الأعمال الرقمية في المملكة.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-primary-600 hover:bg-primary-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-primary-600/30 transition-all hover:-translate-y-1 flex items-center justify-center gap-2">
                <span>سجل في الهاكاثون الآن</span>
                <ArrowRight className="w-5 h-5 rtl:-scale-x-100" />
              </button>
              <button className="bg-white hover:bg-gray-50 text-dark-500 border border-gray-200 font-bold px-8 py-4 rounded-xl shadow-sm transition-all flex items-center justify-center gap-2 text-sm">
                <Share2 className="w-5 h-5" />
                <span>مشاركة تفاصيل الحدث</span>
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </motion.div>
  );
}

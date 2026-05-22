import { Eye, Target, Zap, ShieldCheck, HeartHandshake, History, Rocket, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function AboutCompany() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-50 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 opacity-60"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-primary-600 tracking-wider mb-2 uppercase"
          >
            من نحن
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-dark-500 mb-6"
          >
            آفاق للاتصالات
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed"
          >
            نحن أكثر من مجرد مزود لخدمات الاتصالات؛ نحن شركاء في رحلة التحول الرقمي، نبني جسوراً من التواصل الذكي لتمكين حاضر ومستقبل المملكة.
          </motion.p>
        </div>

        {/* History and Vision Row */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/3]">
              <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1200" alt="مسيرة آفاق للاتصالات" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-500/80 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                    <Rocket className="w-6 h-6" />
                  </div>
                  <div>
                     <h4 className="font-bold text-xl">انطلاقة نحو المستقبل</h4>
                     <p className="text-gray-300 text-sm">نواكب أحدث التقنيات باستمرار</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-10 order-1 lg:order-2">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-primary-600 shrink-0 shadow-sm border border-gray-100">
                  <History className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-2xl font-black text-dark-500 mb-3">نبذة وتاريخ الشركة</h4>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    تأسست <span className="font-bold text-primary-600">آفاق للاتصالات</span> كواحدة من أبرز وأحدث المبادرات الوطنية في قطاع تقنية المعلومات. منذ انطلاقتنا، ركزنا على سد الفجوة التقنية من خلال توفير بنية تحتية متينة وحلول ذكية تلبي احتياجات الأفراد والأعمال في المملكة، متخذين من الريادة التكنولوجية مساراً ثابتاً لنا.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 shrink-0 shadow-sm border border-primary-100">
                  <Eye className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-2xl font-black text-dark-500 mb-3">رؤيتنا المستقبلية</h4>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    الوصول بقطاع الاتصالات إلى آفاق لا محدودة، لنصبح الخيار الأذكى والأسرع. نطمح لتوفير حلول اتصال مبتكرة وغير مسبوقة تساهم شكل مباشر وفعال في تحقيق أهداف وتطلعات <span className="font-bold text-dark-500">رؤية المملكة 2030</span> ودعم الاقتصاد الرقمي.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-12 text-center">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-black text-dark-500 mb-4"
          >
            قيمنا الأساسية
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 text-lg max-w-2xl mx-auto"
          >
            نرتكز على قيم صلبة تقود استراتيجيتنا وتحدد هويتنا المؤسسية، لضمان تقديم تجربة استثنائية.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-xl shadow-gray-200/40 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary-500/10 rounded-bl-full flex items-start justify-end p-6 transition-all group-hover:scale-110">
              <Zap className="w-8 h-8 text-primary-500" />
            </div>
            <h4 className="text-2xl font-black text-dark-500 mb-4 pr-16">الابتكار المستمر</h4>
            <p className="text-gray-600 leading-relaxed">
              نؤمن بأن التكنولوجيا تتطور بوتيرة متسارعة، لذا نضع الابتكار في صميم عملنا لتقديم حلول تواكب الغد، من تقنيات 5G المتقدمة إلى الذكاء الاصطناعي وإنترنت الأشياء.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-xl shadow-gray-200/40 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-accent-500/10 rounded-bl-full flex items-start justify-end p-6 transition-all group-hover:scale-110">
              <CheckCircle2 className="w-8 h-8 text-accent-500" />
            </div>
            <h4 className="text-2xl font-black text-dark-500 mb-4 pr-16">جودة الخدمة</h4>
            <p className="text-gray-600 leading-relaxed">
              لا نرضى بالحد الأدنى من المعايير؛ بل نسعى للتفوق الملحوظ. الجودة في "آفاق" تعني موثوقية الاتصال، نقاء الصوت، وتجربة تصفح آمنة ومريحة دون انقطاع.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-xl shadow-gray-200/40 relative overflow-hidden group md:col-span-2 lg:col-span-1"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-green-500/10 rounded-bl-full flex items-start justify-end p-6 transition-all group-hover:scale-110">
              <Target className="w-8 h-8 text-green-600" />
            </div>
            <h4 className="text-2xl font-black text-dark-500 mb-4 pr-16">دعم رؤية 2030</h4>
            <p className="text-gray-600 leading-relaxed">
              نحن جزء لا يتجزأ من النسيج الوطني والمستهدفات الطموحة، ونعمل جنباً إلى جنب مع مبادرات التحول الرقمي لتمكين مجتمع حيوي واقتصاد مزدهر ووطن طموح.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

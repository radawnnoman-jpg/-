import { ShoppingCart, Star, ShieldCheck, Truck, CreditCard, ArrowLeft, Share2, X, Plus, Settings, ShieldAlert, Wifi, Sparkles, ChevronRight, ChevronLeft, Pause, Play, Terminal, Server, Code, Bot, Coins, Gamepad, Gift, Flag } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useRef, useEffect } from 'react';

const categories = [
  { id: 'all', name: 'النطاق الشامل', icon: null },
  { id: 'ai-cloud', name: 'الذكاء الاصطناعي والحوسبة', icon: <Sparkles className="w-4 h-4" /> },
  { id: 'code-market', name: 'The Code Market - الرخص والتطبيقات', icon: <Code className="w-4 h-4" /> },
  { id: 'iot-5g', name: 'أجهزة الـ 5G وإنترنت الأشياء', icon: <Wifi className="w-4 h-4" /> },
  { id: 'iaas-b2b', name: 'البنية التحتية (B2B)', icon: <Server className="w-4 h-4" /> },
  { id: 'cyber', name: 'حزم الأمن السيبراني', icon: <ShieldAlert className="w-4 h-4" /> },
  { id: 'sports-tech', name: 'التكنولوجيا الرياضية (SportsTech)', icon: <Gamepad className="w-4 h-4" /> },
  { id: 'seasons', name: 'المواسم والأعياد (Spiritual Tech)', icon: <Gift className="w-4 h-4" /> },
  { id: 'national', name: 'المناسبات الوطنية', icon: <Flag className="w-4 h-4" /> },
];

const features = [
  { icon: <Bot className="w-6 h-6" />, title: 'مساعد AI للتسوق (AI Shopper)', desc: 'تحليل دقيق ومطابقة ذكية للحلول المناسبة لهويتك (طالب، مبادر، أو مؤسسة).' },
  { icon: <Coins className="w-6 h-6" />, title: 'عملات آفاق التنافسية (Tokens)', desc: 'استبدل نقاط إنجازاتك في الهاكاثونات وحضورك الرياضي برخص برمجية أو أجهزة.' },
  { icon: <Truck className="w-6 h-6" />, title: 'تسليم هجين سحابي-مكاني', desc: 'تفعيل فوري للحلول البرمجية وتوصيل سريع مادي للمعدات الذكية لتصلك في كل مناطق المملكة.' }
];

const products = [
  {
    id: 1,
    name: 'محفظة طويق الرقمية للمبتكرين (FinTech)',
    desc: 'محفظة وطنية متكاملة تتيح للمبتكرين استقبال الأرباح فوراً من "سوق المبتكرين" بالريال السعودي ودفع الفواتير أو تمويل المشاريع.',
    category: 'code-market',
    price: 'مجاني للطلاب',
    oldPrice: null,
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=600',
    tags: ['تمكين وطني', 'ريادة أعمال'],
    specs: [
      'تكامل مع المدفوعات السعودية وأنظمة ساما',
      'دعم المحتوى المحلي وتمكين ريادة الأعمال',
      'لا رسوم خفية على تحويل الأرباح للمحافظ',
      'الربط المباشر مع خطط أعمال stc وزين'
    ],
    warranty: 'معتمدة ومحمية ضمن سياسات البنك المركزي'
  },
  {
    id: 2,
    name: 'سوق النماذج الذكية بلهجات المملكة (Saudi AI Micro-Services)',
    desc: 'خوارزميات ذكاء اصطناعي سيادية مصغرة ومخصصة للبيئة والثقافة السعودية.',
    category: 'ai-cloud',
    price: 'حسب الاستهلاك',
    oldPrice: null,
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=600',
    tags: ['سدايا', 'سيادة رقمية'],
    specs: [
      'التعرف الدقيق على مختلف اللهجات المحلية للمملكة',
      'تحليل البيانات الجغرافية للمدن السعودية',
      'توقعات أحمال شبكات الـ 5G المحلية',
      'التوافق مع توجهات الهيئة السعودية للبيانات'
    ],
    warranty: 'استضافة سحابية 100% داخل السعودية'
  },
  {
    id: 3,
    name: 'واحة آفاق الافتراضية ثلاثية الأبعاد (The Saudi Cyber Oasis)',
    desc: 'صالة عرض تفاعلية لقطاع الأعمال تنقل المستثمر إلى قلب مشروعات نيوم والمدينة الرقمية بروح السدو الرقمي.',
    category: 'iaas-b2b',
    price: 'الوصول لكبار المستثمرين',
    oldPrice: null,
    image: 'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&q=80&w=600',
    tags: ['ويب 3', 'استقطاب استثمار'],
    specs: [
      'محاكاة افتراضية لحلول إنترنت الأشياء (IoT)',
      'تصفح عبر النظارات الذكية أو الجوال',
      'مجسمات استثمارية لمدن المستقبل',
      'إبراز القوة التقنية بروح العمارة السعودية'
    ],
    warranty: 'بيئة بصرية متجددة ومحمية سيبرانياً'
  },
  {
    id: 4,
    name: 'منصة "مؤشرات آفاق" للبيانات الضخمة (Saudi DaaS)',
    desc: 'لوحات بيانات وأبحاث حية حول التوجهات الرقمية في السوق السعودي والاستثمارات القادمة.',
    category: 'ai-cloud',
    price: '1,500/للتقرير',
    oldPrice: '2,500',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600',
    tags: ['أبحاث', 'تحليل اتجاهات'],
    specs: [
      'التوافق مع أنظمة NDMO لحماية البيانات',
      'توجيه المستثمرين لفرص نمو الـ 5G والمهارات البرمجية',
      'تحليل البيانات الضخمة بحيادية وتعمية الهويات',
      'تحديث المؤشرات بشكل ربع سنوي'
    ],
    warranty: 'التزام كامل بنظام حماية البيانات 2026'
  },
  {
    id: 5,
    name: 'درع آفاق لسيادة حوسبة الحافة (Saudi Edge & Cyber Shield)',
    desc: 'حزم حماية فورية واستضافة طرفية سريعة للمتاجر السعودية مدعمة بالذكاء الاصطناعي وشبكات 5G.',
    category: 'cyber',
    price: '3,500/شهرياً',
    oldPrice: '4,500/شهرياً',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600',
    tags: ['الأمن السيبراني', 'استضافة'],
    specs: [
      'حوسبة حافة وطنية فائقة السرعة للمتاجر',
      'تطبيق ضوابط الهيئة الوطنية للأمن السيبراني (NCA)',
      'درع صد الاختراقات وهجمات حجب الخدمة (DDoS)',
      'تأمين المعاملات والسيادة الرقمية المحلية'
    ],
    warranty: 'استجابة فورية وحماية على مدار الساعة 24/7'
  },
  {
    id: 6,
    name: 'تذاكر "الملاعب الذكية" وبث AR (Connected Fan)',
    desc: 'تذاكر تفاعلية بتقنية NFT تتيح للمشجع حضور المباراة وتجربة مشاهدة مخصصة بتعدد زوايا الكاميرات عبر 5G.',
    category: 'sports-tech',
    price: 'يبدأ من 150',
    oldPrice: null,
    image: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&q=80&w=600',
    tags: ['الأكثر طلباً', 'تجربة تفاعلية'],
    specs: [
      'اختيار الزاوية الحية للحاضرين (AR)',
      'إحصائيات مباشرة على شاشة الجوال أثناء المشاهدة',
      'تشفير التذاكر لمنع السوق السوداء',
      'فرصة كسب نقاط توكنز مع كل حضور'
    ],
    warranty: 'مدعوم من محفظة طويق لمنع الاحتيال'
  },
  {
    id: 7,
    name: 'رخصة "التحليل الرياضي الذكي" (Sports AI)',
    desc: 'خوارزميات معالجة حافة (Edge AI) للأندية، تحلل أداء اللاعبين حياً عبر مستشعرات إنترنت الأشياء، لتعديل الخطط فورياً.',
    category: 'sports-tech',
    price: '25,000/للموسم',
    oldPrice: '30000',
    image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=600',
    tags: ['أندية المحترفين', 'استثمار رياضي'],
    specs: [
      'توقع الإصابات الجسدية لحظياً (Predictive AI)',
      'تحليل تحركات اللاعب في الملعب لاكتشاف المواهب',
      'معالجة لا مركزية لسرعة القرار الفني',
      'توافق مع بوابات البيانات الرياضية'
    ],
    warranty: 'تحديثات أداء مستمرة بدعم هندسي'
  },
  {
    id: 8,
    name: 'محفظة "العيدية الرقمية" التفاعلية (Joy Network)',
    desc: 'حوّل هدايا العيد لتدفقات نقدية رقمية آمنة بتصاميم سدو لتهنئة الأهل والأصدقاء وتحفيز الاقتصاد المحلي.',
    category: 'seasons',
    price: 'مجاني الإصدار',
    oldPrice: null,
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=600',
    tags: ['عيد الفطر', 'محفظة طويق'],
    specs: [
      'تصاميم معايدة مدعمة بالذكاء الاصطناعي',
      'إيداع فوري وتحويل بين المحافظ السحابية',
      'ربط بخصومات متجر آفاق لاشتراكات الترفيه',
      'ضمان سيبراني كامل من الاختراقات'
    ],
    warranty: 'محمية بدرع آفاق السيبراني والأنظمة الوطنية'
  },
  {
    id: 9,
    name: 'المساعد الرمضاني الذكي والعطاء المؤتمت',
    desc: 'مساعد ذكي يدمج الجدولة الروحية مع منصات العمل الخيري المعتمدة لسهولة وسرعة التبرع الموثوق.',
    category: 'seasons',
    price: 'حسب الباقة',
    oldPrice: null,
    image: 'https://images.unsplash.com/photo-1563212002-3ac4ebde4171?auto=format&fit=crop&q=80&w=600',
    tags: ['رمضان', 'عطاء ذكي'],
    specs: [
      'التكامل اللحظي مع المنصات الخيرية الوطنية (إحسان)',
      'تفعيل باقات بث 4K عبر Network Slicing للدراما',
      'أتمتة الزكاة والمشاريع الخيرية بنقرة واحدة',
      'درع سيبراني لصد بوابات التبرع الوهمية'
    ],
    warranty: 'تحت مظلة الموثوقية الوطنية المعتمدة'
  },
  {
    id: 10,
    name: 'تذاكر "واحة الفخر الافتراضية" (3D National Epic)',
    desc: 'مساحة ثلاثية الأبعاد تنقل الزوار عبر الجوال لتجربة التحول الرقمي ومسيرة المملكة التاريخية ونيوم والدرعية.',
    category: 'national',
    price: 'مجاني للزوار',
    oldPrice: null,
    image: 'https://images.unsplash.com/photo-1580211536294-b778d91f4a98?auto=format&fit=crop&q=80&w=600',
    tags: ['اليوم الوطني', 'يوم التأسيس'],
    specs: [
      'محاكاة افتراضية لمشاريع الرؤية',
      'مقتنيات وطنية رقمية حصرية (NFTs)',
      'معارض تفاعلية لتاريخ التحول الرقمي',
      'بوابة جوال مدعومة بتقنية الـ 3D'
    ],
    warranty: 'مدعوم بدرع آفاق السيبراني'
  },
  {
    id: 11,
    name: 'رخصة "صُنع في السعودية رقمياً" (Saudi First)',
    desc: 'منصة توزيع مجانية للمبدعين لعرض هوياتهم الوطنية الرقمية بدون اقتطاع عمولات خلال الأيام الوطنية.',
    category: 'national',
    price: 'بدون عمولة',
    oldPrice: null,
    image: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?auto=format&fit=crop&q=80&w=600',
    tags: ['المحتوى المحلي', 'دعم المبدعين'],
    specs: [
      'خطوط عربية وتصاميم احترافية',
      'تحويل فوري للأرباح عبر محفظة طويق',
      'باقات إنترنت مجانية للمبدعين',
      'دعم المتاجر الناشئة رقمياً'
    ],
    warranty: 'تمكين وتحفيز المحتوى المحلي السعودي'
  },
  {
    id: 12,
    name: 'رخصة منصة "التوافق الثقافي" للشركات (Culture Gamification)',
    desc: 'منصة B2B تفاعلية للمؤسسات (مثل stc) تحول التنصل من القيم المشتركة لبيئة تنافسية مكافئة تقيس الولاء والـ People-First لحظياً.',
    category: 'iaas-b2b',
    price: '9,500/شهرياً',
    oldPrice: null,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600',
    tags: ['ولاء مؤسسي', 'HR Tech'],
    specs: [
      'قياس حيوي للتوافق مع القيم (Shared Values)',
      'توزيع توكنز وتسكينها في محفظة طويق للموظفين',
      'تحويل الخطاب الإداري لمؤشرات أداء ملموسة',
      'بناء تنافس تعاوني داخلي للكوادر الوطنية'
    ],
    warranty: 'دعم ودمج فوري مع أنظمة الـ ERP للشركة'
  }
];

export default function AfaqStore() {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const handleShare = (productName: string) => {
    // In a real app this would use Web Share API or copy link
    alert(`تم نسخ رابط ${productName} للمشاركة! تحويل المشاهدين إلى مروجين بنجاح.`);
  };

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100 relative" id="store">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-100 shadow-sm mb-4">
               <Bot className="w-4 h-4 text-primary-500" />
               <span className="text-xs font-bold text-dark-500 uppercase tracking-wider">Afaq E-Commerce Hub - مدعوم بالذكاء الاصطناعي</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-black text-dark-500 mb-4">المتجر الرقمي المدمج</h3>
            <p className="text-gray-500 text-lg max-w-3xl">
              ليس مجرد متجر تقليدي؛ بل بوابة استثمارية ذكية، نحيل الأفكار الابتكارية للطلاب إلى أصول، ونوفر بنية تحتية سحابية للشركات ونستثمر التكنولوجيا والأكواد في سوق تقني واعد.
            </p>
          </div>
          
          <button className="flex items-center gap-2 text-dark-500 font-bold bg-white border border-gray-200 px-6 py-4 rounded-xl hover:bg-primary-50 hover:text-primary-600 hover:border-primary-200 transition-all shadow-sm group">
            <span>استكشف عروض التوكنز</span>
            <Coins className="w-5 h-5 text-accent-500 group-hover:scale-110 transition-transform" />
          </button>
        </div>

        {/* Features Row (Next-Gen UX) */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl flex items-start gap-4 shadow-sm border border-gray-100 transition-transform hover:-translate-y-1 hover:shadow-md group">
              <div className="w-12 h-12 bg-primary-50 text-primary-600 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <div>
                <h4 className="font-bold text-dark-500 mb-1">{feature.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold transition-all ${
                activeCategory === category.id 
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/30' 
                  : 'bg-white text-gray-600 hover:bg-primary-50 hover:text-primary-600 border border-gray-200'
              }`}
            >
              {category.icon}
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Products Sliders by Category */}
        <div className="space-y-4">
          <AnimatePresence mode="wait">
             <motion.div
               key={activeCategory}
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -20 }}
               transition={{ duration: 0.4 }}
             >
               <CategorySlider 
                 category={categories.find(c => c.id === activeCategory)} 
                 products={filteredProducts} 
                 onSelectProduct={setSelectedProduct}
                 onShare={handleShare}
               />
             </motion.div>
          </AnimatePresence>
        </div>
        
      </div>

      {/* Quick Access Modal / Interactive Product Card Expansion */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 text-right" style={{ direction: 'rtl' }}>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-dark-500/60 backdrop-blur-sm"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto z-10 flex flex-col md:flex-row overflow-hidden border border-gray-100"
            >
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-gray-500 hover:text-dark-500 hover:bg-gray-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="md:w-1/2 relative bg-gray-50 flex items-center justify-center min-h-[300px]">
                 <img 
                   src={selectedProduct.image} 
                   alt={selectedProduct.name} 
                   className="w-full h-full object-cover select-none"
                 />
                 {selectedProduct.oldPrice && (
                    <div className="absolute bottom-4 right-4 bg-accent-500 text-white px-4 py-2 rounded-xl font-bold shadow-lg flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      عرض مستثمر حصري
                    </div>
                 )}
              </div>

              <div className="md:w-1/2 p-8 md:p-10 flex flex-col">
                <div className="flex gap-2 mb-4 flex-wrap">
                  {selectedProduct.tags.map((tag, idx) => (
                    <span key={idx} className="bg-primary-50 text-primary-600 text-xs font-bold px-3 py-1.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                  <span className="bg-gray-100 text-dark-500 text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
                     <Coins className="w-3 h-3"/> +500 نقطة آفاق
                  </span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-black text-dark-500 mb-2">{selectedProduct.name}</h3>
                <p className="text-gray-500 text-base leading-relaxed mb-6">
                  {selectedProduct.desc}
                </p>
                
                <div className="mb-8 p-4 bg-gray-50 rounded-2xl border border-gray-100 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-1 h-full bg-primary-500"></div>
                  <div className="flex items-end gap-3 mb-2">
                    <span className="text-4xl font-black text-primary-600 leading-none">{selectedProduct.price} <span className="text-lg">ريال</span></span>
                    {selectedProduct.oldPrice && (
                      <span className="text-gray-400 text-lg line-through mb-1">{selectedProduct.oldPrice} ريال</span>
                    )}
                  </div>
                  <p className="text-sm text-green-600 font-bold flex items-center gap-1"><Truck className="w-4 h-4"/> توصيل وتهيئة فورية لبيئة العمل والتسليم</p>
                </div>

                <div className="space-y-6 mb-8 flex-1">
                  <div>
                    <h4 className="flex items-center gap-2 font-bold text-dark-500 mb-3 text-lg border-b border-gray-100 pb-2">
                      <Settings className="w-5 h-5 text-accent-500" />
                      المواصفات الأساسية والوصول
                    </h4>
                    <ul className="space-y-3">
                      {selectedProduct.specs.map((spec, idx) => (
                         <li key={idx} className="flex items-start gap-3">
                           <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 shrink-0"></span>
                           <span className="text-gray-600 font-medium">{spec}</span>
                         </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                     <h4 className="flex items-center gap-2 font-bold text-dark-500 mb-3 text-lg border-b border-gray-100 pb-2">
                      <ShieldAlert className="w-5 h-5 text-blue-500" />
                      الضمان والحماية الشاملة
                     </h4>
                     <p className="text-gray-600 bg-blue-50/50 p-3 rounded-xl flex items-start gap-3 border border-blue-100/50">
                        <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0" />
                        <span className="font-medium text-sm">{selectedProduct.warranty} تحت غطاء وحصانة آفاق للاتصالات والأمن السيبراني.</span>
                     </p>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-4 mt-auto border-t border-gray-100 pt-6">
                    <button className="w-14 h-14 bg-gray-50 text-dark-500 rounded-2xl flex items-center justify-center hover:bg-gray-100 transition-colors border border-gray-200 shrink-0 group relative"
                      onClick={() => handleShare(selectedProduct.name)}
                      title="مشاركة لتوسيع القاعدة (Share to Earn)"
                    >
                      <Share2 className="w-6 h-6 group-hover:scale-110 transition-transform" />
                      <span className="absolute -top-2 -right-2 bg-accent-500 text-dark-900 text-[9px] font-black px-1.5 py-0.5 rounded-full translate-x-1/2 -translate-y-1/2 shadow-sm">اربح توكنز</span>
                    </button>
                    <button className="flex-1 bg-dark-500 hover:bg-primary-600 text-white rounded-2xl py-4 flex items-center justify-center gap-3 font-bold text-lg transition-all shadow-lg hover:shadow-primary-600/30">
                      <ShoppingCart className="w-6 h-6" />
                      استكمال الطلب والنشر
                    </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

const CategorySlider = ({ category, products, onSelectProduct, onShare }: any) => {
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isAutoPlay || !products || products.length === 0) return;
    const interval = setInterval(() => {
      if (sliderRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
        const itemWidth = sliderRef.current.firstElementChild?.clientWidth || 320;
        const maxScroll = scrollWidth - clientWidth;
        
        const absScroll = Math.abs(scrollLeft);
        if (absScroll >= maxScroll - 10) {
          sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          sliderRef.current.scrollBy({ left: -itemWidth, behavior: 'smooth' });
        }
      }
    }, 3500);
    return () => clearInterval(interval);
  }, [isAutoPlay, products]);

  const scroll = (dir: 'next' | 'prev') => {
    setIsAutoPlay(false);
    if (sliderRef.current) {
      const itemWidth = sliderRef.current.firstElementChild?.clientWidth || 320;
      const scrollAmount = dir === 'next' ? -itemWidth : itemWidth;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  if (!products || products.length === 0) return null;

  return (
    <div className="mb-12">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
        <div className="flex items-center gap-3">
          {category?.icon && (
            <div className="w-12 h-12 bg-primary-50 text-primary-600 rounded-2xl flex items-center justify-center">
              {category.icon}
            </div>
          )}
          <h4 className="text-2xl font-black text-dark-500">{category?.name}</h4>
          <span className="bg-gray-100 text-gray-500 px-3 py-1 rounded-full text-sm font-bold">{products.length} حزم</span>
        </div>
        <div className="flex items-center gap-3 self-end sm:self-auto">
          {/* Dynamic Slider Control (UX Upgrade) */}
          <button onClick={() => setIsAutoPlay(!isAutoPlay)} className={`px-4 h-10 rounded-full border flex items-center justify-center gap-2 transition-colors shadow-sm text-sm font-bold ${isAutoPlay ? 'bg-primary-50 text-primary-600 border-primary-100' : 'bg-white text-gray-400 border-gray-100 hover:bg-gray-50'}`}>
            {isAutoPlay ? <><Pause className="w-4 h-4" /> إيقاف التحريك</> : <><Play className="w-4 h-4" /> تشغيل</>}
          </button>
          <div className="flex gap-2">
             <button onClick={() => scroll('prev')} className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-dark-500 hover:bg-primary-50 hover:text-primary-600 transition-colors shadow-sm">
               <ChevronRight className="w-5 h-5 rtl:-scale-x-100" />
             </button>
             <button onClick={() => scroll('next')} className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-dark-500 hover:bg-primary-50 hover:text-primary-600 transition-colors shadow-sm">
               <ChevronLeft className="w-5 h-5 rtl:-scale-x-100" />
             </button>
          </div>
        </div>
      </div>
      
      <div 
        onMouseEnter={() => setIsAutoPlay(false)}
        onMouseLeave={() => setIsAutoPlay(true)}
        className="relative -mx-4 px-4 sm:mx-0 sm:px-0"
      >
        <div 
          ref={sliderRef}
          className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory flex-nowrap"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {products.map((product: any) => (
            <div key={product.id} className="min-w-[280px] md:min-w-[340px] max-w-[340px] snap-start shrink-0 h-full flex flex-col">
              <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-shadow group flex flex-col relative w-full flex-1">
                <div className="relative h-56 overflow-hidden bg-gray-100 shrink-0">
                  <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
                    {product.tags.map((tag: any, idx: any) => (
                      <span key={idx} className="bg-white/90 backdrop-blur-sm text-primary-600 text-[11px] font-bold px-3 py-1.5 rounded-full shadow-sm shadow-black/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="absolute top-4 left-4 z-20 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button 
                      onClick={(e) => { e.stopPropagation(); onShare(product.name); }}
                      className="w-10 h-10 bg-white/90 backdrop-blur-sm text-dark-500 rounded-full flex items-center justify-center hover:bg-primary-50 hover:text-primary-600 transition-colors shadow-sm"
                      title="مشاركة واربح آفاق توكنز"
                    >
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-dark-500/0 group-hover:bg-dark-500/10 transition-colors duration-300"></div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1 text-accent-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <span className="text-[10px] font-bold text-gray-400 flex items-center gap-1"><Code className="w-3 h-3"/> جاهز للتكامل</span>
                  </div>
                  
                  <h4 className="text-lg font-black text-dark-500 mb-2 leading-tight line-clamp-2">{product.name}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1 line-clamp-2">
                    {product.desc}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
                    <div className="flex flex-col">
                      {product.oldPrice && (
                        <span className="text-gray-400 text-xs line-through mb-0.5">{product.oldPrice} ريال</span>
                      )}
                      <span className="text-xl font-black text-primary-600">{product.price} <span className="text-xs">ريال</span></span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <motion.button 
                        onClick={() => onSelectProduct(product)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 h-12 bg-dark-500 text-white rounded-xl flex items-center justify-center hover:bg-primary-600 transition-colors shadow-md shrink-0 font-bold text-sm"
                        title="تفاصيل أكثر (Interactive Popup)"
                      >
                        تفاصيل الباقة
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


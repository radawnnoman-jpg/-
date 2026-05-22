import React, { useState, useEffect } from 'react';
import { FileText, X, Download, Maximize2, ShieldCheck, Zap, Palette, Map, Laptop, Globe, Heart, Flag, GraduationCap, Target } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import AfaqLogo from './AfaqLogo';

export default function AcademicReport() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-academic-report', handleOpen);
    return () => window.removeEventListener('open-academic-report', handleOpen);
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const handleExportHTML = () => {
    const reportContent = document.getElementById('academic-report-content')?.innerHTML;
    if (!reportContent) return;
    
    const htmlTemplate = `
      <!DOCTYPE html>
      <html lang="ar" dir="rtl">
      <head>
        <meta charset="UTF-8">
        <title>تقرير مشروع آفاق للاتصالات</title>
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 40px; margin: 0; background: #fff; color: #333; line-height: 1.6; }
          h1, h2, h3 { color: #000; }
          .logo { width: 50px; height: 50px; }
          header { border-bottom: 2px solid #00c28a; padding-bottom: 20px; margin-bottom: 30px; display: flex; align-items: center; gap: 15px; }
          .section { margin-bottom: 30px; }
          .section-title { font-size: 1.4rem; color: #0d2c54; border-bottom: 1px solid #eee; padding-bottom: 10px; margin-bottom: 15px; }
          .highlight { background: #f0fdf4; padding: 15px; border-right: 4px solid #00c28a; margin: 15px 0; }
          ul { padding-right: 20px; }
          li { margin-bottom: 10px; }
        </style>
      </head>
      <body>
        ${reportContent}
      </body>
      </html>
    `;
    
    const blob = new Blob([htmlTemplate], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Afaq_Telecom_Academic_Report.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 print:p-0 print:static print:block"
      >
        <div className="absolute inset-0 bg-dark-900/60 backdrop-blur-sm print:hidden" onClick={() => setIsOpen(false)}></div>
        
        <motion.div 
          initial={{ y: 50, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 20, opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] print:max-h-none print:shadow-none print:rounded-none print:mb-0"
        >
          {/* Header Controls */}
          <div className="bg-gray-50 border-b border-gray-100 p-4 flex justify-between items-center shrink-0 print:hidden sticky top-0 z-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-bold text-dark-500">التقرير الأكاديمي الشامل</h2>
                <p className="text-xs text-gray-500 font-medium">مراجعة الامتياز - التصميم والتطوير</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button 
                onClick={handlePrint}
                className="flex items-center gap-2 bg-white border border-gray-200 text-dark-500 px-4 py-2 rounded-xl text-sm font-bold hover:bg-gray-50 transition-colors"
                title="تصدير كـ PDF"
              >
                <Download className="w-4 h-4 text-primary-600" />
                <span className="hidden sm:inline">تصدير PDF</span>
              </button>
              <button 
                onClick={handleExportHTML}
                className="flex items-center gap-2 bg-white border border-gray-200 text-dark-500 px-4 py-2 rounded-xl text-sm font-bold hover:bg-gray-50 transition-colors"
                title="تصدير كـ HTML"
              >
                <Maximize2 className="w-4 h-4 text-primary-600" />
                <span className="hidden sm:inline">تصدير HTML</span>
              </button>
              <div className="w-px h-6 bg-gray-200 mx-1"></div>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 bg-white border border-gray-200 text-gray-500 rounded-xl flex items-center justify-center hover:bg-gray-50 hover:text-red-500 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Report Content Container */}
          <div className="flex-1 overflow-y-auto p-6 md:p-10 bg-white print:p-0 print:overflow-visible">
            <div id="academic-report-content" className="max-w-4xl mx-auto space-y-12">
              
              {/* Report Header for Print/Export */}
              <header className="flex items-center gap-6 border-b-2 border-primary-500 pb-8 mb-8">
                 <div className="w-20 h-20 bg-dark-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <AfaqLogo className="w-12 h-12 text-primary-400" />
                 </div>
                 <div>
                    <h1 className="text-3xl font-black text-dark-500 mb-2">تقرير المشروع الأكاديمي: استراتيجية وتصميم آفاق</h1>
                    <p className="text-gray-500 font-medium">وثيقة استعراض المخرجات والأداء المتميز (مستوى الإنجاز الأكاديمي والتنفيذي)</p>
                 </div>
              </header>

              {/* Section 1: Introduction */}
              <section className="section">
                <h2 className="section-title text-2xl font-bold text-dark-500 border-b border-gray-100 pb-3 mb-6 flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-primary-500" />
                  1. مقدمة المشروع والرؤية المدمجة
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed text-justify">
                   <p>
                      تم تصميم وبناء منصة "آفاق للاتصالات" لتكون نموذجاً استثنائياً يلبي المعايير الأكاديمية العليا في هندسة وتصميم وتطوير واجهات المستخدم، مع الالتزام التام بالهوية الوطنية للمملكة العربية السعودية (الهوية التاريخية الحاضرة والمستقبلية) المدمجة برؤية الابتكار التقني.
                   </p>
                   <p>
                      تتجاوز المنصة كونها موقعاً تجارياً، لتصبح <strong>واحة رقمية متكاملة</strong>، تدمج بين تقديم الخدمات للعملاء الأفراد وقطاع الأعمال، وبين بناء بيئة حاضنة للابتكار التكنولوجي متمثلة في منصة الذكاء الاصطناعي (Hackathon Dashboard).
                   </p>
                </div>
              </section>

              {/* Section 2: Marketing Innovations */}
              <section className="section">
                <h2 className="section-title text-2xl font-bold text-dark-500 border-b border-gray-100 pb-3 mb-6 flex items-center gap-3">
                  <Zap className="w-6 h-6 text-primary-500" />
                  2. ابتكارات التسويق المدمج (Integrated Marketing)
                </h2>
                <div className="space-y-6">
                  <div className="highlight bg-green-50/50 p-6 rounded-2xl border-r-4 border-primary-500">
                    <h3 className="text-lg font-bold text-dark-500 mb-3">تحويل المشاهد إلى مروج (Interactive Elements)</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      تم استبدال البطاقات التقليدية للمنتجات بـ <span className="font-bold text-primary-600">بطاقات تفاعلية ديناميكية</span> تعتمد على تصميم عالي الجودة وتتيح للزائر استكشاف تفاصيل الباقات والمقارنة بينها بصرياً. تم بناء هيكل يُمكّن مشاركة هذه البطاقات عبر الشبكات الاجتماعية، مما يحقق استراتيجية (Seamless Distribution) الفيروسية.
                    </p>
                  </div>
                  
                  <div className="highlight bg-blue-50/50 p-6 rounded-2xl border-r-4 border-accent-500">
                    <h3 className="text-lg font-bold text-dark-500 mb-3">نظام المحتوى المتزامن الذكي (Social Media Hub)</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      لم نكتفِ بوضع روابط لمنصات التواصل، بل قمنا بهندسة نظام داخلي ذكي (Afaq Social Hub) لدمج وعرض محتوى (YouTube, TikTok, X/Twitter, Instagram, LinkedIn). يتم عرض المحتوى داخل واجهة الموقع كأنه جزء من المنصة الأصلية، مع واجهة API لاختبار استجابة المنصات (Live Status) بطريقة تعكس الشفافية التقنية المطلقة أمام العميل.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 3: Technical Evolution */}
              <section className="section">
                <h2 className="section-title text-2xl font-bold text-dark-500 border-b border-gray-100 pb-3 mb-6 flex items-center gap-3">
                  <Laptop className="w-6 h-6 text-primary-500" />
                  3. التطور التقني وهندسة الهاكاثون (Hackathon Dashboard)
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="border border-gray-200 rounded-2xl p-6">
                      <h4 className="font-bold text-dark-500 mb-2">معمارية السحابة (Cloud Arch)</h4>
                      <p className="text-sm text-gray-500 leading-relaxed">
                         تنفيذ لوحة تحكم حية للمشاركين مع محاكاة قوية لبروتوكولات الرفع السحابية (Drag & Drop Zone)، تعكس جاهزية البنية التحتية لتلقي الشيفرات البرمجية من مطوري الذكاء الاصطناعي وربطها بقواعد البيانات الموزعة بشكل آمن.
                      </p>
                   </div>
                   <div className="border border-gray-200 rounded-2xl p-6">
                      <h4 className="font-bold text-dark-500 mb-2">البث الحي المعياري (Live Streaming)</h4>
                      <p className="text-sm text-gray-500 leading-relaxed">
                         دمج مشغل بث متخصص يدعم محاكاة اتصالات RTMP و HLS، مع حجز مساحة حيوية 16:9 بنمط سينمائي مدمج، لضمان مشاركة لحظية للورش التعليمية ونقل حفل تسليم الجوائز بجودة تعكس مستوى العلامة التجارية.
                      </p>
                   </div>
                   <div className="border border-gray-200 rounded-2xl p-6 md:col-span-2">
                      <h4 className="font-bold text-dark-500 mb-2">أرشفة تفاعلية (Historical Logs)</h4>
                      <p className="text-sm text-gray-500 leading-relaxed">
                         تصميم قسم لوحة الشرف بنهايات (Accordions) تفاعلية تعرض بيانات 2024 و 2025 مع إمكانية عرض صور الرعاة مثل (stc و Zain) داخل معرض مصغر ذكي، لتقديم تجربة تصفح تدعم Mobile-first بشكل استثنائي.
                      </p>
                   </div>
                </div>
              </section>

              {/* Section 4: Coopetition & Open Platform Strategy */}
              <section className="section">
                <h2 className="section-title text-2xl font-bold text-dark-500 border-b border-gray-100 pb-3 mb-6 flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-primary-500" />
                  4. استراتيجية "التنافس التعاوني" (Coopetition & Sovereignty)
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed text-justify">
                   <p>
                      بدلاً من النزول لسوق الاتصالات والذكاء الاصطناعي كـ "منافس إقصائي"، تقدم منصة <strong>آفاق</strong> نموذج "التنافس التعاوني" (Coopetition). فنحن لسنا منافسين لـ (stc أو زين)، بل نعمل كـ <strong>"مُضاعِف أثر"</strong> لشبكاتهم عبر طبقة ذكاء اصطناعي برمجية سحابية تحول بنيتهم التحتية لحلول ذكية مخصصة.
                   </p>
                   <p>
                      عبر تحولنا إلى "منصة مفتوحة" (Open Marketplace) ورافد للنماذج الذكية المبنية وفق ضوابط التوطين (NCA، سدايا، ساما)، نمكّن المطورين والجهات الرياضية والاقتصادية من استثمار إمكانيات الجيل الخامس، بحيث نمثل المُمكن المحايد للسيادة الرقمية المستدامة.
                   </p>
                </div>
              </section>

              {/* Section 5: SportsTech Ecosystem */}
              <section className="section">
                <h2 className="section-title text-2xl font-bold text-dark-500 border-b border-gray-100 pb-3 mb-6 flex items-center gap-3">
                  <Zap className="w-6 h-6 text-primary-500" />
                  5. التكامل مع الرياضة السعودية (SportsTech Metaverse)
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="border border-gray-200 rounded-2xl p-6">
                      <h4 className="font-bold text-dark-500 mb-2">المشجع المتصل (Connected Fan)</h4>
                      <p className="text-sm text-gray-500 leading-relaxed">
                         استخدام تكنولوجيا تقسيم الشبكة (Network Slicing) بالتعاون مع عمالقة الاتصالات لضمان بث تفاعلي عالي الدقة دون توقف للجماهير داخل الملاعب وخارجها، مدعومًا بتقنية الواقع المعزز.
                      </p>
                   </div>
                   <div className="border border-gray-200 rounded-2xl p-6">
                      <h4 className="font-bold text-dark-500 mb-2">معالجة الحافة الرياضية (Edge AI)</h4>
                      <p className="text-sm text-gray-500 leading-relaxed">
                         دعم الأندية بمستشعرات معالجة بيانية حية تساعدها في تحليل اللياقة بدقة، وتقييم أداء اللاعبين في الفئات السنية لاكتشاف المواهب.
                      </p>
                   </div>
                   <div className="border border-gray-200 rounded-2xl p-6 md:col-span-2">
                      <h4 className="font-bold text-dark-500 mb-2">مؤشرات الاستثمار والاقتصاد التشاركي</h4>
                      <p className="text-sm text-gray-500 leading-relaxed">
                         دمج التوكنز الرياضية وبرامج الولاء في "محفظة طويق الرقمية"، واستثمار البيانات الضخمة (ضمن حدود الخصوصية) لتقديم لوحات القيمة السوقية للرعاة والأندية.
                      </p>
                   </div>
                </div>
              </section>

              {/* Section 6: Asian Continental Integration */}
              <section className="section">
                <h2 className="section-title text-2xl font-bold text-dark-500 border-b border-gray-100 pb-3 mb-6 flex items-center gap-3">
                  <Globe className="w-6 h-6 text-primary-500" />
                  6. التوسع القاري والأنشطة الآسيوية (The Pan-Asian Bridge)
                </h2>
                <div className="space-y-6">
                   <div className="highlight bg-gradient-to-r from-amber-50 to-transparent p-6 rounded-2xl border-r-4 border-accent-500">
                     <h4 className="font-bold text-dark-500 mb-2">منصة المترجم الفوري والذكاء الاصطناعي (Asia Connect AI)</h4>
                     <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        بالتكامل مع استعداد المملكة والأحداث القارية الكبرى مثل (كأس آسيا 2027)، صممت "آفاق" واجهة ذكاء اصطناعي صوتية مدربة محلياً لترجمة المصطلحات الرياضية فورياً وتسهيل اتصال البعثات الآسيوية بالبنية الرياضية محلياً.
                     </p>
                   </div>
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="border border-gray-200 rounded-2xl p-6 relative overflow-hidden hover:shadow-md transition-shadow">
                         <div className="absolute top-0 right-0 w-1 h-full bg-primary-500"></div>
                         <h4 className="font-bold text-dark-500 mb-2 text-sm">تروجينا 2029 (Extreme Edge)</h4>
                         <p className="text-xs text-gray-500 leading-relaxed">
                            توظيف حوسبة الحافة لمواجهة البيئات القاسية، وربط مستشعرات إنترنت الأشياء (IoT) بشبكات 5G لتوفير إحصائيات للمتزلجين في بيئة شتوية دون تأخير زمني.
                         </p>
                      </div>
                      <div className="border border-gray-200 rounded-2xl p-6 relative overflow-hidden hover:shadow-md transition-shadow">
                         <div className="absolute top-0 right-0 w-1 h-full bg-accent-500"></div>
                         <h4 className="font-bold text-dark-500 mb-2 text-sm">مؤشرات السوق والدرع السيبراني القاري</h4>
                         <p className="text-xs text-gray-500 leading-relaxed">
                            تأمين بوابات الملاعب والتذاكر في أحداث الملايين بحماية متوافقة مع الـ NCA، مع لوحات بيانات (Dashboards) توجه استثمارات الشركات الآسيوية لمؤشرات الأداء.
                         </p>
                      </div>
                   </div>
                </div>
              </section>

              {/* Section 7: Seasons & Spiritual Tech */}
              <section className="section">
                <h2 className="section-title text-2xl font-bold text-dark-500 border-b border-gray-100 pb-3 mb-6 flex items-center gap-3">
                  <Heart className="w-6 h-6 text-primary-500" />
                  7. التكامل مع المواسم الإسلامية (Spiritual Tech Ecosystem)
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="border border-gray-200 rounded-2xl p-6 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-1 h-full bg-primary-500"></div>
                      <h4 className="font-bold text-dark-500 mb-2">منظومة رمضان الرقمية</h4>
                      <p className="text-sm text-gray-500 leading-relaxed">
                         أتمتة العطاء والمشاريع الخيرية بالتعاون مع المنصات الوطنية (إحسان)، وتقسيم الشبكة لضمان بث رمضاني فائق السرعة، ومساعد ذكي من آفاق للأجواء الروحية للجدولة والوصفات.
                      </p>
                   </div>
                   <div className="border border-gray-200 rounded-2xl p-6 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-1 h-full bg-accent-500"></div>
                      <h4 className="font-bold text-dark-500 mb-2">رقمنة العيدية وأتمتة النسك</h4>
                      <p className="text-sm text-gray-500 leading-relaxed">
                         بطاقات العيدية الرقمية التفاعلية، المحافظ الرقمية، وتوفير واجهات لشراء الأضاحي وتوكيلها في عيد الأضحى بأعلى معايير الأمان التنظيمي والسيادي.
                      </p>
                   </div>
                   <div className="border border-gray-200 rounded-2xl p-6 md:col-span-2 relative overflow-hidden">
                      <h4 className="font-bold text-dark-500 mb-2">الدرع السيبراني والاقتصاد الرقمي</h4>
                      <p className="text-sm text-gray-500 leading-relaxed">
                         تحليل حركة الأسواق لدعم التجارة الداخلية، وتوفير "درع آفاق السيبراني" لصد هجمات التصيد الإلكترونية المرتبطة بالتبرع الوهمي واغتنام المواسم لحماية التبرع لأهله.
                      </p>
                   </div>
                </div>
              </section>

              {/* Section 8: National Pride */}
              <section className="section">
                <h2 className="section-title text-2xl font-bold text-dark-500 border-b border-gray-100 pb-3 mb-6 flex items-center gap-3">
                  <Flag className="w-6 h-6 text-primary-500" />
                  8. التمكين في المناسبات الوطنية (The National Tech Pride)
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="border border-gray-200 rounded-2xl p-6 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-1 h-full bg-primary-500"></div>
                      <h4 className="font-bold text-dark-500 mb-2">هاكاثون "أكواد الوطن"</h4>
                      <p className="text-sm text-gray-500 leading-relaxed">
                         إطلاق مسابقات تفاعلية لتوجيه المطورين لابتكار نماذج تخدم الهوية السعودية وتحويل الابتكارات لأصول استثمارية في متجر آفاق المدمج.
                      </p>
                   </div>
                   <div className="border border-gray-200 rounded-2xl p-6 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-1 h-full bg-accent-500"></div>
                      <h4 className="font-bold text-dark-500 mb-2">سوق الهوية والمحتوى المحلي</h4>
                      <p className="text-sm text-gray-500 leading-relaxed">
                         منصة توزيع مجانية بالكامل للمصممين والمتاجر الناشئة لعرض المقتنيات والهويات الوطنية مع تحويلات فورية عبر "محفظة طويق" دون عمولات.
                      </p>
                   </div>
                   <div className="border border-gray-200 rounded-2xl p-6 md:col-span-2 relative overflow-hidden">
                      <h4 className="font-bold text-dark-500 mb-2">مؤشرات نبض الوطن واحة الفخر</h4>
                      <p className="text-sm text-gray-500 leading-relaxed">
                         نستغل البيانات الضخمة لتحليل التفاعل السلوكي الرقمي لقياس الأثر التسويقي باحترافية، ونتيح بوابة "واحة الفخر الافتراضية" لمحاكاة مشاريع الرؤية ثلاثية الأبعاد محمية بـ "درع آفاق السيبراني".
                      </p>
                   </div>
                </div>
              </section>

              {/* Section 9: Real World Engagement & Simulation */}
              <section className="section">
                <h2 className="section-title text-2xl font-bold text-dark-500 border-b border-gray-100 pb-3 mb-6 flex items-center gap-3">
                  <Map className="w-6 h-6 text-primary-500" />
                  9. الانخراط والعمل المشترك مع الواقع (LEAP & Corporate Simulation)
                </h2>
                <div className="space-y-6">
                   <div className="highlight bg-gradient-to-r from-blue-50 to-transparent p-6 rounded-2xl border-r-4 border-primary-500">
                     <h4 className="font-bold text-dark-500 mb-2">الحضور في المحافل الدولية (LEAP, GFC, SDAIA)</h4>
                     <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        الاستفادة من أضخم المنصات التقنية مثل مؤتمر LEAP لإطلاق "سوق آفاق المفتوح"، والمنتدى الدولي للأمن السيبراني (GFC) لطرح درع آفاق السيبراني، مع استعراض النماذج الذكية بلهجات المملكة في قمة سدايا.
                     </p>
                   </div>
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="border border-gray-200 rounded-2xl p-6 relative overflow-hidden transition-shadow hover:shadow-md">
                         <div className="absolute top-0 right-0 w-1 h-full bg-accent-500"></div>
                         <h4 className="font-bold text-dark-500 mb-2 text-sm">عمالقة الاتصالات (stc وزين)</h4>
                         <p className="text-xs text-gray-500 leading-relaxed mb-3">
                            <strong>آفاق:</strong> "أنتم تمتلكون الشبكة، ونحن نمتلك البرمجيات الذكية. نأخذ ابتكارات الطلاب من الهاكاثون لنستهلك سحابتكم وحوسبة الحافة لديكم لدعم الفعاليات والمواسم، مما يرفع عوائد بنيتكم التحتية دون منافسة مباشرة."
                         </p>
                      </div>
                      <div className="border border-gray-200 rounded-2xl p-6 relative overflow-hidden transition-shadow hover:shadow-md">
                         <div className="absolute top-0 right-0 w-1 h-full bg-primary-500"></div>
                         <h4 className="font-bold text-dark-500 mb-2 text-sm">قطاع الإعلام (MBC وشاهد)</h4>
                         <p className="text-xs text-gray-500 leading-relaxed mb-3">
                            <strong>آفاق:</strong> "ندمج واحة آفاق الافتراضية 3D في مسابقاتكم. يتجول الجمهور، يصوت عبر محافظ طويق، ونحلل البيانات الضخمة (مؤشرات آفاق) لزيادة الموثوقية والدقة في الإعلانات المستهدفة بمتعة تفاعلية."
                         </p>
                      </div>
                      <div className="border border-gray-200 rounded-2xl p-6 md:col-span-2 relative overflow-hidden transition-shadow hover:shadow-md">
                         <h4 className="font-bold text-dark-500 mb-2 text-sm">المنصات الوطنية (إحسان وبلدي)</h4>
                         <p className="text-xs text-gray-500 leading-relaxed">
                            توطين وتأمين التدفقات المالية للتبرعات في رمضان والأعياد عبر دمج قوائم الدفع المنبثقة من آفاق والمحمية بدرعها السيبراني مع واجهات المنصات المعتمدة لضمان تجربة مستخدم موثوقة وممتثلة.
                         </p>
                      </div>
                   </div>
                </div>
              </section>

              {/* Section 10: Academic Integration */}
              <section className="section">
                <h2 className="section-title text-2xl font-bold text-dark-500 border-b border-gray-100 pb-3 mb-6 flex items-center gap-3">
                  <GraduationCap className="w-6 h-6 text-primary-500" />
                  10. التميز الأكاديمي والتسويقي (مقرر التسويق الرقمي MRKC 324)
                </h2>
                <div className="space-y-6">
                   <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      صُممت منصة <strong>آفاق السعودية</strong> لتكون تطبيقاً عملياً وعلمياً لمعايير التقييم الخاصة بمقرر التسويق الرقمي (بإشراف أ.د. دعاء فتحي سالم)، من خلال دمج 4 معايير رئيسية تضمن تجربة مستخدم مبتكرة ونمواً مستداماً للأعمال:
                   </p>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="border border-gray-200 rounded-2xl p-6 relative overflow-hidden transition-shadow hover:shadow-md">
                         <div className="absolute top-0 right-0 w-1 h-full bg-primary-500"></div>
                         <h4 className="font-bold text-dark-500 mb-2 text-sm">هيكل المنصة وتجربة المستخدم (UX/UI)</h4>
                         <p className="text-xs text-gray-500 leading-relaxed mb-3">
                            تصميم <strong>Mobile-First</strong> يدمج الأخضر الرقمي والأسود السيادي. مع أشرطة سلايدرات ذكية قابلة للإيقاف لتقليل الازدحام وتمكين قراءة العروض، بجانب 4 تبويبات (سوق الابتكار، بوابة الفعاليات، مؤشرات آفاق، محفظة طويق).
                         </p>
                      </div>
                      <div className="border border-gray-200 rounded-2xl p-6 relative overflow-hidden transition-shadow hover:shadow-md">
                         <div className="absolute top-0 right-0 w-1 h-full bg-accent-500"></div>
                         <h4 className="font-bold text-dark-500 mb-2 text-sm">استراتيجية المحتوى التسويقي</h4>
                         <p className="text-xs text-gray-500 leading-relaxed mb-3">
                            محتوى متعدد (مرئي لمحاكاة 3D، نصي يرسخ فكر "التنافس التعاوني" كُممكن محايد، ومحتوى تفاعلي يحفز المستثمرين والمطورين عبر دعوات Call to Action واضحة لتبني خدمات المنصة).
                         </p>
                      </div>
                      <div className="border border-gray-200 rounded-2xl p-6 relative overflow-hidden transition-shadow hover:shadow-md">
                         <div className="absolute top-0 right-0 w-1 h-full bg-primary-500"></div>
                         <h4 className="font-bold text-dark-500 mb-2 text-sm">التكامل مع شبكات التواصل</h4>
                         <p className="text-xs text-gray-500 leading-relaxed mb-3">
                            أزرار مشاركة ذكية ولحظية في الكروت (Instant Share)، نوافذ Live (Widgets) لمنشورات إكس وإنستغرام، وحملات Gamification لتحويل نقاط التفاعل بالمواسم إلى رصيد في محفظة طويق.
                         </p>
                      </div>
                      <div className="border border-gray-200 rounded-2xl p-6 relative overflow-hidden transition-shadow hover:shadow-md">
                         <div className="absolute top-0 right-0 w-1 h-full bg-accent-500"></div>
                         <h4 className="font-bold text-dark-500 mb-2 text-sm">قياس الأداء المدمج (Analytics)</h4>
                         <p className="text-xs text-gray-500 leading-relaxed mb-3">
                            تعتمد آفاق على لوحة مقاييس تشمل (الزوار الفريدين Unique Visitors، وقت المكوث Dwell Time في غرف 3D، نسبة النقر CTR للسلايدرات، ومعدل التحويل Conversion Rate)، ما يتيح تعديل العروض أسبوعياً بناءً على البيانات الدقيقة.
                         </p>
                      </div>
                   </div>
                </div>
              </section>

              {/* Section 11: 7S Strategy Translation */}
              <section className="section">
                <h2 className="section-title text-2xl font-bold text-dark-500 border-b border-gray-100 pb-3 mb-6 flex items-center gap-3">
                  <Target className="w-6 h-6 text-primary-500" />
                  11. انعكاس توصيات ماكينزي (7S) على البناء البرمجي للمنصة
                </h2>
                <div className="space-y-6">
                   <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      لإثبات التفوق الأكاديمي، تم ترجمة <strong>الفجوات (Gaps) المكتشفة في تحليل نموذج 7S الخاص بـ stc</strong> لتصبح ميزات برمجية وحلولاً تطبيقية مباشرة على منصة <strong>آفاق</strong>، لتكون المنصة هي "الحل العملي" الجاهز لمعالجة هذه الفجوات:
                   </p>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="border border-gray-200 rounded-2xl p-6 relative overflow-hidden transition-shadow hover:shadow-md">
                         <div className="absolute top-0 right-0 w-1 h-full bg-primary-500"></div>
                         <h4 className="font-bold text-dark-500 mb-2 text-sm">مؤشرات الأداء اليومية للمستثمر (KPI Dashboard)</h4>
                         <p className="text-xs text-gray-500 leading-relaxed mb-3">
                            <strong>الفجوة (الأسلوب/الأنظمة):</strong> بقاء الاستراتيجيات كـ "خطاب ملهم" دون قياس.<br/>
                            <strong>انعكاسها في آفاق:</strong> صممنا "منصة مؤشرات آفاق (DaaS)" كواجهة يومية للمستثمرين تعرض (KPIs) تحليلية فورية للأسواق والتفاعل، ما يحول "الخطاب" إلى أرقام مرئية ولحظية.
                         </p>
                      </div>
                      <div className="border border-gray-200 rounded-2xl p-6 relative overflow-hidden transition-shadow hover:shadow-md">
                         <div className="absolute top-0 right-0 w-1 h-full bg-accent-500"></div>
                         <h4 className="font-bold text-dark-500 mb-2 text-sm">دمج الذكاء الاصطناعي التوليدي (AI Shopper)</h4>
                         <p className="text-xs text-gray-500 leading-relaxed mb-3">
                            <strong>الفجوة (المهارات):</strong> ضرورة تسريع التحول للـ Generative AI.<br/>
                            <strong>انعكاسها في آفاق:</strong> برمجنا ميزة "الذكاء الاصطناعي التوليدي لمطابقة المنتجات (AI Shopper)" و "سوق النماذج بلهجات المملكة"، لنقدم لـ stc المنصة الجاهزة التي تستضيف وتسوق لهذه النماذج بلهجة وثقافة سعودية سيادية.
                         </p>
                      </div>
                      <div className="border border-gray-200 rounded-2xl p-6 md:col-span-2 relative overflow-hidden transition-shadow hover:shadow-md">
                         <h4 className="font-bold text-dark-500 mb-2 text-sm">منصة الولاء الداخلي والتوافق (Gamification & Tokens)</h4>
                         <p className="text-xs text-gray-500 leading-relaxed">
                            <strong>الفجوة (القيم المشتركة):</strong> صعوبة قياس ثقافة People-First لآلاف الموظفين.<br/>
                            <strong>انعكاسها في آفاق:</strong> ابتكرنا نظام "الولاء الرقمي (Gamification)" المربوط بـ "التوكنز التنافسية". فبدلاً من الاستبيان الجاف، تقدم المنصة تفاعلاً حياً يُكافئ المستخدمين على مشاركاتهم وحضورهم ويحول النقاط مباشرة إلى "محفظة طويق"، مما يجعل قياس التوافق والولاء ملموساً ورقمياً.
                         </p>
                      </div>
                   </div>
                </div>
              </section>

              {/* Section 12: Design Standards */}
              <section className="section pb-12">
                <h2 className="section-title text-2xl font-bold text-dark-500 border-b border-gray-100 pb-3 mb-6 flex items-center gap-3">
                  <Palette className="w-6 h-6 text-primary-500" />
                  12. تجاوز معايير التصميم العليا (The Aesthetic Craft)
                </h2>
                <ul className="space-y-4 list-disc list-inside text-gray-600 text-sm leading-relaxed">
                   <li>
                      <strong>أصالة الهوية الرقمية:</strong> استخدمنا أنماط هندسية مستوحاة من نسيج "السدو" السعودي ودمجناها بخرائط العمق التكنولوجي (Cyber Sadu Pattern) لتمثيل الهوية القومية والعصرية للمشروع بصرياً، دون إزعاج مقروئية الواجهات.
                   </li>
                   <li>
                      <strong>سيكولوجيا الألوان:</strong> اعتمدنا نطاق ألوان حصري (أخضر آفاق المضيء <code>#00c28a</code>، وزخم الليل الكحلي، والتيتانيوم الثلجي). هذا المزيج يحقق التوازن بين الدفء المؤسسي والإحساس العالي بالاحترافية التقنية.
                   </li>
                   <li>
                      <strong>التأثيرات الحركية (Micro-animations):</strong> استخدام نبضات ضوئية (Pulse animations) وانتقالات زجاجية (Glassmorphism & Blurs) مدروسة بدقة للتأكيد على حالة الأنظمة (Live/Action) وإعطاء المستخدم شعوراً بالتحكم المطلق والتوجيه البصري.
                   </li>
                   <li>
                      <strong>التجاوب الشبكي الدقيق (Mobile-First Precision):</strong> لم نصمم الواجهة للعمل على الجوال فحسب، بل تم تصميمها لتصبح "تطبيقاُ أصلياً" (App-like experience) على الجوال أولاً، مع استغلال المساحات الإضافية بذكاء على الشاشات الكبيرة لتوسيع مدى زاوية البث أو الشبكة الأرشيفية.
                   </li>
                </ul>
                <div className="mt-8 p-6 bg-dark-500 text-white rounded-2xl text-center">
                   <Map className="w-8 h-8 text-primary-400 mx-auto mb-3" />
                   <h3 className="text-xl font-bold mb-2">خلاصة التنفيذ الأكاديمي</h3>
                   <p className="text-sm text-gray-300">
                      لقد نجح المشروع في تقديم أطروحة عملية تثبت قدرة الواجهات الرقمية على تجاوز دورها التقني لتصبح "سفيراً ثقافياً واقتصادياً"، مع الالتزام الصارم بتطبيق سياسات نظافة الشيفرة (Clean Code)، الأداء، وتكامل تجربة المستخدم.
                   </p>
                </div>
              </section>

            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

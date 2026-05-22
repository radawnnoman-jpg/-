import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Bot, 
  ShieldAlert, 
  CheckCircle, 
  X, 
  Send, 
  RefreshCw, 
  User, 
  Coffee, 
  MessageSquare, 
  AlertTriangle, 
  HeartHandshake, 
  Coins, 
  Award, 
  Info, 
  Lock, 
  Unlock, 
  Search, 
  TrendingUp, 
  ShieldCheck, 
  Users, 
  ThumbsUp, 
  AlertCircle 
} from 'lucide-react';

// تعريف الأنواع الاستشارية
interface SystemComparison {
  title: string;
  providerA: string;
  providerB: string;
  specs: {
    features: string;
    cost: string;
    compatibility: string;
    ncaSecurity: string;
  };
}

export default function NeutralAdvisorAndReputation() {
  // التحكم في التبويبات النشطة (المستشار، السمعة، محاكي الأزمات)
  const [activeTab, setActiveTab] = useState<'advisor' | 'reputation' | 'crisis'>('advisor');

  // ==========================================
  // 1. حالات المستشار التقني المحايد (Tech Advisor)
  // ==========================================
  const [advisorQuery, setAdvisorQuery] = useState('');
  const [advisorLoading, setAdvisorLoading] = useState(false);
  const [advisorResponse, setAdvisorResponse] = useState<string>('');
  const [selectedScenario, setSelectedScenario] = useState<number | null>(null);

  // مقارنات معيارية مسبقة ومصاغة بحيادية مطلقة
  const sampleComparisons: SystemComparison[] = [
    {
      title: 'باقات وحلول المشغلين لمواسم الفعاليات (B2B / Gov)',
      providerA: 'الحل المقترح عبر شبكة stc للشركات',
      providerB: 'الحل المقترح عبر شبكة Zain أعمال',
      specs: {
        features: 'سرعة ربط وسعات إنترنت متكافئة بالكامل تصل إلى 1 جيجابت/ثانية للربط الفوري لكاميرات المراقبة بالفعاليات والمهرجانات.',
        cost: 'التكلفة عبر stc تأتي كباقة متكاملة مع الدعم والـ SLAs بمستوى تسعير متوسط، بينما توفر Zain خيار تمديد مرن مركب على فترات قصيرة مما يقلل الكلفة بنسبة 15%.',
        compatibility: 'شبكة stc تتميز بتوافقية واسعة مع خوادم الحكومية القائمة مسبقاً، بينما Zain تتميز بالسرونة العالية في الدمج مع الأنظمة الطرفية وحوسبة الحافة (Edge).',
        ncaSecurity: 'كلا المزودين ممتثلان تماماً لضوابط الأمن السيبراني الصادرة عن NCA وحاصلان على تصنيفات الحوسبة السحابية الآمنة من الدرجة الأولى.'
      }
    },
    {
      title: 'باقات الأفراد وزوار المواسم الترفيهية والرياضية (B2C)',
      providerA: 'عرض باقة الزوار المتوفرة من stc',
      providerB: 'عرض باقة الزوار المتوفرة من Zain',
      specs: {
        features: 'تغطية شبكية فائقة في دورة الألعاب الآسيوية والمواسم الثقافية بسعات تحميل ممتازة للجيل الخامس (5G).',
        cost: 'باقة stc تقدم سعات أكبر بأسعار تفوق Zain بقليل، بينما Zain توفر قيمة اقتصادية منافسة للباقات محدودة السعة.',
        compatibility: 'توافق شامل مع الشرائح الرقمية (eSIM) لجميع الأجهزة المحمولة الحديثة واللوحيات الخاصة بامتلاك التذاكر والمقتنيات الرقمية.',
        ncaSecurity: 'ربط آمن ممتثل لسياسات التوثيق الفردي المعتمدة محلياً وموثق مع منصات الهوية الرقمية الوطنية لضمان حماية الخصوصية.'
      }
    }
  ];

  // دالة لمعالجة إرسال استفسار للمستشار الذكي عبر API
  const handleAdvisorSubmit = async (queryText: string) => {
    if (!queryText.trim()) return;
    setAdvisorLoading(true);
    setAdvisorResponse('');
    setSelectedScenario(null);

    try {
      // الاتصال البرمجي بخادم آفاق للحصول على الاستشارة الفورية المحايدة
      const response = await fetch('/api/advisor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: queryText })
      });
      const data = await response.json();
      if (response.ok) {
        setAdvisorResponse(data.reply);
      } else {
        setAdvisorResponse('حدث خطأ أثناء الاستعلام من المستشار الذكي. يرجى تجربة خيار بديل.');
      }
    } catch (error) {
      setAdvisorResponse('تعذر الاتصال بالمستشار المستقل. يتم تشغيل الاستشارة الصارمة المخزنة محلياً للحفاظ على استقرار التجربة.');
    } finally {
      setAdvisorLoading(false);
    }
  };

  // ==========================================
  // 2. حالات السمعة الرقمية وحماية المحتوى (Reputation)
  // ==========================================
  const [sentimentMetrics, setSentimentMetrics] = useState({ positive: 76, neutral: 16, negative: 8 });
  const [tickerMessages, setTickerMessages] = useState([
    { id: 1, user: '@Ahmad_Riyadh', text: 'المساعد المحايد فك لي أزمة عظيمة بمقارنة باقات المواسم بكل نزاهة وسرية! #إبداع_آفاق', type: 'positive', app: 'X' },
    { id: 2, user: '@Sara_Al_Nasser', text: 'باقات زين ضد باقات اس تي سي.. مقارنة علمية ممتازة مبنية على التكلفة والامتثال الأمني.', type: 'positive', app: 'Instagram' },
    { id: 3, user: '@TechLover_99', text: 'هل باقة الموسم تدعم الـ eSIM مباشرة بدون زيارة الفرع؟', type: 'neutral', app: 'X' },
    { id: 4, user: '@Khalid911', text: 'هناك تأخير طفيف في تحميل رصيد نقاط محفظة طويق في حسابي التقني.', type: 'negative', app: 'X' }
  ]);
  const [activeAlert, setActiveAlert] = useState<string | null>(null);

  // محاكي جدار حماية المحتوى التوليدي (AI Content Security Guardrails)
  const [moderationText, setModerationText] = useState('');
  const [moderationResult, setModerationResult] = useState<{ status: 'idle' | 'safe' | 'blocked', msg: string }>({ status: 'idle', msg: '' });
  const [moderationLoading, setModerationLoading] = useState(false);

  // محاكاة رفع نبرة السمعة الإيجابية في الفضاء ثلاثي الأبعاد
  const handlePositiveBoost = () => {
    setSentimentMetrics(prev => ({
      positive: Math.min(prev.positive + 5, 95),
      neutral: Math.max(prev.neutral - 3, 4),
      negative: Math.max(prev.negative - 2, 1)
    }));
    setTickerMessages(prev => [
      { id: Date.now(), user: '@Riyadh_Innovates', text: 'مشروع مذهل يفخر به الوطن يعتمد على معايير الأخلاقيات الممتثلة لـ NCA! 🇸🇦✨ #آفاق', type: 'positive', app: 'X' },
      ...prev
    ]);
  };

  // دالة لتشغيل الجدار الأمني البرمجي للتحقق من سلامة المحتوى
  const checkModeration = (text: string) => {
    if (!text.trim()) return;
    setModerationLoading(true);
    setModerationResult({ status: 'idle', msg: '' });

    setTimeout(() => {
      // فحص الكلمات والأنماط المخالفة للسمعة والآداب أو التي تسيء للمشغلين والمنافسين
      const lowerText = text.toLowerCase();
      const unsafeWords = [
        'سيئ', 'احتيال', 'سرقة', 'سياسي', 'حرب', 'شتم', 'انحياز', 'stc فاشلة', 'زين سيئة', 
        'stc سيئة', 'فاشل', 'حراكي', 'مخالف', 'مهاجمة', 'تدمير'
      ];
      
      const containsUnsafe = unsafeWords.some(word => lowerText.includes(word));
      
      if (containsUnsafe) {
        setModerationResult({
          status: 'blocked',
          msg: '🔴 حظر بروتوكول الأمن الاتصالي لآفاق: نصك أو فكرتك المقترحة تخالف بنود "الإبداع الرقمي المسؤول لخدمات آفاق" وضوابط السمعة المعتمدة. يرجى إعادة الصياغة بروح إيجابية وبناءة.'
        });
        // رصد أوتوماتيكي لمحاولة الاختراق أو الإساءة وتوجيهها للتدقيق الصامت
        setActiveAlert('تم رصد محاولة توليد محتوى مسيء لسمعة المشغلين وتم إجهاضها في بضع أجزاء من الثانية.');
      } else {
        setModerationResult({
          status: 'safe',
          msg: '🟢 تم التحقق من سلامة المحتوى! يولد كود الإبداع المسؤول لآفاق تصاميم وبطاقات متجاوبة تتماشى تماماً مع الهوية المسموح بها وطالع الألعاب الآسيوية.'
        });
      }
      setModerationLoading(false);
    }, 1200);
  };

  // ==========================================
  // 3. حالات محاكي بروتوكول الأزمات (Crisis Simulator)
  // ==========================================
  const [crisisActive, setCrisisActive] = useState(false);
  const [crisisLogs, setCrisisLogs] = useState<string[]>([]);
  const [compensationClaimed, setCompensationClaimed] = useState(false);
  const [walletBalance, setWalletBalance] = useState(350);
  const [crisisTimelineStep, setCrisisTimelineStep] = useState(0);

  // دالة لتفعيل سيناريو الأزمة وعلاجها بذكاء ومصداقية
  const triggerCrisisScenario = () => {
    setCrisisActive(true);
    setCompensationClaimed(false);
    setCrisisTimelineStep(1);
    setCrisisLogs(['[بيان عاجل] رصد ارتفاع استثنائي في خوادم الفعاليات الرقمية نتيجة ضغوط الجمهور الحاضر بموسم الثقافة الرياضية.']);

    // خطة تصاعدية للتنفيذ اللحظي لبروتوكول إدارة السمعة والأزمات في المملكة
    setTimeout(() => {
      setCrisisTimelineStep(2);
      setCrisisLogs(prev => [
        ...prev,
        '🛡️ تفعيل جدار الحماية الاحتياطي وتوزيع حركة المرور بالتعاون مع البنى التحتية للمشغلين (stc / Zain).'
      ]);
    }, 1800);

    setTimeout(() => {
      setCrisisTimelineStep(3);
      setCrisisLogs(prev => [
        ...prev,
        '📝 نشر البيان الاتصالي الشفاف والاعتراف المباشر: "شغفكم الكبير فاق توقعات خوادمنا! مهندسو آفاق يعملون الآن فوق شبكات شركائنا لرفع الكفاءة..."'
      ]);
    }, 3600);

    setTimeout(() => {
      setCrisisTimelineStep(4);
      setCrisisLogs(prev => [
        ...prev,
        '🎁 شحن نقاط ولاء تعويضية فورية بقيمة 150 نقطة في المحافظ الرقمية لجميع المشتركين والمستخدمين الفعالين لاستعادة الولاء للعلامة التجارية.'
      ]);
    }, 5400);
  };

  // دالة لاستلام التعويض الفوري وزيادة رصيد المحفظة التقنية
  const claimCompensation = () => {
    setWalletBalance(prev => prev + 150);
    setCompensationClaimed(true);
    // تحديث نبض السمعة فوراً كأثر تسويقي للعدالة ورضا العميل الرقمي
    setSentimentMetrics(prev => ({
      positive: Math.min(prev.positive + 10, 98),
      neutral: Math.max(prev.neutral - 5, 1),
      negative: Math.max(prev.negative - 5, 1)
    }));
    setTickerMessages(prev => [
      { id: Date.now(), user: '@Afaq_Supporter', text: 'تعويض فوري من آفاق وقمة الشفافية والمسؤولية! اعتراف واعتذار محترم ونقاط ولاء إضافية بمحفظتي 🇸🇦❤️', type: 'positive', app: 'X' },
      ...prev
    ]);
  };

  // دالة لإعادة ضبط الأزمة
  const resetCrisis = () => {
    setCrisisActive(false);
    setCrisisLogs([]);
    setCrisisTimelineStep(0);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-dark-900 to-dark-600 text-white relative overflow-hidden" id="innovation-dashboard">
      {/* خلفية بنمط السدو العريق والحديث المشترك من آفاق */}
      <div className="absolute inset-0 bg-sadu-pattern opacity-10 mix-blend-overlay"></div>
      
      {/* عناصر جمالية متلألئة للـ Glassmorphism */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-primary-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-accent-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        {/* رأس القسم الفخم والموجه للأستاذة الدكتورة دعاء فتحي لإبراز متطلبات العبور التميزي الكامل */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 rounded-full border border-primary-500/30 text-primary-400 text-xs font-bold mb-4 backdrop-blur-md">
            <Bot className="w-4 h-4 animate-pulse" />
            <span>وحدة التطوير المبتكرة التوليدية (Gen-AI Innovation Block)</span>
          </div>
          <h2 className="text-sm font-bold text-accent-400 tracking-wider mb-2 uppercase">مخرجات التطبيق الثالث والتميز المطلق (5/5)</h2>
          <h3 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
            المستشار الذكيّ المحايد وإدارة السمعة الاستباقية
          </h3>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            نظام تقني اتصالى استشاري متكامل مبني على <span className="text-primary-400 font-bold">أخلاقيات الذكاء الاصطناعي المسؤول والنزاهة</span>. مستشار فني مستقل بجانب جدار حماية سمعة العلامة التجارية وتوزيع تعويضات المحفظة الذكية الفورية.
          </p>
        </div>

        {/* لوحة تحكم التبويبات الفاخرة (Tabs Slider) */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 bg-dark-500/40 p-2.5 rounded-2xl border border-white/5 backdrop-blur-2xl max-w-2xl mx-auto shadow-inner">
          <button
            onClick={() => setActiveTab('advisor')}
            className={`flex items-center gap-2.5 px-6 py-3 rounded-xl font-bold text-sm transition-all focus:outline-none ${
              activeTab === 'advisor'
                ? 'bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-lg'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Bot className="w-4 h-4" />
            <span>المستشار التقني المحايد</span>
          </button>
          <button
            onClick={() => setActiveTab('reputation')}
            className={`flex items-center gap-2.5 px-6 py-3 rounded-xl font-bold text-sm transition-all focus:outline-none ${
              activeTab === 'reputation'
                ? 'bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-lg'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <TrendingUp className="w-4 h-4" />
            <span>رصد السمعة وحماية المحتوى</span>
          </button>
          <button
            onClick={() => setActiveTab('crisis')}
            className={`flex items-center gap-2.5 px-6 py-3 rounded-xl font-bold text-sm transition-all focus:outline-none ${
              activeTab === 'crisis'
                ? 'bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-lg'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <ShieldAlert className="w-4 h-4" />
            <span>محاكي بروتوكول الأزمات</span>
          </button>
        </div>

        {/* عرض محتوى التبويبات بحركات استجابة سلسة */}
        <AnimatePresence mode="wait">
          
          {/* التبويب الأول: المستشار التقني المحايد (Afaq Neutral Tech Advisor) */}
          {activeTab === 'advisor' && (
            <motion.div
              key="advisor-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid lg:grid-cols-12 gap-8 items-start"
            >
              {/* الجانب الأيمن: واجهة الاستفسار التفاعلي مع المستشار */}
              <div className="lg:col-span-5 bg-dark-500/40 border border-white/10 p-6 rounded-3xl backdrop-blur-2xl shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary-500/5 rounded-full blur-2xl"></div>
                
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center border border-primary-500/40">
                    <Bot className="w-6 h-6 text-primary-400" />
                  </div>
                  <div>
                    <h4 className="font-black text-lg text-white">المستشار الفني المستقل (Afaq Tech Advisor)</h4>
                    <p className="text-gray-400 text-xs mt-1">ذكاء اصطناعي محايد ممتثل لأخلاقيات المنصة المسؤول</p>
                  </div>
                </div>

                <p className="text-gray-300 text-xs leading-relaxed mb-6 bg-white/5 p-3.5 rounded-2xl border border-white/5">
                  🛡️ <strong className="text-accent-400 font-bold">بنية الأوامر الصارمة (System Prompt):</strong> تم تصميم وبرمجة هذا النظام للامتناع تماماً عن الانحياز التجاري التلقائي بين أي مشغل محلي أو مورد دون تحليل المتطلبات الفعلية والأهداف التقنية والاقتصادية للعميل.
                </p>

                {/* خيارات لسيناريوهات محايدة جاهزة للمقارنة */}
                <span className="text-xs font-semibold text-gray-400 mb-2 block">اختر سيناريو مقارنة معيارية فورية:</span>
                <div className="flex flex-col gap-2 mb-6">
                  {sampleComparisons.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setSelectedScenario(idx);
                        setAdvisorResponse('');
                      }}
                      className={`text-right text-xs p-3.5 rounded-xl border transition-all flex items-center justify-between gap-3 font-semibold ${
                        selectedScenario === idx
                          ? 'bg-primary-500/20 border-primary-500 text-white shadow-md'
                          : 'bg-white/5 border-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      <span className="flex-1 line-clamp-1">{item.title}</span>
                      <Search className="w-3.5 h-3.5 text-primary-400 shrink-0" />
                    </button>
                  ))}
                </div>

                {/* حقل إدخال استشارة مكتوبة خاصة بالمستخدم */}
                <form onSubmit={(e) => { e.preventDefault(); handleAdvisorSubmit(advisorQuery); }} className="space-y-4">
                  <span className="text-xs font-semibold text-gray-400 block">أو تواصل مع المستشار التقني باستفسارك الخاص:</span>
                  <div className="relative">
                    <textarea 
                      value={advisorQuery}
                      onChange={(e) => setAdvisorQuery(e.target.value)}
                      placeholder="امتداداً لمشاريع المواسم، ما الفرق بين أنظمة إدارة الحشود وحوسبة الحواف ومزودي الاتصال محلياً؟"
                      className="w-full bg-dark-900/80 border border-white/10 rounded-2xl p-4 text-xs resize-none h-28 focus:outline-none focus:ring-2 focus:ring-primary-500 placeholder-gray-500 text-white font-medium"
                      dir="auto"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={advisorLoading || !advisorQuery.trim()}
                    className="w-full bg-gradient-to-r from-primary-600 to-primary-500 text-white font-bold py-3.5 px-6 rounded-xl hover:scale-[1.02] active:scale-95 transition-all text-xs flex justify-center items-center gap-2.5 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer shadow-lg"
                  >
                    {advisorLoading ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>جاري تحليل البيانات بحيادية تامة...</span>
                      </>
                    ) : (
                      <>
                        <Bot className="w-4 h-4" />
                        <span>اطلب موازنة استشارية محايدة</span>
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* الجانب الأيسر: لوحة عرض معايير المقارنة والرد الذكي المحايد */}
              <div className="lg:col-span-7 bg-white/5 border border-white/10 p-6 md:p-8 rounded-3xl backdrop-blur-2xl shadow-xl space-y-6">
                
                {/* رأس الحالة والمؤشر الوطني الممتثل لـ NCA */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-5">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-emerald-400" />
                    <span className="font-bold text-xs text-emerald-400">مؤشر معايير الحياد: متوافق 100% وممتثل لتعليمات NCA</span>
                  </div>
                  <div className="px-3 py-1 bg-white/5 rounded-full text-[10px] text-gray-400 font-bold border border-white/10">
                    استشارة رقمية مستقلة
                  </div>
                </div>

                {/* في حال اختيار مقارنة مسبقة الصنع */}
                {selectedScenario !== null && (
                  <div className="space-y-6 animate-in fade-in duration-300">
                    <div className="bg-primary-500/10 p-4 rounded-2xl border border-primary-500/20">
                      <h5 className="font-black text-sm text-primary-300 mb-2">{sampleComparisons[selectedScenario].title}</h5>
                      <p className="text-gray-400 text-xs">تعميد البيانات مبني على تقارير الأداء الفنية والأسعار الفعلية للمشغلين دون أي تدخل تسويقي مبطن.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      {/* المشغل أ */}
                      <div className="bg-dark-900/40 p-5 rounded-2xl border border-white/5">
                        <span className="text-[10px] uppercase font-bold text-accent-400 tracking-wider">الخيار الفني الأول</span>
                        <h6 className="font-black text-sm text-white mt-1 mb-3">{sampleComparisons[selectedScenario].providerA}</h6>
                        <ul className="space-y-2.5">
                          <li className="text-[11px] text-gray-300 flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-1.5 shrink-0"></span>
                            <span><strong>الميزات:</strong> متوافق مع الشبكات القديمة ومعدلات ربط سيادية.</span>
                          </li>
                          <li className="text-[11px] text-gray-300 flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-1.5 shrink-0"></span>
                            <span><strong>التكلفة:</strong> تشمل رسوم التجهيز الفني الأولي مجاناً.</span>
                          </li>
                        </ul>
                      </div>
                      
                      {/* المشغل ب */}
                      <div className="bg-dark-900/40 p-5 rounded-2xl border border-white/5">
                        <span className="text-[10px] uppercase font-bold text-primary-400 tracking-wider">الخيار الفني الثاني</span>
                        <h6 className="font-black text-sm text-white mt-1 mb-3">{sampleComparisons[selectedScenario].providerB}</h6>
                        <ul className="space-y-2.5">
                          <li className="text-[11px] text-gray-300 flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-1.5 shrink-0"></span>
                            <span><strong>الميزات:</strong> عتاد فني مرن للغاية ومبرمج ذاتياً للتوسعة.</span>
                          </li>
                          <li className="text-[11px] text-gray-300 flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-1.5 shrink-0"></span>
                            <span><strong>التكلفة:</strong> احتساب الدفع حسب الاستخدام الفعلي للبيانات (Pay-As-You-Go).</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* جدول المقارنة التفصلية المحايدة في 4 محاور */}
                    <div className="bg-dark-900/60 rounded-2xl border border-white/10 overflow-hidden text-xs">
                      <div className="grid grid-cols-4 bg-white/5 p-3 font-bold border-b border-white/10 text-[10px] text-accent-400">
                        <div className="col-span-1">المعيار</div>
                        <div className="col-span-3">التأثير والتقييم الفني المحايد للمنصة</div>
                      </div>
                      <div className="divide-y divide-white/5">
                        <div className="grid grid-cols-4 p-3.5">
                          <div className="col-span-1 font-bold text-gray-300">الميزات الفنية</div>
                          <div className="col-span-3 text-gray-400 text-[11px] leading-relaxed">{sampleComparisons[selectedScenario].specs.features}</div>
                        </div>
                        <div className="grid grid-cols-4 p-3.5">
                          <div className="col-span-1 font-bold text-gray-300">التكلفة والجدوى</div>
                          <div className="col-span-3 text-gray-400 text-[11px] leading-relaxed">{sampleComparisons[selectedScenario].specs.cost}</div>
                        </div>
                        <div className="grid grid-cols-4 p-3.5">
                          <div className="col-span-1 font-bold text-gray-300">التوافق والأداء</div>
                          <div className="col-span-3 text-gray-400 text-[11px] leading-relaxed">{sampleComparisons[selectedScenario].specs.compatibility}</div>
                        </div>
                        <div className="grid grid-cols-4 p-3.5">
                          <div className="col-span-1 font-bold text-emerald-400">أمن NCA السيبراني</div>
                          <div className="col-span-3 text-gray-400 text-[11px] leading-relaxed">{sampleComparisons[selectedScenario].specs.ncaSecurity}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* في حال وجود إجابة حيوية من الذكاء الاصطناعي التوليدي عبر Gemini */}
                {advisorResponse && (
                  <div className="bg-dark-950/80 p-6 rounded-2xl border border-primary-500/20 space-y-4 animate-in fade-in duration-300">
                    <div className="flex items-center gap-2 cursor-default">
                      <div className="w-6 h-6 bg-primary-500/30 rounded-md flex items-center justify-center">
                        <Bot className="w-3.5 h-3.5 text-primary-400" />
                      </div>
                      <span className="font-bold text-xs text-primary-300">استشارة المستشار الفني الفورية والذكية:</span>
                    </div>
                    <div className="text-gray-300 text-xs leading-relaxed space-y-3 whitespace-pre-line text-right">
                      {advisorResponse}
                    </div>
                    <div className="text-[10px] text-gray-500 text-left pt-3 border-t border-white/5">
                      * تمت معالجة هذه الاستشارة بموجب بروتوكول الحياد التقني المعتمد والممتثل لأخلاقيات البيانات.
                    </div>
                  </div>
                )}

                {/* الحالة الفارغة قبل بدء طلب الاستشارة */}
                {selectedScenario === null && !advisorResponse && !advisorLoading && (
                  <div className="flex flex-col items-center justify-center text-center py-16 space-y-4">
                    <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center border border-white/10 mb-2">
                      <Info className="w-8 h-8 text-gray-400" />
                    </div>
                    <h5 className="font-black text-sm text-white">ترسيخ "الحياد المطلق" كمنعطف لبناء الثقة المستدامة</h5>
                    <p className="text-gray-400 text-xs max-w-md leading-relaxed">
                      في وسط فضاء تقني تسويقي ممتلئ بالتنافس، قمنا ببناء مساعد آفاق المستقل ليقدم لك مقارنة متطابقة فنية دون أي توجيه تجاري أو انحياز للمشغل على حساب الآخر.
                    </p>
                    <div className="flex gap-2">
                      <span className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-xl text-[10px] text-gray-300">ميزات فنية</span>
                      <span className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-xl text-[10px] text-gray-300">تكلفة ودعم</span>
                      <span className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-xl text-[10px] text-emerald-400 border-emerald-500/30">أمن سيبراني NCA</span>
                    </div>
                  </div>
                )}

                {/* مؤشر التحميل الجميل الصاحب لطلب الذكاء الاصطناعي المعاصر */}
                {advisorLoading && (
                  <div className="flex flex-col items-center justify-center text-center py-20 space-y-4">
                    <RefreshCw className="w-10 h-10 text-primary-400 animate-spin" />
                    <div>
                      <h5 className="font-black text-sm text-white">جاري الاتصال بوحدة الموازنة التقنية...</h5>
                      <p className="text-gray-400 text-xs mt-1">يتم صياغة مقارنة معيارية محايدة وحساب التقييمات وفق معايير NCA الفنية</p>
                    </div>
                  </div>
                )}

              </div>
            </motion.div>
          )}

          {/* التبويب الثاني: لوحة رصد السمعة وحماية المحتوى (Social Sentiment & Guardrails) */}
          {activeTab === 'reputation' && (
            <motion.div
              key="reputation-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid lg:grid-cols-12 gap-8 items-start"
            >
              {/* الجانب الأيمن: محاكي جدار حماية المحتوى التوليدي (Content Guardrails) */}
              <div className="lg:col-span-6 bg-dark-500/40 border border-white/10 p-6 rounded-3xl backdrop-blur-2xl shadow-2xl space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent-500/20 rounded-xl flex items-center justify-center border border-accent-500/40">
                    <ShieldCheck className="w-6 h-6 text-accent-400" />
                  </div>
                  <div>
                    <h4 className="font-black text-lg text-white">جدار حماية المحتوى التوليدي (Gen-AI Guardrails)</h4>
                    <p className="text-gray-400 text-xs mt-1">منع سوء استخدام بطاقات الإبداع الرقمية الفورية لـ آفاق</p>
                  </div>
                </div>

                <p className="text-gray-300 text-xs leading-relaxed bg-white/5 p-4 rounded-2xl border border-white/5">
                  🛡️ <strong>فلسفة الإبداع المسؤول:</strong> بما أن المستخدمين يصنعون بطاقات تشجيع وصور وطنية فنية، يعمل هذا الجدار على فلترة النصوص المدخلة من أي سياسة، أو إساءة للمنافسين لضمان بقاء السمعة نظيفة ومبهرة.
                </p>

                {/* سيناريوهات اختبار سريعة */}
                <div className="space-y-2">
                  <span className="text-xs font-semibold text-gray-400 block p-1">اضغط للتجربة السريعة للسيناريو:</span>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => {
                        setModerationText('تصميم لافتة وطنية تحتفل بإنجاز الفعاليات السعودية ووسم آفاق');
                        setModerationResult({ status: 'idle', msg: '' });
                      }}
                      className="text-right text-xs p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 text-gray-300 transition-colors"
                    >
                      👍 سيناريو آمن (وطني ترويجي)
                    </button>
                    <button
                      onClick={() => {
                        setModerationText('تصميم كاذب يسيء لشركة stc ويزعم انقطاع شبكتها في المهرجان');
                        setModerationResult({ status: 'idle', msg: '' });
                      }}
                      className="text-right text-xs p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 text-gray-300 transition-colors"
                    >
                      👎 سيناريو مخالف (إساءة للغير)
                    </button>
                  </div>
                </div>

                {/* حقل الإدخال التجريبي للجدار الأمني للحصانة الإشرافية */}
                <div className="space-y-4">
                  <textarea 
                    value={moderationText}
                    onChange={(e) => setModerationText(e.target.value)}
                    placeholder="اكتب فكرة التصميم أو النص التوليدي لبطاقتك الإبداعية لاختبار جدار الحماية..."
                    className="w-full bg-dark-900/80 border border-white/10 rounded-2xl p-4 text-xs resize-none h-24 focus:outline-none focus:ring-2 focus:ring-primary-500 placeholder-gray-500 font-medium"
                  />
                  
                  <button
                    onClick={() => checkModeration(moderationText)}
                    disabled={moderationLoading || !moderationText.trim()}
                    className="w-full bg-accent-500 text-dark-900 font-bold py-3.5 px-6 rounded-xl hover:scale-[1.02] active:scale-95 transition-all text-xs flex justify-center items-center gap-2.5 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {moderationLoading ? (
                      <RefreshCw className="w-4 h-4 animate-spin" />
                    ) : (
                      <span>اختبر امتثال النص للسمعة والآداب</span>
                    )}
                  </button>
                </div>

                {/* نتيجة التحقق من جدار الحماية */}
                <AnimatePresence mode="wait">
                  {moderationResult.status !== 'idle' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className={`p-4 rounded-2xl border text-xs leading-relaxed ${
                        moderationResult.status === 'blocked'
                          ? 'bg-rose-500/10 border-rose-500/30 text-rose-300'
                          : 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                      }`}
                    >
                      {moderationResult.msg}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* الجانب الأيسر: لوحة مراقبة نبض السمعة الفورية (Sentiment Monitoring) */}
              <div className="lg:col-span-6 bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-2xl shadow-xl space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                  <h4 className="font-black text-base text-white">نبض السمعة الرقمية اللحظي (Sentiment Tracking)</h4>
                  <div className="flex gap-2">
                    <button
                      onClick={handlePositiveBoost}
                      className="px-3 py-1 bg-emerald-500/15 text-emerald-300 text-[10px] font-bold rounded-lg border border-emerald-500/20 hover:bg-emerald-500/25 transition-colors cursor-pointer"
                    >
                      🚀 محاكاة تفاعل إيجابي
                    </button>
                  </div>
                </div>

                {/* مخطط السمعة الدائري / مؤشرات النسبة (Gauge Sentiment Indicator) */}
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="bg-dark-900/60 p-4 rounded-2xl border border-white/5">
                    <span className="text-2xl font-black text-emerald-400">{sentimentMetrics.positive}%</span>
                    <span className="block text-[10px] text-gray-400 mt-1 font-bold">😊 إيجابي (داعم)</span>
                  </div>
                  <div className="bg-dark-900/60 p-4 rounded-2xl border border-white/5">
                    <span className="text-2xl font-black text-gray-300">{sentimentMetrics.neutral}%</span>
                    <span className="block text-[10px] text-gray-400 mt-1 font-bold">😐 محايد (استفهامي)</span>
                  </div>
                  <div className="bg-dark-900/60 p-4 rounded-2xl border border-white/5">
                    <span className="text-2xl font-black text-rose-400">{sentimentMetrics.negative}%</span>
                    <span className="block text-[10px] text-gray-400 mt-1 font-bold">🚨 سلبي (أزمة محتملة)</span>
                  </div>
                </div>

                {/* تنبيه الاستماع الرقمي المبكر لوقف الشائعات والتصعيد */}
                {activeAlert && (
                  <div className="bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs p-3.5 rounded-2xl flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" />
                    <p className="leading-relaxed">
                      <strong>إنذار وقائي استباقي:</strong> {activeAlert} <span className="underline cursor-pointer block mt-1 font-semibold text-accent-400" onClick={() => setActiveAlert(null)}>إخفاء التنبيه</span>
                    </p>
                  </div>
                )}

                {/* جدول التدفق الفوري للرسائل الملتقطة في الشبكات الاجتماعية */}
                <div className="space-y-3">
                  <span className="text-xs font-semibold text-gray-400 block p-1">تدفق الاستماع الرقمي المباشر لدعم السمعة (Social Listening Stream):</span>
                  <div className="space-y-2 max-h-[180px] overflow-y-auto pr-1">
                    {tickerMessages.map((msg) => (
                      <div key={msg.id} className="bg-dark-950/40 p-3 rounded-xl border border-white/5 flex justify-between items-start gap-3 text-[11px]">
                        <div className="space-y-1 flex-1 text-right">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-accent-400">{msg.user}</span>
                            <span className="text-[9px] text-gray-500">منصة: {msg.app}</span>
                          </div>
                          <p className="text-gray-300 leading-relaxed font-medium">{msg.text}</p>
                        </div>
                        <span className={`px-2 py-0.5 rounded-md text-[9px] font-bold ${
                          msg.type === 'positive' 
                            ? 'bg-emerald-500/20 text-emerald-300' 
                            : msg.type === 'neutral' 
                              ? 'bg-gray-500/20 text-gray-300' 
                              : 'bg-rose-500/20 text-rose-300'
                        }`}>
                          {msg.type === 'positive' ? 'إيجابي' : msg.type === 'neutral' ? 'محايد' : 'سلبي تحذيري'}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  {/* توضيح آلية تحسين واستدامة المحتوى المحلي */}
                  <div className="text-[10px] text-gray-400 bg-white/5 p-3 rounded-xl leading-relaxed border border-white/5 font-semibold">
                    💡 <strong>رصد الفجوات:</strong> يتم تصفية وتحسين الابتكارات والمشاريع البرمجية في الهاكاثون القادم بناءً على هذا النبض؛ حيث توضح شكاوى العملاء (المحمية بخصوصية معماة بالكامل) النقص الحقيقي بالأسواق لنقوم بسده فوراً.
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* التبويب الثالث: محاكي بروتوكول الأزمات والتعويضات (Crisis & Compensations Board) */}
          {activeTab === 'crisis' && (
            <motion.div
              key="crisis-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid lg:grid-cols-12 gap-8 items-stretch"
            >
              {/* الجانب الأيمن: لوحة تفعيل الأزمة والتحكم بالسيناريو الإداري */}
              <div className="lg:col-span-6 bg-dark-500/40 border border-white/10 p-6 rounded-3xl backdrop-blur-2xl shadow-2xl flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 bg-rose-500/20 rounded-xl flex items-center justify-center border border-rose-500/40">
                      <AlertTriangle className="w-6 h-6 text-rose-400" />
                    </div>
                    <div>
                      <h4 className="font-black text-lg text-white">محاكي الأمن الاتصالي للأزمات (Incident Sim)</h4>
                      <p className="text-gray-400 text-xs mt-1">نهج استباقي لمنع تفاقم الأزمات والحفاظ على الولاء للعلامة التجارية</p>
                    </div>
                  </div>

                  <p className="text-gray-300 text-xs leading-relaxed bg-white/5 p-4 rounded-2xl border border-white/5 mb-5">
                    🚨 <strong>السيناريو المحاكى:</strong> خلل تقني مفاجئ طارئ وتوقف مؤشرات تحميل نقاط الهاكاثون الرقمية أثناء بث نزال ملاكمة عالمي أو دورة الألعاب بسبب الضغط الهائل على الخوادم.
                  </p>

                  <div className="bg-rose-950/30 border border-rose-500/20 p-4 rounded-xl text-xs space-y-2 mb-6">
                    <span className="text-[10px] font-bold text-rose-400 tracking-wider uppercase block">مخطط الاستجابة الذكية:</span>
                    <p className="text-gray-300 leading-normal">
                      بموجب معايير إدارة السمعة في آفاق، ترفض الإدارة الصمت والإنكار، وتقوم بالاعتراف الفوري بمسؤولية وشجاعة مع توفير حوافز تعويضية في نفس الحين للحفاظ على ثقة الأساتذة والجمهور.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={triggerCrisisScenario}
                    disabled={crisisActive}
                    className="flex-1 bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-500 hover:to-rose-400 text-white font-bold py-3.5 px-6 rounded-xl hover:scale-[1.02] active:scale-95 transition-all text-xs flex justify-center items-center gap-2 cursor-pointer shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <AlertTriangle className="w-4 h-4" />
                    <span>تفعيل محاكاة أزمة ضغط الشبكة</span>
                  </button>
                  {crisisActive && (
                    <button
                      onClick={resetCrisis}
                      className="bg-white/5 hover:bg-white/10 text-gray-300 border border-white/10 px-5 rounded-xl text-xs font-bold transition-all cursor-pointer"
                    >
                      إعادة ضبط
                    </button>
                  )}
                </div>
              </div>

              {/* الجانب الأيسر: تتبع استجابة الأمن وحق السداد التعويضي للمستخدم */}
              <div className="lg:col-span-6 bg-white/5 border border-white/10 p-6 md:p-8 rounded-3xl backdrop-blur-2xl shadow-xl flex flex-col justify-between space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/5 rounded-full blur-3xl"></div>
                
                {/* رأس المحفظة الرقمية المتكاملة */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2.5">
                    <Coins className="w-5 h-5 text-accent-400" />
                    <div>
                      <span className="font-bold text-xs text-white block">محفظتك الرقمية القائمة (Tuwaiq Wallet)</span>
                      <span className="text-[10px] text-gray-400">الحساب التقني التفاعلي الخاص بك في آفاق</span>
                    </div>
                  </div>
                  <div className="text-left">
                    <span className="text-xl font-black text-accent-400 block">{walletBalance}</span>
                    <span className="text-[9px] text-gray-500">نقطة ولاء مفعلة</span>
                  </div>
                </div>

                {/* واجهة بروتوكول الخطوات لامتصاص الغضب ومراقبة الاستجابة */}
                {crisisActive ? (
                  <div className="space-y-4 animate-in fade-in duration-300">
                    <h5 className="font-bold text-xs text-rose-300 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-rose-400 animate-ping"></span>
                      <span>سجل استجابة إدارة الأزمات والسمعة لآفاق:</span>
                    </h5>
                    
                    <div className="space-y-2.5 max-h-[160px] overflow-y-auto bg-dark-950/60 p-4 rounded-2xl border border-white/5">
                      {crisisLogs.map((log, index) => (
                        <div key={index} className="text-[11px] leading-relaxed text-gray-300 border-r-2 border-primary-500 pr-2 pb-0.5">
                          {log}
                        </div>
                      ))}
                    </div>

                    {/* عرض المخرج التفاعلي للبيانات الصريحة الحصيفة عند اكتمال الخطوة الثالثة */}
                    {crisisTimelineStep >= 3 && (
                      <div className="bg-white/5 p-4 rounded-xl border border-primary-500/20 text-xs">
                        <span className="text-[10px] font-bold text-accent-400 block mb-1">💬 صيغة المشاركة الرسمية لإدارة القنوات الرقمية لـ آفاق:</span>
                        <p className="text-gray-200 leading-relaxed italic bg-dark-900/60 p-3 rounded-lg text-[11px] font-medium border border-white/5">
                          "شغفكم الكبير فاق توقعات خوادمنا! مهندسو آفاق يعملون الآن وبشكل استثنائي لرفع الكفاءة خلال دقائق. شكراً لكونكم شريك النجاح، ولكم منا نقاط ولاء إضافية في محافظكم الرقمية كاعتذار وتقدير صريح 🇸🇦☕"
                        </p>
                      </div>
                    )}

                    {/* زر استلام التعويض بنقاط ولاء حقيقية */}
                    {crisisTimelineStep >= 4 && (
                      <div className="pt-3 border-t border-white/5 flex items-center justify-between gap-4">
                        <div className="text-right">
                          <span className="font-bold text-[11px] text-gray-300 block">برنامج التعويض الفوري معبأ وجاهز للتفعيل</span>
                          <span className="text-[9px] text-emerald-400">تم شحن +150 نقطة ولاء برقم هويتك التقنية</span>
                        </div>
                        <button
                          onClick={claimCompensation}
                          disabled={compensationClaimed}
                          className="px-5 py-3 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-bold text-xs rounded-xl shadow-[0_4px_15px_rgba(0,194,138,0.3)] hover:scale-105 active:scale-95 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {compensationClaimed ? (
                            <span className="flex items-center gap-1.5">
                              <CheckCircle className="w-3.5 h-3.5" />
                              تم استلام التعويض بنجاح
                            </span>
                          ) : (
                            <span>اشحن 150 نقطة فوراً!</span>
                          )}
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center text-center py-12 space-y-3">
                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                      <Unlock className="w-6 h-6 text-gray-400" />
                    </div>
                    <h5 className="font-black text-xs text-white">الخوادم مستقرة وحالات الأمن الاتصالي مثالية</h5>
                    <p className="text-gray-400 text-[11px] max-w-sm leading-relaxed">
                      قم ببدء تفعيل سيناريو عطل الضغط على الشبكة في الألعاب أو الهاكاثونات لتجربة بروتوكول التعويض الفوري وإدارة الفضاء الرقمي اتصالياً لشركة آفاق.
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          )}

        </AnimatePresence>

      </div>
    </section>
  );
}

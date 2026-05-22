import React, { useState, useEffect } from 'react';
import { Clock, Video, UploadCloud, Trophy, ChevronLeft, Link as LinkIcon, Lock, CheckCircle2, ChevronDown, Database, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function HackathonDashboard() {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 35,
    seconds: 9
  });

  const [uploadState, setUploadState] = useState<'idle' | 'uploading' | 'success'>('idle');
  const [uploadProgress, setUploadProgress] = useState(0);
  const [expandedYear, setExpandedYear] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Simple countdown effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSimulatedUpload = () => {
    if (uploadState === 'success') return;
    setUploadState('uploading');
    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setUploadState('success');
          return 100;
        }
        return prev + 15;
      });
    }, 400);
  };

  return (
    <div className="py-20 relative overflow-hidden bg-dark-500 bg-sadu-pattern">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 mix-blend-screen pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-500/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 mix-blend-screen pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 shadow-inner mx-auto">
              <Lock className="w-4 h-4 text-primary-400" />
              <span className="text-white text-xs font-bold tracking-wide">الواحة الرقمية - مساحة العمل المؤمنة</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              لوحة تحكم <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-300 drop-shadow-[0_0_15px_rgba(0,194,138,0.4)]">المبتكرين</span>
            </h2>
            <p className="text-gray-400 text-lg">مساحة عملك الرقمية لإدارة فريقك وتسليم مخرجات الهاكاثون وربطها السحابي</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Main Column */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Live Stream Panel */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-dark-600/80 backdrop-blur-2xl border border-primary-500/20 rounded-[2rem] p-6 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/20 rounded-full blur-[30px] -translate-y-1/2 translate-x-1/2 mix-blend-screen pointer-events-none"></div>
              
              <div className="flex items-center justify-between mb-6 relative z-10 border-b border-white/5 pb-4">
                <h3 className="text-xl font-bold text-white flex items-center gap-3">
                  <Video className="w-6 h-6 text-primary-400" />
                  البث المباشر (HLS / RTMP)
                </h3>
                <span className="bg-red-500/20 text-red-400 border border-red-500/50 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-2 shadow-[0_0_10px_rgba(239,68,68,0.3)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse"></span>
                  مباشر LIVE
                </span>
              </div>
              
              <div className="relative aspect-video bg-black rounded-2xl overflow-hidden border border-white/10 group-hover:border-primary-500/30 transition-colors">
                {!isPlaying ? (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 flex flex-col justify-end p-6 z-10">
                      <span className="bg-primary-500 text-dark-900 text-xs font-black px-2 py-1 rounded mb-3 w-max">التصوير المباشر - الرياض</span>
                      <h4 className="text-white text-xl md:text-2xl font-bold max-w-lg leading-tight mb-2">ورشة عمل معمقة: بناء النماذج اللغوية الكبيرة (LLMs) المخصصة لقطاع الاتصالات</h4>
                      <p className="text-gray-400 text-sm flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                        2.4K مشاهد متصل
                      </p>
                    </div>
                    <img src="https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&q=80&w=1600" className="w-full h-full object-cover opacity-60" alt="Live Stream Placeholder" />
                    
                    <button 
                      onClick={() => setIsPlaying(true)}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-primary-500/90 hover:bg-primary-500 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 z-20 cursor-pointer transition-all hover:scale-110 shadow-[0_0_30px_rgba(0,194,138,0.4)]"
                    >
                      <Play className="w-8 h-8 text-dark-900 ml-2" fill="currentColor" />
                    </button>
                  </>
                ) : (
                  <div className="absolute inset-0 bg-dark-600 flex items-center justify-center flex-col gap-4 z-20">
                    <span className="w-12 h-12 border-4 border-primary-500/30 border-t-primary-500 rounded-full animate-spin"></span>
                    <span className="text-primary-400 font-bold animate-pulse">جاري الاتصال بخوادم البث RTMP...</span>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Upload Zone Panel */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-dark-600/80 backdrop-blur-2xl border border-primary-500/20 rounded-[2rem] p-6 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]"
            >
              <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
                <h3 className="text-xl font-bold text-white flex items-center gap-3">
                  <Database className="w-6 h-6 text-primary-400" />
                  ربط السحابة: تسليم المشروع
                </h3>
              </div>
              
              <div 
                className={`border-2 border-dashed rounded-2xl p-8 transition-all text-center group
                  ${uploadState === 'success' 
                    ? 'border-primary-500/50 bg-primary-500/10' 
                    : 'border-primary-500/30 hover:bg-primary-500/5 hover:border-primary-400 cursor-pointer'
                  }
                `}
                onClick={handleSimulatedUpload}
              >
                {uploadState === 'idle' && (
                  <>
                    <div className="w-16 h-16 bg-dark-500 border border-white/10 rounded-2xl mx-auto flex items-center justify-center mb-4 transition-transform group-hover:-translate-y-1 group-hover:shadow-[0_10px_20px_-10px_rgba(0,194,138,0.5)]">
                      <UploadCloud className="w-8 h-8 text-primary-400" />
                    </div>
                    <h4 className="text-white text-lg font-bold mb-2">اسحب وأفلت ملفات المشروع هنا</h4>
                    <p className="text-gray-400 text-sm mb-6 max-w-sm mx-auto">
                      سيتم تصنيف الملفات ورفعها مباشرة إلى قواعد بيانات "آفاق للاتصالات" الأمنة. يدعم (ZIP, RAR)
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                      <button className="bg-primary-500 text-dark-900 px-6 py-2.5 rounded-xl font-bold shadow-[0_4px_14px_rgba(0,194,138,0.3)] hover:scale-105 transition-transform w-full sm:w-auto">
                        استعراض الملفات
                      </button>
                      <button className="bg-white/5 text-white border border-white/10 px-6 py-2.5 rounded-xl font-bold hover:bg-white/10 transition-colors w-full sm:w-auto flex items-center justify-center gap-2">
                        <LinkIcon className="w-4 h-4" />
                        إدراج رابط مستودع
                      </button>
                    </div>
                  </>
                )}

                {uploadState === 'uploading' && (
                  <div className="py-8 max-w-md mx-auto">
                    <Database className="w-12 h-12 text-primary-400 mx-auto mb-4 animate-bounce" />
                    <h4 className="text-white text-lg font-bold mb-4">جاري المعالجة والرفع لقواعد البيانات...</h4>
                    <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary-500 transition-all duration-300 ease-out"
                        style={{ width: `${uploadProgress}%` }}
                      ></div>
                    </div>
                    <p className="text-primary-400 font-bold mt-2 text-sm">{Math.min(uploadProgress, 100)}%</p>
                  </div>
                )}

                {uploadState === 'success' && (
                  <div className="py-8 animate-in zoom-in duration-300">
                    <div className="w-20 h-20 bg-primary-500/20 rounded-full mx-auto flex items-center justify-center mb-4 border border-primary-500/50 shadow-[0_0_30px_rgba(0,194,138,0.4)]">
                      <CheckCircle2 className="w-10 h-10 text-primary-400" />
                    </div>
                    <h4 className="text-white text-xl font-black mb-2">تم الربط والتسليم بنجاح</h4>
                    <p className="text-gray-400 text-sm">تم تخزين مشروعك بشكل آمن في قاعدة بيانات الهاكاثون السحابية.</p>
                  </div>
                )}
              </div>
            </motion.div>

          </div>

          {/* Sidebar Column */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Live Countdown */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-dark-600/80 backdrop-blur-2xl border border-primary-500/20 rounded-[2rem] p-6 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-primary-400 to-accent-400"></div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
                <h3 className="text-lg font-bold text-white flex items-center gap-3">
                  <Clock className="w-5 h-5 text-accent-400" />
                  الوقت المتبقي للتسليم الذكي
                </h3>
              </div>
              
              <div className="grid grid-cols-4 gap-3 text-center">
                <div className="bg-dark-900/50 border border-white/10 rounded-xl p-3 flex flex-col justify-center items-center shadow-inner relative overflow-hidden group">
                  <div className="absolute inset-0 bg-primary-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <span className="text-2xl md:text-3xl font-black text-primary-400 tracking-tighter mb-1 font-mono">{timeLeft.days.toString().padStart(2, '0')}</span>
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">أيام</span>
                </div>
                <div className="bg-dark-900/50 border border-white/10 rounded-xl p-3 flex flex-col justify-center items-center shadow-inner relative overflow-hidden group">
                  <div className="absolute inset-0 bg-primary-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <span className="text-2xl md:text-3xl font-black text-primary-400 tracking-tighter mb-1 font-mono">{timeLeft.hours.toString().padStart(2, '0')}</span>
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">ساعات</span>
                </div>
                <div className="bg-dark-900/50 border border-white/10 rounded-xl p-3 flex flex-col justify-center items-center shadow-inner relative overflow-hidden group">
                  <div className="absolute inset-0 bg-primary-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <span className="text-2xl md:text-3xl font-black text-primary-400 tracking-tighter mb-1 font-mono">{timeLeft.minutes.toString().padStart(2, '0')}</span>
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">دقائق</span>
                </div>
                <div className="bg-dark-900/50 border border-white/10 rounded-xl p-3 flex flex-col justify-center items-center shadow-inner relative overflow-hidden group">
                   <div className="absolute inset-0 bg-primary-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <span className="text-2xl md:text-3xl font-black text-primary-400 tracking-tighter mb-1 font-mono tabular-nums">{timeLeft.seconds.toString().padStart(2, '0')}</span>
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">ثواني</span>
                </div>
              </div>
              
              {/* Progress */}
              <div className="mt-6">
                 <div className="flex justify-between text-xs font-bold text-gray-400 mb-2">
                    <span>نسبة تقدم الهاكاثون</span>
                    <span className="text-primary-400">75%</span>
                 </div>
                 <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-l from-primary-400 to-accent-400 rounded-full w-3/4 relative">
                        <div className="absolute top-0 bottom-0 left-0 right-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGwyMCAyMEgwem0yMCBMMCAyMFYwWiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjE1KSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+')] opacity-50 animate-[slide_1s_linear_infinite]"></div>
                    </div>
                 </div>
              </div>
            </motion.div>

            {/* Hall of Fame / Archive (Interactive) */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-dark-600/80 backdrop-blur-2xl border border-primary-500/20 rounded-[2rem] p-6 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]"
            >
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
                <h3 className="text-lg font-bold text-white flex items-center gap-3">
                  <Trophy className="w-5 h-5 text-accent-400" />
                  أرشيف لوحة الشرف
                </h3>
              </div>

              <div className="space-y-4">
                {/* 2025 Archive */}
                <div 
                  className={`border rounded-xl transition-all ${expandedYear === '2025' ? 'bg-primary-500/10 border-primary-500/40' : 'bg-white/5 border-white/10 hover:border-primary-500/40 cursor-pointer overflow-hidden'}`}
                >
                  <div className="p-4 flex justify-between items-start" onClick={() => setExpandedYear(expandedYear === '2025' ? null : '2025')}>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-accent-500 text-dark-900 text-[10px] font-black px-2 py-0.5 rounded shadow-[0_0_8px_rgba(196,160,82,0.6)]">نسخة 2025</span>
                        <span className="text-[10px] text-gray-500 font-bold border border-white/10 px-2 py-0.5 rounded">رعاية stc و Zain</span>
                      </div>
                      <h4 className="text-white font-bold text-sm mb-1 leading-snug">مشروع "سند التقني" لنظم الـ 5G</h4>
                      <p className="text-gray-400 text-xs">تطوير بنية تحتية مستدامة لأبراج الاتصالات.</p>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${expandedYear === '2025' ? 'rotate-180 text-primary-400' : ''}`} />
                  </div>
                  
                  {/* Gallery Expansion */}
                  <AnimatePresence>
                    {expandedYear === '2025' && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="p-4 pt-0 border-t border-white/5 mt-2">
                          <p className="text-gray-300 font-medium text-xs mb-3 leading-relaxed">
                            شهدت هذه النسخة حضور شركاء النجاح الاستراتيجيين داخل أروقة الهاكاثون، حيث عمل المتسابقون على دمج الهوية الوطنية بعمارة الذكاء الاصطناعي.
                          </p>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="relative group/img rounded-lg overflow-hidden h-24">
                              <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover transition-transform group-hover/img:scale-110" alt="Tech Event" />
                              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent flex items-end p-2"><span className="text-[10px] text-white font-bold shadow-sm">منصة الفائزين</span></div>
                            </div>
                            <div className="relative group/img rounded-lg overflow-hidden h-24">
                              <img src="https://images.unsplash.com/photo-1588196749597-9ff0464ac8e4?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover transition-transform group-hover/img:scale-110" alt="Team Discussion" />
                              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent flex items-end p-2"><span className="text-[10px] text-white font-bold shadow-sm">جلسات العصف الذهني</span></div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                {/* 2024 Archive */}
                <div 
                  className={`border rounded-xl transition-all ${expandedYear === '2024' ? 'bg-primary-500/10 border-primary-500/40' : 'bg-white/5 border-white/10 hover:border-primary-500/40 cursor-pointer overflow-hidden'}`}
                >
                  <div className="p-4 flex justify-between items-start" onClick={() => setExpandedYear(expandedYear === '2024' ? null : '2024')}>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-gray-400 text-dark-900 text-[10px] font-black px-2 py-0.5 rounded">نسخة 2024</span>
                      </div>
                      <h4 className="text-white font-bold text-sm mb-1 leading-snug">مشروع "حماية" للأمن السيبراني</h4>
                      <p className="text-gray-400 text-xs">نظام ذكي للتعرف على هجمات التصيد الاحتيالي</p>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${expandedYear === '2024' ? 'rotate-180 text-primary-400' : ''}`} />
                  </div>
                  
                  {/* Gallery Expansion */}
                  <AnimatePresence>
                    {expandedYear === '2024' && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                         <div className="p-4 pt-0 border-t border-white/5 mt-2">
                          <p className="text-gray-300 font-medium text-xs mb-3 leading-relaxed">
                            ركزت النسخة السابقة على الحلول الاستباقية في أمن الاتصالات.
                          </p>
                          <div className="relative rounded-lg overflow-hidden h-32">
                             <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Cyber Security Hackathon" />
                             <div className="absolute inset-0 bg-dark-900/40 mix-blend-overlay"></div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
}


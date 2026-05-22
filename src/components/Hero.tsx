import { ArrowLeft, Wifi, Zap, Sparkles, Activity } from 'lucide-react';
import { motion } from 'motion/react';
import AfaqLogo from './AfaqLogo';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-dark-500 min-h-[650px] flex items-center bg-sadu-pattern">
      {/* Background Abstract Vectors & Digital Oasis Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-600/30 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3 mix-blend-screen"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-500/20 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/4 mix-blend-screen"></div>
        
        {/* Fiber Optic Light Trails */}
        <motion.div 
          animate={{ x: [-1000, 1000], opacity: [0, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-0 w-[800px] h-1 bg-gradient-to-r from-transparent via-primary-400 to-transparent blur-[2px] opacity-50 transform -rotate-12"
        />
        <motion.div 
          animate={{ x: [1000, -1000], opacity: [0, 1, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "linear", delay: 1 }}
          className="absolute bottom-1/3 right-0 w-[1000px] h-[2px] bg-gradient-to-r from-transparent via-accent-400 to-transparent blur-[1px] opacity-40 transform rotate-12"
        />
        
        {/* Tech Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg0MHY0MEgwVjB6bTIwIDIwaDIwdjIwSDIwdi0yMHptLTIwIDBoMjB2MjBIMHYtMjB6IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=')] opacity-30 mix-blend-overlay"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-center lg:text-right"
          >
            <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl shadow-inner mx-auto lg:mx-0 shrink-0">
              <AfaqLogo className="w-5 h-5" useOriginalColors={true} />
              <span className="text-white text-sm font-bold tracking-wide">الواحة الرقمية السعودية</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight tracking-tight">
              مرحباً بكم في <span className="text-transparent bg-clip-text bg-gradient-to-l from-primary-400 to-accent-300 drop-shadow-[0_0_20px_rgba(0,194,138,0.4)]">آفاق..</span>
              <br />
              <span className="text-3xl lg:text-5xl text-gray-200 mt-4 block font-medium">حيث تلتقي الأصالة بالمستقبل</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
              وجهتك الرقمية للابتكار والاتصال الفائق لندعم التحول الرقمي الشامل في المملكة. استمتع بشبكاتنا العصبية وتقنيات 5G المتقدمة المصممة لواقع اليوم وتطلعات الغد.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <button className="bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all transform hover:-translate-y-1 shadow-[0_0_30px_rgba(0,194,138,0.3)]">
                <Sparkles className="w-5 h-5" />
                <span>اكتشف الباقات الذكية</span>
              </button>
              <button className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-2xl font-bold text-lg backdrop-blur-md transition-all hover:border-white/20">
                <span>تصفح مسارات الهاكاثون</span>
              </button>
            </div>
          </motion.div>

          {/* Visual Showcase (Glassmorphism Digital Hub) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mx-auto lg:mx-0 max-w-md lg:max-w-none group"
          >
            {/* Main Cyber Panel Mockup */}
            <div className="relative rounded-[3rem] bg-gradient-to-b from-dark-500/80 to-dark-600/90 border border-white/10 backdrop-blur-3xl shadow-[0_0_60px_-15px_rgba(0,194,138,0.4)] aspect-[9/18] overflow-hidden transform group-hover:scale-[1.02] transition-transform duration-700">
              
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600/30 to-dark-900/90 mix-blend-overlay z-10"></div>
              
              <div className="absolute inset-0 p-6 flex flex-col justify-end z-20">
                <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-6 shadow-2xl relative overflow-hidden group-hover:shadow-[0_0_40px_rgba(196,160,82,0.15)] transition-shadow">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/40 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2 mix-blend-screen"></div>
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="text-white font-black text-xl mb-1">باقة طويق الرقمية</h3>
                        <p className="text-primary-200 text-sm flex items-center gap-1 font-medium"><Zap className="w-3 h-3 text-accent-400" /> إنترنت لامركزي</p>
                      </div>
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md">
                         <Wifi className="w-6 h-6 text-primary-400" />
                      </div>
                    </div>
                    <div className="flex items-baseline gap-1 mb-6">
                      <span className="text-5xl font-black text-white tracking-tighter">199</span>
                      <span className="text-gray-300 text-base font-medium">ريال/شهر</span>
                    </div>
                    <button className="w-full bg-primary-500 text-dark-900 py-3.5 rounded-2xl font-bold text-base hover:bg-primary-400 transition-colors shadow-[0_4px_14px_0_rgba(0,194,138,0.25)]">
                      اشترك الآن
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-4 sm:-left-6 lg:-left-12 top-1/4 z-30 bg-dark-500/80 backdrop-blur-2xl p-4 sm:p-5 rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] border border-primary-500/30"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-500/20 rounded-2xl flex items-center justify-center shadow-inner border border-primary-400/20 animate-pulse shadow-[0_0_15px_rgba(0,194,138,0.3)]">
                  <Activity className="w-5 h-5 sm:w-6 sm:h-6 text-primary-400" />
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs text-primary-200 font-bold mb-0.5">زمن الاستجابة</p>
                  <p className="text-lg sm:text-xl font-black text-white tracking-tight">1.2 <span className="text-xs sm:text-sm text-gray-400">ms</span></p>
                </div>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </div>
  );
}

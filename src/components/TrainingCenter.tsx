import { BookOpen, GraduationCap, PlayCircle, Users, Clock, Award, ArrowLeft, Download, FileText, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

const mockCourses = [
  {
    id: 1,
    title: 'أساسيات شبكات الجيل الخامس 5G',
    category: 'مسار التقنية',
    instructor: 'م. أحمد الشهري',
    duration: '4 أسابيع',
    trainees: '1,200+',
    image: 'https://images.unsplash.com/photo-1614064641913-6b7140414c71?auto=format&fit=crop&q=80&w=800',
    status: 'متاح للجميع',
  },
  {
    id: 2,
    title: 'الأمن السيبراني في العصر الرقمي',
    category: 'مسار الأمن',
    instructor: 'د. سارة الغامدي',
    duration: '6 أسابيع',
    trainees: '850+',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
    status: 'التسجيل مفتوح',
  },
  {
    id: 3,
    title: 'مقدمة في الذكاء الاصطناعي وإنترنت الأشياء',
    category: 'مسار الابتكار',
    instructor: 'م. خالد الدوسري',
    duration: '5 أسابيع',
    trainees: '2,100+',
    image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&q=80&w=800',
    status: 'يبدأ قريباً',
  }
];

export default function TrainingCenter() {
  const [activeTab, setActiveTab] = useState<'courses' | 'certificates'>('courses');
  const [downloadingId, setDownloadingId] = useState<number | null>(null);

  const handleDownloadCertificate = (courseId: number) => {
    setDownloadingId(courseId);
    setTimeout(() => {
      // Simulate PDF Generation and Download
      const blob = new Blob(['Mock PDF Certificate content from Hodhod Academy'], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `Hodhod_Certificate_${courseId}.pdf`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      setDownloadingId(null);
    }, 1500);
  };

  return (
    <div className="space-y-8">
      {/* Global Impact & Stats Banner */}
      <div className="bg-gradient-to-br from-dark-500 to-dark-400 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500 rounded-full blur-[80px] opacity-20 -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-500 rounded-full blur-[80px] opacity-20 translate-y-1/3 -translate-x-1/4"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg0MHY0MEgwVjB6bTIwIDIwaDIwdjIwSDIwdi0yMHptLTIwIDBoMjB2MjBIMHYtMjB6IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=')] opacity-20"></div>
        
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-right">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-accent-400 animate-pulse"></span>
              <span className="text-white text-sm font-bold tracking-wide">رواد الأثر المعرفي الإقليمي</span>
            </div>
            <h4 className="text-3xl lg:text-4xl font-black mb-5 leading-tight">تمكين رقمي يتجاوز الحدود</h4>
            <p className="text-gray-300 leading-relaxed text-base lg:text-lg mb-6">
              أسهمت <span className="text-white font-bold">آفاق للاتصالات</span> في تقديم برامج تدريب متقدمة وتأهيل نوعي لأعداد ضخمة من الطلاب والعاملين في جميع أنحاء المملكة. ولم يتوقف أثرنا هنا، بل امتد لتبادل الخبرات التقنية وتدريب الكوادر في دول المنطقة ودول نائية، لنكون شركاء في تنمية المهارات الرقمية المتقدمة.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 shrink-0 w-full lg:w-auto">
             <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 text-center border border-white/10 shadow-lg relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-16 h-16 bg-primary-500/20 rounded-bl-full transition-transform group-hover:scale-110"></div>
               <div className="text-4xl lg:text-5xl font-black text-primary-400 mb-2 relative z-10 text-shadow-sm">+250K</div>
               <div className="text-sm lg:text-base text-gray-100 font-bold relative z-10">متدرب داخل المملكة</div>
               <div className="text-xs text-gray-400 mt-1.5 font-medium relative z-10">طلاب وموظفين</div>
             </div>
             <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 text-center border border-white/10 shadow-lg relative overflow-hidden group">
               <div className="absolute top-0 left-0 w-16 h-16 bg-accent-500/20 rounded-br-full transition-transform group-hover:scale-110"></div>
               <div className="text-4xl lg:text-5xl font-black text-accent-400 mb-2 relative z-10 text-shadow-sm">+45K</div>
               <div className="text-sm lg:text-base text-gray-100 font-bold relative z-10">متدرب دولي</div>
               <div className="text-xs text-gray-400 mt-1.5 font-medium relative z-10">برامج تبادل الخبرات</div>
             </div>
          </div>
        </div>
      </div>

      {/* Control Navigation */}
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-6">
        <div className="flex bg-gray-50 p-1.5 rounded-2xl border border-gray-100 shadow-sm self-start">
          <button
            onClick={() => setActiveTab('courses')}
            className={`px-6 py-3 rounded-xl font-bold text-sm transition-all flex items-center gap-2 ${
              activeTab === 'courses' 
                ? 'bg-white text-primary-600 shadow-sm' 
                : 'text-gray-500 hover:text-dark-500 hover:bg-white/50'
            }`}
          >
            <BookOpen className="w-5 h-5" />
            الدورات المتوفرة
          </button>
          <button
            onClick={() => setActiveTab('certificates')}
            className={`px-6 py-3 rounded-xl font-bold text-sm transition-all flex items-center gap-2 ${
              activeTab === 'certificates' 
                ? 'bg-white text-primary-600 shadow-sm' 
                : 'text-gray-500 hover:text-dark-500 hover:bg-white/50'
            }`}
          >
            <Award className="w-5 h-5" />
            شهاداتي الرقمية
          </button>
        </div>
        
        {activeTab === 'courses' && (
          <button className="whitespace-nowrap bg-primary-600 text-white hover:bg-primary-700 px-6 py-3 rounded-2xl font-bold transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-xl hover:-translate-y-1">
            <span>التسجيل في مسار جديد</span>
            <GraduationCap className="w-5 h-5" />
          </button>
        )}
      </div>

      <AnimatePresence mode="wait">
        {/* Courses Section */}
        {activeTab === 'courses' && (
          <motion.div
            key="courses"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {mockCourses.map((course, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                key={course.id}
                className="bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all group flex flex-col"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-500/90 via-dark-500/20 to-transparent"></div>
                  
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl text-xs font-bold text-primary-700 shadow-sm">
                    {course.category}
                  </div>
                  
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                    <div className="bg-primary-500/90 backdrop-blur-md px-3 py-1.5 rounded-xl text-xs font-bold text-white shadow-sm flex items-center gap-1.5">
                      <PlayCircle className="w-4 h-4" />
                      {course.status}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h4 className="text-xl font-black text-dark-500 mb-4 line-clamp-2">
                    {course.title}
                  </h4>
                  
                  <div className="space-y-3 mb-6 flex-1">
                    <div className="flex items-center gap-3 text-sm text-gray-600 font-medium bg-gray-50 p-2.5 rounded-xl border border-gray-100">
                      <Award className="w-5 h-5 text-accent-500 shrink-0" />
                      <span>المدرب: {course.instructor}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex items-center gap-2 text-sm text-gray-600 font-medium bg-gray-50 p-2.5 rounded-xl border border-gray-100">
                        <Clock className="w-4 h-4 text-primary-500 shrink-0" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600 font-medium bg-gray-50 p-2.5 rounded-xl border border-gray-100">
                        <Users className="w-4 h-4 text-primary-500 shrink-0" />
                        <span>{course.trainees} متدرب</span>
                      </div>
                    </div>
                  </div>

                  <button className="mt-auto w-full flex items-center justify-center gap-2 border border-gray-200 hover:border-primary-600 text-dark-500 hover:text-primary-600 hover:bg-primary-50 font-bold py-3 rounded-xl transition-colors group/btn">
                    <span>عرض التفاصيل والتسجيل</span>
                    <ArrowLeft className="w-5 h-5 rtl:-scale-x-100 transform group-hover/btn:-translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Certificates Section */}
        {activeTab === 'certificates' && (
          <motion.div
            key="certificates"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid lg:grid-cols-2 gap-6"
          >
            {[
              { id: 101, title: 'هندسة الشبكات السحابية الأساسية', date: '12 مايو 2025', grade: 'ممتاز', hours: '40 ساعة تدريبية' },
              { id: 102, title: 'مقدمة في الأمن السيبراني للشركات', date: '3 مارس 2025', grade: 'جيد جداً', hours: '60 ساعة تدريبية' }
            ].map((cert, index) => (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                key={cert.id} 
                className="bg-white rounded-[2rem] border border-gray-100 p-6 flex flex-col sm:flex-row items-center gap-6 shadow-sm hover:shadow-xl transition-all group overflow-hidden relative"
              >
                <div className="absolute -left-6 -top-6 w-32 h-32 bg-primary-50 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="w-24 h-24 bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 text-primary-600 rounded-3xl flex items-center justify-center shrink-0 relative shadow-inner">
                  <FileText className="w-10 h-10" />
                  <div className="absolute -bottom-2 -right-2 bg-green-500 text-white rounded-full p-1 shadow-md border-2 border-white">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                </div>
                
                <div className="flex-1 text-center sm:text-right relative z-10 w-full sm:w-auto">
                  <h4 className="text-xl font-black text-dark-500 mb-2 leading-tight">{cert.title}</h4>
                  <div className="flex flex-wrap justify-center sm:justify-start gap-4 text-sm font-medium text-gray-500 mb-4 bg-gray-50 p-2.5 rounded-xl border border-gray-100 w-fit sm:mx-0 mx-auto">
                    <span>تاريخ الإتمام: <span className="text-dark-500 font-bold">{cert.date}</span></span>
                    <span className="w-1 h-1 bg-gray-300 rounded-full self-center"></span>
                    <span>التقدير: <span className="text-dark-500 font-bold">{cert.grade}</span></span>
                    <span className="w-1 h-1 bg-gray-300 rounded-full self-center"></span>
                    <span>المُدة: <span className="text-dark-500 font-bold">{cert.hours}</span></span>
                  </div>
                  
                  <button 
                    onClick={() => handleDownloadCertificate(cert.id)}
                    disabled={downloadingId === cert.id}
                    className="w-full bg-gray-50 hover:bg-gray-100 border border-gray-200 text-dark-500 font-bold px-5 py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group/btn hover:border-primary-200 shadow-sm"
                  >
                    {downloadingId === cert.id ? (
                      <>
                        <div className="w-5 h-5 border-2 border-dark-500 border-t-transparent rounded-full animate-spin"></div>
                        <span>جاري التحضير للإصدار...</span>
                      </>
                    ) : (
                      <>
                        <Download className="w-5 h-5 text-primary-600 group-hover/btn:scale-110 transition-transform" />
                        <span>تحميل الشهادة كمستند (PDF)</span>
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


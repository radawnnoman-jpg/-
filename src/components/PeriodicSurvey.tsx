import React, { useState } from 'react';
import { Star, ClipboardSignature, CheckCircle2, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';

export default function PeriodicSurvey() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // In a real app, this would send data to the server
  };

  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-accent-100 text-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
            <ClipboardSignature className="w-8 h-8" />
          </div>
          <h2 className="text-sm font-bold text-accent-500 tracking-wider mb-2 uppercase">التطوير المستمر</h2>
          <h3 className="text-3xl md:text-5xl font-black text-dark-500 mb-4">الاستبيان الدوري للعملاء</h3>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            في آفاق للاتصالات، صوتك هو بوصلتنا. شاركنا تقييمك لخدماتنا لنستمر في التحسين وتقديم أفضل تجربة اتصال في المملكة.
          </p>
        </div>

        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-gray-100 relative overflow-hidden">
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-50 rounded-full mix-blend-multiply opacity-50 -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent-50 rounded-full mix-blend-multiply opacity-50 translate-y-1/3 -translate-x-1/3"></div>

          {isSubmitted ? (
            <div className="text-center py-16 relative z-10">
              <div className="w-24 h-24 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-12 h-12" />
              </div>
              <h4 className="text-3xl font-black text-dark-500 mb-4">شكراً لمشاركتك!</h4>
              <p className="text-gray-500 text-lg">
                تم استلام تقييمك بنجاح. نقدر وقتك ومساهمتك في تطوير خدمات آفاق للاتصالات.
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="mt-8 text-primary-600 font-bold hover:text-primary-700 underline"
              >
                تقديم تقييم آخر
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
              {/* Rating Section */}
              <div className="text-center">
                <label className="block text-xl font-bold text-dark-500 mb-4">ما مدى رضاك عن مستوى خدماتنا بشكل عام؟</label>
                <div className="flex justify-center gap-2 md:gap-4 flex-row-reverse">
                  {[5, 4, 3, 2, 1].map((star) => (
                    <motion.button
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.9 }}
                      key={star}
                      type="button"
                      onMouseEnter={() => setHoveredRating(star)}
                      onMouseLeave={() => setHoveredRating(0)}
                      onClick={() => setRating(star)}
                      className="focus:outline-none"
                      aria-label={`تحديد التقييم ${star} من 5`}
                    >
                      <motion.div
                        animate={{ 
                          scale: star <= (hoveredRating || rating) ? [1, 1.25, 1] : 1,
                          rotate: star <= (hoveredRating || rating) ? [0, -15, 15, 0] : 0,
                          color: star <= (hoveredRating || rating) ? '#f59500' : '#e5e7eb'
                        }}
                        transition={{ 
                          duration: 0.4, 
                          type: "spring",
                          bounce: 0.5
                        }}
                      >
                        <Star 
                          className={`w-10 h-10 md:w-12 md:h-12 drop-shadow-sm ${
                            star <= (hoveredRating || rating) 
                              ? 'fill-current text-accent-400 drop-shadow-md' 
                              : 'text-gray-200'
                          }`} 
                        />
                      </motion.div>
                    </motion.button>
                  ))}
                </div>
                <div className="flex justify-center gap-16 mt-3 text-sm text-gray-400 font-medium">
                  <span>غير راضٍ</span>
                  <span>راضٍ جداً</span>
                </div>
              </div>

              <div className="border-t border-gray-100 my-8"></div>

              {/* Feedback Section */}
              <div>
                <label className="block text-lg font-bold text-dark-500 mb-3 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-primary-500" />
                  <span>ما الذي يمكننا تحسينه أو إضافته لخدماتنا؟</span>
                </label>
                <p className="text-gray-500 text-sm mb-4">اكتب لنا بالتفصيل، كل الأفكار والمقترحات مرحب بها ومحل اهتمام إدارتنا.</p>
                <textarea 
                  required
                  rows={5}
                  placeholder="شاركنا رأيك أو تجربتك..."
                  className="w-full bg-gray-50 border border-gray-200 rounded-2xl p-5 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all resize-none text-base"
                ></textarea>
              </div>

              {/* User Info (Optional) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">الاسم (اختياري)</label>
                  <input type="text" placeholder="اسمك الكريم" className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-primary-500 outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">رقم الجوال (اختياري)</label>
                  <input type="tel" placeholder="للتواصل معك بخصوص مقترحك" className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-primary-500 outline-none transition-all text-left" dir="ltr" />
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between flex-wrap gap-4">
                <p className="text-xs text-gray-400 font-medium max-w-sm">
                  * يتم التعامل مع كافة البيانات بسرية تامة وتستخدم فقط لأغراض تحسين الجودة وتطوير الخدمات.
                </p>
                <button 
                  type="submit"
                  disabled={rating === 0}
                  className="w-full md:w-auto bg-primary-600 disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-primary-700 text-white font-bold py-4 px-10 rounded-xl transition-all shadow-lg hover:shadow-primary-600/30 transform hover:-translate-y-1"
                >
                  إرسال الاستبيان
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

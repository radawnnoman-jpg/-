import { ArrowLeft, Calendar, User, Share2, Twitter, Facebook, Linkedin, Link2, Check } from 'lucide-react';
import React, { useState, useRef, useEffect } from 'react';

const blogPosts = [
  {
    id: 1,
    title: 'آفاق للاتصالات تطلق أسرع شبكة 5G في المملكة',
    excerpt: 'تغطية واسعة وسرعات فائقة تصل إلى جميع المدن والمحافظات لتمكين التحول الرقمي.',
    category: 'أخبار الشركة',
    date: '15 مايو 2026',
    author: 'المركز الإعلامي',
    image: 'https://images.unsplash.com/photo-1614064560706-928eeab95b60?auto=format&fit=crop&q=80&w=800',
    color: 'bg-blue-100 text-blue-700',
    link: '#'
  },
  {
    id: 2,
    title: 'مستقبل إنترنت الأشياء والمدن الذكية',
    excerpt: 'كيف ستغير تقنيات الاتصال الحديثة من شكل المدن وكيف نعيش حياتنا اليومية.',
    category: 'رؤى تقنية',
    date: '10 مايو 2026',
    author: 'فريق التقنية',
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800',
    color: 'bg-purple-100 text-purple-700',
    link: '#'
  },
  {
    id: 3,
    title: 'قصة نجاح: كيف ساعدت خدماتنا شركة ناشئة',
    excerpt: 'استطاعت شركة "تقنيات المستقبل" مضاعفة إنتاجيتها بالاعتماد على حلول آفاق للاتصالات للأعمال.',
    category: 'قصص نجاح',
    date: '02 مايو 2026',
    author: 'خدمات الأعمال',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32b7?auto=format&fit=crop&q=80&w=800',
    color: 'bg-emerald-100 text-emerald-700',
    link: '#'
  }
];

export default function BlogSection() {
  const [activeShareId, setActiveShareId] = useState<number | null>(null);
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveShareId(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleCopyLink = (e: React.MouseEvent, id: number, link: string) => {
    e.stopPropagation();
    navigator.clipboard.writeText(window.location.origin + link);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
      setActiveShareId(null);
    }, 2000);
  };

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div>
            <h2 className="text-sm font-bold text-accent-500 tracking-wider mb-2 uppercase">المركز الإعلامي</h2>
            <h3 className="text-3xl md:text-5xl font-black text-dark-500">آخر الأخبار والمقالات</h3>
          </div>
          <button className="text-primary-600 font-bold flex items-center gap-2 hover:text-primary-700 transition-colors">
            <span>تصفح المدونة كاملة</span>
            <ArrowLeft className="w-5 h-5" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col cursor-pointer">
              <div className="h-56 relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1.5 rounded-full text-xs font-bold ${post.color}`}>
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-4 text-xs font-medium text-gray-400 mb-4">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                </div>
                
                <h4 className="text-xl font-bold text-dark-500 mb-3 group-hover:text-primary-600 transition-colors leading-relaxed">
                  {post.title}
                </h4>
                
                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between mt-auto">
                  <button className="flex items-center gap-2 text-dark-500 font-bold group-hover:text-primary-600 transition-colors">
                    <span>اقرأ المزيد</span>
                    <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-2 transition-transform" />
                  </button>

                  <div className="relative">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveShareId(activeShareId === post.id ? null : post.id);
                      }}
                      className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
                        activeShareId === post.id 
                          ? 'bg-primary-50 text-primary-600' 
                          : 'bg-gray-50 text-gray-400 hover:bg-gray-100 hover:text-dark-500'
                      }`}
                      aria-label="مشاركة المقال"
                    >
                      <Share2 className="w-4 h-4" />
                    </button>

                    {activeShareId === post.id && (
                      <div 
                        ref={dropdownRef}
                        className="absolute bottom-full left-0 mb-2 w-48 bg-white rounded-2xl shadow-xl border border-gray-100 p-2 z-10 animate-in fade-in zoom-in-95 origin-bottom-left"
                      >
                        <div className="flex flex-col gap-1">
                          <button 
                            className="flex items-center gap-3 w-full px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-[#1DA1F2] rounded-xl transition-colors text-right"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Twitter className="w-4 h-4" />
                            <span>اكس (تويتر)</span>
                          </button>
                          <button 
                            className="flex items-center gap-3 w-full px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-[#4267B2] rounded-xl transition-colors text-right"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Facebook className="w-4 h-4" />
                            <span>فيسبوك</span>
                          </button>
                          <button 
                            className="flex items-center gap-3 w-full px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-[#0077B5] rounded-xl transition-colors text-right"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Linkedin className="w-4 h-4" />
                            <span>لينكد إن</span>
                          </button>
                          <div className="h-px bg-gray-100 my-1 w-full relative left-0 right-0"></div>
                          <button 
                            className="flex items-center gap-3 w-full px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary-600 rounded-xl transition-colors text-right"
                            onClick={(e) => handleCopyLink(e, post.id, post.link)}
                          >
                            {copiedId === post.id ? (
                              <Check className="w-4 h-4 text-green-500" />
                            ) : (
                              <Link2 className="w-4 h-4" />
                            )}
                            <span className={copiedId === post.id ? "text-green-500 font-medium" : ""}>
                              {copiedId === post.id ? 'تم النسخ!' : 'نسخ الرابط'}
                            </span>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

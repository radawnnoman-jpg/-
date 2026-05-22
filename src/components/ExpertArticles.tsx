import { ArrowLeft, BookOpen, GraduationCap, Microscope } from 'lucide-react';

const articles = [
  {
    id: 1,
    title: 'مستقبل شبكات الجيل السادس (6G) وتأثيرها على الصناعة السعودية',
    excerpt: 'تحليل عميق للقفزة النوعية التي ستحدثها شبكات الجيل السادس في أتمتة المصانع والذكاء الاصطناعي المدمج، وكيف تستعد المملكة لهذه التقنية.',
    author: 'د. عبدالله المنيف',
    role: 'أستاذ هندسة الاتصالات بجامعة الملك سعود',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    tag: 'شبكات المستقبل',
    icon: <Microscope className="w-5 h-5" />
  },
  {
    id: 2,
    title: 'الأمن السيبراني في عصر الحوسبة الكمية',
    excerpt: 'مع تصاعد قدرات الحوسبة الكمية، تبرز الحاجة الملحة لتطوير خوارزميات تشفير جديدة. نظرة على الجهود المحلية لحماية البنية التحتية الرقمية.',
    author: 'م. سارة العتيبي',
    role: 'مستشارة أمن المعلومات التقنية',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
    tag: 'الأمن السيبراني',
    icon: <BookOpen className="w-5 h-5" />
  },
  {
    id: 3,
    title: 'اقتصاديات البيانات: النفط الجديد للمملكة',
    excerpt: 'كيف يمكن استثمار البيانات الضخمة (Big Data) لتعزيز الابتكار في قطاعات الصحة والتعليم والنقل ضمن مبادرات التحول الرقمي.',
    author: 'د. خالد الدوسري',
    role: 'خبير تقنية البيانات والذكاء الاصطناعي',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    tag: 'البيانات الضخمة',
    icon: <GraduationCap className="w-5 h-5" />
  }
];

export default function ExpertArticles() {
  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-accent-500 tracking-wider mb-2 uppercase">رؤى وأبحاث</h2>
          <h3 className="text-3xl md:text-5xl font-black text-dark-500 mb-6">مقالات التقنية ورؤى الخبراء</h3>
          <p className="text-gray-500 text-lg leading-relaxed">
            مشاركات حصرية وإضاءات تقنية من كوكبة يشار إليها بالبنان من الأكاديميين والمستشارين السعوديين، لتبقيك على اطلاع بأحدث التوجهات التقنية العالمية والمحلية.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div key={article.id} className="bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col group cursor-pointer">
              <div className="flex items-center gap-2 text-primary-600 mb-6 font-bold text-sm bg-primary-50 w-fit px-3 py-1.5 rounded-xl">
                {article.icon}
                <span>{article.tag}</span>
              </div>
              
              <h4 className="text-xl font-black text-dark-500 mb-4 group-hover:text-primary-600 transition-colors leading-relaxed">
                {article.title}
              </h4>
              
              <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-1">
                {article.excerpt}
              </p>
              
              <div className="pt-6 border-t border-gray-100 flex items-center justify-between mt-auto">
                <div className="flex items-center gap-4">
                  <img src={article.avatar} alt={article.author} className="w-12 h-12 rounded-full object-cover border-2 border-primary-100" />
                  <div>
                    <h5 className="font-bold text-dark-500 text-sm">{article.author}</h5>
                    <p className="text-xs text-gray-400">{article.role}</p>
                  </div>
                </div>
                <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-dark-500 group-hover:bg-primary-600 group-hover:text-white transition-colors shrink-0">
                  <ArrowLeft className="w-5 h-5 rtl:-scale-x-100" />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
           <button className="inline-flex items-center gap-2 text-dark-500 font-bold hover:text-primary-600 transition-colors bg-white px-8 py-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md">
            <span>تصفح جميع المقالات الأكاديمية</span>
            <ArrowLeft className="w-5 h-5 rtl:-scale-x-100" />
          </button>
        </div>
      </div>
    </section>
  );
}

import { Quote } from 'lucide-react';

export default function CEOStatement() {
  return (
    <section className="py-24 bg-dark-500 relative overflow-hidden">
      {/* Background flourishes */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-600/20 -skew-x-12 transform origin-top blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1 relative">
            <div className="absolute -top-6 -right-6 text-primary-400 opacity-20">
              <Quote className="w-32 h-32 rotate-180" />
            </div>
            <h2 className="text-sm font-bold text-accent-400 tracking-wider mb-4 uppercase inline-block border border-accent-400/30 bg-accent-400/10 px-4 py-1.5 rounded-full">
              كلمة الرئيس التنفيذي
            </h2>
            <p className="text-2xl md:text-3xl lg:text-4xl leading-tight font-black text-white mb-8 relative z-10 rtl:leading-relaxed">
              "في آفاق للاتصالات، نحن لا نبني شبكات اتصالات فحسب، بل نبني جسوراً نحو المستقبل. التزامنا هو تقديم قيمة مضافة تمكن الإنسان، وتدعم طموحات المملكة، وتفتح آفاقاً لا متناهية للإبداع."
            </p>
            
            <div className="flex items-center gap-6">
              <div className="w-16 h-1 px-8 bg-primary-500 rounded-full"></div>
              <div>
                <h4 className="text-xl font-bold text-white mb-1">المهندس / طلال بن تركي</h4>
                <p className="text-gray-400 text-sm">الرئيس التنفيذي، شركة آفاق للاتصالات</p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end shrink-0">
             <div className="relative w-full max-w-sm">
                <div className="absolute inset-0 bg-primary-500 rounded-full transform translate-x-4 translate-y-4 blur-sm opacity-50"></div>
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600" 
                  alt="الرئيس التنفيذي" 
                  className="relative z-10 w-full h-[500px] object-cover rounded-[2rem] border-4 border-dark-400 grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
                />
             </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { MapPin, Phone, Clock, Navigation, Map as MapIcon, ArrowLeft } from 'lucide-react';

const branches = [
  {
    id: 1,
    city: 'الرياض',
    name: 'المركز الرئيسي - الإدارة العامة',
    address: 'طريق الملك فهد، حي العليا، مدينة الرياض 12211',
    hours: '8:00 صباحاً - 10:00 مساءً',
    phone: '920000000',
    image: 'https://images.unsplash.com/photo-1582200236674-8848d70034a7?auto=format&fit=crop&q=80&w=800',
    coordinates: { top: '35%', left: '48%' } // Mock coordinates for abstract map
  },
  {
    id: 2,
    city: 'جدة',
    name: 'فرع الأعمال - المنطقة الغربية',
    address: 'شارع الأمير محمد بن عبدالعزيز، حي الأندلس، جدة',
    hours: '9:00 صباحاً - 9:00 مساءً',
    phone: '920000001',
    image: 'https://images.unsplash.com/photo-1579843666986-e81fa2c2a014?auto=format&fit=crop&q=80&w=800',
    coordinates: { top: '50%', left: '30%' }
  },
  {
    id: 3,
    city: 'الدمام',
    name: 'المركز التقني - المنطقة الشرقية',
    address: 'طريق الخليج، حي الشاطئ الشرقي، الدمام',
    hours: '9:00 صباحاً - 9:00 مساءً',
    phone: '920000002',
    image: 'https://images.unsplash.com/photo-1623838275988-cb94d50937c5?auto=format&fit=crop&q=80&w=800',
    coordinates: { top: '30%', left: '60%' }
  }
];

export default function BranchesMap() {
  const [activeBranch, setActiveBranch] = useState(branches[0]);

  return (
    <section className="py-24 bg-white border-t border-gray-100 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-accent-500 tracking-wider mb-2 uppercase">التوسع الجغرافي</h2>
          <h3 className="text-3xl md:text-5xl font-black text-dark-500 mb-6">فروعنا حول المملكة</h3>
          <p className="text-gray-500 text-lg leading-relaxed">
            نغطي بخدماتنا كافة مناطق المملكة العربية السعودية لنكون أقرب إليك دائماً. شبكة واسعة من الفروع ومراكز البيانات تضمن لك أفضل تجربة اتصال.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 bg-gray-50 rounded-[2rem] p-4 border border-gray-100">
          
          {/* Map & Image Visualization Column */}
          <div className="lg:col-span-3 bg-white rounded-3xl overflow-hidden relative h-[500px] border border-gray-100 shadow-sm group">
            {/* Dynamic Background Image of City */}
            <div className="absolute inset-0">
               <img 
                 src={activeBranch.image} 
                 alt={activeBranch.city} 
                 className="w-full h-full object-cover opacity-80"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-dark-500 via-dark-500/50 to-transparent"></div>
            </div>

            {/* Stylized Dots for map feeling */}
            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>

            {/* Map Pins overlay (abstract positions) */}
             <div className="absolute inset-0 pointer-events-none">
              {branches.map(branch => (
                <div 
                  key={branch.id}
                  className={`absolute w-8 h-8 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${activeBranch.id === branch.id ? 'scale-125 z-10' : 'scale-75 opacity-50'}`}
                  style={{ top: branch.coordinates.top, left: branch.coordinates.left }}
                >
                  <MapPin className={`w-8 h-8 ${activeBranch.id === branch.id ? 'text-accent-400 fill-accent-400/20 drop-shadow-lg' : 'text-white fill-white/20'}`} />
                  {activeBranch.id === branch.id && (
                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-accent-400 rounded-full animate-ping"></span>
                  )}
                </div>
              ))}
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-8 text-white z-10 transform translate-y-0 transition-transform">
              <div className="inline-flex items-center gap-2 bg-primary-600/90 backdrop-blur-md px-3 py-1.5 rounded-full text-sm font-bold mb-4">
                <MapIcon className="w-4 h-4" />
                <span>فرع {activeBranch.city}</span>
              </div>
              <h4 className="text-3xl font-black mb-2 shadow-sm">{activeBranch.name}</h4>
              <p className="text-gray-200 line-clamp-1">{activeBranch.address}</p>
            </div>
          </div>

          {/* Branches List Column */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            {branches.map((branch) => (
              <button
                key={branch.id}
                onClick={() => setActiveBranch(branch)}
                className={`p-6 rounded-3xl text-right transition-all duration-300 border ${
                  activeBranch.id === branch.id 
                    ? 'bg-primary-600 text-white border-primary-600 shadow-xl shadow-primary-600/20 scale-[1.02]' 
                    : 'bg-white text-dark-500 border-gray-100 hover:border-primary-200 hover:bg-primary-50'
                }`}
              >
                <div className="flex justify-between items-start mb-4">
                  <h5 className="font-bold text-lg">{branch.name}</h5>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${activeBranch.id === branch.id ? 'bg-white/20' : 'bg-gray-50'}`}>
                    <MapPin className={`w-5 h-5 ${activeBranch.id === branch.id ? 'text-white' : 'text-primary-600'}`} />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className={`flex items-start gap-3 text-sm ${activeBranch.id === branch.id ? 'text-primary-100' : 'text-gray-500'}`}>
                    <Navigation className="w-4 h-4 mt-0.5 shrink-0" />
                    <span className="leading-relaxed">{branch.address}</span>
                  </div>
                  <div className={`flex items-center gap-3 text-sm ${activeBranch.id === branch.id ? 'text-primary-100' : 'text-gray-500'}`}>
                    <Clock className="w-4 h-4 shrink-0" />
                    <span>{branch.hours}</span>
                  </div>
                  <div className={`flex items-center gap-3 text-sm ${activeBranch.id === branch.id ? 'text-primary-100' : 'text-gray-500'}`}>
                    <Phone className="w-4 h-4 shrink-0" />
                    <span dir="ltr">{branch.phone}</span>
                  </div>
                </div>
              </button>
            ))}
            
            <button className="mt-auto pt-4 flex items-center justify-center gap-2 text-primary-600 font-bold hover:text-primary-700 transition-colors py-4 bg-white rounded-2xl border border-primary-100 hover:bg-primary-50">
              <span>عرض جميع الفروع على الخريطة</span>
              <ArrowLeft className="w-5 h-5 rtl:-scale-x-100" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

import { MapPin, CalendarDays, ArrowLeft, Ticket, Activity, Filter } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useMemo } from 'react';
import NewsArticle from './NewsArticle';

const mockEvents = [
  {
    id: 1,
    title: 'مؤتمر ليب (LEAP) التقني 2026',
    date: '15 - 18 أبريل 2026',
    location: 'مركز واجهة الرياض للمعارض والمؤتمرات',
    city: 'الرياض',
    status: 'upcoming',
    statusLabel: 'قريباً',
    type: 'مؤتمر عالمي',
    description: 'تشارك "أفاق للاتصالات - آفاق للاتصالات" كشريك استراتيجي ورئيسي في أضخم حدث تقني لاستعراض أحدث ابتكارات الجيل الخامس (5G-Advanced) والمدن الذكية.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    title: 'معرض آفاق للاتصالات إنسباير للابتكار الرقمي',
    date: '10 مايو 2026',
    location: 'الظهران إكسبو - المنطقة الشرقية',
    city: 'الدمام',
    status: 'upcoming',
    statusLabel: 'قادم',
    type: 'معرض محلي',
    description: 'استعراض أحدث تقنيات إنترنت الأشياء (IoT) والتقنيات السحابية المستقبلية التي تقدمها شبكة آفاق للاتصالات لقطاع الأعمال والشركات.',
    image: 'https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    title: 'قمة الأمن السيبراني والحلول السحابية',
    date: '25 يونيو 2026',
    location: 'جدة سوبر دوم',
    city: 'جدة',
    status: 'upcoming',
    statusLabel: 'قادم',
    type: 'قمة أعمال',
    description: 'ملتقى حصري يجمع قادة ورواد الأعمال لاستكشاف حلول الحوسبة السحابية وحماية البيانات والأمن السيبراني المتقدمة من آفاق للاتصالات.',
    image: 'https://images.unsplash.com/photo-1561489422-45de3d015e3e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 4,
    title: 'منتدى الاتصالات وتقنية المعلومات',
    date: '12 نوفمبر 2025',
    location: 'فندق الريتز كارلتون',
    city: 'الرياض',
    status: 'past',
    statusLabel: 'مكتمل',
    type: 'منتدى تكنولوجي',
    description: 'مشاركة فاعلة في مناقشة مستقبل قطاع الاتصالات تماشياً مع أهداف رؤية المملكة 2030 لتمكين التحول الرقمي.',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 5,
    title: 'مؤتمر المطورين العرب',
    date: '3 سبتمبر 2025',
    location: 'مركز الملك حسين بن طلال للمؤتمرات',
    city: 'دولي',
    status: 'past',
    statusLabel: 'مكتمل',
    type: 'مؤتمر تقني',
    description: 'استعرضنا أدوات التطوير والخدمات السحابية كمنصة متكاملة تدعم المطورين، وحصلت آفاق للاتصالات على جائزة الابتكار السحابي.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 6,
    title: 'هاكاثون "آفاق" للذكاء الاصطناعي',
    date: '24 مايو 2026',
    location: 'المركز الإعلامي - آفاق للاتصالات',
    city: 'الرياض',
    status: 'upcoming',
    statusLabel: 'تغطية خاصة',
    type: 'هاكاثون',
    description: 'سباق الابتكار لطلاب والموظفين في قطاع الاتصالات وتقنية المعلومات في الذكاء الاصطناعي وصياغة مستقبل القطاع.',
    image: 'https://images.unsplash.com/photo-1531297172867-4d4ce2e266a3?auto=format&fit=crop&q=80&w=800'
  }
];

export default function EventsArchive() {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');
  const [selectedCity, setSelectedCity] = useState<string>('الكل');
  const [selectedType, setSelectedType] = useState<string>('الكل');
  const [selectedEventId, setSelectedEventId] = useState<number | null>(null);

  // Extract unique cities and types for filters
  const cities = ['الكل', ...Array.from(new Set(mockEvents.map(e => e.city)))];
  const types = ['الكل', ...Array.from(new Set(mockEvents.map(e => e.type)))];

  const filteredEvents = useMemo(() => {
    return mockEvents.filter(event => {
      const matchesTab = event.status === activeTab;
      const matchesCity = selectedCity === 'الكل' || event.city === selectedCity;
      const matchesType = selectedType === 'الكل' || event.type === selectedType;
      return matchesTab && matchesCity && matchesType;
    });
  }, [activeTab, selectedCity, selectedType]);

  if (selectedEventId === 6) {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key="article"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
        >
          <NewsArticle onBack={() => setSelectedEventId(null)} />
        </motion.div>
      </AnimatePresence>
    );
  }

  return (
    <div className="space-y-8">
      {/* Introduction */}
      <div className="flex flex-col md:flex-row md:items-center justify-between bg-white p-8 rounded-3xl border border-gray-100 shadow-sm gap-6">
        <div>
          <h3 className="text-2xl font-black text-dark-500 mb-2 flex items-center gap-2">
            <Activity className="w-6 h-6 text-primary-500" />
            أرشيف الفعاليات والمؤتمرات
          </h3>
          <p className="text-gray-500 max-w-2xl">
            تعرف على مشاركاتنا القادمة في أهم المؤتمرات التقنية، وكن جزءاً من الفعاليات التي نصنع فيها مستقبل الاتصالات في المملكة.
          </p>
        </div>
        <button className="whitespace-nowrap bg-primary-50 text-primary-600 hover:bg-primary-100 px-6 py-3 rounded-2xl font-bold transition-colors flex items-center gap-2">
          <span>سجل اهتمامك</span>
          <Ticket className="w-5 h-5" />
        </button>
      </div>

      {/* Filters and Tabs */}
      <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-6">
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 border-b border-gray-100 pb-6">
          <div className="flex bg-gray-50 p-1.5 rounded-xl self-start">
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`px-6 py-2.5 rounded-lg font-bold text-sm transition-all ${
                activeTab === 'upcoming' 
                  ? 'bg-white text-primary-600 shadow-sm' 
                  : 'text-gray-500 hover:text-dark-500 hover:bg-gray-100'
              }`}
            >
              الفعاليات القادمة
            </button>
            <button
              onClick={() => setActiveTab('past')}
              className={`px-6 py-2.5 rounded-lg font-bold text-sm transition-all ${
                activeTab === 'past' 
                  ? 'bg-white text-primary-600 shadow-sm' 
                  : 'text-gray-500 hover:text-dark-500 hover:bg-gray-100'
              }`}
            >
              أرشيف الفعاليات
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 text-gray-500 font-medium">
              <Filter className="w-4 h-4" />
              <span className="text-sm">تصفية:</span>
            </div>
            
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="bg-gray-50 border border-gray-200 text-dark-500 text-sm font-bold rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
            >
              {cities.map(city => (
                <option key={city} value={city}>{city === 'الكل' ? 'كل المدن' : city}</option>
              ))}
            </select>

            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="bg-gray-50 border border-gray-200 text-dark-500 text-sm font-bold rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
            >
              {types.map(type => (
                <option key={type} value={type}>{type === 'الكل' ? 'كل الأنواع' : type}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Events Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={`${activeTab}-${selectedCity}-${selectedType}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  key={event.id}
                  className="bg-gray-50 rounded-3xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all group flex flex-col"
                >
                  {/* Image & Badges */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className={`w-full h-full object-cover transition-transform duration-700 ${activeTab === 'past' ? 'grayscale opacity-80 group-hover:grayscale-0' : 'group-hover:scale-105'}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-500/80 to-transparent"></div>
                    
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl text-xs font-bold text-primary-700 shadow-sm">
                      {event.type}
                    </div>
                    
                    <div className={`absolute top-4 left-4 backdrop-blur-md px-3 py-1.5 rounded-xl text-xs font-bold text-white shadow-sm flex items-center gap-1.5 ${activeTab === 'upcoming' ? 'bg-dark-500/80' : 'bg-gray-600/80'}`}>
                      {activeTab === 'upcoming' && <span className="w-2 h-2 rounded-full bg-accent-400 animate-pulse"></span>}
                      {event.statusLabel}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1 bg-white">
                    <h4 className="text-xl font-black text-dark-500 mb-4 line-clamp-2">
                      {event.title}
                    </h4>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3 text-sm text-gray-600 font-medium bg-gray-50 p-2.5 rounded-xl">
                        <CalendarDays className="w-5 h-5 text-primary-500 shrink-0" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-gray-600 font-medium bg-gray-50 p-2.5 rounded-xl">
                        <MapPin className="w-5 h-5 text-primary-500 shrink-0" />
                        <span className="line-clamp-1">{event.location} - {event.city}</span>
                      </div>
                    </div>

                    <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">
                      {event.description}
                    </p>

                    <button 
                      onClick={() => {
                        if (event.id === 6) {
                          setSelectedEventId(event.id);
                        }
                      }}
                      className={`mt-auto w-full flex items-center justify-center gap-2 border py-3 rounded-xl transition-colors group/btn font-bold ${
                      activeTab === 'upcoming' 
                        ? 'border-gray-200 hover:border-primary-600 text-dark-500 hover:text-primary-600'
                        : 'bg-gray-50 text-gray-500 hover:bg-gray-100 border-transparent'
                    }`}>
                      <span>{activeTab === 'upcoming' ? 'التفاصيل والحضور' : 'تقرير الفعالية'}</span>
                      <ArrowLeft className="w-5 h-5 rtl:-scale-x-100 transform group-hover/btn:-translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full py-16 text-center">
                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Activity className="w-10 h-10 text-gray-400" />
                </div>
                <h4 className="text-xl font-bold text-dark-500 mb-2">لا توجد فعاليات مطابقة</h4>
                <p className="text-gray-500">جرب تغيير إعدادات الفلتر للبحث عن مدينة أو نوع آخر.</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

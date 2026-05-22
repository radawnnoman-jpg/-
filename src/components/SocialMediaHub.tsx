import React, { useState, useEffect } from 'react';
import { Youtube, Twitter, Linkedin, Settings as SettingsIcon, Play, ExternalLink, X, AlertCircle, RefreshCw, Sliders, CalendarDays, GraduationCap, Newspaper, Pin, Facebook, Instagram, Ghost, Video, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import EventsArchive from './EventsArchive';
import TrainingCenter from './TrainingCenter';
import NewsArticle from './NewsArticle';
import AfaqLogo from './AfaqLogo';

const mockYoutubeVideos = [

  { 
    id: { videoId: 'mock1' }, 
    snippet: { 
      title: 'إعلان آفاق للاتصالات الجديد 2026 - آفاق لا محدودة (فيديو توضيحي)', 
      thumbnails: { high: { url: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800' } }, 
      publishedAt: '2026-05-20T10:00:00Z' 
    } 
  },
  { 
    id: { videoId: 'mock2' }, 
    snippet: { 
      title: 'كيف تفعل شريحة eSIM خطوة بخطوة', 
      thumbnails: { high: { url: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=800' } }, 
      publishedAt: '2026-05-18T10:00:00Z' 
    } 
  },
  { 
    id: { videoId: 'mock3' }, 
    snippet: { 
      title: 'تغطيتنا الأوسع للجيل الخامس 5G في المملكة', 
      thumbnails: { high: { url: 'https://images.unsplash.com/photo-1544396821-4dd40b938ad3?auto=format&fit=crop&q=80&w=800' } }, 
      publishedAt: '2026-05-15T10:00:00Z' 
    } 
  },
];

const mockTweets = [
  { id: 1, text: 'استمتع بأسرع شبكة 5G في المملكة مع باقات آفاق للاتصالات المفوترة الجديدة! للمزيد: الرابط 🚀 #آفاق للاتصالات #آفاق_لا_محدودة', date: 'قبل ساعتين', likes: 145, retweets: 32 },
  { id: 2, text: 'نهنئ القيادة الرشيدة والشعب السعودي العظيم بمناسبة تحقيق مستهدفات رؤية 2030 قبل موعدها المخطط، ونفخر بكوننا جزءاً من هذا التحول الرقمي. 🇸🇦', date: 'قبل 5 ساعات', likes: 890, retweets: 420 },
  { id: 3, text: 'عملاءنا الأعزاء، يمكنكم الآن تقسيط أحدث الأجهزة الذكية بدون فوائد عبر شركائنا (تابي وتمارا) من متجر آفاق للاتصالات.', date: 'أمس', likes: 210, retweets: 55 },
];

export default function SocialMediaHub() {
  const [activeTab, setActiveTab] = useState('youtube');
  const [showSettings, setShowSettings] = useState(false);
  const [settings, setSettings] = useState({
    youtubeApiKey: '',
    youtubeChannelId: 'https://youtube.com/@stc?si=nJBQDQjEWcKg1SiE',
    twitterHandle: 'stc_ksa',
    linkedinUrl: 'https://linkedin.com/company/stc'
  });
  
  const [tempSettings, setTempSettings] = useState(settings);
  const [youtubeVideos, setYoutubeVideos] = useState<any[]>(mockYoutubeVideos);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const savedSettings = localStorage.getItem('afaq_social_settings');
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
      setTempSettings(JSON.parse(savedSettings));
    }
  }, []);

  const saveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    setSettings(tempSettings);
    localStorage.setItem('afaq_social_settings', JSON.stringify(tempSettings));
    setShowSettings(false);
    fetchYoutubeVideos(tempSettings);
  };

  const fetchYoutubeVideos = async (currentSettings = settings) => {
    if (!currentSettings.youtubeApiKey || !currentSettings.youtubeChannelId) {
      setYoutubeVideos(mockYoutubeVideos);
      return;
    }
    
    setIsLoading(true);
    setError('');
    try {
      let channelIdOrHandle = currentSettings.youtubeChannelId;
      let actualChannelId = channelIdOrHandle;
      
      // If user inputs a handle url like https://youtube.com/@harefsre
      if (channelIdOrHandle.includes('@')) {
        const handle = channelIdOrHandle.split('@')[1].split('?')[0].split('/')[0];
        const searchRes = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=channel&q=${handle}&key=${currentSettings.youtubeApiKey}`);
        const searchData = await searchRes.json();
        
        if (searchData.error) throw new Error(searchData.error.message);
        
        if (searchData.items && searchData.items.length > 0) {
          actualChannelId = searchData.items[0].snippet.channelId;
        } else {
          throw new Error('لم يتم العثور على القناة من خلال الرابط/المعرف المقدم');
        }
      }

      const res = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${currentSettings.youtubeApiKey}&channelId=${actualChannelId}&part=snippet,id&order=date&maxResults=6&type=video`);
      const data = await res.json();
      
      if (data.error) {
        throw new Error(data.error.message);
      }
      
      if (data.items && data.items.length > 0) {
        setYoutubeVideos(data.items);
      } else {
        setYoutubeVideos(mockYoutubeVideos); // Fallback if empty
      }
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'حدث خطأ أثناء جلب الفيديوهات. تأكد من صحة مفتاح API');
      setYoutubeVideos(mockYoutubeVideos); // Fallback to mocks on error
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (activeTab === 'youtube') {
      fetchYoutubeVideos();
    }
  }, [activeTab]); // Fetch on mount or tab change

  useEffect(() => {
    const handleOpenSettings = () => {
      setShowSettings(true);
    };
    window.addEventListener('open-social-settings', handleOpenSettings);
    return () => window.removeEventListener('open-social-settings', handleOpenSettings);
  }, []);

  const renderYoutube = () => (
    <div className="space-y-6">
      {error && (
        <div className="bg-red-50 text-red-600 p-4 rounded-xl flex items-center gap-3 text-sm font-bold border border-red-100">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <p>{error} - تم عرض فيديوهات تجريبية بدلاً من ذلك.</p>
        </div>
      )}
      
      {isLoading ? (
        <div className="flex justify-center items-center py-24">
          <RefreshCw className="w-8 h-8 text-primary-500 animate-spin" />
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {youtubeVideos.map((video, idx) => (
            <div key={idx} className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all group flex flex-col cursor-pointer">
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={video.snippet.thumbnails.high.url} 
                  alt={video.snippet.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-dark-500/20 group-hover:bg-dark-500/40 transition-colors flex items-center justify-center">
                   <div className="w-14 h-14 bg-red-600 text-white rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                     <Play className="w-6 h-6 ml-1" fill="currentColor" />
                   </div>
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <h4 className="font-bold text-dark-500 line-clamp-2 leading-relaxed mb-3 group-hover:text-primary-600 transition-colors">
                  {video.snippet.title}
                </h4>
                <p className="text-xs text-gray-400 mt-auto">
                  {new Date(video.snippet.publishedAt).toLocaleDateString('ar-SA')}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
      
      <div className="text-center pt-8">
        <a 
          href={settings.youtubeChannelId.startsWith('http') ? settings.youtubeChannelId : `https://youtube.com/channel/${settings.youtubeChannelId}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-red-50 text-red-600 font-bold px-6 py-3 rounded-xl hover:bg-red-100 transition-colors"
        >
          <span>زيارة القناة على YouTube</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );

  const renderTwitter = () => (
    <div className="max-w-3xl mx-auto space-y-4">
      {/* Profile Bio Section */}
      <div className="bg-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-sm mb-8 text-right relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-32 bg-sadu-pattern opacity-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-primary-400 to-accent-500"></div>
        
        <div className="relative z-10 flex flex-col sm:flex-row gap-6 mt-4">
           <div className="w-24 h-24 bg-dark-500 rounded-2xl border-4 border-white shadow-lg overflow-hidden shrink-0 flex items-center justify-center -mt-10 sm:-mt-12 bg-sadu-pattern relative z-20">
             <AfaqLogo className="w-12 h-12 text-primary-400 relative z-10" />
           </div>
           
           <div className="flex-1 mt-2 sm:mt-0">
              <h3 className="text-2xl font-black text-dark-500 mb-1">آفاق الرقمية | Afaq AI</h3>
              <p className="text-sm text-gray-500 mb-5 font-bold" dir="ltr">@{settings.twitterHandle}</p>
              
              <div className="space-y-3 text-sm text-dark-500 leading-relaxed font-medium">
                 <p className="flex items-start gap-2">
                   <span className="shrink-0 mt-0.5 text-base">🇸🇦</span>
                   <span><strong className="text-primary-600">السيادة الرقمية بأصالة وطنية:</strong> المظلة السعودية الرائدة لدمج تقنيات الجيل الخامس والذكاء الاصطناعي في بنية المستقبل الرقمي.</span>
                 </p>
                 <p className="flex items-start gap-2">
                   <span className="shrink-0 mt-0.5 text-base">💼</span>
                   <span><strong className="text-primary-600">منظومة تمكين واستثمار:</strong> نُحيل الأفكار الابتكارية إلى أصول استثمارية مستدامة، بشراكات استراتيجية تجمع كبرى قطاعات الاتصالات (stc، زين).</span>
                 </p>
                 <p className="flex items-start gap-2">
                   <span className="shrink-0 mt-0.5 text-base">🚀</span>
                   <span><strong className="text-primary-600">حاضنة العقول والمستقبل:</strong> من الابتكارات الطلابية إلى المشاريع السيبرانية؛ نتبنى حلول الغد ونصنع أبعاداً بلا حدود.</span>
                 </p>
              </div>
           </div>
        </div>
      </div>

      {/* Pinned Tweet */}
      <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm mb-6 relative overflow-hidden bg-gradient-to-br from-white to-gray-50 border-t-4 border-t-[#1DA1F2]">
        <div className="flex items-center gap-2 text-xs font-bold text-gray-500 mb-4 px-1">
          <Pin className="w-3.5 h-3.5" />
          <span>تغريدة مثبتة المستدامة</span>
        </div>
        <div className="flex items-center gap-3 mb-4 border-b border-gray-100 pb-4">
          <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center shrink-0">
             <Twitter className="w-6 h-6 text-[#1DA1F2]" />
          </div>
          <div>
            <h4 className="font-bold text-dark-500">آفاق الرقمية | Afaq AI</h4>
            <p className="text-sm text-gray-500" dir="ltr">@{settings.twitterHandle}</p>
          </div>
        </div>
        <div className="text-dark-500 leading-relaxed mb-6 whitespace-pre-wrap font-medium">
          <p>من الفكرة.. إلى الأثر المستدام 📈🇸🇦</p>
          <p className="mt-2">في <strong className="text-[#1DA1F2]">#آفاق_الرقمية</strong>، لا ننتظر المستقبل بل نصنعه؛ نفتح الأبواب أمام العقول المبتكرة، ونقود الاستثمارات الذكية بالتعاون مع شركاء النجاح لتعزيز ريادتنا التقنية.</p>
          <p className="mt-4">🌐 <strong>منظومتنا في سطور:</strong></p>
          <ul className="mt-2 space-y-1">
            <li>🧑‍💻 مساحات ابتكارية وحاضنات للمشاريع الواعدة.</li>
            <li>🤝 قنوات ربط مباشر مع المستثمرين وكبرى قطاعات الاتصالات.</li>
            <li>🏆 أحداث ومبادرات وطنية نوعية نتبناها طوال العام.</li>
          </ul>
          <p className="mt-4">👇 اكتشف أبعادنا وتواصل معنا عبر منصتنا التفاعلية:</p>
          <p className="mt-1">🔗 <a href="#" className="text-[#1DA1F2] hover:underline">afaq.com</a></p>
        </div>
        
        {/* Social Media Links */}
        <div className="flex flex-wrap items-center gap-3 mt-4 pt-4 border-t border-gray-100">
          <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors" title="Facebook">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-pink-50 text-pink-600 hover:bg-pink-100 transition-colors" title="Instagram">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-black/5 text-black hover:bg-black/10 transition-colors" title="TikTok">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.12-3.44-3.17-3.61-5.46-.02-.45-.02-.91 0-1.36.18-2.14 1.54-4.14 3.52-5.11 1.25-.63 2.69-.87 4.09-.76V14.3c-1.4.02-2.76.62-3.66 1.69-.93 1.12-1.19 2.7-.62 4.05.47 1.13 1.51 2.01 2.72 2.27 1.25.26 2.62-.05 3.53-.94.75-.72 1.13-1.74 1.19-2.78.04-4.32.02-8.63.02-12.95z"/></svg>
          </a>
          <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 text-[#1DA1F2] hover:bg-blue-100 transition-colors" title="X (Twitter)">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-red-50 text-red-600 hover:bg-red-100 transition-colors" title="YouTube">
            <Youtube className="w-5 h-5" />
          </a>
          <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-yellow-50 text-yellow-500 hover:bg-yellow-100 transition-colors" title="Snapchat">
            <Ghost className="w-5 h-5" />
          </a>
          <span className="text-gray-400 font-bold ml-auto text-sm" dir="ltr">@Afaq</span>
        </div>
      </div>

      {mockTweets.map((tweet) => (
        <div key={tweet.id} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-4 border-b border-gray-50 pb-4">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center shrink-0">
               <Twitter className="w-6 h-6 text-[#1DA1F2]" />
            </div>
            <div>
              <h4 className="font-bold text-dark-500">آفاق للاتصالات | Afaq</h4>
              <p className="text-sm text-gray-500" dir="ltr">@{settings.twitterHandle}</p>
            </div>
            <div className="mr-auto">
                <Twitter className="w-5 h-5 text-[#1DA1F2] opacity-20" />
            </div>
          </div>
          <p className="text-dark-500 leading-relaxed mb-4 whitespace-pre-wrap">{tweet.text}</p>
          <div className="flex items-center gap-6 text-sm text-gray-500 font-medium">
            <span className="flex items-center gap-1.5"><ExternalLink className="w-4 h-4" /> {tweet.retweets}</span>
            <span className="flex items-center gap-1.5"><SettingsIcon className="w-4 h-4" /> {tweet.likes}</span>
            <span className="mr-auto text-xs">{tweet.date}</span>
          </div>
        </div>
      ))}
      <div className="text-center pt-4">
        <a href={`https://twitter.com/${settings.twitterHandle}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#1DA1F2] font-bold hover:underline">
          متابعتنا على منصة X
        </a>
      </div>
    </div>
  );

  return (
    <section id="social-hub" className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
          <div>
            <h2 className="text-sm font-bold text-accent-500 tracking-wider mb-2 uppercase">تواصل معنا</h2>
            <h3 className="text-3xl md:text-5xl font-black text-dark-500 mb-4">المركز الإعلامي والشبكات الاجتماعية</h3>
            <p className="text-gray-500 text-lg max-w-2xl">
              نضعك في قلب الحدث. تابع أحدث أخبارنا، عروضنا، وابتكاراتنا التقنية عبر قنواتنا الرسمية.
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex overflow-x-auto gap-2 mb-10 pb-2 border-b border-gray-200">
          <button
            onClick={() => setActiveTab('youtube')}
            className={`flex items-center gap-2 px-6 py-4 font-bold text-lg rounded-t-2xl transition-all whitespace-nowrap border-b-2 ${
              activeTab === 'youtube' ? 'bg-white text-red-600 border-red-600 shadow-[0_-4px_10px_rgba(0,0,0,0.02)]' : 'text-gray-500 border-transparent hover:bg-gray-100'
            }`}
          >
            <Youtube className="w-6 h-6" />
            <span>قناة اليوتيوب</span>
          </button>
          
          <button
            onClick={() => setActiveTab('twitter')}
            className={`flex items-center gap-2 px-6 py-4 font-bold text-lg rounded-t-2xl transition-all whitespace-nowrap border-b-2 ${
              activeTab === 'twitter' ? 'bg-white text-[#1DA1F2] border-[#1DA1F2] shadow-[0_-4px_10px_rgba(0,0,0,0.02)]' : 'text-gray-500 border-transparent hover:bg-gray-100'
            }`}
          >
            <Twitter className="w-6 h-6" />
            <span>منصة X</span>
          </button>
          
          <button
            onClick={() => setActiveTab('linkedin')}
            className={`flex items-center gap-2 px-6 py-4 font-bold text-lg rounded-t-2xl transition-all whitespace-nowrap border-b-2 ${
              activeTab === 'linkedin' ? 'bg-white text-[#0A66C2] border-[#0A66C2] shadow-[0_-4px_10px_rgba(0,0,0,0.02)]' : 'text-gray-500 border-transparent hover:bg-gray-100'
            }`}
          >
            <Linkedin className="w-6 h-6" />
            <span>لينكد إن</span>
          </button>

          <button
            onClick={() => setActiveTab('events')}
            className={`flex items-center gap-2 px-6 py-4 font-bold text-lg rounded-t-2xl transition-all whitespace-nowrap border-b-2 ${
              activeTab === 'events' ? 'bg-white text-primary-600 border-primary-600 shadow-[0_-4px_10px_rgba(0,0,0,0.02)]' : 'text-gray-500 border-transparent hover:bg-gray-100'
            }`}
          >
            <CalendarDays className="w-6 h-6" />
            <span>الفعاليات والمؤتمرات</span>
          </button>
          
          <button
            onClick={() => setActiveTab('training')}
            className={`flex items-center gap-2 px-6 py-4 font-bold text-lg rounded-t-2xl transition-all whitespace-nowrap border-b-2 ${
              activeTab === 'training' ? 'bg-white text-primary-600 border-primary-600 shadow-[0_-4px_10px_rgba(0,0,0,0.02)]' : 'text-gray-500 border-transparent hover:bg-gray-100'
            }`}
          >
            <GraduationCap className="w-6 h-6" />
            <span>مركز التدريب</span>
          </button>
        </div>

        {/* Tab Content */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            {activeTab === 'youtube' && (
              <motion.div
                key="youtube"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {renderYoutube()}
              </motion.div>
            )}
            
            {activeTab === 'twitter' && (
              <motion.div
                key="twitter"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {renderTwitter()}
              </motion.div>
            )}
            
            {activeTab === 'linkedin' && (
              <motion.div
                key="linkedin"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white rounded-3xl p-12 text-center border border-gray-100 shadow-sm max-w-3xl mx-auto">
                   <div className="w-20 h-20 bg-[#0A66C2]/10 text-[#0A66C2] rounded-full flex items-center justify-center mx-auto mb-6">
                     <Linkedin className="w-10 h-10" />
                   </div>
                   <h3 className="text-2xl font-black text-dark-500 mb-4">شبكة المحترفين والأعمال</h3>
                   <p className="text-gray-500 mb-8 max-w-lg mx-auto">
                     انضم إلى شبكتنا المهنية على لينكد إن للتعرف على أحدث الفرص الوظيفية، المقالات القيادية، وتحديثات الأعمال والمؤسسات.
                   </p>
                   <a 
                     href={settings.linkedinUrl} 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="inline-flex items-center gap-2 bg-[#0A66C2] text-white font-bold px-8 py-4 rounded-xl hover:bg-[#084e96] transition-colors"
                   >
                     <span>متابعة آفاق للاتصالات على LinkedIn</span>
                     <ExternalLink className="w-5 h-5" />
                   </a>
                </div>
              </motion.div>
            )}

            {activeTab === 'events' && (
              <motion.div
                key="events"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <EventsArchive />
              </motion.div>
            )}

            {activeTab === 'training' && (
              <motion.div
                key="training"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <TrainingCenter />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>

      {/* Settings Modal */}
      <AnimatePresence>
        {showSettings && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" style={{ direction: 'rtl' }}>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowSettings(false)}
              className="absolute inset-0 bg-dark-500/60 backdrop-blur-sm"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white rounded-3xl shadow-2xl max-w-xl w-full flex flex-col overflow-hidden border border-gray-100"
            >
              <div className="px-8 py-6 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                 <div>
                   <h3 className="text-xl font-black text-dark-500 flex items-center gap-2">
                     <SettingsIcon className="w-6 h-6 text-primary-600" />
                     إعدادات ربط الشبكات الاجتماعية (API)
                   </h3>
                   <p className="text-sm text-gray-500 mt-1">أدخل مفاتيح الربط والروابط الخاصة بحساباتك الرسمية</p>
                 </div>
                 <button 
                   onClick={() => setShowSettings(false)}
                   className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-400 hover:text-dark-500 hover:bg-gray-100 transition-colors shadow-sm"
                 >
                   <X className="w-5 h-5" />
                 </button>
              </div>

              <form onSubmit={saveSettings} className="p-8 space-y-6">
                
                <div className="space-y-4">
                  <h4 className="font-bold flex items-center gap-2 text-red-600 border-b border-gray-100 pb-2">
                    <Youtube className="w-5 h-5" />
                    إعدادات YouTube
                  </h4>
                  
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">رابط القناة أو المعرف (Channel URL/ID) <span className="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      required
                      value={tempSettings.youtubeChannelId}
                      onChange={(e) => setTempSettings({...tempSettings, youtubeChannelId: e.target.value})}
                      placeholder="مثال: https://youtube.com/@stc" 
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all text-left" 
                      dir="ltr" 
                    />
                    <p className="text-xs text-gray-400 mt-1">يمكنك وضع رابط القناة كما هو، سيقوم النظام باستخراج المعرف تلقائياً.</p>
                  </div>
                  
                  <div>
                     <label className="block text-sm font-bold text-gray-700 mb-2">مفتاح التطوير (YouTube Data API v3 Key)</label>
                     <input 
                       type="password" 
                       value={tempSettings.youtubeApiKey}
                       onChange={(e) => setTempSettings({...tempSettings, youtubeApiKey: e.target.value})}
                       placeholder="AIzaSy..." 
                       className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-primary-500 outline-none transition-all text-left" 
                       dir="ltr" 
                     />
                     <p className="text-xs text-gray-400 mt-1">مطلوب لجلب الفيديوهات الحقيقية من قناتك. اتركه فارغاً لعرض بيانات تجريبية.</p>
                  </div>
                </div>

                <div className="space-y-4 pt-4">
                  <h4 className="font-bold flex items-center gap-2 text-[#1DA1F2] border-b border-gray-100 pb-2">
                    <Twitter className="w-5 h-5" />
                    منصة X (تويتر)
                  </h4>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">معرف المستخدم (Handle)</label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400 font-bold">@</span>
                      <input 
                        type="text" 
                        value={tempSettings.twitterHandle}
                        onChange={(e) => setTempSettings({...tempSettings, twitterHandle: e.target.value})}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 pl-10 focus:ring-2 focus:ring-primary-500 outline-none transition-all text-left" 
                        dir="ltr" 
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-6 flex justify-end gap-3 mt-8 border-t border-gray-100">
                  <button 
                    type="button"
                    onClick={() => setShowSettings(false)}
                    className="px-6 py-3 rounded-xl font-bold text-gray-600 hover:bg-gray-100 transition-colors"
                  >
                    إلغاء
                  </button>
                  <button 
                    type="submit"
                    className="px-8 py-3 bg-primary-600 text-white rounded-xl font-bold shadow-md hover:bg-primary-700 transition-colors"
                  >
                    حفظ الإعدادات
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

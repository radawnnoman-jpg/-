import { CreditCard, Receipt, SmartphoneNfc, Store } from 'lucide-react';

const actions = [
  {
    title: 'شحن الرصيد',
    desc: 'اشحن رصيدك بكل سهولة وأمان',
    icon: <CreditCard className="w-8 h-8" />,
    color: 'bg-blue-50 text-blue-600',
    hover: 'group-hover:bg-blue-600 group-hover:text-white',
    targetId: 'store' // Can direct to store for now or a specific recharge section
  },
  {
    title: 'دفع الفواتير',
    desc: 'ادفع فواتيرك بخطوة واحدة',
    icon: <Receipt className="w-8 h-8" />,
    color: 'bg-green-50 text-green-600',
    hover: 'group-hover:bg-green-600 group-hover:text-white',
    targetId: 'store'
  },
  {
    title: 'ترقية إلى eSIM',
    desc: 'احصل على شريحتك الإلكترونية فوراً',
    icon: <SmartphoneNfc className="w-8 h-8" />,
    color: 'bg-purple-50 text-purple-600',
    hover: 'group-hover:bg-purple-600 group-hover:text-white',
    targetId: 'services' // Assuming services section exists
  },
  {
    title: 'متجر آفاق للاتصالات',
    desc: 'أحدث الأجهزة الذكية بالتقسيط',
    icon: <Store className="w-8 h-8" />,
    color: 'bg-orange-50 text-orange-600',
    hover: 'group-hover:bg-orange-600 group-hover:text-white',
    targetId: 'store'
  },
];

export default function QuickActions() {
  const handleScroll = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {actions.map((action, index) => (
          <button 
            key={index}
            onClick={() => action.targetId && handleScroll(action.targetId)}
            className="group bg-white rounded-2xl p-6 shadow-xl shadow-gray-200/50 flex flex-col items-start gap-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl text-right w-full border border-gray-100"
          >
            <div className={`p-4 rounded-2xl transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-6 ${action.color} ${action.hover}`}>
              {action.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-dark-500 mb-1">{action.title}</h3>
              <p className="text-gray-500 text-sm">{action.desc}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, User, Bot, Coffee } from 'lucide-react';
import AfaqLogo from './AfaqLogo';

type Message = {
  id: number;
  text: string;
  sender: 'user' | 'agent';
  time: Date;
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { 
      id: 1, 
      text: 'مرحباً بك في آفاق.. حيث تلتقي الأصالة بالمستقبل ☕️ أنا الدلة الرقمية، دليلك في واحتنا التقنية. كيف يمكنني مساعدتك اليوم؟', 
      sender: 'agent', 
      time: new Date() 
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userText = inputValue;
    
    // Add user message
    const userMsg: Message = { id: Date.now(), text: userText, sender: 'user', time: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userText })
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setMessages(prev => [...prev, { 
          id: Date.now(), 
          text: data.reply || 'عفواً، لم أتمكن من فهم ذلك.', 
          sender: 'agent', 
          time: new Date() 
        }]);
      } else {
        setMessages(prev => [...prev, { 
          id: Date.now(), 
          text: 'عفواً، حدث خطأ أثناء الاتصال. يرجى المحاولة لاحقاً.', 
          sender: 'agent', 
          time: new Date() 
        }]);
      }
    } catch (error) {
      setMessages(prev => [...prev, { 
        id: Date.now(), 
        text: 'عفواً، واجهت مشكلة في الاتصال بالخادم.', 
        sender: 'agent', 
        time: new Date() 
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-end">
      
      {/* Chat Window */}
      {isOpen && (
        <div className="w-[350px] sm:w-[380px] h-[500px] max-h-[80vh] bg-white rounded-3xl shadow-[0_20px_50px_-15px_rgba(0,194,138,0.3)] mb-4 border border-primary-500/20 flex flex-col overflow-hidden origin-bottom-left transition-all duration-300 animate-in fade-in zoom-in-95 backdrop-blur-3xl">
          
          {/* Header */}
          <div className="bg-gradient-to-l from-dark-500 to-dark-600 p-4 text-white flex justify-between items-center shrink-0 shadow-md z-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-sadu-pattern opacity-20 mix-blend-overlay"></div>
            <div className="flex items-center gap-3 relative z-10">
              <div className="relative">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-md border border-white/20 shadow-[0_0_15px_rgba(0,194,138,0.3)]">
                  <Coffee className="w-5 h-5 text-primary-400" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-primary-400 border-2 border-dark-600 rounded-full shadow-[0_0_8px_rgba(0,194,138,1)]"></div>
              </div>
              <div className="flex flex-col">
                <span className="font-black text-sm">الدلة الرقمية 3D</span>
                <span className="text-[10px] text-primary-200 font-medium">مساعد آفاق الذكي للاتصالات</span>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors focus:outline-none relative z-10"
              aria-label="إغلاق المحادثة"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50 flex flex-col gap-4 relative">
            <div className="absolute inset-0 bg-sadu-pattern opacity-[0.03] pointer-events-none"></div>
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex gap-3 max-w-[85%] relative z-10 ${msg.sender === 'user' ? 'self-end flex-row-reverse' : 'self-start'}`}
              >
                {/* Avatar */}
                <div className="shrink-0 mt-auto mb-1">
                  {msg.sender === 'user' ? (
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-500">
                      <User className="w-4 h-4" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 bg-primary-100 rounded-xl rounded-bl-sm flex items-center justify-center text-primary-600 shadow-sm border border-primary-200">
                      <Coffee className="w-4 h-4" />
                    </div>
                  )}
                </div>

                {/* Message Bubble */}
                <div className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
                  <div 
                    className={`px-4 py-2.5 rounded-2xl text-sm leading-relaxed shadow-sm ${
                      msg.sender === 'user' 
                        ? 'bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-br-sm' 
                        : 'bg-white text-dark-500 border border-gray-100 rounded-bl-sm shadow-[0_4px_15px_rgba(0,194,138,0.05)]'
                    }`}
                  >
                    {msg.text}
                  </div>
                  <span className="text-[10px] text-gray-400 mt-1 px-1">
                    {msg.time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-3 max-w-[85%] self-start relative z-10">
                 <div className="shrink-0 mt-auto mb-1">
                    <div className="w-8 h-8 bg-primary-100 rounded-xl rounded-bl-sm flex items-center justify-center text-primary-600 shadow-sm border border-primary-200">
                      <Coffee className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="bg-white border border-gray-100 px-4 py-3 rounded-2xl rounded-bl-sm shadow-sm flex items-center gap-1.5 h-10">
                    <span className="w-2 h-2 bg-primary-300 rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                    <span className="w-2 h-2 bg-primary-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                  </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 bg-white border-t border-gray-100 relative z-10 shrink-0">
            <form onSubmit={handleSend} className="flex gap-2">
              <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="اكتب لتتحدث مع الدلة الرقمية..." 
                className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                dir="auto"
              />
              <button 
                type="submit"
                disabled={!inputValue.trim()}
                className="w-10 h-10 shrink-0 rounded-xl bg-gradient-to-br from-primary-600 to-primary-500 text-white flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_4px_10px_rgba(0,194,138,0.3)] transition-transform hover:scale-105 active:scale-95 focus:outline-none"
                aria-label="إرسال"
              >
                <Send className="w-5 h-5 rtl:-scale-x-100" />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-gradient-to-br from-dark-500 to-dark-600 text-white rounded-[2rem] flex items-center justify-center shadow-[0_15px_30px_rgba(0,194,138,0.4)] hover:shadow-[0_20px_40px_rgba(0,194,138,0.6)] hover:scale-105 active:scale-95 transition-all focus:outline-none focus:ring-4 focus:ring-primary-500/50 group relative z-50 border border-primary-500/30"
        aria-label="محادثة الدعم الفني"
      >
        <span className="absolute top-0 right-0 w-4 h-4 bg-primary-400 border-2 border-dark-500 rounded-full flex items-center justify-center animate-pulse shadow-[0_0_10px_rgba(0,194,138,0.8)]">
           <span className="absolute inset-0 rounded-full bg-primary-400 animate-ping opacity-75"></span>
        </span>
        {isOpen ? (
          <X className="w-8 h-8 transform transition-transform group-hover:rotate-90 duration-300" />
        ) : (
          <Coffee className="w-8 h-8 text-primary-400 drop-shadow-[0_0_8px_rgba(0,194,138,0.5)] transform transition-transform group-hover:scale-110 duration-300" />
        )}
      </button>
    </div>
  );
}

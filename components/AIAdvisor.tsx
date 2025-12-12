
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, Trash2 } from 'lucide-react';
import { getGeminiAdvice } from '../geminiService';
import { ChatMessage } from '../types';

const STORAGE_KEY = 'ronza_event_ai_chat';

const AIAdvisor: React.FC = () => {
  const defaultMessage: ChatMessage = { 
    role: 'model', 
    text: 'يا هلا فيك مع مستشار رونزا الذكي! تبين تعرفين أحدث صيحات أعراس ٢٠٢٥ في الكويت؟ قوليلي شنو ببالج وراح أساعدج باللي تبين تبارك الرحمن.' 
  };

  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [defaultMessage];
    } catch (e) {
      return [defaultMessage];
    }
  });
  
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  // Save to localStorage whenever messages change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    const newMessages: ChatMessage[] = [...messages, { role: 'user', text: userMsg }];
    setMessages(newMessages);
    setIsLoading(true);

    const advice = await getGeminiAdvice(userMsg);
    setMessages([...newMessages, { role: 'model', text: advice }]);
    setIsLoading(false);
  };

  const clearChat = () => {
    if (window.confirm('هل ترغبين في مسح تاريخ المحادثة؟')) {
      setMessages([defaultMessage]);
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  return (
    <section id="ai-advisor" className="py-24 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 px-4 py-2 rounded-full text-[#D4AF37] font-bold mb-4">
            <Bot size={20} />
            <span>مدعوم بالذكاء الاصطناعي</span>
          </div>
          <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">مستشار رونزا للترندات</h2>
          <p className="text-gray-600">اكتشفي آخر صيحات الأعراس في الكويت لسنة 2025 بلمسة ذكية وفخمة.</p>
        </div>

        <div className="bg-[#FFF9FA] rounded-[2rem] shadow-2xl border border-[#D4AF37]/20 flex flex-col h-[600px] overflow-hidden">
          {/* Header */}
          <div className="bg-[#D4AF37] p-6 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md">
                <Bot size={24} />
              </div>
              <div>
                <h4 className="font-bold">المستشار الذكي</h4>
                <p className="text-xs text-white/80">متصل الآن - رونزا إيفنت</p>
              </div>
            </div>
            
            <button 
              onClick={clearChat}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors flex items-center gap-2 text-xs font-medium"
              title="مسح المحادثة"
            >
              <Trash2 size={16} />
              <span className="hidden sm:inline">مسح المحادثة</span>
            </button>
          </div>

          {/* Chat area */}
          <div ref={scrollRef} className="flex-grow p-6 overflow-y-auto space-y-6 scroll-smooth">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-start' : 'justify-end'}`}>
                <div className={`flex gap-3 max-w-[85%] ${msg.role === 'user' ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 shadow-sm ${msg.role === 'user' ? 'bg-gray-200 text-gray-600' : 'bg-[#D4AF37] text-white'}`}>
                    {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                  </div>
                  <div className={`p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${msg.role === 'user' ? 'bg-white text-gray-800 rounded-tr-none' : 'bg-[#FFF0F5] text-gray-800 rounded-tl-none border border-[#D4AF37]/10'}`}>
                    {msg.text}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-end">
                <div className="bg-[#FFF0F5] p-4 rounded-2xl shadow-sm flex items-center gap-2 border border-[#D4AF37]/10">
                  <Loader2 className="animate-spin text-[#D4AF37]" size={20} />
                  <span className="text-sm text-gray-500">جاري كتابة النصيحة...</span>
                </div>
              </div>
            )}
          </div>

          {/* Input area */}
          <div className="p-4 bg-white border-t border-gray-100 flex gap-2">
            <button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="w-12 h-12 bg-[#D4AF37] hover:bg-[#B8860B] disabled:bg-gray-300 text-white rounded-xl flex items-center justify-center transition-colors shadow-lg shrink-0"
            >
              <Send size={20} className="rotate-180" />
            </button>
            <input 
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="اسألي عن كوش 2025 أو ألوان السنة..."
              className="flex-grow bg-gray-50 border border-gray-200 rounded-xl px-4 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 transition-all text-right"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAdvisor;

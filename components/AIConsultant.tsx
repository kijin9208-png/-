
import React, { useState, useRef, useEffect } from 'react';
import { getDentalConsultantResponse } from '../services/geminiService';
import { Message } from '../types';

const AIConsultant: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: '안녕하세요. 바른손치과 프리미엄 AI 상담실장입니다. 라미네이트나 치과 치료에 대해 궁금하신 점이 있으신가요?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    const response = await getDentalConsultantResponse(userMessage);
    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    setIsLoading(false);
  };

  return (
    <section id="ai-consult" className="py-24 bg-zinc-950">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">24/7 AI Smart Consultation</h2>
          <p className="text-gray-500">궁금한 점을 물어보세요. 바른손치과의 전문 데이터를 바탕으로 즉각적인 답변을 드립니다.</p>
        </div>

        <div className="glass-morphism rounded-3xl overflow-hidden flex flex-col h-[600px] border border-white/10 shadow-2xl">
          {/* Chat Header */}
          <div className="p-6 border-b border-white/10 bg-white/5 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-200 to-gray-500 flex items-center justify-center">
              <span className="text-black font-bold">BS</span>
            </div>
            <div>
              <h3 className="font-bold">바른손 AI 실장</h3>
              <p className="text-xs text-green-500 flex items-center gap-1">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> 실시간 상담 가능
              </p>
            </div>
          </div>

          {/* Chat Body */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] px-5 py-3 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                  ? 'bg-white text-black font-medium' 
                  : 'bg-zinc-900 border border-white/5 text-gray-300'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-zinc-900 border border-white/5 px-5 py-3 rounded-2xl flex gap-2">
                  <span className="w-2 h-2 bg-gray-600 rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-gray-600 rounded-full animate-bounce delay-100"></span>
                  <span className="w-2 h-2 bg-gray-600 rounded-full animate-bounce delay-200"></span>
                </div>
              </div>
            )}
          </div>

          {/* Chat Footer */}
          <div className="p-6 border-t border-white/10 bg-white/5">
            <div className="flex gap-4">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="질문을 입력하세요... (예: 라미네이트 통증이 있나요?)"
                className="flex-1 bg-black border border-white/10 rounded-full px-6 py-3 text-sm focus:outline-none focus:border-white/30 transition-all"
              />
              <button 
                onClick={handleSendMessage}
                disabled={isLoading}
                className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center hover:scale-105 transition-all disabled:opacity-50"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIConsultant;

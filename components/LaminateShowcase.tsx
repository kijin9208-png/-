
import React from 'react';

const LaminateShowcase: React.FC = () => {
  return (
    <section id="laminate" className="py-32 bg-black overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-gray-200 via-white to-gray-400 rounded-3xl blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
            <div className="relative overflow-hidden rounded-2xl border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=2000&auto=format&fit=crop" 
                alt="Premium Dental Laminate Samples"
                className="w-full h-full object-cover shadow-2xl transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </div>
          
          <div className="space-y-10">
            <div>
              <span className="text-white/40 text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Artisan Craftsmanship</span>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                디테일의 차이가 만드는<br />
                <span className="text-gradient">명품 미소의 가치</span>
              </h2>
              <p className="text-gray-400 leading-relaxed text-lg font-light">
                바른손치과의 라미네이트는 기성품이 아닙니다. 환자 개개인의 법랑질 두께, 잇몸 라인, 입술의 움직임까지 분석하여 0.1mm의 오차도 허용하지 않는 정밀 가공을 거칩니다.
              </p>
            </div>
            
            <ul className="space-y-8">
              {[
                { title: '무삭제/최소삭제 지향', desc: '자연 치아를 최대한 보존하는 보수적인 철학' },
                { title: '초정밀 3D 스캔', desc: '불편한 본뜨기 과정 없는 빠르고 정확한 디지털 진단' },
                { title: '커스텀 세이드 매칭', desc: '주변 치아와 구분이 불가능한 자연스러운 투명도와 질감' }
              ].map((item, idx) => (
                <li key={idx} className="flex gap-5 items-start">
                  <div className="mt-1 w-6 h-6 rounded-full bg-white flex-shrink-0 flex items-center justify-center shadow-lg shadow-white/10">
                    <svg className="w-3.5 h-3.5 text-black" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">{item.title}</h4>
                    <p className="text-gray-500 text-sm font-light">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaminateShowcase;

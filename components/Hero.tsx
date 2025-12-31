
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Spline Background */}
      <div className="absolute inset-0 z-0">
        <iframe 
          src='https://my.spline.design/flowingribbon-BLNgp5zDRrXoRnJmIkSNpoTU/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          style={{ opacity: 0.4 }}
        ></iframe>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black pointer-events-none"></div>
      </div>

      {/* Content Area */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <div className="mb-12 flex justify-center">
           <span className="px-6 py-2 text-[10px] font-bold tracking-[0.6em] uppercase border border-white/20 rounded-full text-white/60 bg-white/5 backdrop-blur-2xl">
            Established Excellence
          </span>
        </div>
        
        <h1 className="text-6xl md:text-[100px] font-extralight mb-12 leading-[1.1] tracking-tighter text-white">
          예술적 감각으로 빚어낸<br />
          <span className="font-bold italic text-gradient drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">가장 완벽한 미소</span>
        </h1>
        
        <div className="max-w-2xl mx-auto mb-16">
          <p className="text-lg md:text-xl text-white/90 font-light leading-relaxed mb-4">
            바른손치과는 단순한 진료를 넘어,<br />
            개개인의 고유한 아름다움을 찾는 <span className="font-medium text-white">심미 치학의 정점</span>을 지향합니다.
          </p>
          <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto mt-8"></div>
        </div>

        {/* 안내 문구만 노출 (버튼 제거) */}
        <p className="text-[11px] tracking-[0.3em] text-white/30 uppercase animate-pulse">
          Scroll to explore the collection
        </p>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-30">
        <svg width="20" height="40" viewBox="0 0 24 60" fill="none" stroke="white" strokeWidth="1">
          <path d="M12 0V58M12 58L5 51M12 58L19 51" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;

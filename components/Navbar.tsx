
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-4 glass-morphism' : 'py-8 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
            <span className="text-black font-black text-sm tracking-tighter">BS</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-[0.2em] text-white uppercase leading-none">Barunson</span>
            <span className="text-[10px] tracking-[0.4em] text-white/60 uppercase mt-1">Dental Boutique</span>
          </div>
        </div>
        
        {/* 모든 메뉴를 제거하고 우아한 예약 안내 텍스트만 유지 (클릭 불가) */}
        <div className="hidden md:block">
          <span className="text-[11px] font-bold tracking-[0.2em] text-white/40 uppercase border-r border-white/20 pr-6 mr-6">
            Consultation Only
          </span>
          <span className="text-sm font-medium text-white/80">
            T. 053. 358. 1500
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

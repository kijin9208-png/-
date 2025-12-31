
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-black font-black text-[10px]">BS</span>
              </div>
              <span className="text-lg font-bold tracking-widest text-white uppercase">Barunson Dental</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs font-light">
              우리는 기술과 예술의 경계에서 당신의 가장 찬란한 미소를 디자인합니다. 
              프리미엄 라미네이트 부티크, 바른손치과.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-8 text-white text-xs tracking-widest uppercase opacity-50">Core Services</h4>
            <ul className="text-gray-500 text-sm space-y-4 font-light">
              <li>Artisan Laminate (무삭제/최소삭제)</li>
              <li>Minimal Invasive Implant</li>
              <li>Aesthetic Porcelain</li>
              <li>Premium Whitening</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-8 text-white text-xs tracking-widest uppercase opacity-50">Location Info</h4>
            <ul className="text-gray-500 text-sm space-y-4 font-light">
              <li className="text-white font-medium">T. 053-358-1500</li>
              <li>대구광역시 북구 침산남로 165</li>
              <li>라온스퀘어 빌딩 3층</li>
              <li className="italic text-white/40">Kakao. @바른손치과</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-8 text-white text-xs tracking-widest uppercase opacity-50">Working Hours</h4>
            <ul className="text-gray-400 text-[13px] space-y-3 font-light">
              <li className="flex justify-between"><span>월요일 (야간)</span> <span>09:30 ~ 20:30</span></li>
              <li className="flex justify-between"><span>화 · 수 · 금</span> <span>09:30 ~ 18:30</span></li>
              <li className="flex justify-between"><span>목요일 (야간)</span> <span>14:00 ~ 20:30</span></li>
              <li className="flex justify-between"><span>토요일</span> <span>10:00 ~ 16:00</span></li>
              <li className="flex justify-between text-red-500/60"><span>공휴일</span> <span>휴무</span></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between gap-6 text-[10px] tracking-widest text-gray-600 uppercase">
          <p>© 2024 Barunson Dental Boutique. All Rights Reserved.</p>
          <div className="flex gap-10">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

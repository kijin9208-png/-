
import React, { Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LaminateShowcase from './components/LaminateShowcase';
import AIConsultant from './components/AIConsultant';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      
      <Suspense fallback={<div className="h-screen w-full bg-black flex items-center justify-center text-white/20 tracking-widest text-xs uppercase animate-pulse">Establishing Connection...</div>}>
        <Hero />
      </Suspense>

      <div className="relative">
        {/* Info Section 1: Laminate Detail */}
        <LaminateShowcase />
        
        {/* Statistics: Pure Info Section */}
        <section className="py-32 bg-zinc-900/30 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-16 text-center">
              {[
                { label: 'Total Cases', val: '15,000+' },
                { label: 'Patient Satisfaction', val: '99.8%' },
                { label: 'Precision Depth', val: '0.1mm' },
                { label: 'Loyalty Rate', val: '85%' },
              ].map((stat, i) => (
                <div key={i} className="space-y-4">
                  <p className="text-4xl md:text-6xl font-extralight text-gradient tracking-tighter">{stat.val}</p>
                  <p className="text-white/30 text-[10px] uppercase tracking-[0.3em] font-bold">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Point: AI Consultation */}
        <AIConsultant />

        {/* Final Branding Message */}
        <section className="py-40 flex flex-col items-center justify-center text-center bg-black">
          <div className="w-px h-20 bg-gradient-to-b from-transparent to-white/20 mb-12"></div>
          <h3 className="text-3xl md:text-5xl font-extralight mb-8 tracking-tight text-white/80">
            당신의 미소, <br />
            <span className="font-bold text-white">가장 가치 있는 작품</span>이 됩니다.
          </h3>
          <p className="text-white/40 font-light tracking-widest text-sm uppercase">
            Barunson Dental Boutique
          </p>
        </section>

        <Footer />
      </div>

      {/* Floating CTA removed to minimize distractions, 
          only the AI Consultation area in the flow is the interaction point. 
          If you want a back to top, it could be here, but keeping it clean. */}
    </main>
  );
};

export default App;

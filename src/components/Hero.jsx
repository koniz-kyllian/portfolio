import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowDownRight, Sparkles, Terminal } from 'lucide-react';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 bg-concrete-subtle overflow-hidden border-b border-[#d8dadd]"
    >
      {/* Background Decorative Studio Grid Elements */}
      <div className="absolute bottom-8 right-6 text-[10px] font-mono text-[#5a6068]/40 tracking-widest pointer-events-none hidden md:block">
        PORTFOLIO / NGUYEN HOANG TRUNG KHANH
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ebebe8] border border-[#d8dadd] mb-6">
          <span className="w-2 h-2 rounded-full bg-[#ff6b4a] animate-pulse"></span>
          <span className="text-xs font-mono font-medium text-[#2b2d31] uppercase tracking-wider">
            {t('hero.greeting')} {t('hero.name')}
          </span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold text-[#2b2d31] tracking-tight leading-[1.1] mb-6">
          {t('hero.name')}
        </h1>

        {/* Role Tag & Slogan */}
        <div className="inline-block mb-8">
          <span className="px-4 py-1.5 bg-[#2b2d31] text-[#f7f7f5] text-sm sm:text-base font-mono tracking-widest uppercase mb-4 inline-block">
            {t('hero.role')}
          </span>
          <p className="text-xl sm:text-2xl md:text-3xl font-light text-[#5a6068] max-w-3xl mx-auto leading-relaxed mt-2 italic">
            "{t('hero.slogan')}"
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4">
          {/* Primary CTA - Accent Orange #ff6b4a */}
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-4 bg-[#ff6b4a] text-white font-medium text-sm uppercase tracking-wider shadow-lg hover:bg-[#e05637] hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 group"
          >
            <span>{t('hero.ctaProjects')}</span>
            <ArrowDownRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
          </a>

          {/* Secondary CTA */}
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 bg-[#ffffff] text-[#2b2d31] font-medium text-sm uppercase tracking-wider border border-[#2b2d31] hover:bg-[#2b2d31] hover:text-white transition-all duration-200 flex items-center justify-center gap-2"
          >
            <Terminal className="w-4 h-4 text-[#5a6068] group-hover:text-white" />
            <span>{t('hero.ctaContact')}</span>
          </a>
        </div>

        {/* Technical Tags Footnote */}
        <div className="mt-16 pt-8 border-t border-[#d8dadd]/60 flex flex-wrap justify-center items-center gap-6 text-xs text-[#5a6068] font-mono">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-[#2b2d31] rounded-full"></span>
            <span>REACT 19</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-[#2b2d31] rounded-full"></span>
            <span>TAILWIND V4</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-[#2b2d31] rounded-full"></span>
            <span>VITE V8</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-[#ff6b4a] rounded-full"></span>
            <span>AI INTEGRATION</span>
          </div>
        </div>
      </div>
    </section>
  );
}

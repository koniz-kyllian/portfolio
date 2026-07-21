import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Award, Compass, Music, UserCheck, Camera } from 'lucide-react';
import profileImg from '../assets/images/profile.jpg';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 px-4 sm:px-6 bg-[#f7f7f5] border-b border-[#d8dadd]">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-2">
          <span className="text-xs font-mono font-bold text-[#ff6b4a] uppercase tracking-widest">
            01 / INSIGHTS
          </span>
          <div className="h-[1px] w-12 bg-[#d8dadd]"></div>
        </div>
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#2b2d31] tracking-tight mb-3">
          {t('about.title')}
        </h2>
        <p className="text-[#5a6068] text-base mb-12 max-w-xl">
          {t('about.subtitle')}
        </p>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Profile Image Column (Concrete Frame Aesthetic) */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 bg-[#white] p-3 border border-[#d8dadd] shadow-md group">
              <div className="overflow-hidden aspect-square bg-[#ebebe8] relative">
                <img
                  src={profileImg}
                  alt="Nguyen Hoang Trung Khanh"
                  className="w-full h-full object-cover grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-[#2b2d31]/10 pointer-events-none"></div>
              </div>
              <div className="mt-3 flex items-center justify-between font-mono text-[11px] text-[#5a6068]">
                <span>NGUYEN HOANG TRUNG KHANH</span>
                <span className="text-[#ff6b4a]">STUDIO_ID // 2026</span>
              </div>
            </div>

            {/* Industrial Offset Decorative Border */}
            <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-[#2b2d31] -z-0 hidden sm:block"></div>
          </div>

          {/* Bio & Highlights Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="prose prose-slate max-w-none">
              <p className="text-[#2b2d31] text-base sm:text-lg leading-relaxed font-normal mb-8 bg-white p-6 sm:p-8 border border-[#d8dadd] shadow-2xs relative">
                <span className="text-4xl font-serif text-[#ff6b4a] leading-none absolute -top-3 left-4 bg-white px-1">“</span>
                {t('about.bio')}
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 mt-2">
              <div className="p-4 bg-white border border-[#d8dadd] flex items-start gap-3 hover:border-[#2b2d31] transition-colors">
                <Award className="w-5 h-5 text-[#ff6b4a] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-mono font-bold text-[#5a6068] uppercase tracking-wider mb-1">
                    ROLE & UNION
                  </h4>
                  <p className="text-sm font-semibold text-[#2b2d31]">
                    {t('about.highlights.leadership')}
                  </p>
                </div>
              </div>

              <div className="p-4 bg-white border border-[#d8dadd] flex items-start gap-3 hover:border-[#2b2d31] transition-colors">
                <Music className="w-5 h-5 text-[#ff6b4a] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-mono font-bold text-[#5a6068] uppercase tracking-wider mb-1">
                    COMMUNICATION
                  </h4>
                  <p className="text-sm font-semibold text-[#2b2d31]">
                    {t('about.highlights.media')}
                  </p>
                </div>
              </div>

              <div className="p-4 bg-white border border-[#d8dadd] flex items-start gap-3 hover:border-[#2b2d31] transition-colors">
                <UserCheck className="w-5 h-5 text-[#2b2d31] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-mono font-bold text-[#5a6068] uppercase tracking-wider mb-1">
                    ACADEMICS
                  </h4>
                  <p className="text-sm font-semibold text-[#2b2d31]">
                    {t('about.highlights.education')}
                  </p>
                </div>
              </div>

              <div className="p-4 bg-white border border-[#d8dadd] flex items-start gap-3 hover:border-[#2b2d31] transition-colors">
                <Camera className="w-5 h-5 text-[#2b2d31] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-mono font-bold text-[#5a6068] uppercase tracking-wider mb-1">
                    PASSIONS
                  </h4>
                  <p className="text-sm font-semibold text-[#2b2d31]">
                    {t('about.highlights.interests')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

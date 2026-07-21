import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, FacebookIcon } from './Icons';

export default function Footer() {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#2b2d31] text-[#f7f7f5] py-16 px-4 sm:px-6 border-t border-[#2b2d31]">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-[#5a6068]/30">
          {/* Brand & Tagline */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <div className="w-6 h-6 bg-[#ff6b4a] text-white flex items-center justify-center text-xs font-mono font-bold">
                K
              </div>
              <span className="font-display font-bold text-lg text-white tracking-tight">
                NGUYEN HOANG TRUNG KHANH
              </span>
            </div>
            <p className="text-xs font-mono text-[#d8dadd] tracking-wide">
              FULLSTACK DEVELOPER // DOMAIN: kylliankoniz.io.vn
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="mailto:kylliankoniz@gmail.com"
              className="w-10 h-10 rounded-full border border-[#5a6068]/50 flex items-center justify-center text-[#d8dadd] hover:text-[#ff6b4a] hover:border-[#ff6b4a] transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/koniz-kyllian"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full border border-[#5a6068]/50 flex items-center justify-center text-[#d8dadd] hover:text-[#ff6b4a] hover:border-[#ff6b4a] transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.facebook.com/nguyen.hoang.trung.khanh.2025"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full border border-[#5a6068]/50 flex items-center justify-center text-[#d8dadd] hover:text-[#ff6b4a] hover:border-[#ff6b4a] transition-colors"
              aria-label="Facebook"
            >
              <FacebookIcon className="w-4 h-4" />
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 bg-[#5a6068]/20 border border-[#5a6068]/40 hover:border-[#ff6b4a] hover:text-[#ff6b4a] text-xs font-mono transition-colors cursor-pointer"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Copyright & Subtitle */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#5a6068] gap-4 text-center sm:text-left">
          <p>© {new Date().getFullYear()} {t('footer.rights')}</p>
          <p>{t('footer.crafted')}</p>
        </div>
      </div>
    </footer>
  );
}

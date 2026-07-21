import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe, Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const { lang, toggleLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: t('nav.about') },
    { href: '#skills', label: t('nav.skills') },
    { href: '#projects', label: t('nav.projects') },
    { href: '#contact', label: t('nav.contact') },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#f7f7f5]/90 backdrop-blur-md border-b border-[#d8dadd] py-3.5 shadow-sm'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Studio Monogram Brand Logo */}
        <a
          href="#hero"
          className="group flex items-center gap-2.5 text-[#2b2d31] font-display font-bold text-lg tracking-tight"
        >
          <div className="w-8 h-8 rounded-none bg-[#2b2d31] text-[#f7f7f5] flex items-center justify-center text-xs font-mono font-semibold group-hover:bg-[#ff6b4a] transition-colors duration-200">
            NHTK
          </div>
          <span className="hidden sm:inline-block font-semibold tracking-wider text-xs uppercase text-[#5a6068] group-hover:text-[#2b2d31] transition-colors">
            STUDIO
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#5a6068] hover:text-[#2b2d31] transition-colors duration-200 relative group py-1"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#ff6b4a] transition-all duration-200 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Action Controls: Language Toggle & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          {/* Language Switcher Button */}
          <button
            onClick={toggleLanguage}
            id="lang-toggle-btn"
            aria-label="Toggle language"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded border border-[#d8dadd] bg-white text-[#2b2d31] text-xs font-mono hover:border-[#2b2d31] transition-all duration-200 shadow-2xs"
          >
            <Globe className="w-3.5 h-3.5 text-[#5a6068]" />
            <span className="font-semibold uppercase tracking-wider">{lang}</span>
            <span className="text-[#d8dadd]">|</span>
            <span className="text-[#5a6068] font-normal">
              {lang === 'en' ? 'VI' : 'EN'}
            </span>
          </button>

          {/* Quick CTA Desktop */}
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1 px-4 py-1.5 bg-[#2b2d31] text-[#f7f7f5] hover:bg-[#ff6b4a] text-xs font-medium uppercase tracking-wider transition-colors duration-200"
          >
            <span>{t('hero.ctaContact')}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#2b2d31] hover:text-[#ff6b4a] transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#f7f7f5] border-b border-[#d8dadd] px-6 py-6 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#2b2d31] hover:text-[#ff6b4a] py-2 border-b border-[#d8dadd]/50"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 flex items-center justify-between">
              <span className="text-xs text-[#5a6068] font-mono">LANGUAGE:</span>
              <button
                onClick={toggleLanguage}
                className="px-4 py-2 bg-[#2b2d31] text-[#f7f7f5] text-xs font-mono font-semibold rounded"
              >
                SWITCH TO {lang === 'en' ? 'VIETNAMESE' : 'ENGLISH'}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

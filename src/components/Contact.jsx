import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Mail, Send, CheckCircle2, Copy, Check } from 'lucide-react';
import { GithubIcon, FacebookIcon } from './Icons';

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success'
  const [copied, setCopied] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setStatus('sending');

    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1200);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('kylliankoniz@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 bg-[#f0f0ed] border-b border-[#d8dadd]">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-2">
          <span className="text-xs font-mono font-bold text-[#ff6b4a] uppercase tracking-widest">
            04 / CONNECT
          </span>
          <div className="h-[1px] w-12 bg-[#d8dadd]"></div>
        </div>
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#2b2d31] tracking-tight mb-3">
          {t('contact.title')}
        </h2>
        <p className="text-[#5a6068] text-base mb-12 max-w-xl">
          {t('contact.subtitle')}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Direct Contact Links Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="space-y-4">
              {/* Direct Email Card */}
              <div className="bg-white p-6 border border-[#d8dadd] hover:border-[#2b2d31] transition-colors relative group">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#5a6068] uppercase">
                    <Mail className="w-4 h-4 text-[#ff6b4a]" />
                    <span>DIRECT EMAIL</span>
                  </div>
                  <button
                    onClick={copyEmail}
                    className="text-xs font-mono text-[#5a6068] hover:text-[#2b2d31] flex items-center gap-1 cursor-pointer"
                    title="Copy Email"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-green-600" />
                        <span className="text-green-600">COPIED</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>COPY</span>
                      </>
                    )}
                  </button>
                </div>
                <a
                  href="mailto:kylliankoniz@gmail.com"
                  className="text-lg font-display font-bold text-[#2b2d31] hover:text-[#ff6b4a] transition-colors break-all"
                >
                  kylliankoniz@gmail.com
                </a>
              </div>

              {/* GitHub Link Card */}
              <a
                href="https://github.com/koniz-kyllian"
                target="_blank"
                rel="noreferrer"
                className="block bg-white p-6 border border-[#d8dadd] hover:border-[#2b2d31] transition-colors group"
              >
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#5a6068] uppercase">
                    <GithubIcon className="w-4 h-4 text-[#2b2d31]" />
                    <span>GITHUB PROFILE</span>
                  </div>
                  <span className="text-xs font-mono text-[#5a6068] group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
                <span className="text-base font-display font-bold text-[#2b2d31] group-hover:text-[#ff6b4a] transition-colors">
                  github.com/koniz-kyllian
                </span>
              </a>

              {/* Facebook Link Card */}
              <a
                href="https://www.facebook.com/nguyen.hoang.trung.khanh.2025"
                target="_blank"
                rel="noreferrer"
                className="block bg-white p-6 border border-[#d8dadd] hover:border-[#2b2d31] transition-colors group"
              >
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#5a6068] uppercase">
                    <FacebookIcon className="w-4 h-4 text-[#2b2d31]" />
                    <span>FACEBOOK</span>
                  </div>
                  <span className="text-xs font-mono text-[#5a6068] group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
                <span className="text-base font-display font-bold text-[#2b2d31] group-hover:text-[#ff6b4a] transition-colors">
                  Nguyen Hoang Trung Khanh
                </span>
              </a>
            </div>

            {/* Studio Note */}
            <div className="mt-8 p-4 bg-[#ebebe8] border border-[#d8dadd] font-mono text-xs text-[#5a6068] leading-relaxed">
              <span className="font-bold text-[#2b2d31]">RESPONSE TIME:</span> Typically within 24 hours. Always open for exciting projects, web development roles, and creative tech ideas.
            </div>
          </div>

          {/* Interactive Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 border border-[#d8dadd] shadow-sm">
              {status === 'success' ? (
                <div className="py-12 text-center flex flex-col items-center justify-center space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-[#ff6b4a]" />
                  <h3 className="text-xl font-display font-bold text-[#2b2d31]">
                    MESSAGE SENT
                  </h3>
                  <p className="text-sm text-[#5a6068] max-w-md">
                    {t('contact.form.successMsg')}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-mono font-bold text-[#2b2d31] uppercase tracking-wider mb-2">
                      {t('contact.form.nameLabel')} <span className="text-[#ff6b4a]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder={t('contact.form.namePlaceholder')}
                      className="w-full px-4 py-3 bg-[#f7f7f5] border border-[#d8dadd] text-[#2b2d31] text-sm focus:outline-none focus:border-[#2b2d31] transition-colors font-sans placeholder:text-[#5a6068]/50"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-xs font-mono font-bold text-[#2b2d31] uppercase tracking-wider mb-2">
                      {t('contact.form.emailLabel')} <span className="text-[#ff6b4a]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder={t('contact.form.emailPlaceholder')}
                      className="w-full px-4 py-3 bg-[#f7f7f5] border border-[#d8dadd] text-[#2b2d31] text-sm focus:outline-none focus:border-[#2b2d31] transition-colors font-sans placeholder:text-[#5a6068]/50"
                    />
                  </div>

                  {/* Message Input */}
                  <div>
                    <label className="block text-xs font-mono font-bold text-[#2b2d31] uppercase tracking-wider mb-2">
                      {t('contact.form.messageLabel')} <span className="text-[#ff6b4a]">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder={t('contact.form.messagePlaceholder')}
                      className="w-full px-4 py-3 bg-[#f7f7f5] border border-[#d8dadd] text-[#2b2d31] text-sm focus:outline-none focus:border-[#2b2d31] transition-colors font-sans resize-none placeholder:text-[#5a6068]/50"
                    ></textarea>
                  </div>

                  {/* Submit Button Accent Orange #ff6b4a */}
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full py-4 bg-[#ff6b4a] text-white font-medium text-sm uppercase tracking-wider hover:bg-[#e05637] transition-colors duration-200 flex items-center justify-center gap-2 shadow-md cursor-pointer disabled:opacity-50"
                  >
                    {status === 'sending' ? (
                      <span>{t('contact.form.sending')}</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>{t('contact.form.submitBtn')}</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

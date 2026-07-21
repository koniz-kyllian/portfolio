import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Mail, Send, CheckCircle2, AlertCircle, Copy, Check } from 'lucide-react';
import { GithubIcon, FacebookIcon } from './Icons';

export default function Contact() {
  const { t } = useLanguage();

  // State Management
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Set loading state and reset previous feedback messages
    setIsLoading(true);
    setSuccess('');
    setError('');

    try {
      const response = await fetch('https://api-kylliankoniz.onrender.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok || response.status === 201) {
        // Success: Reset form inputs and set success feedback
        setFormData({ name: '', email: '', message: '' });
        setSuccess(data.message || t('contact.form.successMsg') || 'Message sent successfully!');
      } else {
        // Server returned non-2xx status
        setError(data.message || data.error || 'Failed to send message. Please try again.');
      }
    } catch (err) {
      // Network or general fetch failure
      setError('Network error: Unable to reach the server. Please check your connection.');
    } finally {
      setIsLoading(false);
    }
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
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-600 font-semibold">COPIED</span>
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
                    disabled={isLoading}
                    className="w-full px-4 py-3 bg-[#f7f7f5] border border-[#d8dadd] text-[#2b2d31] text-sm focus:outline-none focus:border-[#2b2d31] transition-colors font-sans placeholder:text-[#5a6068]/50 disabled:opacity-60"
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
                    disabled={isLoading}
                    className="w-full px-4 py-3 bg-[#f7f7f5] border border-[#d8dadd] text-[#2b2d31] text-sm focus:outline-none focus:border-[#2b2d31] transition-colors font-sans placeholder:text-[#5a6068]/50 disabled:opacity-60"
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
                    disabled={isLoading}
                    className="w-full px-4 py-3 bg-[#f7f7f5] border border-[#d8dadd] text-[#2b2d31] text-sm focus:outline-none focus:border-[#2b2d31] transition-colors font-sans resize-none placeholder:text-[#5a6068]/50 disabled:opacity-60"
                  ></textarea>
                </div>

                {/* Status Messages Feedback */}
                {success && (
                  <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-medium flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span>{success}</span>
                  </div>
                )}

                {error && (
                  <div className="p-4 bg-[#ff6b4a]/10 border border-[#ff6b4a]/40 text-[#ff6b4a] text-sm font-medium flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 text-[#ff6b4a] shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-4 bg-[#ff6b4a] text-white font-medium text-sm uppercase tracking-wider hover:bg-[#e05637] transition-colors duration-200 flex items-center justify-center gap-2 shadow-md cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <span className="font-mono animate-pulse">SENDING...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>{t('contact.form.submitBtn')}</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

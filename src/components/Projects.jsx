import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ExternalLink, Sparkles, TrendingUp, Zap, Server } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Projects() {
  const { t } = useLanguage();

  const projectList = t('projects.list') || [];
  const projectIcons = [Sparkles, Zap, Server];

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 bg-[#f7f7f5] border-b border-[#d8dadd]">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-2">
          <span className="text-xs font-mono font-bold text-[#ff6b4a] uppercase tracking-widest">
            03 / PORTFOLIO
          </span>
          <div className="h-[1px] w-12 bg-[#d8dadd]"></div>
        </div>
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#2b2d31] tracking-tight mb-3">
          {t('projects.title')}
        </h2>
        <p className="text-[#5a6068] text-base mb-12 max-w-xl">
          {t('projects.subtitle')}
        </p>

        {/* Projects Cards Grid */}
        <div className="space-y-8">
          {projectList.map((project, index) => {
            const IconComponent = projectIcons[index % projectIcons.length];
            return (
              <div
                key={project.id || index}
                className="bg-white border border-[#d8dadd] p-6 sm:p-8 hover:border-[#2b2d31] transition-all duration-300 shadow-2xs group relative overflow-hidden"
              >
                {/* Decorative Studio Index Marker */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-[#ebebe8] flex items-center justify-center font-mono font-bold text-xs text-[#5a6068] group-hover:bg-[#ff6b4a] group-hover:text-white transition-colors">
                  0{index + 1}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  {/* Left Column: Project Info */}
                  <div className="lg:col-span-7 pr-4">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2.5 py-0.5 bg-[#ebebe8] border border-[#d8dadd] text-[#2b2d31] text-[11px] font-mono font-semibold uppercase">
                        {t('projects.labels.role')}: {project.role}
                      </span>
                    </div>

                    <h3 className="text-2xl font-display font-bold text-[#2b2d31] group-hover:text-[#ff6b4a] transition-colors mb-3">
                      {project.name}
                    </h3>

                    {/* Result / Impact Box */}
                    <div className="p-4 bg-[#f7f7f5] border-l-2 border-[#ff6b4a] mb-4">
                      <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#ff6b4a] uppercase mb-1">
                        <TrendingUp className="w-3.5 h-3.5" />
                        <span>{t('projects.labels.result')}</span>
                      </div>
                      <p className="text-sm text-[#2b2d31] font-medium leading-relaxed">
                        {project.result}
                      </p>
                    </div>
                  </div>

                  {/* Right Column: Tech Badges & Actions */}
                  <div className="lg:col-span-5 flex flex-col justify-between h-full pt-2 border-t lg:border-t-0 lg:border-l border-[#d8dadd] lg:pl-6">
                    <div>
                      <h4 className="text-xs font-mono text-[#5a6068] uppercase tracking-wider mb-3">
                        {t('projects.labels.tech')}
                      </h4>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech &&
                          project.tech.map((techItem) => (
                            <span
                              key={techItem}
                              className="px-3 py-1 bg-[#2b2d31] text-[#f7f7f5] text-xs font-mono font-medium rounded-none"
                            >
                              {techItem}
                            </span>
                          ))}
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-4 pt-4 border-t border-[#d8dadd]/60">
                      <a
                        href="https://github.com/koniz-kyllian"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#2b2d31] hover:text-[#ff6b4a] transition-colors"
                      >
                        <GithubIcon className="w-4 h-4" />
                        <span>SOURCE CODE</span>
                      </a>
                      <span className="text-[#d8dadd]">|</span>
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#5a6068] hover:text-[#2b2d31] transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>DETAILS</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Code2, Cpu, Database, Flame, Layers, Zap } from 'lucide-react';

export default function Skills() {
  const { t } = useLanguage();

  const skillsData = [
    {
      name: 'React',
      category: 'Frontend Library',
      description: 'Building modular, reactive UI component architecture with Hooks & Context.',
      icon: Code2,
      level: 'Advanced',
      accentColor: '#2b2d31',
    },
    {
      name: 'Tailwindcss',
      category: 'Utility CSS Framework',
      description: 'Crafting responsive, high-performance designs with Tailwind CSS v4.',
      icon: Layers,
      level: 'Advanced',
      accentColor: '#2b2d31',
    },
    {
      name: 'Vite',
      category: 'Frontend Tooling',
      description: 'Instant HMR development and lightning-fast production bundle builds.',
      icon: Zap,
      level: 'Proficient',
      accentColor: '#2b2d31',
    },
    {
      name: 'MongoDB',
      category: 'NoSQL Database',
      description: 'Designing flexible document schemas and reliable datastores.',
      icon: Database,
      level: 'Proficient',
      accentColor: '#2b2d31',
    },
    {
      name: 'AI',
      category: 'Intelligence & API',
      description: 'Integrating LLMs, prompt engineering, and intelligent workflow automation.',
      icon: Cpu,
      level: 'Focal Feature',
      accentColor: '#ff6b4a',
      highlight: true,
    },
  ];

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 bg-[#f0f0ed] border-b border-[#d8dadd]">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-2">
          <span className="text-xs font-mono font-bold text-[#ff6b4a] uppercase tracking-widest">
            02 / CAPABILITIES
          </span>
          <div className="h-[1px] w-12 bg-[#d8dadd]"></div>
        </div>
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#2b2d31] tracking-tight mb-3">
          {t('skills.title')}
        </h2>
        <p className="text-[#5a6068] text-base mb-12 max-w-xl">
          {t('skills.subtitle')}
        </p>

        {/* Minimalist Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((skill) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={skill.name}
                className={`concrete-card p-6 flex flex-col justify-between relative group ${
                  skill.highlight ? 'border-2 border-[#ff6b4a]' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-10 h-10 flex items-center justify-center font-bold text-sm ${
                        skill.highlight
                          ? 'bg-[#ff6b4a] text-white'
                          : 'bg-[#2b2d31] text-[#f7f7f5] group-hover:bg-[#ff6b4a] transition-colors'
                      }`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono text-[#5a6068] uppercase tracking-wider px-2 py-0.5 bg-[#ebebe8] border border-[#d8dadd]">
                      {skill.level}
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-bold text-[#2b2d31] mb-1 group-hover:text-[#ff6b4a] transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-xs font-mono text-[#5a6068] mb-3">{skill.category}</p>
                  <p className="text-sm text-[#5a6068] leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#d8dadd] flex items-center justify-between text-[11px] font-mono text-[#5a6068]">
                  <span>TECH_STACK // TAG</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Minimalist Tech Pills Strip */}
        <div className="mt-12 p-6 bg-white border border-[#d8dadd] flex flex-wrap items-center justify-between gap-4">
          <span className="text-xs font-mono text-[#5a6068] uppercase tracking-wider">
            PRIMARY TECH TAGS:
          </span>
          <div className="flex flex-wrap gap-2">
            {['React v19', 'Tailwind v4', 'Vite v8', 'MongoDB', 'AI API'].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-[#f7f7f5] border border-[#d8dadd] text-[#2b2d31] text-xs font-mono font-medium hover:border-[#ff6b4a] hover:text-[#ff6b4a] transition-colors cursor-default"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

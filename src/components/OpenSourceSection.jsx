import React from 'react';
import { ExternalLink } from 'lucide-react';
import SectionHeader from './SectionHeader';

const OpenSourceSection = ({ title, data, icon }) => (
  <section className="mb-24 pl-10 md:pl-12">
    <SectionHeader icon={icon} title={title} />
    <div className="grid gap-6">
      {data.map((item, i) => (
        <a key={i} href={item.link} target="_blank" rel="noopener noreferrer" 
           className="relative group block p-0.5 rounded-3xl hover:bg-blue-500 transition-all theme-card shadow-sm">
          <div className="p-8 rounded-[22px] h-full" style={{ backgroundColor: 'var(--card-bg)' }}>
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-2 block">
                  {item.role}
                </span>
                <h4 className="text-2xl font-black theme-text-main group-hover:text-blue-600 transition-colors">
                  {item.project}
                </h4>
              </div>
              <ExternalLink size={18} className="theme-text-muted group-hover:text-blue-500 transition-colors" />
            </div>
            <p className="theme-text-muted text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        </a>
      ))}
    </div>
  </section>
);

export default OpenSourceSection;
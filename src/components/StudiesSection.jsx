import React from 'react';
import { ExternalLink } from 'lucide-react';
import SectionHeader from './SectionHeader';

const StudiesSection = ({ title, data, icon }) => (
  <section className="mb-24 pl-10 md:pl-12">
    <SectionHeader icon={icon} title={title} />
    <div className="grid gap-4">
      {data.map((s, i) => (
        <a key={i} href={s.link} target="_blank" rel="noopener noreferrer" 
           className="p-6 rounded-2xl flex justify-between items-center shadow-sm hover:border-blue-500 transition-all group theme-card">
          <div>
            <h5 className="font-black theme-text-main text-sm group-hover:text-blue-600 transition-colors">
              {s.name}
            </h5>
            <p className="text-[10px] theme-text-muted uppercase font-bold tracking-tighter mt-1">
              {s.tech} — {s.description}
            </p>
          </div>
          <ExternalLink size={14} className="theme-text-muted group-hover:text-blue-400 transition-colors shrink-0 ml-4" />
        </a>
      ))}
    </div>
  </section>
);

export default StudiesSection;
import React from 'react';
import { ExternalLink } from 'lucide-react';
import SectionHeader from './SectionHeader';

const AcademicSection = ({ title, data, icon }) => (
  <section className="mb-24 pl-10 md:pl-12">
    <SectionHeader icon={icon} title={title} />
    {data.map((edu, i) => (
      <div key={i} className="mb-12">
        <div className="flex flex-col md:flex-row justify-between items-start mb-2 gap-2">
          <h3 className="text-2xl font-black theme-text-main">{edu.uni}</h3>
          <span className="font-mono text-[10px] font-bold theme-text-muted uppercase tracking-widest">
            {edu.period}
          </span>
        </div>
        <p className="text-blue-600 dark:text-blue-400 font-bold text-xs uppercase tracking-widest mb-6">
          {edu.education}
        </p>
        <ul className="space-y-4 theme-text-muted text-sm leading-relaxed">
          {edu.points.map((point, j) => (
            <li key={j} className="flex gap-3 italic">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700 mt-2 shrink-0" />
              {typeof point === 'string' ? point : (
                <a href={point.link} target="_blank" rel="noopener noreferrer" 
                   className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1 group">
                  {point.text} 
                  <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </section>
);

export default AcademicSection;
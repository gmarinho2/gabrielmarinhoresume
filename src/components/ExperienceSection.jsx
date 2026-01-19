import React from 'react';
import SectionHeader from './SectionHeader';

const ExperienceSection = ({ title, data, icon }) => (
  <section className="mb-24 pl-10 md:pl-12">
    <SectionHeader icon={icon} title={title} />
    {data.map((exp, i) => (
      <div key={i} className="mb-12">
        <div className="flex flex-col md:flex-row justify-between items-start mb-2 gap-2">
          <h3 className="text-2xl font-black theme-text-main">{exp.company}</h3>
          <span className="font-mono text-[10px] font-bold theme-text-muted uppercase tracking-widest">
            {exp.period}
          </span>
        </div>
        <p className="text-blue-600 dark:text-blue-400 font-bold text-xs uppercase tracking-widest mb-6">
          {exp.role}
        </p>
        <ul className="space-y-4 theme-text-muted text-sm leading-relaxed">
          {exp.points.map((p, j) => (
            <li key={j} className="flex gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700 mt-2 shrink-0" />
              {p}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </section>
);

export default ExperienceSection;
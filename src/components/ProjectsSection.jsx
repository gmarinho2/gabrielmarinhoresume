import React from 'react';
import { ExternalLink } from 'lucide-react';
import SectionHeader from './SectionHeader';

const ProjectsSection = ({ title, data, icon }) => (
  <section className="mb-24 pl-10 md:pl-12">
    <SectionHeader icon={icon} title={title} />
    <div className="grid gap-6">
      {data.map((proj, i) => (
        <a key={i} href={proj.link} target="_blank" rel="noopener noreferrer" 
           className="block p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all group theme-card">
          <div className="flex justify-between items-start mb-4 gap-4">
            <h4 className="text-xl font-black theme-text-main group-hover:text-blue-600 transition-colors">
              {proj.name}
            </h4>
            <ExternalLink size={16} className="theme-text-muted group-hover:text-blue-600 transition-colors shrink-0" />
          </div>
          <p className="theme-text-muted text-sm mb-6 leading-relaxed">
            {proj.description}
          </p>
          <p className="text-[10px] font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
            {proj.result}
          </p>
        </a>
      ))}
    </div>
  </section>
);

export default ProjectsSection;
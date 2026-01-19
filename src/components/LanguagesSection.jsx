import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import SectionHeader from './SectionHeader';

const LanguagesSection = ({ title, data, icon }) => (
  <section className="mb-12 pl-10 md:pl-12">
    <SectionHeader icon={icon} title={title} />
    <div className="flex flex-wrap gap-6">
      {data.map((lang, i) => (
        // alterado para text-black para contraste absoluto
        <div key={i} className="flex items-center gap-2 text-sm font-bold text-black dark:text-slate-400">
          <CheckCircle2 size={16} className="text-blue-800 dark:text-blue-400" />
          {lang}
        </div>
      ))}
    </div>
  </section>
);

export default LanguagesSection;
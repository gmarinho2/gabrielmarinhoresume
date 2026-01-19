import React from 'react';

const SectionHeader = ({ icon: Icon, title }) => (
  <div className="flex items-center gap-4 mb-10 -ml-[21px]">
    {/* Usamos var(--ring-offset) para garantir que o anel suma no fundo correto */}
    <div className="bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 p-2.5 rounded-full ring-8 shadow-lg transition-all"
         style={{ ringColor: 'var(--ring-offset)', '--tw-ring-color': 'var(--ring-offset)' }}>
      <Icon size={18} />
    </div>
    <h2 className="text-xs font-black uppercase tracking-[0.3em] theme-text-main">
      {title}
    </h2>
  </div>
);

export default SectionHeader;
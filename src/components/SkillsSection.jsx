import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

const SkillsSection = ({ title, data, icon }) => (
  <section className="mb-24 pl-10 md:pl-12">
    <SectionHeader icon={icon} title={title} />
    <div className="grid gap-8">
      {data.map((skill, i) => (
        <div key={i}>
          <p className="text-[10px] theme-text-muted mb-3 uppercase font-black tracking-widest">
            {skill.category}
          </p>
          <div className="flex flex-wrap gap-2">
            {skill.items.map((item, j) => (
              <motion.span 
                key={j} 
                whileHover={{ y: -2 }}
                className="px-3 py-1 theme-pill rounded text-xs font-bold shadow-sm cursor-default border border-slate-200 dark:border-slate-700"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default SkillsSection;
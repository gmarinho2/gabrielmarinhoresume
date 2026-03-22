import React, { useState, useEffect } from 'react';
import { Terminal, BookOpen, Rocket, Code2, Cpu, Globe, Sun, Moon, Share2 } from 'lucide-react';
import { content } from './data';
import Header from './components/Header';
import ExperienceSection from './components/ExperienceSection';
import OpenSourceSection from './components/OpenSourceSection';
import AcademicSection from './components/AcademicSection';
import ProjectsSection from './components/ProjectsSection';
import StudiesSection from './components/StudiesSection';
import SkillsSection from './components/SkillsSection';
import LanguagesSection from './components/LanguagesSection';

function App() {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('lang') || 'en';
  });
  
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('isDark');
    return saved !== null ? JSON.parse(saved) : true;
  });

  const t = content[lang];

  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  useEffect(() => {
    localStorage.setItem('isDark', JSON.stringify(isDark));
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="max-w-3xl mx-auto px-6 sm:px-8 py-24 transition-colors duration-300">
      <div className="fixed top-6 right-6 z-50 flex gap-2">
        <button 
          onClick={() => setIsDark(!isDark)}
          aria-label="tema"
          className="p-2 bg-white dark:bg-slate-900 border-2 border-slate-900 dark:border-slate-100 rounded-full text-slate-900 dark:text-white shadow-xl cursor-pointer"
        >
          {isDark ? <Sun size={14} /> : <Moon size={14} />}
        </button>
        <button 
          onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}
          className="px-3 py-1 bg-white dark:bg-slate-900 border-2 border-slate-900 dark:border-slate-100 rounded-full text-[10px] font-black text-slate-900 dark:text-white shadow-xl uppercase tracking-widest cursor-pointer"
        >
          {lang === 'pt' ? 'ENGLISH' : 'PORTUGUÊS'}
        </button>
      </div>

      <Header info={t.personalInfo} />

      <main className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4">
        <ExperienceSection title={t.experienceTitle} data={t.experiences} icon={Terminal} />
        <OpenSourceSection title={t.openSourceTitle} data={t.openSource} icon={Share2} />
        <AcademicSection title={t.academicTitle} data={t.academic} icon={BookOpen} />
        <ProjectsSection title={t.projectsTitle} data={t.projects} icon={Rocket} />
        <StudiesSection title={t.studiesTitle} data={t.studies} icon={Code2} />
        <SkillsSection title={t.skillsTitle} data={t.skills} icon={Cpu} />
        <LanguagesSection title={t.languagesTitle} data={t.languages} icon={Globe} />
      </main>

      <footer className="mt-20 pt-12 border-t border-slate-100 dark:border-slate-900 text-center">
        <p className="text-[10px] font-black uppercase text-slate-400 dark:text-slate-600 tracking-[0.5em]">
          © 2026 {t.personalInfo.name}
        </p>
      </footer>
    </div>
  );
}

export default App;
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Header = ({ info }) => {
  const getIcon = (type) => ({
    github: <Github size={18} />,
    linkedin: <Linkedin size={18} />,
    email: <Mail size={18} />
  }[type]);

  return (
    <header className="mb-24">
      {/* Forçamos a cor usando a variável do index.css */}
      <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-6 theme-text-main">
        {info.name}
      </h1>
      <div className="flex gap-5 mb-8">
        {info.contact.map((c, i) => (
          <a key={i} href={c.link} target="_blank" rel="noopener noreferrer" 
             className="theme-text-muted hover:text-blue-600 transition-colors">
            {getIcon(c.type)}
          </a>
        ))}
      </div>
      <p className="text-xl font-bold text-blue-600 dark:text-blue-400 uppercase tracking-tight mb-6">
        {info.role}
      </p>
      <p className="text-lg theme-text-muted leading-relaxed italic border-l-4 border-slate-200 dark:border-slate-800 pl-6">
        {info.summary}
      </p>
    </header>
  );
};

export default Header;
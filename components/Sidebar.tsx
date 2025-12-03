import React, { useState } from 'react';
import { PROFILE } from '../constants';
import { IconMail, IconGithub, IconLinkedin, IconDownload } from './Icons';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const [showResumeMenu, setShowResumeMenu] = useState(false);
  
  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
  ];

  return (
    <aside className="w-full md:w-64 lg:w-72 flex-shrink-0 bg-academic-50 md:min-h-screen border-b md:border-b-0 md:border-r border-academic-200 p-6 md:p-8 flex flex-col">
      <div className="mb-8">
        <div className="w-32 h-32 bg-academic-200 mb-4 overflow-hidden rounded-sm">
             <img 
              src="/avatar.jpg" 
              alt="Haodong Zhang" 
              className="w-full h-full object-cover"
            />
        </div>
        <h1 className="font-serif text-xl font-bold text-academic-900 leading-tight mb-2">
          {PROFILE.name}
        </h1>
        <p className="text-sm text-academic-600 mb-4 leading-relaxed">
          {PROFILE.title}
        </p>

        <div className="space-y-2 text-sm text-academic-600">
          <div className="flex items-center gap-2">
            <IconMail className="w-4 h-4" />
            <a href={`mailto:${PROFILE.email}`} className="hover:text-link underline decoration-dotted underline-offset-2">
              Email
            </a>
          </div>
          {PROFILE.github && (
            <div className="flex items-center gap-2">
              <IconGithub className="w-4 h-4" />
              <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="hover:text-link underline decoration-dotted underline-offset-2">
                GitHub
              </a>
            </div>
          )}
          {PROFILE.linkedin && (
            <div className="flex items-center gap-2">
              <IconLinkedin className="w-4 h-4" />
              <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-link underline decoration-dotted underline-offset-2">
                LinkedIn
              </a>
            </div>
          )}
        </div>
      </div>

      <nav className="flex-1">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setActiveTab(item.id)}
                className={`w-full text-left px-3 py-2 text-sm font-medium transition-colors border-l-2 ${
                  activeTab === item.id
                    ? 'border-academic-800 text-academic-900 bg-academic-100'
                    : 'border-transparent text-academic-500 hover:text-academic-900 hover:border-academic-300'
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
        
        {/* Resume Download */}
        <div className="mt-4 relative">
          <button
            onClick={() => setShowResumeMenu(!showResumeMenu)}
            className="w-full flex items-center gap-2 px-3 py-2 text-sm font-medium text-academic-600 hover:text-academic-900 border border-academic-300 rounded-md hover:bg-academic-100 transition-colors"
          >
            <IconDownload className="w-4 h-4" />
            Resume / 简历
          </button>
          {showResumeMenu && (
            <div className="absolute left-0 right-0 mt-1 bg-white border border-academic-200 rounded-md shadow-lg z-10">
              <a
                href="/resume-english.pdf"
                download
                className="block px-3 py-2 text-sm text-academic-600 hover:bg-academic-50 hover:text-academic-900"
                onClick={() => setShowResumeMenu(false)}
              >
                📄 English Version
              </a>
              <a
                href="/resume-chinese.pdf"
                download
                className="block px-3 py-2 text-sm text-academic-600 hover:bg-academic-50 hover:text-academic-900"
                onClick={() => setShowResumeMenu(false)}
              >
                📄 中文版本
              </a>
            </div>
          )}
        </div>
      </nav>

      <div className="mt-8 text-xs text-academic-400 font-sans">
        &copy; 2025 Haodong Zhang.<br />
        Built with React & Tailwind.
      </div>
    </aside>
  );
};

export default Sidebar;

import React from 'react';
import { PROFILE } from '../constants';
import { IconMail, IconMapPin, IconGithub, IconFileText } from './Icons';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'publications', label: 'Publications' },
    { id: 'news', label: 'News' },
    { id: 'assistant', label: 'AI Assistant' },
  ];

  return (
    <aside className="w-full md:w-64 lg:w-72 flex-shrink-0 bg-academic-50 md:min-h-screen border-b md:border-b-0 md:border-r border-academic-200 p-6 md:p-8 flex flex-col">
      <div className="mb-8">
        <div className="w-32 h-32 bg-academic-200 mb-4 overflow-hidden rounded-sm grayscale">
             {/* Placeholder for Profile Image - Grayscale for academic look */}
             <img 
              src="https://picsum.photos/300/300" 
              alt="Profile" 
              className="w-full h-full object-cover mix-blend-multiply"
            />
        </div>
        <h1 className="font-serif text-xl font-bold text-academic-900 leading-tight mb-2">
          {PROFILE.name}
        </h1>
        <p className="text-sm text-academic-600 mb-4 leading-relaxed">
          {PROFILE.title}<br />
          {PROFILE.affiliation}
        </p>

        <div className="space-y-2 text-sm text-academic-600">
          <div className="flex items-center gap-2">
            <IconMail className="w-4 h-4" />
            <a href={`mailto:${PROFILE.email}`} className="hover:text-link underline decoration-dotted underline-offset-2">
              Email
            </a>
          </div>
          <div className="flex items-start gap-2">
            <IconMapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
            <span>{PROFILE.location}</span>
          </div>
          {PROFILE.github && (
            <div className="flex items-center gap-2">
              <IconGithub className="w-4 h-4" />
              <a href={PROFILE.github} target="_blank" rel="noreferrer" className="hover:text-link underline decoration-dotted underline-offset-2">
                Github
              </a>
            </div>
          )}
          {PROFILE.scholar && (
            <div className="flex items-center gap-2">
              <IconFileText className="w-4 h-4" />
              <a href={PROFILE.scholar} target="_blank" rel="noreferrer" className="hover:text-link underline decoration-dotted underline-offset-2">
                Google Scholar
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
      </nav>

      <div className="mt-8 text-xs text-academic-400 font-sans">
        &copy; {new Date().getFullYear()} {PROFILE.name}.<br />
        Built with React & Tailwind.
      </div>
    </aside>
  );
};

export default Sidebar;

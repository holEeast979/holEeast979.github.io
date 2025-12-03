import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ContentSection from './components/ContentSection';
import { PROFILE, PROJECTS, EDUCATION, HONORS, TECHNICAL_FOCUS, TECH_STACK } from './constants';
import { IconAward } from './components/Icons';

function App() {
  const [activeTab, setActiveTab] = useState('about');

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return (
          <ContentSection title="About Me">
            <div className="prose prose-stone max-w-none text-academic-800">
              <p className="mb-6 text-lg font-serif leading-relaxed whitespace-pre-line">
                {PROFILE.bio}
              </p>
              
              <h3 className="font-serif text-lg font-bold mt-8 mb-4 text-academic-900">Technical Focus</h3>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                {TECHNICAL_FOCUS.map(item => (
                  <li key={item.id} className="text-academic-700">{item.topic}</li>
                ))}
              </ul>

              <h3 className="font-serif text-lg font-bold mt-8 mb-4 text-academic-900">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {TECH_STACK.map((tech, idx) => (
                  <img 
                    key={idx} 
                    src={tech.badge}
                    alt={tech.name}
                    className="h-7"
                  />
                ))}
              </div>
            </div>
          </ContentSection>
        );

      case 'projects':
        return (
          <ContentSection title="Projects">
             <div className="space-y-8">
               {PROJECTS.map((project, idx) => (
                 <div key={project.id} className="group border border-academic-200 rounded-lg p-6 hover:border-academic-400 transition-colors">
                   <div className="flex items-start justify-between mb-2">
                     <h3 className="font-serif text-lg font-bold text-academic-900">
                       {idx === 0 && <span className="text-xs bg-link text-white px-2 py-0.5 rounded mr-2">Featured</span>}
                       {project.title}
                     </h3>
                   </div>
                   <div className="flex flex-wrap gap-2 mb-3">
                     {project.tags.map((tag, tagIdx) => (
                       <span key={tagIdx} className="text-xs px-2 py-0.5 bg-academic-100 text-academic-600 rounded">
                         {tag}
                       </span>
                     ))}
                   </div>
                   <p className="text-academic-600 mb-4">
                     {project.description}
                   </p>
                   <div className="space-y-2">
                     <p className="text-sm font-medium text-academic-700">Key Highlights:</p>
                     <ul className="list-disc pl-5 space-y-1">
                       {project.highlights.map((highlight, hIdx) => (
                         <li key={hIdx} className="text-sm text-academic-600">{highlight}</li>
                       ))}
                     </ul>
                   </div>
                 </div>
               ))}
             </div>
          </ContentSection>
        );

      case 'education':
        return (
          <ContentSection title="Education & Honors">
            <div className="mb-10">
              <h3 className="font-serif text-lg font-bold mb-6 text-academic-900">Education</h3>
              <div className="border-l-2 border-academic-300 pl-6 space-y-6">
                {EDUCATION.map(item => (
                  <div key={item.id} className="relative">
                    <span className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-academic-400 border-2 border-white"></span>
                    <div className="text-sm font-bold text-link mb-1">
                      {item.period}
                    </div>
                    <div className="font-serif font-bold text-academic-900">
                      {item.title}
                    </div>
                    <div className="text-academic-600">
                      {item.institution}
                    </div>
                    {item.detail && (
                      <div className="text-sm text-academic-500 mt-1">
                        {item.detail}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-serif text-lg font-bold mb-6 text-academic-900 flex items-center gap-2">
                <IconAward className="w-5 h-5 text-yellow-500" />
                Honors & Awards
              </h3>
              <div className="space-y-3">
                {HONORS.map(honor => (
                  <div key={honor.id} className="flex items-center justify-between py-2 border-b border-academic-100">
                    <span className="text-academic-800 font-medium">{honor.title}</span>
                    <span className="text-sm text-academic-500">{honor.year}</span>
                  </div>
                ))}
              </div>
            </div>
          </ContentSection>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white font-sans text-academic-900 selection:bg-academic-200">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-1 p-6 md:p-12 lg:p-16 overflow-y-auto h-screen scroll-smooth">
        <div className="max-w-4xl mx-auto mt-4 md:mt-0">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}

export default App;

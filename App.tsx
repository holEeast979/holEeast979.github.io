import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ContentSection from './components/ContentSection';
import ResearchAssistant from './components/ResearchAssistant';
import { PROFILE, PUBLICATIONS, NEWS, RESEARCH_INTERESTS } from './constants';
import { IconExternalLink, IconFileText } from './components/Icons';

function App() {
  const [activeTab, setActiveTab] = useState('about');

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return (
          <ContentSection title="Biography">
            <div className="prose prose-stone max-w-none text-academic-800">
              <p className="mb-6 text-lg font-serif leading-relaxed">
                {PROFILE.bio}
              </p>
              
              <h3 className="font-serif text-lg font-bold mt-8 mb-4 text-academic-900">Research Interests</h3>
              <ul className="list-disc pl-5 space-y-1 mb-6">
                {RESEARCH_INTERESTS.map(interest => (
                  <li key={interest.id}>{interest.topic}</li>
                ))}
              </ul>
            </div>
          </ContentSection>
        );

      case 'publications':
        return (
          <ContentSection title="Selected Publications">
             <div className="space-y-8">
               {PUBLICATIONS.map(pub => (
                 <div key={pub.id} className="group">
                   <h3 className="font-serif text-lg font-bold text-academic-900 mb-1 group-hover:text-link transition-colors">
                     {pub.title}
                   </h3>
                   <div className="text-academic-600 mb-1">
                     {pub.authors.map((author, idx) => (
                       <span key={idx} className={author.includes(PROFILE.name.split(' ').pop() || '') ? "font-semibold text-academic-900" : ""}>
                         {author}{idx < pub.authors.length - 1 ? ", " : ""}
                       </span>
                     ))}
                   </div>
                   <div className="text-academic-500 italic mb-2">
                     {pub.venue}, {pub.year}
                   </div>
                   <p className="text-sm text-academic-500 mb-3 leading-relaxed text-justify">
                     {pub.abstract}
                   </p>
                   <div className="flex gap-4 text-sm font-medium">
                     {pub.pdfLink && (
                       <a href={pub.pdfLink} className="flex items-center gap-1 text-link hover:underline decoration-dotted underline-offset-2">
                         <IconFileText className="w-3 h-3" /> PDF
                       </a>
                     )}
                     {pub.codeLink && (
                       <a href={pub.codeLink} className="flex items-center gap-1 text-link hover:underline decoration-dotted underline-offset-2">
                         <IconExternalLink className="w-3 h-3" /> Code
                       </a>
                     )}
                   </div>
                 </div>
               ))}
             </div>
          </ContentSection>
        );

      case 'news':
        return (
          <ContentSection title="News & Updates">
            <div className="border-l-2 border-academic-200 pl-6 space-y-8">
              {NEWS.map(item => (
                <div key={item.id} className="relative">
                  <span className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-academic-300 border-2 border-white"></span>
                  <div className="text-sm font-bold text-academic-500 mb-1 uppercase tracking-wide">
                    {item.date}
                  </div>
                  <div className="text-academic-800">
                    {item.content}
                  </div>
                </div>
              ))}
            </div>
          </ContentSection>
        );

      case 'assistant':
        return <ResearchAssistant />;

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

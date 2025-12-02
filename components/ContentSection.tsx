import React from 'react';

interface ContentSectionProps {
  title: string;
  children: React.ReactNode;
}

const ContentSection: React.FC<ContentSectionProps> = ({ title, children }) => {
  return (
    <div className="max-w-3xl animate-fadeIn">
      <h2 className="font-serif text-2xl font-bold text-academic-900 mb-6 pb-2 border-b border-academic-200">
        {title}
      </h2>
      <div className="font-sans text-academic-800 leading-relaxed">
        {children}
      </div>
    </div>
  );
};

export default ContentSection;

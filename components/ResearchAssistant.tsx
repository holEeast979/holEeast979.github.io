import React, { useState, useRef, useEffect } from 'react';
import ContentSection from './ContentSection';
import { askResearchAssistant } from '../services/gemini';
import { IconTerminal } from './Icons';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const ResearchAssistant: React.FC = () => {
  const [query, setQuery] = useState('');
  const [history, setHistory] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history, loading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim() || loading) return;

    const userMsg: Message = { role: 'user', content: query };
    setHistory(prev => [...prev, userMsg]);
    setQuery('');
    setLoading(true);

    const response = await askResearchAssistant(query);
    
    setHistory(prev => [...prev, { role: 'assistant', content: response }]);
    setLoading(false);
  };

  return (
    <ContentSection title="Research Assistant (Beta)">
      <div className="mb-6 text-sm text-academic-600 bg-academic-50 p-4 border border-academic-200 rounded-sm">
        <p>
          This interface provides access to a language model fine-tuned for academic inquiry. 
          Use it to summarize concepts, generate citations, or draft abstract ideas. 
          All outputs are machine-generated and should be verified.
        </p>
      </div>

      <div className="border border-academic-300 rounded-sm overflow-hidden flex flex-col h-[500px]">
        {/* Terminal Header */}
        <div className="bg-academic-100 border-b border-academic-300 px-4 py-2 flex items-center gap-2 text-xs font-mono text-academic-600 uppercase tracking-wider">
          <IconTerminal className="w-3 h-3" />
          Interactive Session
        </div>

        {/* Output Area */}
        <div 
          ref={scrollRef}
          className="flex-1 overflow-y-auto p-4 space-y-6 bg-white font-mono text-sm"
        >
          {history.length === 0 && (
             <div className="text-academic-400 italic">
               &gt; Session initialized.<br/>
               &gt; Waiting for input...
             </div>
          )}
          
          {history.map((msg, idx) => (
            <div key={idx} className={`flex flex-col gap-1 ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
              <span className="text-[10px] text-academic-400 uppercase tracking-widest">
                {msg.role === 'user' ? 'Input' : 'Response'}
              </span>
              <div 
                className={`max-w-[90%] p-3 whitespace-pre-wrap ${
                  msg.role === 'user' 
                    ? 'bg-academic-50 border border-academic-200 text-academic-800' 
                    : 'text-academic-900 border-l-2 border-academic-300 pl-4'
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex flex-col items-start gap-1">
               <span className="text-[10px] text-academic-400 uppercase tracking-widest">System</span>
               <div className="text-academic-500 animate-pulse">
                 &gt; Processing query...
               </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="bg-academic-50 p-4 border-t border-academic-300">
          <form onSubmit={handleSubmit} className="flex gap-3">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Enter query..."
              className="flex-1 bg-white border border-academic-300 px-3 py-2 text-sm font-mono focus:outline-none focus:border-academic-500 focus:ring-1 focus:ring-academic-500 transition-all rounded-sm"
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-academic-800 text-white px-6 py-2 text-sm font-medium hover:bg-academic-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors rounded-sm uppercase tracking-wide"
            >
              Execute
            </button>
          </form>
        </div>
      </div>
    </ContentSection>
  );
};

export default ResearchAssistant;

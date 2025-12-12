import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Send, Loader2, SquareTerminal } from 'lucide-react';
import { runGeminiChat } from '../services/geminiService';

interface Message {
  role: 'user' | 'model';
  text: string;
}

export const GeminiCard: React.FC = () => {
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "> System initialized. Ask me about Kumarjit." }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!query.trim() || isLoading) return;

    const userMsg = query;
    setQuery('');
    setMessages(prev => [...prev, { role: 'user', text: `> ${userMsg}` }]);
    setIsLoading(true);

    try {
      const response = await runGeminiChat(userMsg);
      setMessages(prev => [...prev, { role: 'model', text: `> ${response}` }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "> Connection Error." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-full w-full bg-zinc-50 dark:bg-nothing-panel rounded-3xl p-6 border border-zinc-200 dark:border-zinc-800 flex flex-col relative overflow-hidden min-h-[300px]">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-4 z-10 border-b border-zinc-200 dark:border-zinc-800 pb-4">
        <div className="flex items-center gap-2">
            <div className="p-1 text-nothing-red">
                <SquareTerminal size={20} />
            </div>
            <span className="font-dot font-bold text-lg uppercase">AI_Assistant</span>
        </div>
        <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${isLoading ? 'bg-nothing-red animate-pulse' : 'bg-green-500'}`}></div>
            <span className="text-[10px] font-mono text-zinc-400 uppercase">Online</span>
        </div>
      </div>

      {/* Chat Area */}
      <div 
        className="flex-1 overflow-y-auto mb-4 space-y-3 pr-2 scrollbar-thin z-10 font-mono text-sm max-h-[240px]" 
        ref={scrollRef}
      >
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
            <span className="text-[10px] text-zinc-400 mb-1 uppercase">{msg.role === 'user' ? 'User' : 'System'}</span>
            <div className={`
              max-w-[90%] p-3 text-sm
              ${msg.role === 'user' 
                ? 'bg-zinc-200 dark:bg-zinc-800 text-black dark:text-white border-l-2 border-zinc-400' 
                : 'text-zinc-600 dark:text-zinc-300 border-l-2 border-nothing-red pl-3'
              }
            `}>
              {msg.text}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start pl-3 border-l-2 border-nothing-red">
              <span className="font-mono text-zinc-400 animate-pulse">{'>'} Processing...</span>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="relative z-10 mt-auto flex items-center gap-2">
        <span className="text-nothing-red font-mono font-bold">{'>'}</span>
        <input 
          type="text" 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Input command..."
          className="w-full bg-transparent border-b border-zinc-200 dark:border-zinc-700 py-2 text-sm font-mono focus:outline-none focus:border-nothing-red transition-colors placeholder:text-zinc-500 uppercase"
        />
        <button 
          onClick={handleSend}
          disabled={!query.trim() || isLoading}
          className="p-2 hover:text-nothing-red disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          aria-label="Send message"
        >
          <Send size={16} />
        </button>
      </div>
    </div>
  );
};
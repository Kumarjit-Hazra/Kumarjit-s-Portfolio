import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ReadmeViewerProps {
  isOpen: boolean;
  onClose: () => void;
  readmePath: string;
  projectTitle: string;
}

export const ReadmeViewer: React.FC<ReadmeViewerProps> = ({ 
  isOpen, 
  onClose, 
  readmePath, 
  projectTitle 
}) => {
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState(false);

  console.log('ReadmeViewer - isOpen:', isOpen, 'path:', readmePath, 'title:', projectTitle);

  useEffect(() => {
    if (isOpen && readmePath) {
      setLoading(true);
      console.log('Fetching:', readmePath);
      fetch(readmePath)
        .then(response => {
          console.log('Fetch response:', response.status, response.ok);
          return response.text();
        })
        .then(text => {
          console.log('Content loaded, length:', text.length);
          setContent(text);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error loading README:', error);
          setContent('# Error\n\nCould not load project details.');
          setLoading(false);
        });
    }
  }, [isOpen, readmePath]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const renderMarkdown = (markdown: string) => {
    const lines = markdown.split('\n');
    const elements: React.ReactElement[] = [];
    let inCodeBlock = false;
    let codeBlockContent: string[] = [];
    let inList = false;
    let listItems: string[] = [];

    const flushList = () => {
      if (listItems.length > 0) {
        elements.push(
          <ul key={elements.length} className="list-disc list-inside ml-4 space-y-1 text-zinc-700 dark:text-zinc-300 mb-4">
            {listItems.map((item, idx) => (
              <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </ul>
        );
        listItems = [];
        inList = false;
      }
    };

    lines.forEach((line, index) => {
      // Code block detection
      if (line.startsWith('```')) {
        if (inCodeBlock) {
          elements.push(
            <pre key={elements.length} className="bg-zinc-100 dark:bg-zinc-800 p-4 rounded-lg overflow-x-auto mb-4 text-sm">
              <code className="font-mono text-zinc-800 dark:text-zinc-200">{codeBlockContent.join('\n')}</code>
            </pre>
          );
          codeBlockContent = [];
          inCodeBlock = false;
        } else {
          flushList();
          inCodeBlock = true;
        }
        return;
      }

      if (inCodeBlock) {
        codeBlockContent.push(line);
        return;
      }

      // Horizontal rule
      if (line.trim() === '---') {
        flushList();
        elements.push(<hr key={elements.length} className="my-6 border-zinc-200 dark:border-zinc-700" />);
        return;
      }

      // Headings
      if (line.startsWith('# ')) {
        flushList();
        elements.push(<h1 key={elements.length} className="text-3xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">{line.slice(2)}</h1>);
      } else if (line.startsWith('## ')) {
        flushList();
        elements.push(<h2 key={elements.length} className="text-2xl font-bold mb-3 mt-6 text-zinc-900 dark:text-zinc-100">{line.slice(3)}</h2>);
      } else if (line.startsWith('### ')) {
        flushList();
        elements.push(<h3 key={elements.length} className="text-xl font-semibold mb-2 mt-5 text-zinc-900 dark:text-zinc-100">{line.slice(4)}</h3>);
      } else if (line.startsWith('#### ')) {
        flushList();
        elements.push(<h4 key={elements.length} className="text-lg font-semibold mb-2 mt-4 text-zinc-900 dark:text-zinc-100">{line.slice(5)}</h4>);
      }
      // Lists
      else if (line.match(/^[-*] /)) {
        if (!inList) {
          inList = true;
        }
        const processedLine = line.slice(2)
          .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-zinc-900 dark:text-zinc-100">$1</strong>')
          .replace(/`(.*?)`/g, '<code class="bg-zinc-200 dark:bg-zinc-700 px-1 py-0.5 rounded text-sm font-mono">$1</code>');
        listItems.push(processedLine);
      }
      // Paragraphs and other text
      else if (line.trim().length > 0) {
        flushList();
        const processedLine = line
          .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-zinc-900 dark:text-zinc-100">$1</strong>')
          .replace(/\*(.*?)\*/g, '<em>$1</em>')
          .replace(/`(.*?)`/g, '<code class="bg-zinc-200 dark:bg-zinc-700 px-1 py-0.5 rounded text-sm font-mono">$1</code>')
          .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-nothing-red hover:underline" target="_blank" rel="noopener noreferrer">$1</a>');
        
        elements.push(
          <p key={elements.length} className="mb-3 text-zinc-700 dark:text-zinc-300 leading-relaxed" dangerouslySetInnerHTML={{ __html: processedLine }} />
        );
      }
      // Empty line
      else {
        flushList();
      }
    });

    flushList(); // Flush any remaining list items
    console.log('Rendered elements count:', elements.length);
    return elements;
  };

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9990]"
            onClick={onClose}
          />
          
          {/* Modal */}
          <div className="fixed inset-0 z-[9991] flex items-start justify-center pt-16 p-6 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ 
                duration: 0.25, 
                ease: [0.22, 1, 0.36, 1] 
              }}
              className="relative w-full max-w-2xl h-full max-h-[calc(100vh-8rem)] pointer-events-auto"
            >
              <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl border-2 border-zinc-200 dark:border-zinc-800 w-full h-full flex flex-col overflow-hidden">
                {/* Header with Close Button */}
                <div className="flex items-center justify-between px-4 py-3 border-b-2 border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/50 shrink-0">
                  <div className="min-w-0 flex-1 pr-3">
                    <h2 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 truncate">
                      {projectTitle}
                    </h2>
                    <p className="text-[10px] text-zinc-500 dark:text-zinc-400">Documentation</p>
                  </div>
                  <button
                    onClick={onClose}
                    className="w-9 h-9 rounded-lg bg-nothing-red hover:bg-red-600 flex items-center justify-center transition-all duration-200 group shrink-0 shadow-md hover:shadow-lg"
                    aria-label="Close"
                  >
                    <X size={18} className="text-white" />
                  </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto px-4 py-3 min-h-0 text-sm">
                  {loading ? (
                    <div className="flex items-center justify-center h-full">
                      <div className="w-8 h-8 border-2 border-nothing-red border-t-transparent rounded-full animate-spin" />
                    </div>
                  ) : (
                    <div className="max-w-none">
                      {console.log('Rendering content, length:', content.length)}
                      {renderMarkdown(content)}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );

  return createPortal(modalContent, document.body);
};

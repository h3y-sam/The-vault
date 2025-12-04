import React, { useEffect } from 'react';
import { CategoryItem } from '../types';
import { X, ExternalLink, Hash, Heart } from 'lucide-react';

interface CategoryModalProps {
  category: CategoryItem | null;
  onClose: () => void;
}

const renderTitleWithHighlight = (title: string) => {
  const parts = title.split(/(\*[^*]+\*)/g);
  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith('*') && part.endsWith('*')) {
          const content = part.slice(1, -1);
          return (
            <span key={index} className="text-indigo-600 dark:text-indigo-400 font-bold bg-indigo-50 dark:bg-indigo-900/30 px-1.5 py-0.5 rounded text-xs ml-1.5 align-middle tracking-wide uppercase border border-indigo-200 dark:border-indigo-500/30">
              {content}
            </span>
          );
        }
        return <span key={index}>{part}</span>;
      })}
    </>
  );
};

export const CategoryModal: React.FC<CategoryModalProps> = ({ category, onClose }) => {
  useEffect(() => {
    if (category) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [category]);

  if (!category || !category.links) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-3xl max-h-[85vh] bg-white dark:bg-[#0F1117] rounded-3xl shadow-2xl flex flex-col overflow-hidden ring-1 ring-slate-200 dark:ring-slate-800 animate-in zoom-in-95 fade-in duration-200">
        
        {/* Header */}
        <div className="relative px-8 py-8 border-b border-slate-100 dark:border-slate-800 shrink-0 bg-slate-50/50 dark:bg-slate-900/20">
            <button 
                onClick={onClose}
                className="absolute top-6 right-6 p-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all shadow-sm hover:shadow-md"
            >
                <X size={18} />
            </button>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div className={`p-4 rounded-2xl bg-gradient-to-br ${category.gradient} text-white shadow-xl`}>
                    <category.icon size={32} strokeWidth={1.5} />
                </div>
                <div>
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight">{category.title}</h2>
                    <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed max-w-md">
                        {category.description}
                    </p>
                </div>
            </div>
        </div>

        {/* Links List */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-2 custom-scrollbar bg-white dark:bg-[#0F1117]">
          {category.links.map((link, index) => {
            if (link.isHeader) {
              return (
                <div key={index} className="pt-6 pb-2 flex items-center gap-4">
                  <div className="p-1.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                    <Hash size={14} />
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white">
                    {link.title}
                  </h3>
                  <div className="h-px bg-slate-200 dark:bg-slate-800 flex-1"></div>
                </div>
              );
            }

            return (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-3.5 rounded-xl border border-slate-100 dark:border-slate-800 hover:border-indigo-500 dark:hover:border-indigo-500 bg-slate-50 dark:bg-slate-900/40 hover:bg-white dark:hover:bg-slate-800 transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/5 hover:-translate-y-0.5"
              >
                <div className="flex-1 min-w-0 pr-4 flex items-center gap-3">
                   <div className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700 group-hover:bg-indigo-500 transition-colors shrink-0"></div>
                   <h3 className="font-semibold text-slate-700 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors text-sm sm:text-base">
                      {renderTitleWithHighlight(link.title)}
                   </h3>
                </div>
                <div className="shrink-0 text-slate-300 dark:text-slate-600 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">
                     <ExternalLink size={16} />
                </div>
              </a>
            );
          })}
        </div>
        
        {/* Footer */}
        <div className="px-8 py-4 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center text-xs text-slate-400">
            <div className="flex items-center gap-1">
                <span>Created by</span>
                <span className="font-semibold text-slate-600 dark:text-slate-300">h3y.Sam</span>
                <span>with</span>
                <Heart size={10} className="fill-red-500 text-red-500" />
            </div>
            <div className="flex gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span>Secure Connection</span>
            </div>
        </div>
      </div>
    </div>
  );
};
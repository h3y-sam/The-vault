import React, { useEffect } from 'react';
import { X, Info, Heart, Globe, Code2 } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-lg bg-white dark:bg-[#0F1117] rounded-3xl shadow-2xl flex flex-col overflow-hidden ring-1 ring-slate-200 dark:ring-slate-800 animate-in zoom-in-95 fade-in duration-200">
        
        {/* Header */}
        <div className="relative px-8 py-6 border-b border-slate-100 dark:border-slate-800 shrink-0 bg-slate-50/50 dark:bg-slate-900/20 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400">
                    <Info size={24} strokeWidth={1.5} />
                </div>
                <div>
                    <h2 className="text-xl font-display font-bold text-slate-900 dark:text-white tracking-tight">About The Vault</h2>
                </div>
            </div>
            <button 
                onClick={onClose}
                className="p-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all shadow-sm hover:shadow-md"
            >
                <X size={18} />
            </button>
        </div>

        {/* Content */}
        <div className="p-8 bg-white dark:bg-[#0F1117] text-slate-600 dark:text-slate-300 leading-relaxed text-sm space-y-6">
            
            <div className="space-y-3">
                <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2 uppercase tracking-wide text-xs">
                    <Globe size={14} className="text-indigo-500" />
                    The Mission
                </h3>
                <p>
                    The internet is vast, and finding reliable, safe, and high-quality resources often feels like searching for a needle in a haystack.
                </p>
                <div className="p-4 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/10 rounded-xl border border-indigo-100 dark:border-indigo-500/20 italic text-slate-800 dark:text-slate-200 font-medium">
                    "My purpose is simple: <strong>Stop roaming the internet.</strong> Use one website for everything."
                </div>
                <p>
                    The Vault acts as your central gateway—a curated collection of the best tools, entertainment, and resources, all in one premium, secure interface.
                </p>
            </div>

            <div className="pt-6 border-t border-slate-100 dark:border-slate-800 space-y-3">
                 <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2 uppercase tracking-wide text-xs">
                    <Code2 size={14} className="text-indigo-500" />
                    The Developer
                </h3>
                <p>
                    Handcrafted with <Heart size={12} className="inline text-red-500 fill-red-500 mx-1" /> by <strong className="text-slate-900 dark:text-white">h3y.Sam</strong>.
                </p>
                <p className="text-xs text-slate-400">
                    Dedicated to building cleaner, faster, and more beautiful web experiences.
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};
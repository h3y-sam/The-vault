import React from 'react';
import { Skull, Search, Sparkles } from 'lucide-react';

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  isDark: boolean;
  toggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({ searchQuery, setSearchQuery }) => {
  return (
    <header className="flex flex-col items-center justify-center pt-24 pb-16 px-4 relative z-10 w-full max-w-4xl mx-auto">
      
      {/* Brand Section */}
      <div className="flex flex-col items-center mb-10 group cursor-default">
        <div className="relative mb-4">
            <div className="absolute inset-0 bg-indigo-500/20 blur-xl rounded-full group-hover:bg-indigo-500/30 transition-all duration-500" />
            <div className="relative bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl group-hover:scale-105 transition-transform duration-300">
                <Skull size={48} className="text-slate-900 dark:text-white" strokeWidth={1.5} />
            </div>
            <div className="absolute -top-3 -right-3 bg-gradient-to-r from-pink-500 to-violet-500 text-white text-[10px] font-mono font-bold px-2 py-0.5 rounded-full shadow-lg border border-white/10 animate-bounce">
                V2.0
            </div>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-slate-900 to-slate-600 dark:from-white dark:to-slate-400 tracking-tighter mb-2 text-center drop-shadow-sm uppercase">
          THE VAULT
        </h1>
        <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium bg-slate-100 dark:bg-slate-800/50 px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700/50">
            <Sparkles size={12} className="text-amber-400" />
            <span>Curated Gateway to the Digital Underground</span>
        </div>
      </div>

      {/* Search Input */}
      <div className="w-full max-w-lg relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 via-indigo-500 to-cyan-500 rounded-full opacity-30 group-focus-within:opacity-100 blur transition duration-500"></div>
        <div className="relative flex items-center">
            <Search className="absolute left-4 text-slate-400 group-focus-within:text-indigo-500 transition-colors" size={20} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search resources, tools, games..."
              className="w-full bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400 rounded-full py-4 pl-12 pr-6 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-0 shadow-lg text-base transition-all"
            />
        </div>
      </div>
    </header>
  );
};
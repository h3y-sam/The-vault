import React, { useState, useMemo, useEffect } from 'react';
import { CATEGORIES } from './constants';
import { CategoryCard } from './components/CategoryCard';
import { Header } from './components/Header';
import { Background } from './components/Background';
import { CategoryModal } from './components/CategoryModal';
import { LegalModal } from './components/LegalModal';
import { AboutModal } from './components/AboutModal';
import { Settings, Info, Sun, Moon, Heart, Github } from 'lucide-react';
import { CategoryItem } from './types';

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showNotification, setShowNotification] = useState(true);
  const [isDark, setIsDark] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<CategoryItem | null>(null);
  const [activeLegalModal, setActiveLegalModal] = useState<'privacy' | 'terms' | null>(null);
  const [showAboutModal, setShowAboutModal] = useState(false);

  // Toggle theme class on document
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const handleCategoryClick = (item: CategoryItem) => {
    if (item.links && item.links.length > 0) {
      setSelectedCategory(item);
    }
  };

  const closeCategoryModal = () => {
    setSelectedCategory(null);
  };

  const openLegalModal = (type: 'privacy' | 'terms') => (e: React.MouseEvent) => {
    e.preventDefault();
    setActiveLegalModal(type);
  };

  const closeLegalModal = () => {
    setActiveLegalModal(null);
  };

  // Filter categories based on search
  const filteredCategories = useMemo(() => {
    if (!searchQuery) return CATEGORIES;
    const lowerQuery = searchQuery.toLowerCase();
    return CATEGORIES.filter(
      (item) =>
        item.title.toLowerCase().includes(lowerQuery) ||
        item.description.toLowerCase().includes(lowerQuery)
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen relative text-slate-900 dark:text-slate-200 selection:bg-indigo-500/30">
      <Background />
      
      {/* Top Bar Actions */}
      <div className="absolute top-4 right-4 z-20 flex gap-2">
        <button 
           onClick={toggleTheme}
           className="p-2 rounded-full bg-white/50 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all backdrop-blur-sm shadow-sm"
           title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <button 
           onClick={() => setShowAboutModal(true)}
           className="p-2 rounded-full bg-white/50 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all backdrop-blur-sm shadow-sm"
           title="About The Vault"
        >
          <Info size={18} />
        </button>
      </div>

      <div className="container mx-auto px-4 max-w-6xl pb-20 relative z-10">
        
        {/* Header */}
        <Header 
          searchQuery={searchQuery} 
          setSearchQuery={setSearchQuery} 
          isDark={isDark}
          toggleTheme={toggleTheme}
        />

        {/* Browser-like notification */}
        {showNotification && (
           <div className="max-w-xs absolute top-4 left-4 z-30 animate-in fade-in slide-in-from-top-4 duration-700 hidden lg:block">
             <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-xl p-3 flex items-start gap-3">
               <div className="bg-amber-500/10 p-1.5 rounded-full">
                 <Info size={16} className="text-amber-500" />
               </div>
               <div>
                 <h4 className="text-xs font-semibold text-slate-800 dark:text-slate-200">System Ready</h4>
                 <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">All services operational.</p>
               </div>
               <button 
                 onClick={() => setShowNotification(false)}
                 className="ml-auto text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300"
               >
                 ×
               </button>
             </div>
           </div>
        )}

        {/* Content Grid */}
        <main>
          {filteredCategories.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCategories.map((item) => (
                <CategoryCard 
                  key={item.id} 
                  item={item} 
                  onClick={item.links ? handleCategoryClick : undefined}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-slate-400 dark:text-slate-500">
              <div className="opacity-20 mb-4">
                 <Settings size={48} />
              </div>
              <p className="text-lg">No results found for "{searchQuery}"</p>
            </div>
          )}
        </main>
        
        {/* Footer */}
        <footer className="mt-20 text-center text-slate-500 dark:text-slate-600 text-xs">
          <div className="flex items-center justify-center gap-1.5 mb-2">
            <span>Created by</span>
            <span className="font-bold text-slate-700 dark:text-slate-400">h3y.Sam</span>
            <span>with</span>
            <Heart size={12} className="fill-red-500 text-red-500 animate-pulse" />
          </div>
          <p className="opacity-60 mb-3">© {new Date().getFullYear()} The Vault. All rights reserved.</p>
          <div className="flex items-center justify-center gap-4">
            <button 
                onClick={openLegalModal('privacy')}
                className="hover:text-slate-700 dark:hover:text-slate-400 transition-colors bg-transparent border-none cursor-pointer"
            >
                Privacy
            </button>
            <span className="text-slate-300 dark:text-slate-700">•</span>
            <button 
                onClick={openLegalModal('terms')}
                className="hover:text-slate-700 dark:hover:text-slate-400 transition-colors bg-transparent border-none cursor-pointer"
            >
                Terms
            </button>
            <span className="text-slate-300 dark:text-slate-700">•</span>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 dark:hover:text-white transition-colors" aria-label="GitHub">
              <Github size={14} />
            </a>
          </div>
        </footer>
      </div>

      {/* Modal Overlay */}
      <CategoryModal 
        category={selectedCategory} 
        onClose={closeCategoryModal} 
      />
      
      {/* Legal Modal */}
      <LegalModal 
        isOpen={activeLegalModal !== null}
        onClose={closeLegalModal}
        type={activeLegalModal || 'privacy'}
      />

      {/* About Modal */}
      <AboutModal 
        isOpen={showAboutModal}
        onClose={() => setShowAboutModal(false)}
      />
    </div>
  );
};

export default App;
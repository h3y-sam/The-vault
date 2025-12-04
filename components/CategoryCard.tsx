import React from 'react';
import { CategoryItem } from '../types';
import { ArrowUpRight, ChevronRight, Layers } from 'lucide-react';

interface CategoryCardProps {
  item: CategoryItem;
  onClick?: (item: CategoryItem) => void;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ item, onClick }) => {
  const { title, description, icon: Icon, url, gradient, links } = item;
  const hasLinks = links && links.length > 0;

  const handleClick = (e: React.MouseEvent) => {
    if (hasLinks && onClick) {
      e.preventDefault();
      onClick(item);
    }
  };

  // Tag determines semantics
  const Wrapper = hasLinks ? 'div' : 'a';
  const wrapperProps = hasLinks 
    ? { onClick: handleClick, role: 'button', tabIndex: 0 }
    : { href: url, target: '_blank', rel: 'noopener noreferrer' };

  return (
    <Wrapper
      {...wrapperProps}
      className="group relative flex flex-col h-full bg-white dark:bg-slate-900/40 backdrop-blur-md rounded-3xl p-6 border border-slate-200 dark:border-slate-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-500/10 cursor-pointer overflow-hidden"
    >
      {/* Top Gradient Border Line (Hover) */}
      <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />

      <div className="flex items-start justify-between mb-6">
        {/* Icon Box */}
        <div className={`p-3.5 rounded-2xl bg-gradient-to-br ${gradient} text-white shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform duration-300`}>
          <Icon size={24} strokeWidth={2} />
        </div>

        {/* Action Icon */}
        <div className="p-2 rounded-full bg-slate-50 dark:bg-slate-800 text-slate-400 dark:text-slate-500 group-hover:bg-indigo-50 dark:group-hover:bg-slate-700 group-hover:text-indigo-600 dark:group-hover:text-white transition-colors duration-300">
          {hasLinks ? <ChevronRight size={18} /> : <ArrowUpRight size={18} />}
        </div>
      </div>

      <div className="mt-auto">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 dark:group-hover:from-indigo-400 dark:group-hover:to-purple-400 transition-all">
          {title}
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
          {description}
        </p>
      </div>

      {/* Decorative background blob */}
      <div className={`absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500 rounded-full pointer-events-none`} />
      
      {/* Sub-items indicator */}
      {hasLinks && (
        <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800/50 flex items-center gap-2 text-xs font-semibold text-slate-400 dark:text-slate-500 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors">
            <Layers size={14} />
            <span>{links.filter(l => !l.isHeader).length} Resources</span>
        </div>
      )}
    </Wrapper>
  );
};
import { LucideIcon } from 'lucide-react';

export interface CategoryLink {
  title: string;
  url: string;
  isHeader?: boolean;
}

export interface CategoryItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  url: string; // The target URL for the link if no sub-links exist
  gradient: string; // Gradient class for the icon background or border
  links?: CategoryLink[]; // Optional list of sub-links
}

export interface HeaderProps {
  onSearch: (query: string) => void;
  toggleTheme: () => void;
  isDark: boolean;
}
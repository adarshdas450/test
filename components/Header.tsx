
import React from 'react';
import { navItems } from '../constants';
import { RefreshCw, Share2, Search, ChevronDown } from 'lucide-react';
import ThemeToggleButton from './ThemeToggleButton';

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ searchQuery, setSearchQuery }) => {
  return (
    <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50 border-b border-slate-200 dark:border-slate-700">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm transform rotate-45"></div>
              </div>
              <span className="font-bold text-xl text-slate-800 dark:text-slate-200">TinyWow <span className="text-gray-500 dark:text-gray-400 font-normal text-base">by Jenni</span></span>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <a key={item.name} href={item.href} className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 flex items-center">
                  {item.name} <ChevronDown className="w-4 h-4 ml-1" />
                </a>
              ))}
            </nav>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-4">
            <ThemeToggleButton />
            <button className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 hidden sm:block">
              <RefreshCw className="w-5 h-5" />
            </button>
            <button className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 hidden sm:block">
              <Share2 className="w-5 h-5" />
            </button>
            <div className="relative hidden lg:block">
              <input 
                type="text" 
                placeholder="Search tools..." 
                className="bg-slate-100 dark:bg-slate-800 text-gray-800 dark:text-gray-200 rounded-lg pl-10 pr-4 py-2.5 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 dark:text-gray-400" />
            </div>
            <button className="bg-blue-500 text-white font-semibold px-5 py-2 rounded-lg hover:bg-blue-600 transition-colors">
              All Tools
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
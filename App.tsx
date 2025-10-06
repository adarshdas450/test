
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import PopularTools from './components/PopularTools';
import FeaturedTools from './components/FeaturedTools';
import PremiumCTA from './components/PremiumCTA';
import Footer from './components/Footer';
import { ThemeProvider } from './contexts/ThemeContext';
import { popularTools } from './constants';
import type { Tool } from './types';

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredTools, setFilteredTools] = useState<Tool[]>(popularTools);

  useEffect(() => {
    const lowercasedQuery = searchQuery.toLowerCase().trim();
    if (!lowercasedQuery) {
      setFilteredTools(popularTools);
      return;
    }

    const filtered = popularTools.filter(tool =>
      tool.name.toLowerCase().includes(lowercasedQuery) ||
      tool.description.toLowerCase().includes(lowercasedQuery) ||
      tool.category.toLowerCase().includes(lowercasedQuery)
    );
    setFilteredTools(filtered);
  }, [searchQuery]);


  return (
    <ThemeProvider>
      <div className="bg-white dark:bg-slate-900 min-h-screen font-sans">
        <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <main>
          <Hero searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <div className="relative bg-white dark:bg-slate-900 rounded-t-3xl -mt-10 pt-10 pb-16 z-10">
            <Stats />
            <PopularTools tools={filteredTools} />
          </div>
          <FeaturedTools />
          <PremiumCTA />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
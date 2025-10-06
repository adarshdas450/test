
import React, { useState, useEffect } from 'react';
import { toolCategories } from '../constants';
import { Search, ArrowRight } from 'lucide-react';

const dynamicWords = [
  { text: 'Business', color: 'bg-teal-300', shape: 'transform -skew-y-1' },
  { text: 'Your Life', color: 'bg-orange-300', shape: 'transform skew-y-1' },
  { text: 'Everything', color: 'bg-pink-300', shape: 'rounded-full' },
  { text: 'Education', color: 'bg-indigo-300', shape: 'rounded-xl' }
];

interface HeroProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const Hero: React.FC<HeroProps> = ({ searchQuery, setSearchQuery }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % dynamicWords.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const currentWord = dynamicWords[currentIndex];

  return (
    <section className="relative bg-white dark:bg-slate-900 pt-16 pb-24 text-center overflow-hidden">
      <div className="container mx-auto px-4 z-10 relative">
        <h1 className="mt-6 text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-slate-100 leading-tight">
          Free Tools to Make Your{' '}
          <span className="relative inline-block" style={{ height: '5rem' }}>
            <span
              className={`absolute -inset-1 z-0 transition-all duration-500 ease-in-out ${currentWord.color} ${currentWord.shape}`}
            ></span>
            <span
              key={currentIndex}
              className="relative z-10 text-slate-900 px-4 animate-fade-in"
            >
              {currentWord.text}
            </span>
          </span>{' '}Simple
        </h1>
        <p className="mt-6 text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">
          We offer PDF, video, image and other online tools to make your life easier
        </p>
        <div className="mt-8 max-w-2xl mx-auto flex items-center bg-white dark:bg-slate-800 rounded-full shadow-lg p-2">
          <Search className="w-5 h-5 text-gray-400 dark:text-gray-500 ml-3" />
          <input 
            type="text" 
            placeholder="Search for a tool..." 
            className="w-full bg-transparent border-none focus:ring-0 focus:outline-none text-lg ml-3 text-slate-800 dark:text-slate-200"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="bg-blue-500 text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-600 transition-colors">
            Search
          </button>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {toolCategories.map((category) => (
            <div key={category.name} className="group flex flex-col rounded-xl shadow-md overflow-hidden transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2">
              <a href={category.href} className={`relative flex-grow ${category.color} text-white px-4 py-4 flex flex-col justify-between overflow-hidden`}>
                <div className="flex justify-between items-start">
                  <category.icon className="w-7 h-7 transition-transform duration-300 group-hover:scale-110" />
                  <span className="bg-black bg-opacity-20 text-xs font-semibold px-3 py-1 rounded-full">{category.count}</span>
                </div>
                <div className="text-left mt-3">
                  <h3 className="font-bold text-lg">{category.name}</h3>
                  <p className="text-sm opacity-90 mt-1">{category.description}</p>
                  <ArrowRight className="w-5 h-5 mt-3 transition-transform duration-300 group-hover:translate-x-1.5" />
                </div>
              </a>
              <div className={`py-3 px-4 text-sm flex justify-center items-center gap-1.5 ${category.featuredToolBgColor} dark:bg-black/25`}>
                <span className="text-slate-500 dark:text-slate-400">Featured Tool:</span>
                <a href="#" className={`font-semibold hover:underline ${category.featuredToolTextColor} dark:text-slate-200`}>
                  {category.featuredTool}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Decorative shapes */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-pink-300 rounded-full opacity-70 animate-pulse"></div>
      <div className="absolute top-1/2 left-1/5 w-6 h-6 bg-blue-300 rounded-sm opacity-70 transform rotate-45 animate-pulse delay-500"></div>
      <div className="absolute top-1/3 right-1/4 w-5 h-5 bg-orange-300 rounded-md opacity-70 transform rotate-12 animate-pulse delay-1000"></div>
      <div className="absolute bottom-1/4 right-1/3 w-8 h-8 bg-indigo-300 rounded-full opacity-50"></div>
    </section>
  );
};

export default Hero;


import React, { useState } from 'react';
import { toolFilters } from '../constants';
import { Grid3X3, FileText, Video, Image as ImageIcon, Repeat, PenSquare } from 'lucide-react';
import type { Tool } from '../types';

const filterIcons: { [key: string]: React.ElementType } = {
  'All Tools': Grid3X3,
  'PDF Tools': FileText,
  'Video Tools': Video,
  'Image Tools': ImageIcon,
  'Converter Tools': Repeat,
  'AI Write': PenSquare,
};

interface PopularToolsProps {
  tools: Tool[];
}

const PopularTools: React.FC<PopularToolsProps> = ({ tools }) => {
  const [activeFilter, setActiveFilter] = useState('All Tools');

  const filteredTools = tools.filter(tool => {
    if (activeFilter === 'All Tools') {
      return true;
    }
    // A more robust check for categories that might not be in the main filter list but are on the tools
    if (activeFilter === 'Other Tools') {
        const knownCategories = toolFilters.filter(f => f !== 'All Tools' && f !== 'Other Tools');
        return !knownCategories.includes(tool.category);
    }
    return tool.category === activeFilter;
  });

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center text-slate-900 dark:text-slate-100">Our Most Popular Tools</h2>
      <p className="text-slate-500 dark:text-slate-400 text-center mt-2">We present the best of the best. All free, no catch</p>

      <div className="mt-10 max-w-6xl mx-auto">
        <div className="bg-slate-100 dark:bg-slate-800 p-1.5 rounded-full flex items-center space-x-1 overflow-x-auto no-scrollbar">
            {toolFilters.map((filter) => {
                const Icon = filterIcons[filter] || Grid3X3;
                const isActive = activeFilter === filter;
                return (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`whitespace-nowrap flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-100 dark:focus:ring-offset-slate-800 focus:ring-blue-500 ${
                      isActive
                        ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 shadow'
                        : 'text-slate-500 dark:text-slate-300 hover:bg-white/60 dark:hover:bg-slate-700/50'
                    }`}
                  >
                    <Icon className={`w-4 h-4 transition-colors ${isActive ? 'text-blue-500' : ''}`} />
                    {filter}
                  </button>
                )
            })}
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredTools.length > 0 ? (
          filteredTools.map((tool) => (
            <a 
              key={tool.name} 
              href={tool.href} 
              className="bg-white dark:bg-slate-700 p-6 rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className={`p-2 rounded-lg bg-slate-100 dark:bg-slate-600`}>
                  <tool.icon className={`w-6 h-6 ${tool.categoryColor}`} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 dark:text-slate-200">{tool.name}</h3>
                  <p className={`text-sm font-semibold ${tool.categoryColor}`}>{tool.category}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">{tool.description}</p>
                </div>
              </div>
            </a>
          ))
        ) : (
          <div className="col-span-full text-center text-slate-500 dark:text-slate-400 py-10">
            <p className="text-lg">No tools found.</p>
            <p>Try adjusting your search or filter selection.</p>
          </div>
        )}
      </div>

      <div className="text-center mt-12">
        <button className="px-6 py-3 border-2 border-blue-500 text-blue-500 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-colors">
          All Tools
        </button>
      </div>
    </section>
  );
};

export default PopularTools;
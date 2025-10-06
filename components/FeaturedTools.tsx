
import React from 'react';
import { featuredTools } from '../constants';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const FeaturedTools: React.FC = () => {
  return (
    <section className="bg-slate-50 dark:bg-slate-900 py-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">Free Tools You'd Usually Pay For</h2>
            <p className="text-slate-500 dark:text-slate-400 mt-2">No Limits, No Sign-Up</p>
            <p className="text-slate-500 dark:text-slate-400">Here's our featured tools</p>
          </div>
          <div className="flex gap-4">
            <button className="w-12 h-12 rounded-full border border-slate-300 dark:border-slate-600 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-slate-100 dark:hover:bg-slate-800">
              <ArrowLeft className="w-6 h-6" />
            </button>
            <button className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white hover:bg-blue-600">
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredTools.map((tool) => (
            <div key={tool.name} className="border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden group">
              <div className={`${tool.bgColor} dark:bg-slate-700 p-4`}>
                <img src={tool.imageUrl} alt={tool.name} className="w-full h-48 object-cover rounded-lg shadow-md" />
              </div>
              <div className="p-6 bg-white dark:bg-slate-800">
                <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200">{tool.name}</h3>
                <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">{tool.description}</p>
                <a href={tool.href} className="text-blue-500 dark:text-blue-400 font-semibold mt-4 inline-flex items-center group-hover:underline">
                  Learn more <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTools;
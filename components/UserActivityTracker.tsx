import React from 'react';
import { useActivity } from '../contexts/ActivityContext';
// FIX: Replaced non-existent 'ImagePen' icon from lucide-react with 'Image' for consistency.
import { FileCog, Image, FileText, BrainCircuit } from 'lucide-react';
import type { ActivityState } from '../types';

interface ActivityStat {
    key: keyof ActivityState;
    label: string;
    icon: React.ElementType;
    color: string;
}

const activityStats: ActivityStat[] = [
    { key: 'filesProcessed', label: 'Files Processed', icon: FileCog, color: 'text-blue-500 dark:text-blue-400' },
    { key: 'imagesEdited', label: 'Images Edited', icon: Image, color: 'text-orange-500 dark:text-orange-400' },
    { key: 'documentsCreated', label: 'Documents Created', icon: FileText, color: 'text-violet-500 dark:text-violet-400' },
    { key: 'aiTasksCompleted', label: 'AI Tasks Completed', icon: BrainCircuit, color: 'text-cyan-500 dark:text-cyan-400' },
];

const UserActivityTracker: React.FC = () => {
  const { activity } = useActivity();

  return (
    <section className="container mx-auto px-4 pt-8 pb-4">
       <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">Your Session Activity</h2>
            <p className="text-slate-500 dark:text-slate-400 mt-2">Track the work you've done in this session. Click on a tool below to see the counters update!</p>
       </div>
      <div className="bg-slate-100 dark:bg-slate-700/50 rounded-2xl shadow-md p-6 border border-slate-200 dark:border-slate-700">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {activityStats.map((stat, index) => (
            <div key={stat.key} className={`relative ${index < 3 ? 'md:border-r md:border-gray-300 dark:md:border-gray-600' : ''}`}>
               <div className="flex justify-center items-center mb-2">
                 <stat.icon className={`w-8 h-8 ${stat.color}`} />
               </div>
              <p className={`text-4xl font-bold ${stat.color}`}>{activity[stat.key]}</p>
              <p className="text-gray-500 dark:text-gray-400 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserActivityTracker;

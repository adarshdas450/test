
import React, { useState, useEffect } from 'react';
import { FileCog, Image, FileText, BrainCircuit } from 'lucide-react';

type StatKey = 'filesProcessed' | 'imagesEdited' | 'documentsCreated' | 'aiTasksCompleted';

interface StatConfig {
    key: StatKey;
    label: string;
    icon: React.ElementType;
    color: string;
}

const statsConfig: StatConfig[] = [
    { key: 'filesProcessed', label: 'Files Processed', icon: FileCog, color: 'text-blue-500 dark:text-blue-400' },
    { key: 'imagesEdited', label: 'Images Edited', icon: Image, color: 'text-orange-500 dark:text-orange-400' },
    { key: 'documentsCreated', label: 'Documents Created', icon: FileText, color: 'text-violet-500 dark:text-violet-400' },
    { key: 'aiTasksCompleted', label: 'AI Tasks Completed', icon: BrainCircuit, color: 'text-cyan-500 dark:text-cyan-400' },
];

const Stats: React.FC = () => {
    const [counts, setCounts] = useState<Record<StatKey, number>>({
        filesProcessed: 0,
        imagesEdited: 0,
        documentsCreated: 0,
        aiTasksCompleted: 0,
    });

    useEffect(() => {
        let statsData;
        try {
            statsData = JSON.parse(localStorage.getItem('globalStats') || 'null');
        } catch (error) {
            statsData = null;
        }

        if (!statsData || typeof statsData.filesProcessed !== 'number') {
            statsData = {
                filesProcessed: 345123,
                imagesEdited: 189543,
                documentsCreated: 254876,
                aiTasksCompleted: 112459,
            };
        }

        const targetCounts = {
            filesProcessed: statsData.filesProcessed + Math.floor(Math.random() * 5) + 1,
            imagesEdited: statsData.imagesEdited + Math.floor(Math.random() * 3) + 1,
            documentsCreated: statsData.documentsCreated + Math.floor(Math.random() * 4) + 1,
            aiTasksCompleted: statsData.aiTasksCompleted + Math.floor(Math.random() * 2) + 1,
        };

        localStorage.setItem('globalStats', JSON.stringify(targetCounts));

        const animationDuration = 2000;
        let animationFrameId: number;
        const startTime = Date.now();

        const animate = () => {
            const elapsedTime = Date.now() - startTime;
            const progress = Math.min(elapsedTime / animationDuration, 1);
            const easeOutProgress = 1 - Math.pow(1 - progress, 3); // easeOutCubic

            const newCounts = {} as Record<StatKey, number>;
            for (const key of Object.keys(targetCounts) as StatKey[]) {
                 newCounts[key] = Math.round(targetCounts[key] * easeOutProgress);
            }
            
            setCounts(newCounts);

            if (progress < 1) {
                animationFrameId = requestAnimationFrame(animate);
            } else {
                setCounts(targetCounts); // Set final count to be exact
            }
        };

        animationFrameId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    return (
        <section className="container mx-auto px-4 pt-8 pb-4">
            <div className="text-center mb-10">
                <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100">Loved by Users Worldwide</h2>
                <p className="text-slate-500 dark:text-slate-400 mt-2">
                    See our platform's impact and how people are getting work done.
                </p>
            </div>
            <div className="bg-slate-100 dark:bg-slate-700/50 rounded-2xl shadow-md p-6 border border-slate-200 dark:border-slate-700">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {statsConfig.map((stat, index) => (
                        <div key={stat.key} className={`relative ${index < 3 ? 'md:border-r md:border-gray-300 dark:md:border-gray-600' : ''}`}>
                            <div className="flex justify-center items-center mb-2">
                                <stat.icon className={`w-8 h-8 ${stat.color}`} />
                            </div>
                            <p className={`text-4xl font-bold ${stat.color}`}>{counts[stat.key].toLocaleString('en-US')}</p>
                            <p className="text-gray-500 dark:text-gray-400 mt-1">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;

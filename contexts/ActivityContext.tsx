
import React, { createContext, useState, useContext, ReactNode } from 'react';
import type { ActivityState, ActivityContextType } from '../types';

const ActivityContext = createContext<ActivityContextType | undefined>(undefined);

const initialState: ActivityState = {
  filesProcessed: 0,
  imagesEdited: 0,
  documentsCreated: 0,
  aiTasksCompleted: 0,
};

export const ActivityProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [activity, setActivity] = useState<ActivityState>(initialState);

  const incrementCounter = (key: keyof ActivityState) => {
    setActivity((prevActivity) => ({
      ...prevActivity,
      [key]: prevActivity[key] + 1,
    }));
  };

  return (
    <ActivityContext.Provider value={{ activity, incrementCounter }}>
      {children}
    </ActivityContext.Provider>
  );
};

export const useActivity = () => {
  const context = useContext(ActivityContext);
  if (context === undefined) {
    throw new Error('useActivity must be used within an ActivityProvider');
  }
  return context;
};

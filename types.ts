
export interface NavItem {
  name: string;
  href: string;
}

export interface ToolCategory {
  name: string;
  description: string;
  count: string;
  icon: React.ElementType;
  color: string;
  featuredTool: string;
  href: string;
  featuredToolBgColor: string;
  featuredToolTextColor: string;
}

export interface Tool {
  name:string;
  category: string;
  description: string;
  icon: React.ElementType;
  categoryColor: string;
  href: string;
}

export interface FeaturedTool {
  name: string;
  description: string;
  imageUrl: string;
  bgColor: string;
  href: string;
}

// FIX: Add ActivityState and ActivityContextType interfaces to be used in ActivityContext and UserActivityTracker.
export interface ActivityState {
  filesProcessed: number;
  imagesEdited: number;
  documentsCreated: number;
  aiTasksCompleted: number;
}

export interface ActivityContextType {
  activity: ActivityState;
  incrementCounter: (key: keyof ActivityState) => void;
}

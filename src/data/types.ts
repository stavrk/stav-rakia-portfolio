
export interface ProjectTag {
  name: string;
  color?: string;
}

export interface ProjectImage {
  title: string;
  image: string;
  description: string;
}

export interface ProjectStructure {
  title: string;
  image: string;
  description: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  slug: string;
  color: string;
  overview: string;
  challenge: string;
  solution: string;
  process?: string[];
  designProcessAndAesthetics?: string;
  challengesAndSolutions?: string;
  designImages?: ProjectImage[];
  additionalImages?: string[];
  link?: string;
  comingSoon?: boolean;
  case?: string;
  
  // Project-specific properties
  wireflow?: {
    title: string;
    image: string;
    description: string;
  };
  wireflowDetails?: {
    title: string;
    image: string;
    description: string;
  };
  structureTree?: {
    title: string;
    image: string;
    description: string;
  };
  wireframes?: {
    title: string;
    image: string;
    description: string;
  };
  specification?: {
    title: string;
    image: string;
    description: string;
  };
  designResearch?: {
    title: string;
    image: string;
    description: string;
  };
  editorShowcase?: {
    title: string;
    image: string;
    description: string;
  };
  interactiveElements?: {
    title: string;
    description: string;
  };
  graphicDevelopment?: string;
  technicalChallenges?: string;
  contentGenerator?: string;
  animationFeatures?: string;
  collaborativeDevelopment?: string;
}

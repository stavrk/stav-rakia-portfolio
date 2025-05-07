
// Define the structure for a tag
export interface Tag {
  name: string;
  color: string;
}

// Define the structure for a project
export interface Project {
  title: string;
  shortDescription?: string;
  overview: string;
  challenge: string;
  solution: string;
  image: string;
  tags?: string[];
  slug: string;
  link?: string;
  additionalImages?: string[];
  color: string;
  comingSoon?: boolean;
  description?: string; // Adding this to match usage in ProjectCard
  process?: {
    step: number;
    title: string;
    description: string;
  }[];
  designResearch?: {
    personaTitle: string;
    personaDescription: string;
    needs: string[];
    frustrations: string[];
    image: string;
  };
  wireflowDetails?: {
    title: string;
    description: string;
    image: string;
  };
  wireflow?: {
    title: string;
    description: string;
    image: string;
  };
  specification?: {
    title: string;
    description: string;
    image: string;
  };
  interactiveElements?: {
    title: string;
    description: string;
    image: string;
  };
  designProcessAndAesthetics?: string;
  designImages?: {
    title: string;
    image: string;
    description: string;
  }[];
  animationFeatures?: {
    title: string;
    description: string;
    image: string;
  }[];
  challenges?: {
    title: string;
    description: string;
  }[];
  structureTree?: {
    title: string;
    description: string;
    image: string;
  };
  wireframes?: {
    title: string;
    description: string;
    image: string;
  };
}

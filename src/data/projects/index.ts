
import { Project } from "../project-types";
import { bipProject } from "./bip-project";
import { roomieProject } from "./roomie-project";
import { studitProject } from "./studit-project";
import { plantModuleProject } from "./plant-module-project";
import { saveRapunzelProject } from "./save-rapunzel-project";

// Create and export the projects array directly
export const projects: Project[] = [
  bipProject,
  roomieProject,
  studitProject,
  plantModuleProject,
  saveRapunzelProject,
];

// Function to return all projects
export const getProjects = (): Project[] => {
  return projects;
};

// Function to return a single project based on its slug
export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((project) => project.slug === slug);
};

// Add a function to get the next project
export const getNextProject = (currentSlug: string): Project => {
  const currentIndex = projects.findIndex(project => project.slug === currentSlug);
  
  // If it's the last project, return the first one
  if (currentIndex === projects.length - 1) {
    return projects[0];
  }
  
  return projects[currentIndex + 1];
};

// Add a function to get the previous project
export const getPreviousProject = (currentSlug: string): Project => {
  const currentIndex = projects.findIndex(project => project.slug === currentSlug);
  
  // If it's the first project, return the last one
  if (currentIndex <= 0) {
    return projects[projects.length - 1];
  }
  
  return projects[currentIndex - 1];
};
